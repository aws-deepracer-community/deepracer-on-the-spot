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

Data correct as of 2026-06-24 03:58:13.767122, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1593 | >20%                    |                 2 |              0.07965 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1867 | 15-20%                  |                 2 |              0.09335 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2034 | >20%                    |                 2 |              0.1017  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2091 | >20%                    |                 2 |              0.10455 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2216 | >20%                    |                 2 |              0.1108  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2267 | 15-20%                  |                 5 |              0.04534 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2471 | >20%                    |                 2 |              0.12355 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2478 | 10-15%                  |                 2 |              0.1239  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2527 | >20%                    |                 2 |              0.12635 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2637 | >20%                    |                 2 |              0.13185 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.265  | >20%                    |                 2 |              0.1325  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2653 | >20%                    |                 2 |              0.13265 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2683 | 15-20%                  |                 2 |              0.13415 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2715 | >20%                    |                 2 |              0.13575 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2804 | 15-20%                  |                 2 |              0.1402  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2849 | >20%                    |                 5 |              0.05698 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3014 | 15-20%                  |                 5 |              0.06028 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3045 | >20%                    |                 5 |              0.0609  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3162 | >20%                    |                 5 |              0.06324 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3174 | >20%                    |                 2 |              0.1587  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3271 | >20%                    |                 5 |              0.06542 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3275 | >20%                    |                 2 |              0.16375 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3368 | 10-15%                  |                 2 |              0.1684  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.337  | 5-10%                   |                10 |              0.0337  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3501 | <5%                     |                 2 |              0.17505 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3551 | >20%                    |                10 |              0.03551 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.356  | 10-15%                  |                 2 |              0.178   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3617 | 5-10%                   |                10 |              0.03617 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3633 | >20%                    |                 5 |              0.07266 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.367  | >20%                    |                 5 |              0.0734  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3682 | >20%                    |                10 |              0.03682 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3684 | 5-10%                   |                10 |              0.03684 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3788 | 15-20%                  |                 5 |              0.07576 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3864 | >20%                    |                 2 |              0.1932  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3893 | >20%                    |                 2 |              0.19465 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4076 | >20%                    |                 5 |              0.08152 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4084 | >20%                    |                 2 |              0.2042  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4091 | >20%                    |                 5 |              0.08182 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.413  | >20%                    |                 5 |              0.0826  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4213 | >20%                    |                 5 |              0.08426 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4225 | >20%                    |                10 |              0.04225 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4304 | >20%                    |                 2 |              0.2152  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4395 | <5%                     |                 2 |              0.21975 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4421 | >20%                    |                10 |              0.04421 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4424 | >20%                    |                 5 |              0.08848 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4429 | >20%                    |                 5 |              0.08858 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.444  | >20%                    |                 2 |              0.222   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4441 | 10-15%                  |                 2 |              0.22205 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4485 | 10-15%                  |                10 |              0.04485 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4537 | >20%                    |                 5 |              0.09074 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4548 | <5%                     |                 2 |              0.2274  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4708 | 15-20%                  |                 2 |              0.2354  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4736 | >20%                    |                 5 |              0.09472 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4814 | >20%                    |                 2 |              0.2407  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4846 | >20%                    |                10 |              0.04846 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4849 | >20%                    |                 2 |              0.24245 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4912 | 15-20%                  |                 5 |              0.09824 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4932 | >20%                    |                 5 |              0.09864 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4951 | 15-20%                  |                 2 |              0.24755 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5294 | >20%                    |                 5 |              0.10588 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5323 | >20%                    |                 2 |              0.26615 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5357 | 5-10%                   |                 5 |              0.10714 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5381 | 5-10%                   |                 2 |              0.26905 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5404 | >20%                    |                 5 |              0.10808 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5461 | 15-20%                  |                 2 |              0.27305 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5491 | 10-15%                  |                 5 |              0.10982 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.5521 | >20%                    |                 5 |              0.11042 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5543 | >20%                    |                 5 |              0.11086 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5587 | >20%                    |                10 |              0.05587 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5614 | 5-10%                   |                 2 |              0.2807  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5648 | >20%                    |                 5 |              0.11296 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5859 | >20%                    |                 2 |              0.29295 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5917 | >20%                    |                10 |              0.05917 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5934 | >20%                    |                 2 |              0.2967  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5965 | >20%                    |                 2 |              0.29825 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.603  | >20%                    |                 5 |              0.1206  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6051 | >20%                    |                 5 |              0.12102 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6127 | 10-15%                  |                 2 |              0.30635 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6178 | >20%                    |                 5 |              0.12356 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6275 | >20%                    |                10 |              0.06275 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6318 | >20%                    |                10 |              0.06318 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.637  | >20%                    |                10 |              0.0637  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6445 | >20%                    |                 5 |              0.1289  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6525 | <5%                     |                 5 |              0.1305  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6613 | >20%                    |                 2 |              0.33065 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.665  |                         |                 2 |              0.3325  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6757 | >20%                    |                 2 |              0.33785 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6807 | >20%                    |                10 |              0.06807 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6911 | >20%                    |                 5 |              0.13822 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6993 | >20%                    |                 5 |              0.13986 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6995 | >20%                    |                 2 |              0.34975 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6996 | >20%                    |                 2 |              0.3498  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7003 | 15-20%                  |                10 |              0.07003 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7006 | 15-20%                  |                10 |              0.07006 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7142 | >20%                    |                10 |              0.07142 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7148 | >20%                    |                 5 |              0.14296 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7182 | >20%                    |                 5 |              0.14364 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.7194 |                         |                 2 |              0.3597  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7199 | 5-10%                   |                 5 |              0.14398 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7324 | 5-10%                   |                10 |              0.07324 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7372 | >20%                    |                 2 |              0.3686  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7419 | >20%                    |                 5 |              0.14838 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7568 | >20%                    |                 5 |              0.15136 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7609 | <5%                     |                10 |              0.07609 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.763  | >20%                    |                10 |              0.0763  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7859 | >20%                    |                 5 |              0.15718 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8063 | >20%                    |                10 |              0.08063 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8451 | 15-20%                  |                10 |              0.08451 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8469 | >20%                    |                 5 |              0.16938 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.8484 |                         |                10 |              0.08484 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8517 | >20%                    |                 5 |              0.17034 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.8555 | >20%                    |                10 |              0.08555 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8662 | 5-10%                   |                10 |              0.08662 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8725 | >20%                    |                10 |              0.08725 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8737 | 15-20%                  |                10 |              0.08737 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8822 | >20%                    |                10 |              0.08822 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.884  | 10-15%                  |                 2 |              0.442   |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9118 | >20%                    |                10 |              0.09118 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.926  | 5-10%                   |                 2 |              0.463   |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9392 | >20%                    |                10 |              0.09392 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9432 |                         |                 5 |              0.18864 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9528 | 5-10%                   |                10 |              0.09528 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9628 | 15-20%                  |                10 |              0.09628 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9632 | >20%                    |                 5 |              0.19264 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9694 | >20%                    |                10 |              0.09694 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9743 | >20%                    |                10 |              0.09743 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9829 | >20%                    |                 5 |              0.19658 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9881 | >20%                    |                10 |              0.09881 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9904 | >20%                    |                 5 |              0.19808 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0015 | >20%                    |                10 |              0.10015 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0018 | >20%                    |                10 |              0.10018 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0101 | >20%                    |                10 |              0.10101 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0226 | >20%                    |                 2 |              0.5113  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0267 | 10-15%                  |                 2 |              0.51335 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0722 | >20%                    |                10 |              0.10722 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0864 | >20%                    |                 5 |              0.21728 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0946 | >20%                    |                10 |              0.10946 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1071 | 15-20%                  |                10 |              0.11071 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1092 | >20%                    |                 5 |              0.22184 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1286 | >20%                    |                 5 |              0.22572 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1288 |                         |                 5 |              0.22576 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1612 | >20%                    |                10 |              0.11612 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.2098 | >20%                    |                10 |              0.12098 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3291 | >20%                    |                 5 |              0.26582 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3595 | 15-20%                  |                10 |              0.13595 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4047 |                         |                10 |              0.14047 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4599 | >20%                    |                 5 |              0.29198 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4694 | >20%                    |                10 |              0.14694 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4812 | 10-15%                  |                10 |              0.14812 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4851 | 15-20%                  |                 5 |              0.29702 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.5347 | 5-10%                   |                 2 |              0.76735 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6431 | 15-20%                  |                10 |              0.16431 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.2979 | >20%                    |                10 |              0.22979 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4501 | >20%                    |                10 |              0.24501 |