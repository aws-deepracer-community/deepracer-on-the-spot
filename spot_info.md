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

Data correct as of 2026-06-29 04:20:40.422911, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1358 | >20%                    |                 2 |              0.0679  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2039 | 15-20%                  |                 2 |              0.10195 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2105 | >20%                    |                 2 |              0.10525 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2352 | >20%                    |                 2 |              0.1176  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2409 | 15-20%                  |                 5 |              0.04818 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2497 | >20%                    |                 2 |              0.12485 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2507 | >20%                    |                 2 |              0.12535 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2577 | >20%                    |                 2 |              0.12885 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2583 | 10-15%                  |                 2 |              0.12915 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2607 | >20%                    |                 2 |              0.13035 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2624 | >20%                    |                 2 |              0.1312  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2703 | 15-20%                  |                 2 |              0.13515 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2713 | >20%                    |                 2 |              0.13565 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.275  | 15-20%                  |                 2 |              0.1375  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2782 | >20%                    |                 2 |              0.1391  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2832 | 5-10%                   |                10 |              0.02832 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2838 | 15-20%                  |                 5 |              0.05676 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.319  | >20%                    |                 5 |              0.0638  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3265 | >20%                    |                 2 |              0.16325 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3298 | >20%                    |                 5 |              0.06596 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3312 | >20%                    |                 2 |              0.1656  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3484 | >20%                    |                 5 |              0.06968 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3484 | >20%                    |                 5 |              0.06968 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3512 | >20%                    |                 5 |              0.07024 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3516 | <5%                     |                 2 |              0.1758  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3614 | 10-15%                  |                 2 |              0.1807  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3629 | >20%                    |                10 |              0.03629 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.369  | >20%                    |                 5 |              0.0738  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.371  | >20%                    |                10 |              0.0371  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3783 | >20%                    |                 5 |              0.07566 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3807 | 5-10%                   |                10 |              0.03807 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3812 | 5-10%                   |                10 |              0.03812 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3834 | >20%                    |                 5 |              0.07668 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.386  | 10-15%                  |                 2 |              0.193   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3879 | >20%                    |                 2 |              0.19395 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.388  | >20%                    |                 2 |              0.194   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4127 | >20%                    |                 5 |              0.08254 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4206 | >20%                    |                 2 |              0.2103  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4215 | >20%                    |                 5 |              0.0843  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4259 | >20%                    |                 2 |              0.21295 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4316 | >20%                    |                10 |              0.04316 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4345 | >20%                    |                 5 |              0.0869  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4394 | 10-15%                  |                 2 |              0.2197  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4418 | <5%                     |                 2 |              0.2209  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4418 | >20%                    |                 2 |              0.2209  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4431 | <5%                     |                 2 |              0.22155 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.449  | 15-20%                  |                 2 |              0.2245  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4543 | >20%                    |                 5 |              0.09086 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4571 | >20%                    |                 2 |              0.22855 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4574 | >20%                    |                 5 |              0.09148 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4608 | 10-15%                  |                10 |              0.04608 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4764 | >20%                    |                 2 |              0.2382  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.481  | >20%                    |                 5 |              0.0962  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4957 | 15-20%                  |                 2 |              0.24785 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4958 | >20%                    |                 5 |              0.09916 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4988 | 15-20%                  |                 5 |              0.09976 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5015 | >20%                    |                 2 |              0.25075 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5162 | >20%                    |                10 |              0.05162 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5167 | >20%                    |                 5 |              0.10334 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5336 | >20%                    |                 5 |              0.10672 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5337 | 5-10%                   |                 2 |              0.26685 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5359 | 15-20%                  |                 5 |              0.10718 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5375 | 5-10%                   |                 5 |              0.1075  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5377 | >20%                    |                 5 |              0.10754 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5427 | >20%                    |                 2 |              0.27135 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5484 | >20%                    |                 5 |              0.10968 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5511 | 10-15%                  |                 5 |              0.11022 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5603 | >20%                    |                10 |              0.05603 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5842 |                         |                 2 |              0.2921  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.5877 | >20%                    |                 5 |              0.11754 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5947 | 15-20%                  |                 2 |              0.29735 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5957 | >20%                    |                 5 |              0.11914 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6025 | >20%                    |                10 |              0.06025 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6049 | >20%                    |                10 |              0.06049 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6072 | >20%                    |                 2 |              0.3036  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6073 | >20%                    |                 2 |              0.30365 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6178 | <5%                     |                 5 |              0.12356 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.619  | >20%                    |                10 |              0.0619  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6193 | >20%                    |                10 |              0.06193 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6216 | >20%                    |                 5 |              0.12432 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6229 | >20%                    |                 5 |              0.12458 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6279 | 5-10%                   |                 2 |              0.31395 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6281 | >20%                    |                 5 |              0.12562 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6468 | >20%                    |                 5 |              0.12936 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6526 | >20%                    |                10 |              0.06526 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.653  | >20%                    |                10 |              0.0653  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6631 | 5-10%                   |                 5 |              0.13262 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6669 | >20%                    |                 2 |              0.33345 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.6674 |                         |                 2 |              0.3337  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6766 | >20%                    |                 2 |              0.3383  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.6839 |                         |                10 |              0.06839 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6984 | >20%                    |                 5 |              0.13968 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6998 | >20%                    |                 2 |              0.3499  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7003 | >20%                    |                 5 |              0.14006 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7107 | 10-15%                  |                 2 |              0.35535 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7113 | 15-20%                  |                10 |              0.07113 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7135 | >20%                    |                10 |              0.07135 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7234 | >20%                    |                 2 |              0.3617  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7253 | 15-20%                  |                10 |              0.07253 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7275 | >20%                    |                10 |              0.07275 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7452 | >20%                    |                10 |              0.07452 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7463 | 5-10%                   |                10 |              0.07463 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7573 | >20%                    |                 5 |              0.15146 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.761  | >20%                    |                 5 |              0.1522  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7634 | >20%                    |                10 |              0.07634 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7648 | >20%                    |                10 |              0.07648 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7914 | <5%                     |                10 |              0.07914 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7926 | >20%                    |                 5 |              0.15852 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.815  | >20%                    |                 2 |              0.4075  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8238 | >20%                    |                10 |              0.08238 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8257 | >20%                    |                 5 |              0.16514 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8287 | >20%                    |                10 |              0.08287 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8389 | >20%                    |                10 |              0.08389 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8528 | 15-20%                  |                10 |              0.08528 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8538 | 10-15%                  |                 2 |              0.4269  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8614 | 5-10%                   |                10 |              0.08614 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8653 | 15-20%                  |                10 |              0.08653 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.867  | >20%                    |                10 |              0.0867  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.873  | >20%                    |                10 |              0.0873  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8861 | >20%                    |                10 |              0.08861 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.896  | >20%                    |                 5 |              0.1792  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9018 | 10-15%                  |                 2 |              0.4509  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9053 | 15-20%                  |                10 |              0.09053 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.934  | >20%                    |                10 |              0.0934  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9355 | >20%                    |                 5 |              0.1871  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9417 | >20%                    |                 5 |              0.18834 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9434 | >20%                    |                 5 |              0.18868 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9444 |                         |                 5 |              0.18888 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9549 | >20%                    |                10 |              0.09549 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9581 | >20%                    |                10 |              0.09581 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9697 | >20%                    |                10 |              0.09697 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9849 | >20%                    |                 5 |              0.19698 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.991  | 5-10%                   |                10 |              0.0991  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0005 | >20%                    |                10 |              0.10005 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0007 | 5-10%                   |                 2 |              0.50035 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0512 | 15-20%                  |                10 |              0.10512 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0549 | >20%                    |                 2 |              0.52745 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0758 | >20%                    |                 5 |              0.21516 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0827 | >20%                    |                 5 |              0.21654 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1023 | >20%                    |                10 |              0.11023 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1096 | >20%                    |                 5 |              0.22192 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1387 | >20%                    |                10 |              0.11387 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1924 |                         |                10 |              0.11924 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2093 |                         |                 5 |              0.24186 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.262  | >20%                    |                 5 |              0.2524  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2952 | 15-20%                  |                10 |              0.12952 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4248 | 15-20%                  |                 5 |              0.28496 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4371 | 15-20%                  |                10 |              0.14371 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4391 | >20%                    |                10 |              0.14391 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5495 | >20%                    |                 5 |              0.3099  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5583 | 10-15%                  |                10 |              0.15583 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.7263 | 5-10%                   |                 2 |              0.86315 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.2033 | >20%                    |                10 |              0.22033 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4809 | >20%                    |                10 |              0.24809 |