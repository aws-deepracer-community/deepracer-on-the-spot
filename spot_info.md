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

Data correct as of 2025-02-01 01:40:08.049511, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2093 | >20%                    |                 2 |              0.10465 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2123 | <5%                     |                 2 |              0.10615 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.22   | 5-10%                   |                 2 |              0.11    |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2255 | 10-15%                  |                 2 |              0.11275 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2264 | 10-15%                  |                 2 |              0.1132  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2373 | 5-10%                   |                 2 |              0.11865 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2479 | 10-15%                  |                 5 |              0.04958 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2483 | 10-15%                  |                 2 |              0.12415 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2525 | <5%                     |                 2 |              0.12625 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2557 | 5-10%                   |                 2 |              0.12785 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2956 | >20%                    |                 2 |              0.1478  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3005 | <5%                     |                 2 |              0.15025 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3018 | 5-10%                   |                 2 |              0.1509  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3034 | <5%                     |                 5 |              0.06068 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3046 | >20%                    |                 2 |              0.1523  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3106 | 15-20%                  |                10 |              0.03106 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.317  | 5-10%                   |                 5 |              0.0634  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3215 | 10-15%                  |                 2 |              0.16075 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3274 | <5%                     |                 2 |              0.1637  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3276 | 5-10%                   |                 2 |              0.1638  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3403 | >20%                    |                 2 |              0.17015 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3403 | 10-15%                  |                 5 |              0.06806 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3406 | 5-10%                   |                 2 |              0.1703  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3468 | <5%                     |                 5 |              0.06936 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3503 | <5%                     |                 2 |              0.17515 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3563 | 5-10%                   |                 2 |              0.17815 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3632 | >20%                    |                 2 |              0.1816  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3768 | 15-20%                  |                 5 |              0.07536 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3823 | 5-10%                   |                 5 |              0.07646 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3914 | 5-10%                   |                 2 |              0.1957  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3954 | >20%                    |                 2 |              0.1977  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3959 | 5-10%                   |                 5 |              0.07918 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4032 | 5-10%                   |                 2 |              0.2016  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4079 | <5%                     |                 2 |              0.20395 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4176 | 10-15%                  |                 2 |              0.2088  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.425  | <5%                     |                 2 |              0.2125  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4265 | <5%                     |                 5 |              0.0853  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4367 | 10-15%                  |                 5 |              0.08734 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4436 | 5-10%                   |                 2 |              0.2218  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4625 | 15-20%                  |                 5 |              0.0925  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4774 | 5-10%                   |                 2 |              0.2387  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4778 | >20%                    |                 5 |              0.09556 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4835 | 15-20%                  |                 5 |              0.0967  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4841 | <5%                     |                 2 |              0.24205 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4865 | <5%                     |                 5 |              0.0973  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4904 | >20%                    |                 5 |              0.09808 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4944 | >20%                    |                 2 |              0.2472  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4955 | <5%                     |                 5 |              0.0991  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5031 | 10-15%                  |                 5 |              0.10062 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5036 | 15-20%                  |                 5 |              0.10072 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5041 | >20%                    |                 2 |              0.25205 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5088 | 10-15%                  |                 2 |              0.2544  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5094 | <5%                     |                 5 |              0.10188 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5108 | <5%                     |                 2 |              0.2554  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5109 | <5%                     |                 5 |              0.10218 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5201 | 5-10%                   |                 5 |              0.10402 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5244 | >20%                    |                 5 |              0.10488 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5322 | >20%                    |                 5 |              0.10644 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5332 | 15-20%                  |                 5 |              0.10664 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5397 | 10-15%                  |                 2 |              0.26985 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5459 | 5-10%                   |                 2 |              0.27295 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5473 | <5%                     |                 5 |              0.10946 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5485 | <5%                     |                 5 |              0.1097  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5504 | 10-15%                  |                 5 |              0.11008 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5619 | 15-20%                  |                 2 |              0.28095 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5707 | 5-10%                   |                 5 |              0.11414 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5725 | 5-10%                   |                 5 |              0.1145  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5755 | 15-20%                  |                 2 |              0.28775 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5781 | >20%                    |                10 |              0.05781 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.581  | 5-10%                   |                 5 |              0.1162  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5843 | >20%                    |                 2 |              0.29215 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5856 | 5-10%                   |                 5 |              0.11712 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5871 | 5-10%                   |                 5 |              0.11742 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6014 | 5-10%                   |                10 |              0.06014 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6065 | <5%                     |                10 |              0.06065 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6085 | <5%                     |                10 |              0.06085 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.613  | 5-10%                   |                10 |              0.0613  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6337 | <5%                     |                10 |              0.06337 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6407 | 10-15%                  |                10 |              0.06407 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6417 | 5-10%                   |                 5 |              0.12834 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.65   | 5-10%                   |                10 |              0.065   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6598 | >20%                    |                 2 |              0.3299  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6647 | 5-10%                   |                10 |              0.06647 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6786 | >20%                    |                10 |              0.06786 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.685  | >20%                    |                 5 |              0.137   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6855 | 10-15%                  |                10 |              0.06855 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6871 | <5%                     |                 5 |              0.13742 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6889 | 10-15%                  |                10 |              0.06889 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6984 | 5-10%                   |                 5 |              0.13968 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7017 | 5-10%                   |                 5 |              0.14034 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7064 | 15-20%                  |                10 |              0.07064 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7168 | >20%                    |                 5 |              0.14336 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7316 | <5%                     |                 2 |              0.3658  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7333 | 5-10%                   |                10 |              0.07333 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7352 | >20%                    |                10 |              0.07352 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7404 | 5-10%                   |                10 |              0.07404 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7544 | >20%                    |                 5 |              0.15088 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7703 | >20%                    |                 5 |              0.15406 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7714 | 10-15%                  |                10 |              0.07714 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7804 | 15-20%                  |                10 |              0.07804 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7925 | 5-10%                   |                10 |              0.07925 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8038 | 15-20%                  |                 2 |              0.4019  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8076 | 5-10%                   |                10 |              0.08076 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8235 | <5%                     |                10 |              0.08235 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8258 | 15-20%                  |                10 |              0.08258 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8263 | >20%                    |                10 |              0.08263 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8349 | 15-20%                  |                 2 |              0.41745 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8669 | 5-10%                   |                10 |              0.08669 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8785 | 5-10%                   |                10 |              0.08785 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8875 | <5%                     |                10 |              0.08875 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8905 | >20%                    |                10 |              0.08905 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8909 | >20%                    |                10 |              0.08909 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8918 | <5%                     |                10 |              0.08918 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9165 | 15-20%                  |                10 |              0.09165 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9196 | 5-10%                   |                10 |              0.09196 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.931  | >20%                    |                 5 |              0.1862  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9343 | <5%                     |                10 |              0.09343 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9363 | 5-10%                   |                 5 |              0.18726 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9538 | 5-10%                   |                10 |              0.09538 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.9739 | 10-15%                  |                10 |              0.09739 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9823 | 5-10%                   |                 5 |              0.19646 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0002 | >20%                    |                10 |              0.10002 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0023 | 15-20%                  |                10 |              0.10023 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0223 | <5%                     |                10 |              0.10223 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0786 | 10-15%                  |                 2 |              0.5393  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0869 | 5-10%                   |                10 |              0.10869 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0946 | 15-20%                  |                 5 |              0.21892 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.1433 | >20%                    |                10 |              0.11433 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1904 | 10-15%                  |                10 |              0.11904 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2182 | 5-10%                   |                10 |              0.12182 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.232  | 10-15%                  |                 2 |              0.616   |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2804 | 15-20%                  |                 5 |              0.25608 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4485 | 5-10%                   |                10 |              0.14485 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4757 | 5-10%                   |                10 |              0.14757 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9764 | 5-10%                   |                10 |              0.19764 |