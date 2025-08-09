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

Data correct as of 2025-08-09 01:56:58.467689, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1044 | >20%                    |                 2 |              0.0522  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1358 | 5-10%                   |                 2 |              0.0679  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1454 | <5%                     |                 5 |              0.02908 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.218  | >20%                    |                 2 |              0.109   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2221 | >20%                    |                 2 |              0.11105 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2239 | 15-20%                  |                 2 |              0.11195 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.228  | 15-20%                  |                 5 |              0.0456  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2466 | 15-20%                  |                 2 |              0.1233  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2484 | >20%                    |                 2 |              0.1242  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2565 | >20%                    |                 2 |              0.12825 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2686 | 5-10%                   |                 2 |              0.1343  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2687 | >20%                    |                 2 |              0.13435 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2935 | >20%                    |                 2 |              0.14675 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3008 | 15-20%                  |                 2 |              0.1504  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3059 | >20%                    |                 2 |              0.15295 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3242 | <5%                     |                 2 |              0.1621  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3278 | 5-10%                   |                 2 |              0.1639  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3353 | 5-10%                   |                 2 |              0.16765 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.352  | >20%                    |                 2 |              0.176   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3587 | >20%                    |                 5 |              0.07174 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3594 | >20%                    |                 2 |              0.1797  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3595 | 15-20%                  |                 2 |              0.17975 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3649 | <5%                     |                 2 |              0.18245 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3722 | >20%                    |                 5 |              0.07444 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3747 | 15-20%                  |                 2 |              0.18735 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3754 | 10-15%                  |                 2 |              0.1877  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3757 | >20%                    |                 2 |              0.18785 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3841 | >20%                    |                 2 |              0.19205 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3965 | 5-10%                   |                 5 |              0.0793  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3988 | <5%                     |                 2 |              0.1994  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4077 | >20%                    |                 5 |              0.08154 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4096 | >20%                    |                 5 |              0.08192 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4129 | >20%                    |                 2 |              0.20645 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4313 | <5%                     |                10 |              0.04313 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4345 | >20%                    |                 5 |              0.0869  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4371 | >20%                    |                 5 |              0.08742 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4414 | >20%                    |                 5 |              0.08828 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4422 | >20%                    |                 5 |              0.08844 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4499 | >20%                    |                 2 |              0.22495 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4526 | <5%                     |                 2 |              0.2263  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4573 | >20%                    |                 5 |              0.09146 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4581 | >20%                    |                10 |              0.04581 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4619 | >20%                    |                 2 |              0.23095 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4657 | 5-10%                   |                 2 |              0.23285 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.467  | >20%                    |                 2 |              0.2335  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4678 | >20%                    |                 5 |              0.09356 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4691 | 15-20%                  |                 5 |              0.09382 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4705 | 5-10%                   |                 2 |              0.23525 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.473  | >20%                    |                 2 |              0.2365  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4821 | >20%                    |                 2 |              0.24105 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4947 | 10-15%                  |                 2 |              0.24735 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4966 | >20%                    |                 2 |              0.2483  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4967 | >20%                    |                 2 |              0.24835 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5016 | >20%                    |                 5 |              0.10032 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.514  | 10-15%                  |                 5 |              0.1028  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5149 | >20%                    |                 2 |              0.25745 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5157 | >20%                    |                 2 |              0.25785 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5163 | 5-10%                   |                 5 |              0.10326 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5203 | >20%                    |                 2 |              0.26015 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5246 | 15-20%                  |                10 |              0.05246 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5358 | >20%                    |                 5 |              0.10716 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5417 | >20%                    |                 2 |              0.27085 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.546  | >20%                    |                 5 |              0.1092  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5474 | 10-15%                  |                 5 |              0.10948 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5576 | >20%                    |                 5 |              0.11152 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5579 | >20%                    |                 5 |              0.11158 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.562  | <5%                     |                 2 |              0.281   |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5655 | >20%                    |                 2 |              0.28275 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5656 | 15-20%                  |                 2 |              0.2828  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5667 | >20%                    |                 2 |              0.28335 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5789 | >20%                    |                 2 |              0.28945 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5838 | 15-20%                  |                10 |              0.05838 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5985 | 5-10%                   |                 2 |              0.29925 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.599  | >20%                    |                 5 |              0.1198  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5997 | 10-15%                  |                 5 |              0.11994 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.605  | >20%                    |                 5 |              0.121   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6098 | 5-10%                   |                 5 |              0.12196 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6154 | >20%                    |                 5 |              0.12308 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6161 | >20%                    |                 5 |              0.12322 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6221 | <5%                     |                10 |              0.06221 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6283 | >20%                    |                 5 |              0.12566 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6317 | >20%                    |                 5 |              0.12634 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6389 | 10-15%                  |                 5 |              0.12778 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6472 | >20%                    |                 2 |              0.3236  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6487 | 5-10%                   |                 5 |              0.12974 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6516 | >20%                    |                 2 |              0.3258  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6534 | <5%                     |                 5 |              0.13068 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6545 | <5%                     |                 5 |              0.1309  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.659  | >20%                    |                10 |              0.0659  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6804 | 15-20%                  |                 2 |              0.3402  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6841 | >20%                    |                 5 |              0.13682 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6952 | >20%                    |                10 |              0.06952 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6955 | >20%                    |                 5 |              0.1391  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6992 | 10-15%                  |                 2 |              0.3496  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7071 | >20%                    |                 5 |              0.14142 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7143 | >20%                    |                 2 |              0.35715 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7167 | >20%                    |                10 |              0.07167 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7213 | >20%                    |                10 |              0.07213 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.724  | 15-20%                  |                 5 |              0.1448  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7279 | >20%                    |                 5 |              0.14558 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7397 | 5-10%                   |                 5 |              0.14794 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.74   | 15-20%                  |                 2 |              0.37    |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7414 | 15-20%                  |                10 |              0.07414 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7457 | <5%                     |                10 |              0.07457 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7667 | >20%                    |                 5 |              0.15334 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7746 | 15-20%                  |                10 |              0.07746 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7772 | >20%                    |                 5 |              0.15544 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7778 | >20%                    |                 5 |              0.15556 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7861 | 15-20%                  |                10 |              0.07861 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7862 | >20%                    |                10 |              0.07862 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7895 | 15-20%                  |                10 |              0.07895 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8006 | >20%                    |                 2 |              0.4003  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8237 | >20%                    |                 5 |              0.16474 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8345 | >20%                    |                 5 |              0.1669  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8365 | >20%                    |                 5 |              0.1673  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8445 | >20%                    |                10 |              0.08445 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8461 | >20%                    |                10 |              0.08461 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8511 | >20%                    |                10 |              0.08511 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8579 | 5-10%                   |                10 |              0.08579 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8628 | >20%                    |                10 |              0.08628 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8755 | <5%                     |                 5 |              0.1751  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9058 | <5%                     |                10 |              0.09058 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9076 | >20%                    |                 5 |              0.18152 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9103 | 5-10%                   |                10 |              0.09103 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9122 | 5-10%                   |                10 |              0.09122 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9136 | 15-20%                  |                10 |              0.09136 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9191 | 5-10%                   |                10 |              0.09191 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9211 | 5-10%                   |                10 |              0.09211 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9239 | 5-10%                   |                 5 |              0.18478 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9401 | 15-20%                  |                10 |              0.09401 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9537 | 5-10%                   |                10 |              0.09537 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9758 | >20%                    |                 2 |              0.4879  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9791 | >20%                    |                10 |              0.09791 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.98   | 15-20%                  |                10 |              0.098   |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9853 | <5%                     |                10 |              0.09853 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9986 | <5%                     |                10 |              0.09986 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0138 | >20%                    |                10 |              0.10138 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.019  | 15-20%                  |                10 |              0.1019  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.029  | 15-20%                  |                 5 |              0.2058  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0303 | 15-20%                  |                10 |              0.10303 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0395 | 5-10%                   |                10 |              0.10395 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0522 | <5%                     |                10 |              0.10522 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0736 | 15-20%                  |                10 |              0.10736 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0908 | >20%                    |                10 |              0.10908 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1    | 5-10%                   |                10 |              0.11    |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1126 | >20%                    |                10 |              0.11126 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1417 | >20%                    |                10 |              0.11417 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.155  | >20%                    |                10 |              0.1155  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1657 | >20%                    |                10 |              0.11657 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1748 | >20%                    |                10 |              0.11748 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1805 | >20%                    |                 5 |              0.2361  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1889 | >20%                    |                 2 |              0.59445 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2073 | <5%                     |                 2 |              0.60365 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2311 | >20%                    |                 5 |              0.24622 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2341 | >20%                    |                 5 |              0.24682 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2679 | >20%                    |                10 |              0.12679 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2768 | >20%                    |                 2 |              0.6384  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3269 | 5-10%                   |                10 |              0.13269 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3419 | >20%                    |                 5 |              0.26838 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3667 | >20%                    |                10 |              0.13667 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.437  | 15-20%                  |                 5 |              0.2874  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.476  | 5-10%                   |                 2 |              0.738   |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5197 | >20%                    |                10 |              0.15197 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5224 | >20%                    |                10 |              0.15224 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5577 | <5%                     |                 5 |              0.31154 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5655 | <5%                     |                10 |              0.15655 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5798 | >20%                    |                10 |              0.15798 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.766  | 10-15%                  |                10 |              0.1766  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1954 | <5%                     |                10 |              0.21954 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2293 | 5-10%                   |                10 |              0.22293 |