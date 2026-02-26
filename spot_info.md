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

Data correct as of 2026-02-26 02:31:53.851295, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1291 | >20%                    |                 2 |              0.06455 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1583 | >20%                    |                 2 |              0.07915 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1981 | >20%                    |                 2 |              0.09905 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2083 | >20%                    |                 2 |              0.10415 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2392 | >20%                    |                 2 |              0.1196  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2509 | >20%                    |                 2 |              0.12545 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2553 | 15-20%                  |                 2 |              0.12765 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2586 | 10-15%                  |                 2 |              0.1293  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2597 | <5%                     |                 2 |              0.12985 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2624 | >20%                    |                 2 |              0.1312  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2724 | 10-15%                  |                 2 |              0.1362  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2824 | >20%                    |                 2 |              0.1412  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2903 | >20%                    |                 2 |              0.14515 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2906 | 5-10%                   |                10 |              0.02906 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2977 | 5-10%                   |                 2 |              0.14885 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2991 | >20%                    |                 5 |              0.05982 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.307  | <5%                     |                 5 |              0.0614  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3074 | >20%                    |                 2 |              0.1537  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3079 | >20%                    |                 2 |              0.15395 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3087 | 5-10%                   |                 2 |              0.15435 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3128 | >20%                    |                 2 |              0.1564  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.316  | <5%                     |                10 |              0.0316  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3165 | >20%                    |                 5 |              0.0633  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3194 | >20%                    |                 5 |              0.06388 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3211 | <5%                     |                10 |              0.03211 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3321 | >20%                    |                 2 |              0.16605 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3441 | >20%                    |                 5 |              0.06882 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3486 | 5-10%                   |                 5 |              0.06972 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3487 | >20%                    |                 5 |              0.06974 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3543 | 5-10%                   |                10 |              0.03543 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3544 | <5%                     |                 5 |              0.07088 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3549 | 10-15%                  |                 2 |              0.17745 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.365  | 15-20%                  |                 2 |              0.1825  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3665 | >20%                    |                 5 |              0.0733  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.369  | >20%                    |                 2 |              0.1845  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3767 | 5-10%                   |                 2 |              0.18835 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3802 | 15-20%                  |                 2 |              0.1901  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3806 | >20%                    |                 2 |              0.1903  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3853 | >20%                    |                 5 |              0.07706 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3902 | 15-20%                  |                 2 |              0.1951  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3952 | >20%                    |                 2 |              0.1976  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4033 | >20%                    |                10 |              0.04033 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4035 | >20%                    |                 5 |              0.0807  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4038 | >20%                    |                10 |              0.04038 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4049 | >20%                    |                 2 |              0.20245 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.41   | >20%                    |                 5 |              0.082   |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4105 | >20%                    |                 5 |              0.0821  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4107 | 10-15%                  |                 5 |              0.08214 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4166 | 15-20%                  |                 2 |              0.2083  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4193 | 5-10%                   |                 2 |              0.20965 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4224 | <5%                     |                 2 |              0.2112  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4284 | >20%                    |                 5 |              0.08568 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4309 | >20%                    |                 2 |              0.21545 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4322 | 15-20%                  |                 5 |              0.08644 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4342 | >20%                    |                10 |              0.04342 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4353 | <5%                     |                 2 |              0.21765 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.436  | 5-10%                   |                 2 |              0.218   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4393 | >20%                    |                 2 |              0.21965 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4423 | >20%                    |                 2 |              0.22115 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4453 | >20%                    |                 2 |              0.22265 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4472 | <5%                     |                 2 |              0.2236  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4473 | >20%                    |                10 |              0.04473 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4486 | 5-10%                   |                 2 |              0.2243  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4491 | >20%                    |                 5 |              0.08982 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4541 | 5-10%                   |                 2 |              0.22705 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4584 | >20%                    |                 5 |              0.09168 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4641 | <5%                     |                 5 |              0.09282 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4662 | >20%                    |                 2 |              0.2331  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4678 | >20%                    |                 2 |              0.2339  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4694 | 5-10%                   |                 5 |              0.09388 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4786 | <5%                     |                 5 |              0.09572 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4806 | >20%                    |                10 |              0.04806 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4812 | 5-10%                   |                 5 |              0.09624 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4816 | <5%                     |                10 |              0.04816 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4839 | >20%                    |                 2 |              0.24195 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4894 | >20%                    |                 5 |              0.09788 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.4898 | 15-20%                  |                10 |              0.04898 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.494  | >20%                    |                 5 |              0.0988  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5088 | 15-20%                  |                 5 |              0.10176 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5092 | 15-20%                  |                 2 |              0.2546  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5218 | >20%                    |                 2 |              0.2609  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5223 | <5%                     |                10 |              0.05223 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5241 | >20%                    |                 2 |              0.26205 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5294 | >20%                    |                 5 |              0.10588 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5303 | >20%                    |                 5 |              0.10606 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5351 | >20%                    |                 5 |              0.10702 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5395 | >20%                    |                 5 |              0.1079  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.542  | >20%                    |                 5 |              0.1084  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5477 | <5%                     |                 5 |              0.10954 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5497 | >20%                    |                10 |              0.05497 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5566 | 15-20%                  |                 5 |              0.11132 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5644 | >20%                    |                10 |              0.05644 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5728 | <5%                     |                 5 |              0.11456 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5753 | 15-20%                  |                10 |              0.05753 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5795 | <5%                     |                10 |              0.05795 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5812 | 15-20%                  |                10 |              0.05812 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5824 | 15-20%                  |                 5 |              0.11648 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5859 | >20%                    |                10 |              0.05859 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5987 | >20%                    |                10 |              0.05987 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5994 | 5-10%                   |                 2 |              0.2997  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.615  | >20%                    |                 5 |              0.123   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.616  | >20%                    |                 5 |              0.1232  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6173 | 15-20%                  |                 2 |              0.30865 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6285 | >20%                    |                 2 |              0.31425 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6374 | >20%                    |                 5 |              0.12748 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6381 | 15-20%                  |                10 |              0.06381 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6391 | >20%                    |                 5 |              0.12782 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6404 | >20%                    |                10 |              0.06404 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6471 | >20%                    |                 2 |              0.32355 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6568 | 10-15%                  |                 5 |              0.13136 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.6596 |                         |                 2 |              0.3298  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.6644 | >20%                    |                10 |              0.06644 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6657 | 5-10%                   |                 5 |              0.13314 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6752 | 5-10%                   |                 5 |              0.13504 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6764 | 10-15%                  |                10 |              0.06764 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.68   | >20%                    |                 5 |              0.136   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6807 | 5-10%                   |                 2 |              0.34035 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6817 | >20%                    |                 5 |              0.13634 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6856 | >20%                    |                 2 |              0.3428  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6926 | 5-10%                   |                 5 |              0.13852 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6998 | 10-15%                  |                10 |              0.06998 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7097 | >20%                    |                 5 |              0.14194 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7101 | <5%                     |                10 |              0.07101 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7279 | >20%                    |                 5 |              0.14558 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7344 | >20%                    |                10 |              0.07344 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7521 | >20%                    |                10 |              0.07521 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7602 | <5%                     |                10 |              0.07602 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7683 | >20%                    |                10 |              0.07683 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7771 | >20%                    |                 5 |              0.15542 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7819 | >20%                    |                10 |              0.07819 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8067 | >20%                    |                 2 |              0.40335 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8112 | 15-20%                  |                10 |              0.08112 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8137 | >20%                    |                10 |              0.08137 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8289 | <5%                     |                10 |              0.08289 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8305 | <5%                     |                 5 |              0.1661  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8322 | 5-10%                   |                10 |              0.08322 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8337 | >20%                    |                 5 |              0.16674 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8365 | <5%                     |                 5 |              0.1673  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8445 | >20%                    |                 5 |              0.1689  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8535 | >20%                    |                10 |              0.08535 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8559 |                         |                 5 |              0.17118 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8564 | >20%                    |                10 |              0.08564 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8592 | >20%                    |                 2 |              0.4296  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8607 | >20%                    |                 2 |              0.43035 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8614 | <5%                     |                10 |              0.08614 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8659 | >20%                    |                 5 |              0.17318 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8853 | >20%                    |                 5 |              0.17706 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8909 | <5%                     |                10 |              0.08909 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9018 | 5-10%                   |                10 |              0.09018 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9037 | 10-15%                  |                 2 |              0.45185 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9121 | >20%                    |                10 |              0.09121 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9123 | >20%                    |                 2 |              0.45615 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9365 | <5%                     |                10 |              0.09365 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9678 | >20%                    |                10 |              0.09678 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9688 | >20%                    |                 5 |              0.19376 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9792 | >20%                    |                10 |              0.09792 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.9959 | <5%                     |                 2 |              0.49795 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.024  | 10-15%                  |                10 |              0.1024  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0306 | 10-15%                  |                 5 |              0.20612 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0322 | >20%                    |                10 |              0.10322 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.039  | >20%                    |                10 |              0.1039  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0399 | >20%                    |                 2 |              0.51995 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0476 | 5-10%                   |                 5 |              0.20952 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0649 | >20%                    |                10 |              0.10649 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0701 | >20%                    |                10 |              0.10701 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0737 | >20%                    |                10 |              0.10737 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0746 | 5-10%                   |                10 |              0.10746 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0938 | >20%                    |                 5 |              0.21876 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1203 | 15-20%                  |                10 |              0.11203 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1943 | <5%                     |                10 |              0.11943 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2062 | 15-20%                  |                10 |              0.12062 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2495 | >20%                    |                 2 |              0.62475 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2796 | >20%                    |                10 |              0.12796 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3144 |                         |                10 |              0.13144 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3484 | >20%                    |                10 |              0.13484 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3834 | >20%                    |                 5 |              0.27668 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.444  | 10-15%                  |                 5 |              0.2888  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4569 | >20%                    |                 2 |              0.72845 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6508 | >20%                    |                10 |              0.16508 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.705  | 15-20%                  |                10 |              0.1705  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7177 | >20%                    |                10 |              0.17177 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3086 | 10-15%                  |                10 |              0.23086 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.5003 | <5%                     |                 5 |              0.50006 |