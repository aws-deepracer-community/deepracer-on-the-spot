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

Data correct as of 2024-10-30 01:38:34.076440, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1567 | 10-15%                  |                 2 |              0.07835 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 10-15%                  |                 2 |              0.0831  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1885 | >20%                    |                 2 |              0.09425 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1932 | 15-20%                  |                 2 |              0.0966  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.198  | 5-10%                   |                 2 |              0.099   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2004 | <5%                     |                 2 |              0.1002  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2008 | 5-10%                   |                 2 |              0.1004  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2039 | 10-15%                  |                 2 |              0.10195 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2148 | <5%                     |                 2 |              0.1074  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2202 | <5%                     |                 2 |              0.1101  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2203 | 15-20%                  |                 2 |              0.11015 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2264 | 5-10%                   |                 2 |              0.1132  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2317 | >20%                    |                 2 |              0.11585 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2407 | 5-10%                   |                 5 |              0.04814 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.248  | 5-10%                   |                 5 |              0.0496  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2515 | <5%                     |                 2 |              0.12575 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2579 | 10-15%                  |                 2 |              0.12895 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.27   | <5%                     |                 2 |              0.135   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2722 | 10-15%                  |                 2 |              0.1361  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2742 | 15-20%                  |                 5 |              0.05484 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2767 | <5%                     |                 2 |              0.13835 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2793 | >20%                    |                 5 |              0.05586 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2795 | >20%                    |                 2 |              0.13975 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2821 | 15-20%                  |                 2 |              0.14105 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2921 | <5%                     |                 5 |              0.05842 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2922 | <5%                     |                 5 |              0.05844 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2922 | 10-15%                  |                 5 |              0.05844 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2945 | <5%                     |                 2 |              0.14725 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2994 | 5-10%                   |                 5 |              0.05988 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3003 | 15-20%                  |                 5 |              0.06006 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3063 | 15-20%                  |                 5 |              0.06126 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3209 | 15-20%                  |                 2 |              0.16045 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3352 | <5%                     |                 2 |              0.1676  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3363 | >20%                    |                 5 |              0.06726 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3391 | 10-15%                  |                 5 |              0.06782 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3522 | <5%                     |                 2 |              0.1761  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3635 | 15-20%                  |                10 |              0.03635 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3665 | >20%                    |                 2 |              0.18325 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3786 | 5-10%                   |                 2 |              0.1893  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3804 | >20%                    |                 2 |              0.1902  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3808 | <5%                     |                 5 |              0.07616 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3831 | 10-15%                  |                10 |              0.03831 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3879 | >20%                    |                 2 |              0.19395 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.389  | <5%                     |                 5 |              0.0778  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3939 | 5-10%                   |                 5 |              0.07878 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3977 | 5-10%                   |                 2 |              0.19885 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4014 | 5-10%                   |                 2 |              0.2007  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4065 | 15-20%                  |                 2 |              0.20325 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4091 | <5%                     |                 5 |              0.08182 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4117 | >20%                    |                 5 |              0.08234 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4186 | >20%                    |                 2 |              0.2093  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4205 | 5-10%                   |                10 |              0.04205 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4296 | <5%                     |                10 |              0.04296 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.431  | 15-20%                  |                 2 |              0.2155  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4381 | 15-20%                  |                 5 |              0.08762 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4409 | 5-10%                   |                 5 |              0.08818 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4473 | <5%                     |                10 |              0.04473 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4555 | 15-20%                  |                 5 |              0.0911  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4666 | 15-20%                  |                 2 |              0.2333  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4711 | 10-15%                  |                 5 |              0.09422 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4777 | 10-15%                  |                10 |              0.04777 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.478  | <5%                     |                 2 |              0.239   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4792 | 5-10%                   |                 5 |              0.09584 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4795 | 5-10%                   |                 5 |              0.0959  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.482  | <5%                     |                 5 |              0.0964  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4845 | 5-10%                   |                 2 |              0.24225 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4871 | 10-15%                  |                 2 |              0.24355 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.492  | 15-20%                  |                 2 |              0.246   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4933 | >20%                    |                 5 |              0.09866 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4938 | >20%                    |                 2 |              0.2469  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5017 | <5%                     |                10 |              0.05017 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.5088 | <5%                     |                10 |              0.05088 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5107 | >20%                    |                 5 |              0.10214 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5155 | <5%                     |                 5 |              0.1031  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5205 | <5%                     |                 5 |              0.1041  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.5291 | 5-10%                   |                10 |              0.05291 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5311 | 15-20%                  |                 2 |              0.26555 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5322 | 5-10%                   |                 5 |              0.10644 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5327 | 5-10%                   |                 5 |              0.10654 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.541  | 10-15%                  |                 5 |              0.1082  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5438 | >20%                    |                 5 |              0.10876 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5464 | 15-20%                  |                 2 |              0.2732  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5523 | 10-15%                  |                 5 |              0.11046 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5632 | 5-10%                   |                 5 |              0.11264 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5644 | 10-15%                  |                10 |              0.05644 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5671 | >20%                    |                 2 |              0.28355 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5682 | <5%                     |                10 |              0.05682 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5685 | 5-10%                   |                 5 |              0.1137  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.572  | 15-20%                  |                 5 |              0.1144  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5736 | >20%                    |                 5 |              0.11472 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5818 | 5-10%                   |                 5 |              0.11636 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5989 | >20%                    |                 2 |              0.29945 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.621  | <5%                     |                10 |              0.0621  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6276 | >20%                    |                10 |              0.06276 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6344 | >20%                    |                10 |              0.06344 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6353 | >20%                    |                 5 |              0.12706 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6429 | >20%                    |                10 |              0.06429 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6482 | 5-10%                   |                10 |              0.06482 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6532 | 5-10%                   |                10 |              0.06532 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6585 | 5-10%                   |                10 |              0.06585 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6626 | 15-20%                  |                 5 |              0.13252 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6642 | 10-15%                  |                 5 |              0.13284 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6649 | >20%                    |                 2 |              0.33245 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6872 | 5-10%                   |                10 |              0.06872 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7059 | 10-15%                  |                10 |              0.07059 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7343 | >20%                    |                10 |              0.07343 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7455 | >20%                    |                 5 |              0.1491  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.747  | >20%                    |                10 |              0.0747  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7546 | 15-20%                  |                10 |              0.07546 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7781 | 5-10%                   |                 5 |              0.15562 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7787 | <5%                     |                10 |              0.07787 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8048 | >20%                    |                10 |              0.08048 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8115 | 10-15%                  |                10 |              0.08115 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8456 | >20%                    |                10 |              0.08456 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8498 | 5-10%                   |                10 |              0.08498 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8533 | 10-15%                  |                 2 |              0.42665 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8541 | >20%                    |                10 |              0.08541 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8591 | <5%                     |                 2 |              0.42955 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8614 | >20%                    |                10 |              0.08614 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8895 | <5%                     |                10 |              0.08895 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9013 | 10-15%                  |                 5 |              0.18026 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9099 | >20%                    |                 5 |              0.18198 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9248 | 15-20%                  |                10 |              0.09248 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9969 | 10-15%                  |                10 |              0.09969 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9993 | 5-10%                   |                10 |              0.09993 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0132 | 10-15%                  |                 5 |              0.20264 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0193 | 10-15%                  |                10 |              0.10193 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0206 | 15-20%                  |                10 |              0.10206 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0237 | >20%                    |                10 |              0.10237 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0268 | >20%                    |                10 |              0.10268 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1204 | <5%                     |                10 |              0.11204 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1279 | >20%                    |                10 |              0.11279 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.183  | >20%                    |                10 |              0.1183  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4165 | >20%                    |                10 |              0.14165 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4965 | 5-10%                   |                10 |              0.14965 |