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

Data correct as of 2025-01-02 01:36:50.927715, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1714 | 15-20%                  |                 2 |              0.0857  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1788 |                         |                 2 |              0.0894  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | <5%                     |                 2 |              0.103   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2157 | <5%                     |                 5 |              0.04314 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.219  |                         |                 2 |              0.1095  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2227 | >20%                    |                 2 |              0.11135 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2319 | >20%                    |                 2 |              0.11595 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2359 | 5-10%                   |                 2 |              0.11795 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2426 | 15-20%                  |                 2 |              0.1213  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2435 | 15-20%                  |                 2 |              0.12175 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2452 | 5-10%                   |                 2 |              0.1226  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2459 | 15-20%                  |                 2 |              0.12295 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2562 |                         |                 5 |              0.05124 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2691 |                         |                 5 |              0.05382 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2843 | <5%                     |                 2 |              0.14215 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2852 | >20%                    |                 2 |              0.1426  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2954 | 5-10%                   |                 2 |              0.1477  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3038 | <5%                     |                 2 |              0.1519  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3115 | 5-10%                   |                 2 |              0.15575 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3121 | 5-10%                   |                 2 |              0.15605 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3138 | >20%                    |                10 |              0.03138 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3254 | <5%                     |                 2 |              0.1627  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.329  | 15-20%                  |                 5 |              0.0658  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3396 | <5%                     |                 5 |              0.06792 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3433 | <5%                     |                 2 |              0.17165 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3568 |                         |                10 |              0.03568 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3588 | 10-15%                  |                 2 |              0.1794  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3618 | 10-15%                  |                 2 |              0.1809  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3633 | >20%                    |                 2 |              0.18165 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3783 | 10-15%                  |                 2 |              0.18915 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3806 | >20%                    |                 2 |              0.1903  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3808 | <5%                     |                 5 |              0.07616 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3818 | >20%                    |                 5 |              0.07636 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3857 | >20%                    |                 2 |              0.19285 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3869 | >20%                    |                 2 |              0.19345 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.388  | >20%                    |                 5 |              0.0776  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3926 | >20%                    |                 2 |              0.1963  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3961 | 5-10%                   |                 2 |              0.19805 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3991 | 10-15%                  |                 2 |              0.19955 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4073 |                         |                10 |              0.04073 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4125 | 5-10%                   |                 2 |              0.20625 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4153 | <5%                     |                 2 |              0.20765 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4215 | 5-10%                   |                10 |              0.04215 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4225 | <5%                     |                10 |              0.04225 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4288 | 10-15%                  |                 2 |              0.2144  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4296 | 5-10%                   |                 2 |              0.2148  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4352 | 5-10%                   |                 2 |              0.2176  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4366 | 5-10%                   |                 5 |              0.08732 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4431 | <5%                     |                 5 |              0.08862 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4446 | <5%                     |                 5 |              0.08892 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4493 | 15-20%                  |                10 |              0.04493 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4581 | <5%                     |                 5 |              0.09162 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4603 | 10-15%                  |                10 |              0.04603 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4638 | 5-10%                   |                 5 |              0.09276 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.466  | >20%                    |                 5 |              0.0932  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4668 | 10-15%                  |                 5 |              0.09336 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4696 | 5-10%                   |                 2 |              0.2348  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4713 | 10-15%                  |                 5 |              0.09426 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4718 | >20%                    |                 5 |              0.09436 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4742 | >20%                    |                 5 |              0.09484 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4743 | 15-20%                  |                 5 |              0.09486 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4854 | 10-15%                  |                 2 |              0.2427  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4875 | 15-20%                  |                 2 |              0.24375 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4911 | <5%                     |                 5 |              0.09822 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4923 | >20%                    |                 5 |              0.09846 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4953 | <5%                     |                 2 |              0.24765 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.498  | <5%                     |                 5 |              0.0996  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5017 | 15-20%                  |                 2 |              0.25085 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5107 | 5-10%                   |                 5 |              0.10214 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5118 | >20%                    |                 5 |              0.10236 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5205 | <5%                     |                 5 |              0.1041  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5273 | 10-15%                  |                 2 |              0.26365 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5285 | <5%                     |                 5 |              0.1057  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5291 | 5-10%                   |                 5 |              0.10582 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5323 | 5-10%                   |                 5 |              0.10646 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5415 | 5-10%                   |                 5 |              0.1083  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5455 | 10-15%                  |                 5 |              0.1091  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5489 | >20%                    |                 5 |              0.10978 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5643 | >20%                    |                 2 |              0.28215 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5768 | 15-20%                  |                 5 |              0.11536 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5776 | >20%                    |                 5 |              0.11552 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5781 | >20%                    |                 2 |              0.28905 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.599  | 5-10%                   |                10 |              0.0599  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6002 | >20%                    |                 5 |              0.12004 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6092 | <5%                     |                 5 |              0.12184 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6227 | >20%                    |                 5 |              0.12454 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6335 | 5-10%                   |                10 |              0.06335 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6492 | >20%                    |                10 |              0.06492 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.6642 | <5%                     |                 2 |              0.3321  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6649 | <5%                     |                 5 |              0.13298 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6772 | 10-15%                  |                10 |              0.06772 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6847 | 15-20%                  |                 2 |              0.34235 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6987 | >20%                    |                10 |              0.06987 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7055 | >20%                    |                 2 |              0.35275 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7107 | 10-15%                  |                10 |              0.07107 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.712  | 15-20%                  |                 5 |              0.1424  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7198 | 15-20%                  |                 5 |              0.14396 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7316 | <5%                     |                 2 |              0.3658  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7342 | 5-10%                   |                 5 |              0.14684 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7346 | >20%                    |                10 |              0.07346 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7384 | >20%                    |                10 |              0.07384 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7403 | >20%                    |                10 |              0.07403 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7412 | 5-10%                   |                10 |              0.07412 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7476 | 5-10%                   |                10 |              0.07476 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7683 | <5%                     |                10 |              0.07683 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7765 | >20%                    |                 5 |              0.1553  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7912 | >20%                    |                 5 |              0.15824 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8005 | >20%                    |                 5 |              0.1601  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.81   | <5%                     |                 5 |              0.162   |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8121 | <5%                     |                10 |              0.08121 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8131 | 5-10%                   |                10 |              0.08131 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8201 | 15-20%                  |                10 |              0.08201 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8276 | 15-20%                  |                10 |              0.08276 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8405 | 10-15%                  |                10 |              0.08405 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8415 | 10-15%                  |                10 |              0.08415 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8417 | 5-10%                   |                10 |              0.08417 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8432 | 10-15%                  |                10 |              0.08432 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8619 | >20%                    |                10 |              0.08619 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.869  | 5-10%                   |                10 |              0.0869  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8716 | 10-15%                  |                10 |              0.08716 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8724 | <5%                     |                10 |              0.08724 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8981 | 5-10%                   |                10 |              0.08981 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8984 | <5%                     |                10 |              0.08984 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9002 | <5%                     |                 2 |              0.4501  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9067 | >20%                    |                10 |              0.09067 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9292 | 5-10%                   |                 5 |              0.18584 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9434 | 15-20%                  |                10 |              0.09434 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.95   | >20%                    |                10 |              0.095   |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9633 | 5-10%                   |                 5 |              0.19266 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9914 | <5%                     |                 5 |              0.19828 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0132 | 15-20%                  |                10 |              0.10132 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0342 | 10-15%                  |                 2 |              0.5171  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0343 | 5-10%                   |                10 |              0.10343 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0395 | <5%                     |                10 |              0.10395 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0553 | <5%                     |                10 |              0.10553 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1252 | >20%                    |                10 |              0.11252 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1445 | >20%                    |                10 |              0.11445 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2953 | 5-10%                   |                10 |              0.12953 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3196 | <5%                     |                10 |              0.13196 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3304 | >20%                    |                10 |              0.13304 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4048 | <5%                     |                10 |              0.14048 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4609 | 5-10%                   |                10 |              0.14609 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5379 | 5-10%                   |                 5 |              0.30758 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1203 | 10-15%                  |                10 |              0.21203 |