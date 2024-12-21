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

Data correct as of 2024-12-21 01:36:03.069745, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1215 |                         |                 2 |              0.06075 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1256 |                         |                 2 |              0.0628  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1671 |                         |                 5 |              0.03342 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.177  |                         |                 5 |              0.0354  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.1994 | >20%                    |                 2 |              0.0997  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2033 | 15-20%                  |                 2 |              0.10165 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2203 | 15-20%                  |                 2 |              0.11015 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2245 | 15-20%                  |                 2 |              0.11225 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2333 | 5-10%                   |                 2 |              0.11665 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2362 | 15-20%                  |                 2 |              0.1181  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2396 | >20%                    |                 2 |              0.1198  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2477 |                         |                10 |              0.02477 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.25   | 5-10%                   |                 2 |              0.125   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2506 | 15-20%                  |                 5 |              0.05012 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2575 | <5%                     |                 5 |              0.0515  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.2648 |                         |                10 |              0.02648 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2777 | <5%                     |                 2 |              0.13885 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2793 | <5%                     |                 2 |              0.13965 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2872 | 5-10%                   |                 5 |              0.05744 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2903 | 5-10%                   |                 2 |              0.14515 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2946 | 5-10%                   |                 2 |              0.1473  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2957 | >20%                    |                 5 |              0.05914 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3038 | 5-10%                   |                 2 |              0.1519  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.315  | <5%                     |                 2 |              0.1575  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3161 | 15-20%                  |                10 |              0.03161 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3195 | >20%                    |                 2 |              0.15975 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3293 | <5%                     |                 2 |              0.16465 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3344 | <5%                     |                 5 |              0.06688 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3347 | 10-15%                  |                 2 |              0.16735 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3349 | <5%                     |                 2 |              0.16745 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3442 | 5-10%                   |                 5 |              0.06884 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3484 | 5-10%                   |                10 |              0.03484 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3498 | >20%                    |                 2 |              0.1749  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3529 | 10-15%                  |                 2 |              0.17645 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3537 | >20%                    |                 5 |              0.07074 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3537 | >20%                    |                 2 |              0.17685 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3549 | 10-15%                  |                 2 |              0.17745 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3564 | >20%                    |                 2 |              0.1782  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3609 | <5%                     |                 2 |              0.18045 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3669 | <5%                     |                 5 |              0.07338 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3718 | 5-10%                   |                 2 |              0.1859  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3727 | >20%                    |                 2 |              0.18635 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.3751 | <5%                     |                 2 |              0.18755 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3777 | <5%                     |                 5 |              0.07554 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3836 | 10-15%                  |                10 |              0.03836 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4056 | 10-15%                  |                 2 |              0.2028  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4107 | >20%                    |                 2 |              0.20535 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4138 | 5-10%                   |                 2 |              0.2069  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4139 | 10-15%                  |                10 |              0.04139 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.414  | 15-20%                  |                 2 |              0.207   |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.416  | 5-10%                   |                 5 |              0.0832  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4168 | 5-10%                   |                 2 |              0.2084  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4204 | >20%                    |                 5 |              0.08408 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4204 | <5%                     |                 5 |              0.08408 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4235 | >20%                    |                 5 |              0.0847  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4271 | 10-15%                  |                 5 |              0.08542 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4279 | 5-10%                   |                 5 |              0.08558 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4281 | 10-15%                  |                 2 |              0.21405 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4328 | >20%                    |                10 |              0.04328 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4421 | 5-10%                   |                 5 |              0.08842 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4442 | >20%                    |                 5 |              0.08884 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4462 | >20%                    |                 5 |              0.08924 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4508 | <5%                     |                 5 |              0.09016 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4541 | >20%                    |                10 |              0.04541 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4563 | >20%                    |                 5 |              0.09126 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4594 | 5-10%                   |                 2 |              0.2297  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4598 | 5-10%                   |                 2 |              0.2299  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.4627 | <5%                     |                 5 |              0.09254 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4662 | 5-10%                   |                10 |              0.04662 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4694 | 15-20%                  |                 2 |              0.2347  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4727 | <5%                     |                 5 |              0.09454 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4734 | <5%                     |                 5 |              0.09468 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4776 | 10-15%                  |                 2 |              0.2388  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4819 | >20%                    |                 5 |              0.09638 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4846 | 10-15%                  |                 5 |              0.09692 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4872 | <5%                     |                 2 |              0.2436  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4912 | >20%                    |                 2 |              0.2456  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4957 | 10-15%                  |                 2 |              0.24785 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5039 | <5%                     |                 5 |              0.10078 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5057 | 15-20%                  |                 5 |              0.10114 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5065 | >20%                    |                 5 |              0.1013  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5295 | <5%                     |                 5 |              0.1059  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5408 | >20%                    |                 5 |              0.10816 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5419 | >20%                    |                 5 |              0.10838 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5506 | 5-10%                   |                 5 |              0.11012 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.553  | 10-15%                  |                 5 |              0.1106  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5635 | >20%                    |                 2 |              0.28175 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5646 | 15-20%                  |                 5 |              0.11292 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5685 | >20%                    |                10 |              0.05685 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.5732 | 15-20%                  |                 2 |              0.2866  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5972 | <5%                     |                 5 |              0.11944 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6259 | 5-10%                   |                10 |              0.06259 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6419 | 15-20%                  |                 5 |              0.12838 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6451 | >20%                    |                10 |              0.06451 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6468 | <5%                     |                10 |              0.06468 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6529 | >20%                    |                10 |              0.06529 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6577 | 5-10%                   |                10 |              0.06577 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6822 | 5-10%                   |                 5 |              0.13644 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6874 | <5%                     |                 5 |              0.13748 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.69   | >20%                    |                 2 |              0.345   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6912 | 15-20%                  |                 5 |              0.13824 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6917 | >20%                    |                10 |              0.06917 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7132 | 10-15%                  |                10 |              0.07132 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7143 | <5%                     |                 2 |              0.35715 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7189 | 10-15%                  |                10 |              0.07189 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7194 | 5-10%                   |                 5 |              0.14388 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.7198 | <5%                     |                10 |              0.07198 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7206 | >20%                    |                 5 |              0.14412 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.7217 | <5%                     |                 2 |              0.36085 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7359 | 5-10%                   |                10 |              0.07359 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7383 | >20%                    |                 5 |              0.14766 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7417 | >20%                    |                10 |              0.07417 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7458 | 5-10%                   |                10 |              0.07458 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7484 | >20%                    |                 5 |              0.14968 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.7526 | >20%                    |                10 |              0.07526 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.756  | 15-20%                  |                10 |              0.0756  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7879 | 5-10%                   |                10 |              0.07879 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7961 | 15-20%                  |                10 |              0.07961 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8134 | <5%                     |                10 |              0.08134 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.824  | 10-15%                  |                10 |              0.0824  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8312 | 10-15%                  |                10 |              0.08312 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8317 | 5-10%                   |                10 |              0.08317 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8569 | 10-15%                  |                10 |              0.08569 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8776 | <5%                     |                10 |              0.08776 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8805 | <5%                     |                10 |              0.08805 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8913 | 5-10%                   |                10 |              0.08913 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8919 | 10-15%                  |                 2 |              0.44595 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8996 | <5%                     |                 5 |              0.17992 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9225 | 5-10%                   |                 5 |              0.1845  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.942  | >20%                    |                10 |              0.0942  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9621 | 15-20%                  |                10 |              0.09621 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9641 | 15-20%                  |                10 |              0.09641 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9812 | 5-10%                   |                10 |              0.09812 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9879 | 5-10%                   |                10 |              0.09879 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0129 | <5%                     |                10 |              0.10129 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0757 | <5%                     |                10 |              0.10757 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.0923 | <5%                     |                10 |              0.10923 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0932 | >20%                    |                10 |              0.10932 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1581 | >20%                    |                10 |              0.11581 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2245 | >20%                    |                10 |              0.12245 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3823 | 5-10%                   |                10 |              0.13823 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5641 | 5-10%                   |                 5 |              0.31282 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9349 | 10-15%                  |                10 |              0.19349 |