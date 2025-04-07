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

Data correct as of 2025-04-07 01:48:57.607799, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1195 | 15-20%                  |                 2 |              0.05975 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1308 | 10-15%                  |                 2 |              0.0654  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | 10-15%                  |                 5 |              0.03178 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 5-10%                   |                 5 |              0.039   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2018 | <5%                     |                 2 |              0.1009  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2077 | >20%                    |                 2 |              0.10385 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2172 | 15-20%                  |                 2 |              0.1086  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2339 | 15-20%                  |                 2 |              0.11695 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 10-15%                  |                10 |              0.02395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 15-20%                  |                10 |              0.02419 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2434 | >20%                    |                 2 |              0.1217  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2453 | >20%                    |                 2 |              0.12265 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2562 | 15-20%                  |                 5 |              0.05124 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2601 | 15-20%                  |                 2 |              0.13005 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2624 | >20%                    |                 2 |              0.1312  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2673 | 10-15%                  |                 2 |              0.13365 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2741 | 5-10%                   |                 2 |              0.13705 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2771 | <5%                     |                 2 |              0.13855 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2814 | 5-10%                   |                 2 |              0.1407  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2816 | <5%                     |                 2 |              0.1408  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2837 | 10-15%                  |                10 |              0.02837 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3008 | <5%                     |                 2 |              0.1504  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3009 | >20%                    |                 2 |              0.15045 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3019 | 10-15%                  |                 2 |              0.15095 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.305  | 10-15%                  |                 5 |              0.061   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3088 | 15-20%                  |                 2 |              0.1544  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3194 | 10-15%                  |                 2 |              0.1597  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3211 | 15-20%                  |                10 |              0.03211 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3313 | >20%                    |                 2 |              0.16565 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3529 | 10-15%                  |                 5 |              0.07058 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3569 | 10-15%                  |                 5 |              0.07138 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3583 | >20%                    |                 2 |              0.17915 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3683 | >20%                    |                 5 |              0.07366 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3687 | >20%                    |                 2 |              0.18435 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3692 | <5%                     |                 2 |              0.1846  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3762 | >20%                    |                 5 |              0.07524 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3781 | >20%                    |                10 |              0.03781 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3795 | >20%                    |                 2 |              0.18975 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3796 | >20%                    |                 2 |              0.1898  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3842 | >20%                    |                 2 |              0.1921  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3844 | <5%                     |                 2 |              0.1922  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3882 | 5-10%                   |                 5 |              0.07764 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3932 | 10-15%                  |                 2 |              0.1966  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3948 | >20%                    |                10 |              0.03948 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4031 | >20%                    |                10 |              0.04031 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4039 | >20%                    |                 2 |              0.20195 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.405  | <5%                     |                 2 |              0.2025  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4083 | 15-20%                  |                 2 |              0.20415 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4114 | 10-15%                  |                10 |              0.04114 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.412  | >20%                    |                 5 |              0.0824  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4124 | 15-20%                  |                 2 |              0.2062  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4135 | >20%                    |                 2 |              0.20675 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4196 | 10-15%                  |                 5 |              0.08392 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4267 | <5%                     |                 2 |              0.21335 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4338 | >20%                    |                 2 |              0.2169  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4368 | 10-15%                  |                 5 |              0.08736 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4424 | 5-10%                   |                 5 |              0.08848 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4513 | 5-10%                   |                10 |              0.04513 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4519 | >20%                    |                 2 |              0.22595 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.454  | >20%                    |                 5 |              0.0908  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4565 | >20%                    |                 5 |              0.0913  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.457  | >20%                    |                 5 |              0.0914  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4574 | >20%                    |                 5 |              0.09148 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4595 | 5-10%                   |                 2 |              0.22975 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.46   | >20%                    |                 2 |              0.23    |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4605 | >20%                    |                 5 |              0.0921  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.464  | >20%                    |                10 |              0.0464  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4687 | >20%                    |                 2 |              0.23435 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.47   | >20%                    |                 5 |              0.094   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4718 | >20%                    |                 5 |              0.09436 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4726 | <5%                     |                 5 |              0.09452 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4787 | 10-15%                  |                 2 |              0.23935 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4792 | 5-10%                   |                 5 |              0.09584 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4849 | 5-10%                   |                 5 |              0.09698 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4875 | >20%                    |                 5 |              0.0975  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4885 | >20%                    |                 5 |              0.0977  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4935 | >20%                    |                 2 |              0.24675 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5015 | >20%                    |                 5 |              0.1003  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5192 | 10-15%                  |                 5 |              0.10384 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5212 | 15-20%                  |                 5 |              0.10424 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5232 | <5%                     |                 5 |              0.10464 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5237 | <5%                     |                 2 |              0.26185 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5262 | >20%                    |                 5 |              0.10524 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5313 | 15-20%                  |                 2 |              0.26565 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5323 | >20%                    |                 5 |              0.10646 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5361 | >20%                    |                 2 |              0.26805 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5367 | 5-10%                   |                 2 |              0.26835 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5467 | 5-10%                   |                 5 |              0.10934 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5494 | >20%                    |                 2 |              0.2747  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5567 | 15-20%                  |                 2 |              0.27835 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5706 | >20%                    |                 5 |              0.11412 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5767 | <5%                     |                10 |              0.05767 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5812 | >20%                    |                 2 |              0.2906  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5846 | <5%                     |                 5 |              0.11692 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5854 | >20%                    |                 5 |              0.11708 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5857 | >20%                    |                 2 |              0.29285 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5891 | <5%                     |                10 |              0.05891 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5927 | 15-20%                  |                 5 |              0.11854 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.593  | >20%                    |                 2 |              0.2965  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5948 | 5-10%                   |                 5 |              0.11896 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5954 | <5%                     |                 5 |              0.11908 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.597  | >20%                    |                10 |              0.0597  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6043 | 15-20%                  |                 5 |              0.12086 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6096 | <5%                     |                10 |              0.06096 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6121 | >20%                    |                 5 |              0.12242 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.615  | >20%                    |                 5 |              0.123   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6175 | >20%                    |                 2 |              0.30875 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6182 | 5-10%                   |                 5 |              0.12364 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6304 | 10-15%                  |                 5 |              0.12608 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6326 | 10-15%                  |                 5 |              0.12652 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.636  | 10-15%                  |                 5 |              0.1272  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6419 | >20%                    |                 5 |              0.12838 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6478 | >20%                    |                10 |              0.06478 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6514 | <5%                     |                 5 |              0.13028 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6536 | 10-15%                  |                10 |              0.06536 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6556 | >20%                    |                 5 |              0.13112 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6567 | 10-15%                  |                10 |              0.06567 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6635 | >20%                    |                10 |              0.06635 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.668  | 10-15%                  |                 2 |              0.334   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6717 | >20%                    |                10 |              0.06717 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6835 | >20%                    |                10 |              0.06835 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.693  | >20%                    |                 5 |              0.1386  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6976 | >20%                    |                 5 |              0.13952 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7322 | >20%                    |                10 |              0.07322 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7356 | >20%                    |                 2 |              0.3678  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7555 | >20%                    |                 5 |              0.1511  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7607 | >20%                    |                10 |              0.07607 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7639 | <5%                     |                10 |              0.07639 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7642 | 15-20%                  |                 5 |              0.15284 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.765  | <5%                     |                10 |              0.0765  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7654 | 5-10%                   |                10 |              0.07654 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.773  | 15-20%                  |                 5 |              0.1546  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7758 | <5%                     |                 2 |              0.3879  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7796 | 10-15%                  |                10 |              0.07796 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7825 | <5%                     |                10 |              0.07825 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7895 | >20%                    |                10 |              0.07895 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7924 | <5%                     |                 5 |              0.15848 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7996 | <5%                     |                10 |              0.07996 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8004 | >20%                    |                 2 |              0.4002  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8014 | 5-10%                   |                10 |              0.08014 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8021 | 10-15%                  |                10 |              0.08021 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.817  | 15-20%                  |                10 |              0.0817  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8171 | 15-20%                  |                10 |              0.08171 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8241 | 10-15%                  |                10 |              0.08241 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8412 | >20%                    |                 2 |              0.4206  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8454 | >20%                    |                10 |              0.08454 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.848  | <5%                     |                10 |              0.0848  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8569 | <5%                     |                10 |              0.08569 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8591 | >20%                    |                10 |              0.08591 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8642 | >20%                    |                 2 |              0.4321  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8687 | 15-20%                  |                 5 |              0.17374 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8722 | >20%                    |                10 |              0.08722 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8888 | >20%                    |                10 |              0.08888 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8949 | <5%                     |                10 |              0.08949 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9577 | >20%                    |                 5 |              0.19154 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9588 | >20%                    |                 5 |              0.19176 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9596 | 10-15%                  |                10 |              0.09596 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9733 | >20%                    |                10 |              0.09733 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9829 | 5-10%                   |                10 |              0.09829 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9855 | 15-20%                  |                10 |              0.09855 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0386 | >20%                    |                10 |              0.10386 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0485 | 10-15%                  |                 2 |              0.52425 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0934 | <5%                     |                10 |              0.10934 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1507 | <5%                     |                10 |              0.11507 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1736 | 15-20%                  |                10 |              0.11736 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1757 | 15-20%                  |                10 |              0.11757 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1774 | >20%                    |                10 |              0.11774 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2192 | >20%                    |                 5 |              0.24384 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2437 | <5%                     |                 5 |              0.24874 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3231 | 15-20%                  |                10 |              0.13231 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3436 | >20%                    |                10 |              0.13436 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3533 | >20%                    |                 2 |              0.67665 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3595 | >20%                    |                 5 |              0.2719  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4228 | 5-10%                   |                 2 |              0.7114  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6114 | >20%                    |                10 |              0.16114 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6335 | >20%                    |                10 |              0.16335 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7875 | 15-20%                  |                10 |              0.17875 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8874 | <5%                     |                10 |              0.18874 |