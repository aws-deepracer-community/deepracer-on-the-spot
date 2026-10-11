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

Data correct as of 2026-10-11 04:57:53.305018, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1227 | >20%                    |                 2 |              0.06135 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.15   | >20%                    |                 2 |              0.075   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1832 | 15-20%                  |                 5 |              0.03664 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1885 | 15-20%                  |                 2 |              0.09425 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1891 | >20%                    |                 2 |              0.09455 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2351 | >20%                    |                 2 |              0.11755 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2538 | >20%                    |                 5 |              0.05076 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2575 | 10-15%                  |                 2 |              0.12875 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2681 | >20%                    |                 2 |              0.13405 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2693 | 5-10%                   |                10 |              0.02693 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2718 | >20%                    |                 2 |              0.1359  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.274  | >20%                    |                 2 |              0.137   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2813 | >20%                    |                 2 |              0.14065 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2983 | >20%                    |                 2 |              0.14915 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2987 | 15-20%                  |                 2 |              0.14935 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.314  | >20%                    |                 5 |              0.0628  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3175 | <5%                     |                10 |              0.03175 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3307 | >20%                    |                 2 |              0.16535 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3536 | >20%                    |                 5 |              0.07072 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3547 | 10-15%                  |                 2 |              0.17735 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.366  | 15-20%                  |                 2 |              0.183   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.368  | >20%                    |                 2 |              0.184   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3696 | >20%                    |                 5 |              0.07392 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3743 | 15-20%                  |                 2 |              0.18715 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3846 | 5-10%                   |                10 |              0.03846 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3872 | >20%                    |                 2 |              0.1936  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3876 | >20%                    |                 5 |              0.07752 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3901 | <5%                     |                 2 |              0.19505 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3967 | >20%                    |                 2 |              0.19835 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4002 | >20%                    |                 5 |              0.08004 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4004 | >20%                    |                 5 |              0.08008 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4025 | >20%                    |                10 |              0.04025 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4047 | >20%                    |                 5 |              0.08094 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4133 | >20%                    |                10 |              0.04133 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4209 | >20%                    |                 2 |              0.21045 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4254 | >20%                    |                 5 |              0.08508 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4367 | >20%                    |                10 |              0.04367 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4394 | >20%                    |                 2 |              0.2197  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4403 | >20%                    |                 5 |              0.08806 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4506 | >20%                    |                 2 |              0.2253  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4586 | >20%                    |                 2 |              0.2293  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4615 | >20%                    |                 2 |              0.23075 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4656 | >20%                    |                 5 |              0.09312 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4714 | 10-15%                  |                 2 |              0.2357  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4905 | >20%                    |                 2 |              0.24525 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4913 | >20%                    |                 2 |              0.24565 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4931 |                         |                 2 |              0.24655 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5077 | >20%                    |                 5 |              0.10154 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.517  | >20%                    |                 5 |              0.1034  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5337 | >20%                    |                 5 |              0.10674 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5346 | >20%                    |                 5 |              0.10692 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5385 | <5%                     |                 2 |              0.26925 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5491 | >20%                    |                 2 |              0.27455 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.5497 |                         |                10 |              0.05497 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.556  | 15-20%                  |                 2 |              0.278   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5636 | >20%                    |                 5 |              0.11272 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5718 | 10-15%                  |                 5 |              0.11436 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5726 | >20%                    |                 5 |              0.11452 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5753 | >20%                    |                 5 |              0.11506 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5799 | 5-10%                   |                10 |              0.05799 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5964 | >20%                    |                 5 |              0.11928 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6121 | >20%                    |                10 |              0.06121 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6126 | >20%                    |                 2 |              0.3063  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6142 | 10-15%                  |                 2 |              0.3071  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6198 | >20%                    |                 5 |              0.12396 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6364 | >20%                    |                 5 |              0.12728 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6421 | >20%                    |                 5 |              0.12842 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6453 | >20%                    |                 2 |              0.32265 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6466 | >20%                    |                10 |              0.06466 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6648 | >20%                    |                 5 |              0.13296 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6681 | 15-20%                  |                 2 |              0.33405 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6697 | >20%                    |                 5 |              0.13394 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6747 | 5-10%                   |                 2 |              0.33735 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6779 | >20%                    |                 5 |              0.13558 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6794 | <5%                     |                 2 |              0.3397  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6857 | >20%                    |                 5 |              0.13714 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6917 | >20%                    |                10 |              0.06917 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7008 | >20%                    |                 5 |              0.14016 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7161 | 15-20%                  |                10 |              0.07161 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.721  | >20%                    |                 2 |              0.3605  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.722  | >20%                    |                10 |              0.0722  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7309 | >20%                    |                10 |              0.07309 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7344 | 15-20%                  |                 5 |              0.14688 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7426 | >20%                    |                 5 |              0.14852 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7539 | >20%                    |                 5 |              0.15078 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7544 | 15-20%                  |                10 |              0.07544 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7637 | 5-10%                   |                 5 |              0.15274 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7651 | >20%                    |                10 |              0.07651 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.7764 |                         |                 5 |              0.15528 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7782 | >20%                    |                 5 |              0.15564 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7957 | 15-20%                  |                10 |              0.07957 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7969 | 5-10%                   |                10 |              0.07969 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8124 | 15-20%                  |                10 |              0.08124 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8349 | >20%                    |                10 |              0.08349 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8362 | >20%                    |                 5 |              0.16724 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.837  | >20%                    |                10 |              0.0837  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8387 | >20%                    |                 5 |              0.16774 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8393 | 15-20%                  |                 5 |              0.16786 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8431 | >20%                    |                10 |              0.08431 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.846  | >20%                    |                 2 |              0.423   |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8619 | 10-15%                  |                10 |              0.08619 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8624 | 10-15%                  |                 2 |              0.4312  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8652 | >20%                    |                10 |              0.08652 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.8746 | >20%                    |                 2 |              0.4373  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8821 | >20%                    |                10 |              0.08821 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.883  | >20%                    |                10 |              0.0883  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8939 | >20%                    |                 5 |              0.17878 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.905  | <5%                     |                 5 |              0.181   |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9064 | >20%                    |                10 |              0.09064 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9112 | >20%                    |                 5 |              0.18224 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9435 | >20%                    |                 5 |              0.1887  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9632 | 10-15%                  |                 2 |              0.4816  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9655 | >20%                    |                 2 |              0.48275 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9711 | >20%                    |                10 |              0.09711 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9746 | >20%                    |                10 |              0.09746 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9944 | 15-20%                  |                10 |              0.09944 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0095 | >20%                    |                10 |              0.10095 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0197 | >20%                    |                10 |              0.10197 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.031  | >20%                    |                10 |              0.1031  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0509 | 15-20%                  |                10 |              0.10509 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0704 | >20%                    |                10 |              0.10704 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1183 | 5-10%                   |                10 |              0.11183 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1421 | >20%                    |                 5 |              0.22842 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1473 | >20%                    |                10 |              0.11473 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.1773 |                         |                 2 |              0.58865 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1873 | >20%                    |                10 |              0.11873 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2063 | >20%                    |                10 |              0.12063 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2075 | 10-15%                  |                 2 |              0.60375 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2357 | 5-10%                   |                 2 |              0.61785 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3117 | 15-20%                  |                10 |              0.13117 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3457 | >20%                    |                 2 |              0.67285 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3589 | 15-20%                  |                10 |              0.13589 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3601 | 10-15%                  |                10 |              0.13601 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3605 | >20%                    |                 2 |              0.68025 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3632 | >20%                    |                10 |              0.13632 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4577 | >20%                    |                10 |              0.14577 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5335 | 5-10%                   |                 5 |              0.3067  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5599 | >20%                    |                 2 |              0.77995 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.5601 |                         |                10 |              0.15601 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5672 | >20%                    |                 5 |              0.31344 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6155 | >20%                    |                10 |              0.16155 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.6724 |                         |                 2 |              0.8362  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.6824 |                         |                 5 |              0.33648 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6947 | >20%                    |                10 |              0.16947 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.7073 | 5-10%                   |                 2 |              0.85365 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7279 | >20%                    |                 5 |              0.34558 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8872 | >20%                    |                10 |              0.18872 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.9524 |                         |                 5 |              0.39048 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.9642 | >20%                    |                 5 |              0.39284 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0709 | 15-20%                  |                 5 |              0.41418 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2077 | 5-10%                   |                 2 |              1.10385 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2309 | 5-10%                   |                10 |              0.22309 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.4648 |                         |                10 |              0.24648 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.572  | >20%                    |                10 |              0.2572  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.118  | >20%                    |                10 |              0.3118  |