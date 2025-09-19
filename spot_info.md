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

Data correct as of 2025-09-19 01:45:13.892427, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1472 | 5-10%                   |                 2 |              0.0736  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1485 | >20%                    |                 2 |              0.07425 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1547 | >20%                    |                 5 |              0.03094 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1558 | >20%                    |                 2 |              0.0779  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1737 | >20%                    |                 2 |              0.08685 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1884 | 10-15%                  |                 2 |              0.0942  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2079 | 10-15%                  |                 5 |              0.04158 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2371 | >20%                    |                 2 |              0.11855 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2405 | >20%                    |                 5 |              0.0481  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2496 | >20%                    |                 2 |              0.1248  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2558 | >20%                    |                 2 |              0.1279  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2732 | <5%                     |                10 |              0.02732 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2914 | >20%                    |                 2 |              0.1457  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3008 | >20%                    |                 2 |              0.1504  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3094 | 10-15%                  |                 2 |              0.1547  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.312  | 5-10%                   |                 2 |              0.156   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3144 | 15-20%                  |                 2 |              0.1572  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3167 | >20%                    |                 2 |              0.15835 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3251 | >20%                    |                 2 |              0.16255 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3271 | 15-20%                  |                 2 |              0.16355 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3311 | 5-10%                   |                 2 |              0.16555 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3325 | >20%                    |                 2 |              0.16625 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3353 | >20%                    |                10 |              0.03353 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3419 | 10-15%                  |                 2 |              0.17095 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3493 | >20%                    |                 5 |              0.06986 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3543 | >20%                    |                 2 |              0.17715 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3575 | >20%                    |                10 |              0.03575 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3624 | 10-15%                  |                 5 |              0.07248 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3663 | >20%                    |                 5 |              0.07326 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3663 | >20%                    |                 2 |              0.18315 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3699 | >20%                    |                 5 |              0.07398 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3723 | >20%                    |                 2 |              0.18615 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3822 | >20%                    |                 2 |              0.1911  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3826 | >20%                    |                 2 |              0.1913  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3846 | >20%                    |                 2 |              0.1923  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3867 | >20%                    |                 5 |              0.07734 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3994 | >20%                    |                 2 |              0.1997  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4032 | 15-20%                  |                 5 |              0.08064 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4071 | 15-20%                  |                10 |              0.04071 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4112 | >20%                    |                10 |              0.04112 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4152 | >20%                    |                 5 |              0.08304 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4154 | >20%                    |                 5 |              0.08308 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4249 | >20%                    |                 5 |              0.08498 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4268 | >20%                    |                 5 |              0.08536 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.435  | 15-20%                  |                 2 |              0.2175  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.438  | >20%                    |                 2 |              0.219   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4391 | >20%                    |                 2 |              0.21955 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4459 | 5-10%                   |                 2 |              0.22295 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4475 | >20%                    |                 5 |              0.0895  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4496 | 15-20%                  |                 2 |              0.2248  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.463  | >20%                    |                 2 |              0.2315  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4701 | >20%                    |                 2 |              0.23505 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4728 | 10-15%                  |                 2 |              0.2364  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4764 | 10-15%                  |                 2 |              0.2382  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4769 | >20%                    |                 5 |              0.09538 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4782 | <5%                     |                 2 |              0.2391  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4786 | >20%                    |                 5 |              0.09572 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4913 | >20%                    |                 5 |              0.09826 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4996 | >20%                    |                 5 |              0.09992 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5017 | >20%                    |                 2 |              0.25085 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5056 | >20%                    |                 5 |              0.10112 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5112 | >20%                    |                 5 |              0.10224 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5157 | 5-10%                   |                 5 |              0.10314 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5175 | >20%                    |                 2 |              0.25875 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5176 | >20%                    |                 2 |              0.2588  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5197 | >20%                    |                 2 |              0.25985 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5223 | 5-10%                   |                 2 |              0.26115 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5257 | 10-15%                  |                 2 |              0.26285 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5294 | >20%                    |                 5 |              0.10588 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.54   | >20%                    |                 5 |              0.108   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5466 | >20%                    |                 2 |              0.2733  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5503 | 15-20%                  |                 2 |              0.27515 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5561 | >20%                    |                 5 |              0.11122 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5662 | >20%                    |                 2 |              0.2831  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.572  | 5-10%                   |                10 |              0.0572  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5809 | >20%                    |                 5 |              0.11618 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5821 | >20%                    |                 5 |              0.11642 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5858 | >20%                    |                 2 |              0.2929  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5881 | >20%                    |                 5 |              0.11762 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5888 | >20%                    |                 5 |              0.11776 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6011 | >20%                    |                 5 |              0.12022 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6116 | >20%                    |                 2 |              0.3058  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6198 | 10-15%                  |                 5 |              0.12396 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6214 | 15-20%                  |                 5 |              0.12428 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6228 | 10-15%                  |                 5 |              0.12456 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6355 | >20%                    |                10 |              0.06355 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.641  | >20%                    |                 5 |              0.1282  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6496 | >20%                    |                10 |              0.06496 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6556 | 15-20%                  |                 2 |              0.3278  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6603 | 15-20%                  |                10 |              0.06603 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6603 | >20%                    |                 5 |              0.13206 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6617 | 15-20%                  |                10 |              0.06617 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6695 | 15-20%                  |                 5 |              0.1339  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6702 | >20%                    |                 5 |              0.13404 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6743 | >20%                    |                 2 |              0.33715 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6777 | >20%                    |                 5 |              0.13554 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6827 | >20%                    |                 2 |              0.34135 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6827 | 15-20%                  |                 5 |              0.13654 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6834 | >20%                    |                 5 |              0.13668 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6921 | >20%                    |                 5 |              0.13842 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6966 | >20%                    |                 5 |              0.13932 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6977 | >20%                    |                 5 |              0.13954 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6986 | >20%                    |                 5 |              0.13972 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.706  | >20%                    |                10 |              0.0706  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7192 | >20%                    |                 5 |              0.14384 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7209 | 10-15%                  |                 2 |              0.36045 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7258 | >20%                    |                 5 |              0.14516 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7393 | >20%                    |                10 |              0.07393 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.745  | 15-20%                  |                10 |              0.0745  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7477 | 15-20%                  |                 5 |              0.14954 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7549 | >20%                    |                10 |              0.07549 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7568 | >20%                    |                10 |              0.07568 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.771  | >20%                    |                10 |              0.0771  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7955 | >20%                    |                 5 |              0.1591  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.807  | >20%                    |                 5 |              0.1614  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.83   | 10-15%                  |                 2 |              0.415   |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8333 | >20%                    |                 5 |              0.16666 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8365 | 15-20%                  |                10 |              0.08365 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8425 | >20%                    |                 5 |              0.1685  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8552 | 10-15%                  |                10 |              0.08552 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8552 | <5%                     |                10 |              0.08552 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8635 | <5%                     |                 2 |              0.43175 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8998 | 15-20%                  |                10 |              0.08998 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9069 | 5-10%                   |                10 |              0.09069 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9073 | <5%                     |                10 |              0.09073 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.909  | >20%                    |                 5 |              0.1818  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.91   | >20%                    |                10 |              0.091   |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9275 | 10-15%                  |                10 |              0.09275 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9293 | 10-15%                  |                10 |              0.09293 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9355 | 15-20%                  |                10 |              0.09355 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9392 | >20%                    |                10 |              0.09392 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9413 | 15-20%                  |                10 |              0.09413 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.953  | <5%                     |                10 |              0.0953  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9583 | >20%                    |                10 |              0.09583 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9618 | 15-20%                  |                10 |              0.09618 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9742 | >20%                    |                10 |              0.09742 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9772 | >20%                    |                10 |              0.09772 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9876 | 10-15%                  |                 5 |              0.19752 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0037 | 15-20%                  |                10 |              0.10037 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0046 | >20%                    |                10 |              0.10046 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0055 | >20%                    |                 5 |              0.2011  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0161 | >20%                    |                 2 |              0.50805 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0414 | 10-15%                  |                10 |              0.10414 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0575 | 5-10%                   |                10 |              0.10575 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0652 | >20%                    |                 2 |              0.5326  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0764 | 5-10%                   |                10 |              0.10764 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0906 | 15-20%                  |                10 |              0.10906 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1002 | >20%                    |                10 |              0.11002 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1086 | 5-10%                   |                10 |              0.11086 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1175 | <5%                     |                10 |              0.11175 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1191 | >20%                    |                 5 |              0.22382 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1195 | 10-15%                  |                 2 |              0.55975 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1236 | >20%                    |                 2 |              0.5618  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1499 | >20%                    |                10 |              0.11499 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1601 | >20%                    |                 5 |              0.23202 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1755 | >20%                    |                10 |              0.11755 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.183  | >20%                    |                10 |              0.1183  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2066 | 15-20%                  |                10 |              0.12066 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2265 | >20%                    |                 5 |              0.2453  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2363 | 5-10%                   |                 2 |              0.61815 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2887 | >20%                    |                10 |              0.12887 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3275 | 10-15%                  |                 5 |              0.2655  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3557 | 10-15%                  |                10 |              0.13557 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4004 | >20%                    |                10 |              0.14004 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4351 | >20%                    |                10 |              0.14351 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.536  | 10-15%                  |                 5 |              0.3072  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6042 | >20%                    |                10 |              0.16042 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.735  | >20%                    |                10 |              0.1735  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.736  | >20%                    |                10 |              0.1736  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8467 | >20%                    |                10 |              0.18467 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0163 | 15-20%                  |                10 |              0.20163 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1742 | 10-15%                  |                10 |              0.21742 |