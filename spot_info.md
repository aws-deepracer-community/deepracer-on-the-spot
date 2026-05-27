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

Data correct as of 2026-05-27 04:13:08.192533, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1357 | 15-20%                  |                 2 |              0.06785 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1361 | >20%                    |                 2 |              0.06805 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | >20%                    |                 2 |              0.0831  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1887 | >20%                    |                 2 |              0.09435 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1976 | 15-20%                  |                 2 |              0.0988  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2132 | 15-20%                  |                 5 |              0.04264 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2135 | 15-20%                  |                 5 |              0.0427  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2238 | >20%                    |                 2 |              0.1119  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2407 | >20%                    |                 2 |              0.12035 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2488 | >20%                    |                 2 |              0.1244  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2541 | >20%                    |                 2 |              0.12705 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2551 | >20%                    |                 2 |              0.12755 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2568 | 10-15%                  |                 2 |              0.1284  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2665 | >20%                    |                 2 |              0.13325 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2706 | >20%                    |                 2 |              0.1353  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2869 | >20%                    |                 5 |              0.05738 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2913 | >20%                    |                 2 |              0.14565 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2922 | 5-10%                   |                10 |              0.02922 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2926 | >20%                    |                 5 |              0.05852 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2948 | >20%                    |                 5 |              0.05896 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2986 | >20%                    |                 2 |              0.1493  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3013 | 15-20%                  |                 5 |              0.06026 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3027 | 5-10%                   |                10 |              0.03027 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.304  | >20%                    |                 5 |              0.0608  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3084 | >20%                    |                 5 |              0.06168 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3127 | 15-20%                  |                 2 |              0.15635 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3136 | >20%                    |                 2 |              0.1568  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3137 | >20%                    |                 5 |              0.06274 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3236 | >20%                    |                 5 |              0.06472 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3241 | >20%                    |                10 |              0.03241 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3339 | <5%                     |                 2 |              0.16695 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3535 | 10-15%                  |                 2 |              0.17675 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3545 | >20%                    |                10 |              0.03545 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.362  | >20%                    |                 2 |              0.181   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3634 | 10-15%                  |                 2 |              0.1817  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3651 | 10-15%                  |                 2 |              0.18255 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.366  | >20%                    |                 5 |              0.0732  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3664 | >20%                    |                 5 |              0.07328 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3737 | >20%                    |                 5 |              0.07474 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3922 | >20%                    |                10 |              0.03922 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.3944 | >20%                    |                10 |              0.03944 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3966 | >20%                    |                 5 |              0.07932 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3983 | >20%                    |                 5 |              0.07966 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4087 | >20%                    |                 5 |              0.08174 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4102 | >20%                    |                 5 |              0.08204 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4128 | >20%                    |                 2 |              0.2064  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4158 | <5%                     |                 2 |              0.2079  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4178 | >20%                    |                 2 |              0.2089  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4236 | >20%                    |                 5 |              0.08472 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4351 | 5-10%                   |                 2 |              0.21755 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4375 | >20%                    |                 2 |              0.21875 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.441  | >20%                    |                 2 |              0.2205  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4451 | >20%                    |                 5 |              0.08902 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4495 | >20%                    |                 2 |              0.22475 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4641 | <5%                     |                 2 |              0.23205 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4665 | 15-20%                  |                 2 |              0.23325 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4776 | 10-15%                  |                 2 |              0.2388  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4829 | >20%                    |                 5 |              0.09658 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4832 | >20%                    |                 2 |              0.2416  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4836 | >20%                    |                 5 |              0.09672 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.492  | 15-20%                  |                 2 |              0.246   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5036 | 5-10%                   |                 5 |              0.10072 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.509  | 15-20%                  |                 2 |              0.2545  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5127 | <5%                     |                 5 |              0.10254 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5187 | >20%                    |                 5 |              0.10374 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5242 | >20%                    |                10 |              0.05242 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5331 | 15-20%                  |                 5 |              0.10662 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5403 | >20%                    |                 2 |              0.27015 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5455 | 10-15%                  |                 5 |              0.1091  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5458 | >20%                    |                10 |              0.05458 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5524 | >20%                    |                 5 |              0.11048 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5544 | >20%                    |                 5 |              0.11088 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5577 | >20%                    |                 2 |              0.27885 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5589 |                         |                 2 |              0.27945 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.572  | 5-10%                   |                10 |              0.0572  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5739 | >20%                    |                10 |              0.05739 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5761 | >20%                    |                 2 |              0.28805 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5769 | >20%                    |                 5 |              0.11538 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5814 | >20%                    |                 2 |              0.2907  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5823 | >20%                    |                 5 |              0.11646 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5997 | >20%                    |                 2 |              0.29985 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6143 | >20%                    |                 5 |              0.12286 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6173 | >20%                    |                 5 |              0.12346 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6339 | 5-10%                   |                10 |              0.06339 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6427 | >20%                    |                 5 |              0.12854 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6482 | >20%                    |                 2 |              0.3241  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6518 | >20%                    |                10 |              0.06518 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6534 | 15-20%                  |                10 |              0.06534 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6728 | 5-10%                   |                 2 |              0.3364  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6738 | >20%                    |                 5 |              0.13476 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6854 | >20%                    |                 5 |              0.13708 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7018 | >20%                    |                10 |              0.07018 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7261 | >20%                    |                 5 |              0.14522 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7362 | >20%                    |                 2 |              0.3681  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7422 | >20%                    |                 5 |              0.14844 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7475 | >20%                    |                 5 |              0.1495  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7522 | >20%                    |                 2 |              0.3761  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7533 | 15-20%                  |                10 |              0.07533 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7648 | >20%                    |                 5 |              0.15296 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7777 | >20%                    |                10 |              0.07777 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.778  | >20%                    |                 5 |              0.1556  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7885 | >20%                    |                10 |              0.07885 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7993 | 10-15%                  |                10 |              0.07993 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7997 | >20%                    |                10 |              0.07997 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.8066 | >20%                    |                10 |              0.08066 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8071 | >20%                    |                 5 |              0.16142 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8074 |                         |                 5 |              0.16148 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8119 | >20%                    |                10 |              0.08119 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8132 | 15-20%                  |                10 |              0.08132 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8173 | >20%                    |                 5 |              0.16346 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8189 | 10-15%                  |                 2 |              0.40945 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.822  | >20%                    |                10 |              0.0822  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8289 | >20%                    |                10 |              0.08289 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8619 | 15-20%                  |                10 |              0.08619 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.87   |                         |                 2 |              0.435   |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8832 | 15-20%                  |                10 |              0.08832 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9257 | >20%                    |                10 |              0.09257 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9263 | >20%                    |                10 |              0.09263 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9368 | >20%                    |                10 |              0.09368 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9396 | >20%                    |                10 |              0.09396 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9523 |                         |                10 |              0.09523 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9542 | >20%                    |                 5 |              0.19084 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9553 | >20%                    |                 5 |              0.19106 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9761 | >20%                    |                10 |              0.09761 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9761 | >20%                    |                 5 |              0.19522 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9809 | >20%                    |                 2 |              0.49045 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.9831 |                         |                10 |              0.09831 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9849 | >20%                    |                 5 |              0.19698 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9883 | >20%                    |                10 |              0.09883 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      0.9893 |                         |                 5 |              0.19786 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.006  | >20%                    |                10 |              0.1006  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0092 | >20%                    |                10 |              0.10092 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0207 | >20%                    |                10 |              0.10207 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0307 | >20%                    |                10 |              0.10307 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0715 | >20%                    |                10 |              0.10715 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0801 | >20%                    |                10 |              0.10801 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0876 | 5-10%                   |                 2 |              0.5438  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1032 | 5-10%                   |                 2 |              0.5516  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1134 | 5-10%                   |                 5 |              0.22268 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1671 | >20%                    |                10 |              0.11671 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1679 | 5-10%                   |                10 |              0.11679 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.21   | 15-20%                  |                10 |              0.121   |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2346 | 15-20%                  |                10 |              0.12346 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2547 | 10-15%                  |                10 |              0.12547 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2787 | 15-20%                  |                 5 |              0.25574 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2844 | >20%                    |                10 |              0.12844 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3712 | >20%                    |                 5 |              0.27424 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4186 | >20%                    |                 5 |              0.28372 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4345 | >20%                    |                10 |              0.14345 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5388 | 10-15%                  |                 2 |              0.7694  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6936 | 15-20%                  |                10 |              0.16936 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1212 | >20%                    |                10 |              0.21212 |