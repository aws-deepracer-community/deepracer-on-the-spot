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

Data correct as of 2026-09-01 04:22:21.332720, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1435 | >20%                    |                 2 |              0.07175 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1838 | 15-20%                  |                 2 |              0.0919  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1953 | 15-20%                  |                 2 |              0.09765 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1984 | >20%                    |                 2 |              0.0992  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2126 | >20%                    |                 2 |              0.1063  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2272 | >20%                    |                 2 |              0.1136  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2288 | >20%                    |                 2 |              0.1144  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2289 | 10-15%                  |                 2 |              0.11445 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2403 | >20%                    |                 2 |              0.12015 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.242  | >20%                    |                 2 |              0.121   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2465 | >20%                    |                 5 |              0.0493  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2477 | 5-10%                   |                10 |              0.02477 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2718 | >20%                    |                 2 |              0.1359  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2723 | 15-20%                  |                 2 |              0.13615 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2809 | 10-15%                  |                 2 |              0.14045 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2832 | 15-20%                  |                 5 |              0.05664 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2977 | 15-20%                  |                 5 |              0.05954 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2989 | 5-10%                   |                10 |              0.02989 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3015 | >20%                    |                 2 |              0.15075 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3103 | >20%                    |                 5 |              0.06206 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3173 | <5%                     |                 2 |              0.15865 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3179 | >20%                    |                 2 |              0.15895 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3317 | >20%                    |                 5 |              0.06634 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3368 | >20%                    |                 2 |              0.1684  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3381 | >20%                    |                 5 |              0.06762 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3417 | >20%                    |                 2 |              0.17085 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3483 | 10-15%                  |                 2 |              0.17415 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3582 | >20%                    |                 5 |              0.07164 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3624 | >20%                    |                 5 |              0.07248 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3651 | >20%                    |                10 |              0.03651 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3675 | >20%                    |                 5 |              0.0735  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3715 | >20%                    |                 2 |              0.18575 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3768 | >20%                    |                10 |              0.03768 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3787 | <5%                     |                 2 |              0.18935 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3797 | >20%                    |                 5 |              0.07594 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3996 | >20%                    |                 2 |              0.1998  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4005 | 15-20%                  |                 2 |              0.20025 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4077 | >20%                    |                 2 |              0.20385 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4137 | >20%                    |                10 |              0.04137 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.414  | 10-15%                  |                 2 |              0.207   |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4217 | >20%                    |                 5 |              0.08434 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4248 | >20%                    |                 2 |              0.2124  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4392 | <5%                     |                 5 |              0.08784 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4393 | >20%                    |                 2 |              0.21965 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4396 | >20%                    |                 5 |              0.08792 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4401 | >20%                    |                10 |              0.04401 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4443 | >20%                    |                 5 |              0.08886 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4462 | >20%                    |                 2 |              0.2231  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4467 | >20%                    |                10 |              0.04467 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.461  | 15-20%                  |                 5 |              0.0922  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4685 | >20%                    |                 5 |              0.0937  |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.4703 |                         |                 5 |              0.09406 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4727 | 15-20%                  |                 2 |              0.23635 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4753 |                         |                 2 |              0.23765 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.49   | >20%                    |                 5 |              0.098   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4925 | <5%                     |                 2 |              0.24625 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4978 | >20%                    |                 5 |              0.09956 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4989 | >20%                    |                10 |              0.04989 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.505  | >20%                    |                 5 |              0.101   |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5108 | 15-20%                  |                10 |              0.05108 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5163 | 10-15%                  |                10 |              0.05163 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5222 | 5-10%                   |                 2 |              0.2611  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.528  | >20%                    |                 5 |              0.1056  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5295 | >20%                    |                 5 |              0.1059  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5445 | >20%                    |                 5 |              0.1089  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.548  | >20%                    |                 2 |              0.274   |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5507 | >20%                    |                10 |              0.05507 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5563 | >20%                    |                10 |              0.05563 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5597 | >20%                    |                 2 |              0.27985 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5609 | >20%                    |                 5 |              0.11218 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5683 | >20%                    |                 5 |              0.11366 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5718 | >20%                    |                10 |              0.05718 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5725 | >20%                    |                 5 |              0.1145  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5774 | >20%                    |                 2 |              0.2887  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.587  | >20%                    |                 5 |              0.1174  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6069 | 10-15%                  |                 5 |              0.12138 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6092 | >20%                    |                 5 |              0.12184 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6205 | >20%                    |                 5 |              0.1241  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6299 | 5-10%                   |                 5 |              0.12598 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.63   | 5-10%                   |                10 |              0.063   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6439 | >20%                    |                 2 |              0.32195 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6571 | >20%                    |                10 |              0.06571 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6603 | 15-20%                  |                10 |              0.06603 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6681 | >20%                    |                 2 |              0.33405 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6695 | >20%                    |                10 |              0.06695 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6796 | 5-10%                   |                10 |              0.06796 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6808 | >20%                    |                 5 |              0.13616 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.697  | >20%                    |                 2 |              0.3485  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7065 | >20%                    |                 5 |              0.1413  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7224 | >20%                    |                 2 |              0.3612  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7229 | >20%                    |                10 |              0.07229 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7255 | >20%                    |                 5 |              0.1451  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7294 | >20%                    |                 2 |              0.3647  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7322 | 15-20%                  |                10 |              0.07322 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7772 | >20%                    |                10 |              0.07772 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7774 | >20%                    |                 5 |              0.15548 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7816 | 15-20%                  |                 2 |              0.3908  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7825 | >20%                    |                10 |              0.07825 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8129 | >20%                    |                 5 |              0.16258 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.819  | <5%                     |                10 |              0.0819  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8261 | >20%                    |                10 |              0.08261 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8269 | 15-20%                  |                10 |              0.08269 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8271 | 10-15%                  |                 2 |              0.41355 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8366 | >20%                    |                10 |              0.08366 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8413 | 5-10%                   |                 2 |              0.42065 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.8498 | >20%                    |                 2 |              0.4249  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8549 | >20%                    |                 5 |              0.17098 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8571 | >20%                    |                10 |              0.08571 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8672 | 5-10%                   |                10 |              0.08672 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8857 | >20%                    |                10 |              0.08857 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.91   | >20%                    |                 5 |              0.182   |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9249 | >20%                    |                 2 |              0.46245 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9304 |                         |                 2 |              0.4652  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9374 | 10-15%                  |                 2 |              0.4687  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9577 | 5-10%                   |                 5 |              0.19154 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9693 | >20%                    |                10 |              0.09693 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9859 | >20%                    |                10 |              0.09859 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9899 | >20%                    |                10 |              0.09899 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9909 | >20%                    |                10 |              0.09909 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9918 | 10-15%                  |                 2 |              0.4959  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9946 | >20%                    |                10 |              0.09946 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0028 | 15-20%                  |                10 |              0.10028 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0194 | >20%                    |                10 |              0.10194 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0357 | >20%                    |                 5 |              0.20714 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.056  | 5-10%                   |                10 |              0.1056  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0758 | >20%                    |                10 |              0.10758 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1027 |                         |                10 |              0.11027 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.123  | >20%                    |                 5 |              0.2246  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1314 | 15-20%                  |                10 |              0.11314 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1369 |                         |                 2 |              0.56845 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1409 | >20%                    |                 5 |              0.22818 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1451 | >20%                    |                10 |              0.11451 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1691 | >20%                    |                 5 |              0.23382 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1868 | >20%                    |                 5 |              0.23736 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.1914 | >20%                    |                 5 |              0.23828 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2056 |                         |                 5 |              0.24112 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2108 | >20%                    |                 2 |              0.6054  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.217  |                         |                 5 |              0.2434  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2599 | >20%                    |                10 |              0.12599 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2873 | >20%                    |                 5 |              0.25746 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2931 | 15-20%                  |                10 |              0.12931 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.3161 | >20%                    |                 5 |              0.26322 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.378  | 10-15%                  |                10 |              0.1378  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4975 | >20%                    |                10 |              0.14975 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.5386 |                         |                10 |              0.15386 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5897 | 15-20%                  |                 5 |              0.31794 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5954 | >20%                    |                10 |              0.15954 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6118 | 15-20%                  |                10 |              0.16118 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.6263 |                         |                10 |              0.16263 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.6618 | >20%                    |                10 |              0.16618 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.9312 | 5-10%                   |                 2 |              0.9656  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9361 | 5-10%                   |                 2 |              0.96805 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      2.0115 | >20%                    |                10 |              0.20115 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.0754 | >20%                    |                10 |              0.20754 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.2084 | >20%                    |                 5 |              0.44168 |