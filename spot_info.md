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

Data correct as of 2026-10-12 05:12:02.931244, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1152 | >20%                    |                 2 |              0.0576  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1477 | >20%                    |                 2 |              0.07385 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1834 | 15-20%                  |                 2 |              0.0917  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1912 | 15-20%                  |                 5 |              0.03824 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1929 | >20%                    |                 2 |              0.09645 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2351 | >20%                    |                 2 |              0.11755 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2475 | 10-15%                  |                 2 |              0.12375 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2545 | >20%                    |                 5 |              0.0509  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2681 | >20%                    |                 2 |              0.13405 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2738 | >20%                    |                 2 |              0.1369  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2738 | >20%                    |                 2 |              0.1369  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2742 | 5-10%                   |                10 |              0.02742 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2849 | >20%                    |                 2 |              0.14245 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2979 | >20%                    |                 2 |              0.14895 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2987 | 15-20%                  |                 2 |              0.14935 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3166 | >20%                    |                 5 |              0.06332 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3216 | >20%                    |                 2 |              0.1608  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3266 | <5%                     |                10 |              0.03266 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3547 | 10-15%                  |                 2 |              0.17735 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3657 | 15-20%                  |                 2 |              0.18285 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3673 | >20%                    |                 5 |              0.07346 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.368  | >20%                    |                 2 |              0.184   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3692 | >20%                    |                 5 |              0.07384 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3746 | 15-20%                  |                 2 |              0.1873  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3856 | >20%                    |                 5 |              0.07712 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3869 | >20%                    |                 5 |              0.07738 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3908 | >20%                    |                 2 |              0.1954  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3909 | <5%                     |                 2 |              0.19545 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3941 | 5-10%                   |                10 |              0.03941 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3997 | >20%                    |                 2 |              0.19985 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4006 | >20%                    |                 5 |              0.08012 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.404  | >20%                    |                 5 |              0.0808  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4106 | >20%                    |                10 |              0.04106 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4107 | >20%                    |                 5 |              0.08214 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4124 | >20%                    |                10 |              0.04124 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4371 | >20%                    |                10 |              0.04371 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4378 | >20%                    |                 2 |              0.2189  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4378 | >20%                    |                 5 |              0.08756 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4399 | >20%                    |                 2 |              0.21995 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4485 | >20%                    |                 2 |              0.22425 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4515 | >20%                    |                 2 |              0.22575 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4656 | >20%                    |                 5 |              0.09312 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4725 | 10-15%                  |                 2 |              0.23625 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4871 | >20%                    |                 2 |              0.24355 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4899 | >20%                    |                 2 |              0.24495 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4911 | >20%                    |                 5 |              0.09822 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4929 | >20%                    |                 2 |              0.24645 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4957 |                         |                 2 |              0.24785 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.517  | >20%                    |                 5 |              0.1034  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5201 | >20%                    |                 5 |              0.10402 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.5405 |                         |                10 |              0.05405 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5436 | 5-10%                   |                10 |              0.05436 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5442 | <5%                     |                 2 |              0.2721  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5489 | >20%                    |                 2 |              0.27445 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.556  | 15-20%                  |                 2 |              0.278   |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5577 | >20%                    |                 5 |              0.11154 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5687 | >20%                    |                 5 |              0.11374 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5721 | >20%                    |                 5 |              0.11442 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5724 | >20%                    |                 5 |              0.11448 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5726 | >20%                    |                 5 |              0.11452 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5729 | 10-15%                  |                 5 |              0.11458 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.592  | >20%                    |                 2 |              0.296   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6017 | >20%                    |                 5 |              0.12034 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6112 | >20%                    |                10 |              0.06112 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6121 | 10-15%                  |                 2 |              0.30605 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6206 | >20%                    |                 5 |              0.12412 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6399 | >20%                    |                 2 |              0.31995 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6442 | >20%                    |                 5 |              0.12884 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6641 | >20%                    |                 5 |              0.13282 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6665 | 15-20%                  |                 2 |              0.33325 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6697 | >20%                    |                 5 |              0.13394 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6736 | >20%                    |                10 |              0.06736 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6744 | 5-10%                   |                 2 |              0.3372  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6754 | >20%                    |                10 |              0.06754 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6803 | <5%                     |                 2 |              0.34015 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6861 | >20%                    |                 5 |              0.13722 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6917 | >20%                    |                10 |              0.06917 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6939 | >20%                    |                 5 |              0.13878 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7117 | >20%                    |                 2 |              0.35585 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7153 | >20%                    |                 5 |              0.14306 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7215 | 15-20%                  |                10 |              0.07215 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7273 | >20%                    |                10 |              0.07273 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7345 | 15-20%                  |                 5 |              0.1469  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.744  | >20%                    |                 5 |              0.1488  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7526 | >20%                    |                 5 |              0.15052 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7748 | 5-10%                   |                 5 |              0.15496 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7769 | >20%                    |                 5 |              0.15538 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7836 | 15-20%                  |                10 |              0.07836 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.7872 |                         |                 5 |              0.15744 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7897 | >20%                    |                10 |              0.07897 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7969 | 5-10%                   |                10 |              0.07969 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8005 | >20%                    |                 5 |              0.1601  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8091 | 15-20%                  |                10 |              0.08091 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8112 | 15-20%                  |                10 |              0.08112 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8129 | >20%                    |                 5 |              0.16258 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8179 | >20%                    |                10 |              0.08179 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8245 | >20%                    |                10 |              0.08245 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8337 | 15-20%                  |                 5 |              0.16674 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8345 | 10-15%                  |                10 |              0.08345 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8421 | >20%                    |                10 |              0.08421 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8465 | >20%                    |                 2 |              0.42325 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8592 | 10-15%                  |                 2 |              0.4296  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.869  | >20%                    |                10 |              0.0869  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8801 | >20%                    |                10 |              0.08801 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8805 | >20%                    |                10 |              0.08805 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8881 | >20%                    |                 5 |              0.17762 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8902 | >20%                    |                10 |              0.08902 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.91   | <5%                     |                 5 |              0.182   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9114 | >20%                    |                 5 |              0.18228 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.926  | >20%                    |                 2 |              0.463   |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9279 | >20%                    |                 5 |              0.18558 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.935  | 10-15%                  |                 2 |              0.4675  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9458 | >20%                    |                 2 |              0.4729  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9693 | >20%                    |                10 |              0.09693 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9711 | >20%                    |                10 |              0.09711 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.991  | >20%                    |                10 |              0.0991  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9993 | 15-20%                  |                10 |              0.09993 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0189 | >20%                    |                10 |              0.10189 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0248 | >20%                    |                10 |              0.10248 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0509 | 15-20%                  |                10 |              0.10509 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0802 | >20%                    |                10 |              0.10802 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1182 | 5-10%                   |                10 |              0.11182 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1321 | >20%                    |                 5 |              0.22642 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.1755 |                         |                 2 |              0.58775 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1817 | 10-15%                  |                 2 |              0.59085 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1858 | >20%                    |                10 |              0.11858 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2064 | >20%                    |                10 |              0.12064 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2082 | >20%                    |                10 |              0.12082 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2327 | 5-10%                   |                 2 |              0.61635 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2951 | 15-20%                  |                10 |              0.12951 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3298 | 10-15%                  |                10 |              0.13298 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3457 | >20%                    |                 2 |              0.67285 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3592 | 15-20%                  |                10 |              0.13592 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3707 | >20%                    |                10 |              0.13707 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3796 | >20%                    |                 2 |              0.6898  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4537 | >20%                    |                10 |              0.14537 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5359 | 5-10%                   |                 5 |              0.30718 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.5613 |                         |                10 |              0.15613 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5637 | >20%                    |                 5 |              0.31274 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5681 | >20%                    |                 2 |              0.78405 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.6052 |                         |                 2 |              0.8026  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6157 | >20%                    |                10 |              0.16157 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.6824 |                         |                 5 |              0.33648 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6921 | >20%                    |                10 |              0.16921 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7341 | >20%                    |                 5 |              0.34682 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.7774 | 5-10%                   |                 2 |              0.8887  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8498 | >20%                    |                10 |              0.18498 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.8684 | >20%                    |                 5 |              0.37368 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.9521 |                         |                 5 |              0.39042 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0756 | 15-20%                  |                 5 |              0.41512 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2087 | 5-10%                   |                 2 |              1.10435 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2249 | 5-10%                   |                10 |              0.22249 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.5241 |                         |                10 |              0.25241 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5789 | >20%                    |                10 |              0.25789 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1133 | >20%                    |                10 |              0.31133 |