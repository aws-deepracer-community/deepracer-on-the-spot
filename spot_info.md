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

Data correct as of 2025-05-04 01:59:33.967202, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1237 | >20%                    |                 2 |              0.06185 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2007 | 15-20%                  |                 5 |              0.04014 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2069 | >20%                    |                 5 |              0.04138 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2069 | >20%                    |                 2 |              0.10345 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2225 | >20%                    |                 5 |              0.0445  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2229 | <5%                     |                 2 |              0.11145 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2243 | <5%                     |                 5 |              0.04486 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2278 | 15-20%                  |                 2 |              0.1139  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2312 | 15-20%                  |                 2 |              0.1156  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2362 | 5-10%                   |                 5 |              0.04724 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2583 | 5-10%                   |                 2 |              0.12915 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2597 | 5-10%                   |                 2 |              0.12985 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2598 | >20%                    |                 2 |              0.1299  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2732 | <5%                     |                 2 |              0.1366  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.283  | 10-15%                  |                10 |              0.0283  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2869 | >20%                    |                 2 |              0.14345 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2969 | >20%                    |                 2 |              0.14845 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3    | 10-15%                  |                 2 |              0.15    |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3006 | 15-20%                  |                10 |              0.03006 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3013 | <5%                     |                 2 |              0.15065 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3015 | 10-15%                  |                10 |              0.03015 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3059 | 5-10%                   |                 5 |              0.06118 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3066 | 5-10%                   |                 2 |              0.1533  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3072 | 5-10%                   |                 2 |              0.1536  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3108 | <5%                     |                 2 |              0.1554  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.312  | >20%                    |                 2 |              0.156   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3134 | 5-10%                   |                 2 |              0.1567  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.316  | <5%                     |                 5 |              0.0632  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3166 | >20%                    |                 2 |              0.1583  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3183 | >20%                    |                10 |              0.03183 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3237 | >20%                    |                 2 |              0.16185 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3239 | >20%                    |                 2 |              0.16195 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3248 | 15-20%                  |                10 |              0.03248 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3249 | 15-20%                  |                10 |              0.03249 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3292 | >20%                    |                10 |              0.03292 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3408 | <5%                     |                 5 |              0.06816 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3456 | >20%                    |                 2 |              0.1728  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3529 | >20%                    |                 5 |              0.07058 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3532 | 5-10%                   |                 5 |              0.07064 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3574 | >20%                    |                 2 |              0.1787  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3608 | >20%                    |                 5 |              0.07216 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3657 | >20%                    |                 2 |              0.18285 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3687 | >20%                    |                 2 |              0.18435 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3698 | <5%                     |                 2 |              0.1849  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3735 | >20%                    |                10 |              0.03735 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3791 | 10-15%                  |                10 |              0.03791 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3798 | >20%                    |                 5 |              0.07596 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3825 | >20%                    |                 2 |              0.19125 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3921 | 10-15%                  |                 2 |              0.19605 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.399  | >20%                    |                10 |              0.0399  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4084 | 5-10%                   |                 5 |              0.08168 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.411  | 10-15%                  |                 2 |              0.2055  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4123 | 5-10%                   |                 2 |              0.20615 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4138 | >20%                    |                 2 |              0.2069  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4138 | 15-20%                  |                 5 |              0.08276 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4166 | >20%                    |                 5 |              0.08332 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4174 | 10-15%                  |                 2 |              0.2087  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4178 | >20%                    |                 2 |              0.2089  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4199 | >20%                    |                 2 |              0.20995 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4262 | 10-15%                  |                10 |              0.04262 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4343 | 15-20%                  |                 5 |              0.08686 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4448 | <5%                     |                 5 |              0.08896 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4467 | >20%                    |                 5 |              0.08934 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4499 | 15-20%                  |                 2 |              0.22495 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4528 | >20%                    |                 5 |              0.09056 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4547 | >20%                    |                 5 |              0.09094 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.459  | 10-15%                  |                 5 |              0.0918  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4661 | >20%                    |                 5 |              0.09322 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4706 | >20%                    |                 5 |              0.09412 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4744 | 5-10%                   |                 5 |              0.09488 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4752 | <5%                     |                 2 |              0.2376  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4786 | >20%                    |                 2 |              0.2393  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4795 | >20%                    |                 2 |              0.23975 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4815 | >20%                    |                 5 |              0.0963  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4831 | >20%                    |                 2 |              0.24155 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4839 | >20%                    |                 2 |              0.24195 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4871 | <5%                     |                 5 |              0.09742 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4925 | >20%                    |                 5 |              0.0985  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.495  | 15-20%                  |                 5 |              0.099   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4973 | 5-10%                   |                 5 |              0.09946 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5026 | 10-15%                  |                 5 |              0.10052 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5082 | >20%                    |                 5 |              0.10164 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5161 | >20%                    |                 5 |              0.10322 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5172 | >20%                    |                 5 |              0.10344 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5198 | >20%                    |                 2 |              0.2599  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5283 | >20%                    |                 2 |              0.26415 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5304 | 10-15%                  |                 2 |              0.2652  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.536  | >20%                    |                 2 |              0.268   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5493 | >20%                    |                 2 |              0.27465 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5567 | 10-15%                  |                10 |              0.05567 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5608 | 5-10%                   |                 5 |              0.11216 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.571  | >20%                    |                 5 |              0.1142  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5747 | 10-15%                  |                 5 |              0.11494 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5759 | >20%                    |                 5 |              0.11518 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5787 | 10-15%                  |                 2 |              0.28935 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5843 | <5%                     |                 5 |              0.11686 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5923 | <5%                     |                10 |              0.05923 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.593  | >20%                    |                 2 |              0.2965  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5966 | >20%                    |                 2 |              0.2983  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5993 | >20%                    |                 5 |              0.11986 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6314 | >20%                    |                 5 |              0.12628 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6417 | 10-15%                  |                 5 |              0.12834 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6424 | >20%                    |                 2 |              0.3212  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.65   | >20%                    |                 5 |              0.13    |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6526 | 5-10%                   |                10 |              0.06526 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6538 | 15-20%                  |                10 |              0.06538 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6614 | 15-20%                  |                 5 |              0.13228 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6683 | >20%                    |                 2 |              0.33415 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6798 | >20%                    |                10 |              0.06798 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6894 | >20%                    |                 2 |              0.3447  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6973 | >20%                    |                 2 |              0.34865 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7177 | >20%                    |                 5 |              0.14354 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7192 | >20%                    |                 5 |              0.14384 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.723  | <5%                     |                 5 |              0.1446  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.7337 | <5%                     |                10 |              0.07337 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7401 | >20%                    |                10 |              0.07401 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7421 | 5-10%                   |                10 |              0.07421 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7431 | >20%                    |                 5 |              0.14862 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7458 | >20%                    |                10 |              0.07458 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7571 | <5%                     |                 5 |              0.15142 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7586 | >20%                    |                 5 |              0.15172 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7605 | >20%                    |                10 |              0.07605 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7628 | >20%                    |                 5 |              0.15256 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7631 | <5%                     |                 5 |              0.15262 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7771 | >20%                    |                 5 |              0.15542 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7812 | 15-20%                  |                10 |              0.07812 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7832 | >20%                    |                10 |              0.07832 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7859 | 10-15%                  |                10 |              0.07859 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7902 | 15-20%                  |                10 |              0.07902 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7993 | <5%                     |                10 |              0.07993 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8065 | 15-20%                  |                10 |              0.08065 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8191 | 15-20%                  |                10 |              0.08191 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8256 | 10-15%                  |                10 |              0.08256 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8378 | 10-15%                  |                10 |              0.08378 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8391 | >20%                    |                 2 |              0.41955 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8451 | 10-15%                  |                10 |              0.08451 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8583 | >20%                    |                10 |              0.08583 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8622 | >20%                    |                 5 |              0.17244 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8672 | >20%                    |                 2 |              0.4336  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8703 | 10-15%                  |                 5 |              0.17406 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.872  | >20%                    |                10 |              0.0872  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8736 | 10-15%                  |                10 |              0.08736 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8762 | 5-10%                   |                10 |              0.08762 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8805 | >20%                    |                10 |              0.08805 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8966 | <5%                     |                10 |              0.08966 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9017 | 15-20%                  |                10 |              0.09017 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9057 | 10-15%                  |                10 |              0.09057 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9203 | <5%                     |                10 |              0.09203 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9271 | >20%                    |                 2 |              0.46355 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9388 | >20%                    |                10 |              0.09388 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9524 | 15-20%                  |                10 |              0.09524 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.97   | >20%                    |                10 |              0.097   |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9954 | >20%                    |                 2 |              0.4977  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0473 | >20%                    |                10 |              0.10473 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0525 | <5%                     |                10 |              0.10525 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0604 | >20%                    |                10 |              0.10604 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0609 | >20%                    |                 5 |              0.21218 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0619 | <5%                     |                 5 |              0.21238 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0813 | >20%                    |                 2 |              0.54065 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0841 | >20%                    |                10 |              0.10841 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1087 | 10-15%                  |                 5 |              0.22174 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1322 | 15-20%                  |                 2 |              0.5661  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1341 | <5%                     |                10 |              0.11341 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1858 | >20%                    |                10 |              0.11858 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2066 | 10-15%                  |                 2 |              0.6033  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.209  | >20%                    |                10 |              0.1209  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2897 | <5%                     |                 5 |              0.25794 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2925 | >20%                    |                10 |              0.12925 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3514 | >20%                    |                 5 |              0.27028 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3874 | 15-20%                  |                10 |              0.13874 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4104 | >20%                    |                 2 |              0.7052  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4234 | 15-20%                  |                10 |              0.14234 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4236 | >20%                    |                 5 |              0.28472 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4481 | >20%                    |                 5 |              0.28962 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5625 | 15-20%                  |                10 |              0.15625 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6313 | >20%                    |                10 |              0.16313 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7021 | 5-10%                   |                10 |              0.17021 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8404 | >20%                    |                10 |              0.18404 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9491 | <5%                     |                10 |              0.19491 |