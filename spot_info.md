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

Data correct as of 2026-09-24 03:59:09.764561, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.086  | >20%                    |                 2 |              0.043   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1249 | 15-20%                  |                 2 |              0.06245 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1478 | >20%                    |                 5 |              0.02956 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1754 | 15-20%                  |                 5 |              0.03508 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.2408 |                         |                 5 |              0.04816 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2455 | >20%                    |                 2 |              0.12275 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2455 | >20%                    |                 2 |              0.12275 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2456 | >20%                    |                 2 |              0.1228  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2527 | >20%                    |                 2 |              0.12635 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2614 | >20%                    |                 2 |              0.1307  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2794 | >20%                    |                 2 |              0.1397  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2805 | >20%                    |                 2 |              0.14025 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2894 | 15-20%                  |                 2 |              0.1447  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3077 | >20%                    |                 2 |              0.15385 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3119 | 10-15%                  |                 2 |              0.15595 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3287 | >20%                    |                 2 |              0.16435 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3408 | >20%                    |                 5 |              0.06816 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3628 | >20%                    |                 5 |              0.07256 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3683 | >20%                    |                10 |              0.03683 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3699 | >20%                    |                 2 |              0.18495 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3712 | 15-20%                  |                 2 |              0.1856  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3884 | >20%                    |                 5 |              0.07768 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.39   | <5%                     |                 2 |              0.195   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3902 | 10-15%                  |                 2 |              0.1951  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3975 | >20%                    |                 5 |              0.0795  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3997 | >20%                    |                 2 |              0.19985 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.405  | >20%                    |                 2 |              0.2025  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4279 | >20%                    |                 5 |              0.08558 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4281 | >20%                    |                 5 |              0.08562 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4283 | 5-10%                   |                10 |              0.04283 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4311 | >20%                    |                 5 |              0.08622 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.434  | <5%                     |                10 |              0.0434  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4342 | >20%                    |                 2 |              0.2171  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4439 | >20%                    |                 2 |              0.22195 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4446 | >20%                    |                 5 |              0.08892 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4541 | 15-20%                  |                 2 |              0.22705 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4707 | >20%                    |                 2 |              0.23535 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4762 | 10-15%                  |                 2 |              0.2381  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4808 | >20%                    |                10 |              0.04808 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4841 | 15-20%                  |                 2 |              0.24205 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4844 | >20%                    |                 5 |              0.09688 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4875 | >20%                    |                 5 |              0.0975  |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4932 |                         |                 2 |              0.2466  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.497  | <5%                     |                 2 |              0.2485  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5009 | >20%                    |                 5 |              0.10018 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5039 | >20%                    |                 2 |              0.25195 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5148 | >20%                    |                 5 |              0.10296 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5313 | >20%                    |                 2 |              0.26565 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5421 | >20%                    |                 5 |              0.10842 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5457 | >20%                    |                 2 |              0.27285 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5488 | >20%                    |                 2 |              0.2744  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5559 | >20%                    |                 5 |              0.11118 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5568 | 5-10%                   |                10 |              0.05568 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5663 | >20%                    |                 5 |              0.11326 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5993 | >20%                    |                10 |              0.05993 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6023 | >20%                    |                 5 |              0.12046 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6041 | 15-20%                  |                10 |              0.06041 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6137 | 10-15%                  |                 5 |              0.12274 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6162 | >20%                    |                 2 |              0.3081  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6191 | >20%                    |                 5 |              0.12382 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6227 | >20%                    |                 5 |              0.12454 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6231 | >20%                    |                 2 |              0.31155 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6408 | 5-10%                   |                 5 |              0.12816 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6431 | 15-20%                  |                10 |              0.06431 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6456 | 10-15%                  |                 2 |              0.3228  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6494 | >20%                    |                 5 |              0.12988 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.657  | >20%                    |                 5 |              0.1314  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6621 | >20%                    |                 5 |              0.13242 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6641 | >20%                    |                 5 |              0.13282 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6797 | >20%                    |                10 |              0.06797 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6903 | >20%                    |                10 |              0.06903 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6916 | <5%                     |                 2 |              0.3458  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6927 | 5-10%                   |                 2 |              0.34635 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6938 | >20%                    |                 2 |              0.3469  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7006 | 15-20%                  |                 2 |              0.3503  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.703  | 10-15%                  |                10 |              0.0703  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7071 | >20%                    |                10 |              0.07071 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7148 | >20%                    |                 5 |              0.14296 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7308 | >20%                    |                 5 |              0.14616 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7368 | >20%                    |                 2 |              0.3684  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7369 | 15-20%                  |                 5 |              0.14738 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7421 | >20%                    |                 5 |              0.14842 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7519 | >20%                    |                10 |              0.07519 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7534 | >20%                    |                 5 |              0.15068 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.754  | >20%                    |                 5 |              0.1508  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7837 | >20%                    |                 2 |              0.39185 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8277 | 10-15%                  |                 2 |              0.41385 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8344 | 15-20%                  |                10 |              0.08344 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8467 | >20%                    |                 2 |              0.42335 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8488 | >20%                    |                10 |              0.08488 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8502 | >20%                    |                 5 |              0.17004 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.853  | 5-10%                   |                10 |              0.0853  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8652 | 15-20%                  |                 5 |              0.17304 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8714 | >20%                    |                10 |              0.08714 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.873  | >20%                    |                10 |              0.0873  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8789 | >20%                    |                10 |              0.08789 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.903  | >20%                    |                10 |              0.0903  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.9063 | >20%                    |                 2 |              0.45315 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9118 | <5%                     |                 5 |              0.18236 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9198 | >20%                    |                 5 |              0.18396 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9249 | >20%                    |                10 |              0.09249 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9262 | 15-20%                  |                10 |              0.09262 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9283 | >20%                    |                 5 |              0.18566 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9379 |                         |                 2 |              0.46895 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9589 | >20%                    |                10 |              0.09589 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9663 | >20%                    |                 5 |              0.19326 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9868 | >20%                    |                10 |              0.09868 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9887 | 10-15%                  |                 2 |              0.49435 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9902 | >20%                    |                10 |              0.09902 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.0027 |                         |                10 |              0.10027 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0131 | >20%                    |                10 |              0.10131 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0181 | >20%                    |                10 |              0.10181 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0195 | 15-20%                  |                10 |              0.10195 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0221 | >20%                    |                10 |              0.10221 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0387 | 15-20%                  |                10 |              0.10387 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0395 | >20%                    |                10 |              0.10395 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0499 | >20%                    |                 5 |              0.20998 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0833 | >20%                    |                10 |              0.10833 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.086  | >20%                    |                 5 |              0.2172  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1163 | >20%                    |                 5 |              0.22326 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1172 | 5-10%                   |                10 |              0.11172 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1385 |                         |                 2 |              0.56925 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1603 | 5-10%                   |                 2 |              0.58015 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2089 | >20%                    |                10 |              0.12089 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2102 | >20%                    |                10 |              0.12102 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2116 | >20%                    |                10 |              0.12116 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2163 |                         |                 5 |              0.24326 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2721 | 5-10%                   |                 2 |              0.63605 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2758 |                         |                 5 |              0.25516 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3338 | 10-15%                  |                10 |              0.13338 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3455 | >20%                    |                10 |              0.13455 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3456 | >20%                    |                 2 |              0.6728  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3798 | >20%                    |                10 |              0.13798 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3843 | 15-20%                  |                10 |              0.13843 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4399 | >20%                    |                 5 |              0.28798 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5355 | >20%                    |                 2 |              0.76775 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5744 | 5-10%                   |                 5 |              0.31488 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5851 | 10-15%                  |                 2 |              0.79255 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6379 | >20%                    |                10 |              0.16379 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7623 | 15-20%                  |                10 |              0.17623 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7639 | >20%                    |                 5 |              0.35278 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7811 |                         |                10 |              0.17811 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.8466 | >20%                    |                 5 |              0.36932 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8738 |                         |                10 |              0.18738 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.9299 | >20%                    |                10 |              0.19299 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1239 | 15-20%                  |                 5 |              0.42478 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2262 | 5-10%                   |                 2 |              1.1131  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2605 | 5-10%                   |                10 |              0.22605 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6097 | >20%                    |                10 |              0.26097 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.7223 | >20%                    |                10 |              0.27223 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1054 | >20%                    |                10 |              0.31054 |