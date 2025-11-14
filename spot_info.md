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

Data correct as of 2025-11-14 01:53:23.212199, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1266 | 15-20%                  |                 2 |              0.0633  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1491 | >20%                    |                 2 |              0.07455 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1677 | 5-10%                   |                 5 |              0.03354 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1859 | <5%                     |                 2 |              0.09295 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2004 | >20%                    |                 2 |              0.1002  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2144 | 10-15%                  |                 2 |              0.1072  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.223  | >20%                    |                 5 |              0.0446  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2252 | <5%                     |                 2 |              0.1126  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2389 | >20%                    |                 2 |              0.11945 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2438 | >20%                    |                 2 |              0.1219  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2453 | >20%                    |                 2 |              0.12265 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2464 | >20%                    |                 5 |              0.04928 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2477 | 10-15%                  |                10 |              0.02477 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2496 | >20%                    |                 2 |              0.1248  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2664 | <5%                     |                 2 |              0.1332  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2723 | 10-15%                  |                 2 |              0.13615 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2746 | >20%                    |                 2 |              0.1373  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2792 | 5-10%                   |                 2 |              0.1396  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2796 | >20%                    |                 2 |              0.1398  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2878 | 15-20%                  |                 2 |              0.1439  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2956 | >20%                    |                 5 |              0.05912 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2966 | 10-15%                  |                 5 |              0.05932 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3148 | >20%                    |                 2 |              0.1574  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3268 | >20%                    |                 5 |              0.06536 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3292 | >20%                    |                 2 |              0.1646  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3342 | >20%                    |                 2 |              0.1671  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3368 | >20%                    |                 2 |              0.1684  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3478 | >20%                    |                 5 |              0.06956 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3507 | 10-15%                  |                 2 |              0.17535 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3515 | 10-15%                  |                 2 |              0.17575 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3553 | 5-10%                   |                 2 |              0.17765 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3555 | 15-20%                  |                 5 |              0.0711  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3621 | >20%                    |                 2 |              0.18105 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3624 | <5%                     |                 2 |              0.1812  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3627 | >20%                    |                 2 |              0.18135 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3636 | >20%                    |                10 |              0.03636 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3689 | 15-20%                  |                 2 |              0.18445 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3694 | <5%                     |                 5 |              0.07388 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3697 | <5%                     |                 2 |              0.18485 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3773 | >20%                    |                 5 |              0.07546 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.38   | >20%                    |                10 |              0.038   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3802 | 15-20%                  |                10 |              0.03802 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3881 | >20%                    |                 2 |              0.19405 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3914 | 15-20%                  |                 2 |              0.1957  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3993 | >20%                    |                 2 |              0.19965 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4064 | >20%                    |                 5 |              0.08128 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4085 | >20%                    |                 2 |              0.20425 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4116 | >20%                    |                10 |              0.04116 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4139 | >20%                    |                 2 |              0.20695 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.415  | 10-15%                  |                 5 |              0.083   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.415  | 5-10%                   |                10 |              0.0415  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4174 | 15-20%                  |                 5 |              0.08348 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4223 | >20%                    |                 5 |              0.08446 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4227 | >20%                    |                 2 |              0.21135 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4301 | >20%                    |                 2 |              0.21505 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4317 | >20%                    |                 5 |              0.08634 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4317 | <5%                     |                 2 |              0.21585 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.432  | 15-20%                  |                 5 |              0.0864  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4332 | 15-20%                  |                 2 |              0.2166  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4364 | >20%                    |                10 |              0.04364 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4377 | 10-15%                  |                 5 |              0.08754 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4402 | <5%                     |                10 |              0.04402 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.442  | >20%                    |                 5 |              0.0884  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.443  | 15-20%                  |                 5 |              0.0886  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4438 | >20%                    |                 5 |              0.08876 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4477 | >20%                    |                 2 |              0.22385 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4489 | 5-10%                   |                 2 |              0.22445 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4492 | >20%                    |                 5 |              0.08984 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4535 | 15-20%                  |                 5 |              0.0907  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4536 | >20%                    |                 5 |              0.09072 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4564 | 10-15%                  |                 2 |              0.2282  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4567 | >20%                    |                 2 |              0.22835 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4617 | >20%                    |                 2 |              0.23085 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4631 | >20%                    |                 2 |              0.23155 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4678 | >20%                    |                 5 |              0.09356 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4725 | >20%                    |                 5 |              0.0945  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4731 | >20%                    |                 2 |              0.23655 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4733 | 5-10%                   |                10 |              0.04733 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4752 | 10-15%                  |                10 |              0.04752 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4758 | >20%                    |                 5 |              0.09516 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4841 | 15-20%                  |                 5 |              0.09682 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.488  | >20%                    |                 2 |              0.244   |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4911 | >20%                    |                 5 |              0.09822 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5005 | 10-15%                  |                 2 |              0.25025 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5013 | >20%                    |                 5 |              0.10026 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5239 | >20%                    |                 5 |              0.10478 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5242 | <5%                     |                10 |              0.05242 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5254 | >20%                    |                10 |              0.05254 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5291 | 10-15%                  |                 2 |              0.26455 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5347 | >20%                    |                 5 |              0.10694 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5409 | >20%                    |                10 |              0.05409 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5543 | 10-15%                  |                 5 |              0.11086 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5573 | 15-20%                  |                 5 |              0.11146 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.559  | >20%                    |                 5 |              0.1118  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5635 | 10-15%                  |                 5 |              0.1127  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5742 | 15-20%                  |                 5 |              0.11484 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5781 | 10-15%                  |                10 |              0.05781 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5931 | 10-15%                  |                 5 |              0.11862 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5958 | >20%                    |                 2 |              0.2979  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6019 | 5-10%                   |                 5 |              0.12038 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6092 | 10-15%                  |                 5 |              0.12184 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6115 | >20%                    |                 2 |              0.30575 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6128 | >20%                    |                 5 |              0.12256 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.613  | >20%                    |                 2 |              0.3065  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6171 | 10-15%                  |                10 |              0.06171 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6191 | >20%                    |                 2 |              0.30955 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6239 | >20%                    |                 2 |              0.31195 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6354 | >20%                    |                 5 |              0.12708 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6408 | 15-20%                  |                10 |              0.06408 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6423 | >20%                    |                 5 |              0.12846 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6441 | >20%                    |                 5 |              0.12882 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6494 | >20%                    |                10 |              0.06494 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6544 | >20%                    |                10 |              0.06544 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.658  | 10-15%                  |                 2 |              0.329   |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.6618 | 10-15%                  |                 5 |              0.13236 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6729 | >20%                    |                 5 |              0.13458 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6766 | 5-10%                   |                 2 |              0.3383  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6793 | >20%                    |                 2 |              0.33965 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6841 | >20%                    |                10 |              0.06841 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6849 | 15-20%                  |                 5 |              0.13698 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6874 | >20%                    |                 5 |              0.13748 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6879 | 10-15%                  |                 5 |              0.13758 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6916 | 15-20%                  |                10 |              0.06916 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.692  | >20%                    |                10 |              0.0692  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6952 | >20%                    |                10 |              0.06952 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6992 | 5-10%                   |                10 |              0.06992 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7068 | >20%                    |                10 |              0.07068 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7215 | >20%                    |                 5 |              0.1443  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7303 | >20%                    |                 5 |              0.14606 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7432 | >20%                    |                10 |              0.07432 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7454 | 15-20%                  |                10 |              0.07454 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7474 | >20%                    |                 5 |              0.14948 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7518 | 15-20%                  |                 5 |              0.15036 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.764  | >20%                    |                 5 |              0.1528  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7771 | >20%                    |                10 |              0.07771 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7802 | >20%                    |                10 |              0.07802 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7811 | >20%                    |                10 |              0.07811 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7944 | <5%                     |                10 |              0.07944 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8005 | 5-10%                   |                10 |              0.08005 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8055 | >20%                    |                10 |              0.08055 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8148 | >20%                    |                 5 |              0.16296 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8188 | <5%                     |                10 |              0.08188 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8221 | 15-20%                  |                10 |              0.08221 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8245 | >20%                    |                 2 |              0.41225 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8353 | 10-15%                  |                10 |              0.08353 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8437 | >20%                    |                10 |              0.08437 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8462 | <5%                     |                 5 |              0.16924 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8567 | <5%                     |                10 |              0.08567 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8672 | >20%                    |                10 |              0.08672 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8674 | >20%                    |                10 |              0.08674 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8823 | 10-15%                  |                10 |              0.08823 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.885  | >20%                    |                 5 |              0.177   |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8865 | 10-15%                  |                10 |              0.08865 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8955 | >20%                    |                10 |              0.08955 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9139 | >20%                    |                 2 |              0.45695 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9341 | >20%                    |                 2 |              0.46705 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9523 | >20%                    |                10 |              0.09523 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.968  | <5%                     |                10 |              0.0968  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9913 | <5%                     |                 5 |              0.19826 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0233 | >20%                    |                10 |              0.10233 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0322 | >20%                    |                10 |              0.10322 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0476 | >20%                    |                10 |              0.10476 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0541 | >20%                    |                10 |              0.10541 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0672 | 10-15%                  |                10 |              0.10672 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0783 | >20%                    |                 5 |              0.21566 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0822 | >20%                    |                 5 |              0.21644 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.087  | 15-20%                  |                10 |              0.1087  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1095 | 15-20%                  |                10 |              0.11095 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1282 | >20%                    |                10 |              0.11282 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1499 | 15-20%                  |                10 |              0.11499 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1616 | >20%                    |                10 |              0.11616 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1938 | >20%                    |                 2 |              0.5969  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.259  | >20%                    |                 5 |              0.2518  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2643 | >20%                    |                10 |              0.12643 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3449 | >20%                    |                10 |              0.13449 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.352  | 10-15%                  |                10 |              0.1352  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4515 | >20%                    |                 2 |              0.72575 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.488  | 5-10%                   |                 5 |              0.2976  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5619 | >20%                    |                10 |              0.15619 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1374 | 15-20%                  |                10 |              0.21374 |