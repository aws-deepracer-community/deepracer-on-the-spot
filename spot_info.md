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

Data correct as of 2026-07-23 03:18:17.883632, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1378 | >20%                    |                 2 |              0.0689  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1605 | >20%                    |                 2 |              0.08025 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1945 | >20%                    |                 2 |              0.09725 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2109 | 15-20%                  |                 2 |              0.10545 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2302 | >20%                    |                 2 |              0.1151  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2428 | >20%                    |                 2 |              0.1214  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2587 | >20%                    |                 2 |              0.12935 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2673 | >20%                    |                 2 |              0.13365 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2677 | >20%                    |                 2 |              0.13385 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2686 | >20%                    |                 2 |              0.1343  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2834 | >20%                    |                 2 |              0.1417  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2845 | 15-20%                  |                 2 |              0.14225 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2847 | 15-20%                  |                 5 |              0.05694 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2867 | >20%                    |                 2 |              0.14335 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2903 | 5-10%                   |                10 |              0.02903 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2954 | 10-15%                  |                 2 |              0.1477  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3081 | 15-20%                  |                 2 |              0.15405 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3136 | >20%                    |                 2 |              0.1568  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3193 | 15-20%                  |                 5 |              0.06386 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.32   | >20%                    |                 5 |              0.064   |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3399 | >20%                    |                 5 |              0.06798 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3476 | 5-10%                   |                10 |              0.03476 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3484 | >20%                    |                 5 |              0.06968 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.352  | >20%                    |                10 |              0.0352  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3585 | >20%                    |                 2 |              0.17925 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3654 | <5%                     |                 2 |              0.1827  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3812 | >20%                    |                 5 |              0.07624 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3855 | 15-20%                  |                 2 |              0.19275 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3862 | >20%                    |                 5 |              0.07724 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.3986 | >20%                    |                10 |              0.03986 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4003 | 10-15%                  |                 2 |              0.20015 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4077 | >20%                    |                 2 |              0.20385 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4149 | >20%                    |                 2 |              0.20745 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4157 | >20%                    |                 5 |              0.08314 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4164 | >20%                    |                10 |              0.04164 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4167 | >20%                    |                 5 |              0.08334 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4218 | >20%                    |                10 |              0.04218 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4226 | >20%                    |                 5 |              0.08452 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4238 | 10-15%                  |                 2 |              0.2119  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4249 | 5-10%                   |                10 |              0.04249 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4295 | >20%                    |                 5 |              0.0859  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4331 | 10-15%                  |                 2 |              0.21655 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.447  | >20%                    |                 5 |              0.0894  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4535 | >20%                    |                 2 |              0.22675 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4572 | >20%                    |                 2 |              0.2286  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4632 | >20%                    |                 2 |              0.2316  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4666 | >20%                    |                 2 |              0.2333  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4701 | >20%                    |                 2 |              0.23505 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4843 | >20%                    |                 5 |              0.09686 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4854 | >20%                    |                10 |              0.04854 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.489  | 15-20%                  |                 5 |              0.0978  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4954 | >20%                    |                 5 |              0.09908 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4975 | <5%                     |                 2 |              0.24875 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4989 | <5%                     |                 2 |              0.24945 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5074 | >20%                    |                10 |              0.05074 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5081 | 10-15%                  |                10 |              0.05081 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5086 | >20%                    |                 5 |              0.10172 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5265 | >20%                    |                 2 |              0.26325 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5307 | >20%                    |                 5 |              0.10614 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5327 | >20%                    |                 5 |              0.10654 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5426 | >20%                    |                 5 |              0.10852 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5537 | 15-20%                  |                 2 |              0.27685 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5582 | >20%                    |                 2 |              0.2791  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.56   | 10-15%                  |                 5 |              0.112   |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5606 | >20%                    |                 5 |              0.11212 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5797 | 5-10%                   |                 2 |              0.28985 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5809 | >20%                    |                 5 |              0.11618 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5876 | >20%                    |                 5 |              0.11752 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.591  | >20%                    |                 5 |              0.1182  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6148 | >20%                    |                 2 |              0.3074  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6204 | >20%                    |                 5 |              0.12408 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6348 | >20%                    |                10 |              0.06348 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6385 | 5-10%                   |                 5 |              0.1277  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6569 | >20%                    |                 2 |              0.32845 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6584 | >20%                    |                 5 |              0.13168 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6596 | 15-20%                  |                 5 |              0.13192 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6667 | >20%                    |                 5 |              0.13334 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.6681 |                         |                 2 |              0.33405 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6685 | >20%                    |                10 |              0.06685 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6736 | >20%                    |                 5 |              0.13472 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6751 | >20%                    |                 5 |              0.13502 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7013 | 15-20%                  |                10 |              0.07013 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.7155 | >20%                    |                 2 |              0.35775 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7175 |                         |                 2 |              0.35875 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7194 | >20%                    |                 5 |              0.14388 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7222 | >20%                    |                10 |              0.07222 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7354 | >20%                    |                10 |              0.07354 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7376 | >20%                    |                10 |              0.07376 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7448 | <5%                     |                 5 |              0.14896 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7465 | >20%                    |                10 |              0.07465 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7551 | >20%                    |                 5 |              0.15102 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7733 | 15-20%                  |                 2 |              0.38665 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7747 | >20%                    |                10 |              0.07747 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7778 | >20%                    |                10 |              0.07778 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7794 | 5-10%                   |                10 |              0.07794 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7953 | >20%                    |                 2 |              0.39765 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7977 | >20%                    |                10 |              0.07977 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7985 | <5%                     |                10 |              0.07985 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8006 | >20%                    |                 5 |              0.16012 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8076 | >20%                    |                10 |              0.08076 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8144 | >20%                    |                 5 |              0.16288 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8176 | >20%                    |                 2 |              0.4088  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8303 | >20%                    |                 5 |              0.16606 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8467 | >20%                    |                 2 |              0.42335 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8583 | 15-20%                  |                10 |              0.08583 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8613 |                         |                 5 |              0.17226 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8621 | 10-15%                  |                 2 |              0.43105 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8819 | >20%                    |                10 |              0.08819 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8851 | 15-20%                  |                10 |              0.08851 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8852 | 10-15%                  |                 2 |              0.4426  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8898 | 15-20%                  |                10 |              0.08898 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9012 | >20%                    |                 5 |              0.18024 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9083 | 5-10%                   |                10 |              0.09083 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.929  | >20%                    |                 5 |              0.1858  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9379 | >20%                    |                10 |              0.09379 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.939  | >20%                    |                10 |              0.0939  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9462 | 5-10%                   |                 2 |              0.4731  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9607 | >20%                    |                10 |              0.09607 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9799 | 15-20%                  |                10 |              0.09799 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9889 | >20%                    |                 5 |              0.19778 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.992  | >20%                    |                10 |              0.0992  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9989 | >20%                    |                 5 |              0.19978 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0004 | >20%                    |                 5 |              0.20008 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0162 | >20%                    |                 5 |              0.20324 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0408 | >20%                    |                10 |              0.10408 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0499 | >20%                    |                 2 |              0.52495 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0626 | 5-10%                   |                 5 |              0.21252 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0916 |                         |                10 |              0.10916 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0999 | >20%                    |                 2 |              0.54995 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1118 | >20%                    |                10 |              0.11118 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1435 | >20%                    |                 5 |              0.2287  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1477 | >20%                    |                10 |              0.11477 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1644 | 10-15%                  |                 2 |              0.5822  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1845 | >20%                    |                10 |              0.11845 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.2377 | 15-20%                  |                10 |              0.12377 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.272  | >20%                    |                10 |              0.1272  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3048 | 15-20%                  |                10 |              0.13048 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3492 |                         |                 5 |              0.26984 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.3569 |                         |                10 |              0.13569 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3687 | >20%                    |                 5 |              0.27374 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3757 | 5-10%                   |                10 |              0.13757 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4063 | >20%                    |                10 |              0.14063 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.4193 | 5-10%                   |                 2 |              0.70965 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4507 | >20%                    |                10 |              0.14507 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4616 | >20%                    |                 5 |              0.29232 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4646 | >20%                    |                10 |              0.14646 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5678 | 10-15%                  |                10 |              0.15678 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5719 | 15-20%                  |                 5 |              0.31438 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5853 | 15-20%                  |                10 |              0.15853 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6779 | >20%                    |                10 |              0.16779 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0498 | >20%                    |                10 |              0.20498 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.1453 | 5-10%                   |                 2 |              1.07265 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.2602 | >20%                    |                 5 |              0.45204 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.4218 | >20%                    |                 5 |              0.48436 |