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

Data correct as of 2026-07-30 02:41:06.411005, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1322 | >20%                    |                 2 |              0.0661  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1864 | >20%                    |                 2 |              0.0932  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2199 | 15-20%                  |                 5 |              0.04398 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2278 | 15-20%                  |                 2 |              0.1139  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2325 | >20%                    |                 2 |              0.11625 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2341 | >20%                    |                 2 |              0.11705 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2361 | >20%                    |                 2 |              0.11805 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2417 | 5-10%                   |                10 |              0.02417 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2609 | >20%                    |                 2 |              0.13045 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2708 | >20%                    |                 2 |              0.1354  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2776 | >20%                    |                 2 |              0.1388  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2798 | 15-20%                  |                 2 |              0.1399  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2799 | >20%                    |                 2 |              0.13995 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2814 | >20%                    |                 2 |              0.1407  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3042 | >20%                    |                 2 |              0.1521  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.3107 | >20%                    |                10 |              0.03107 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3186 | 15-20%                  |                 2 |              0.1593  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3196 | >20%                    |                 2 |              0.1598  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.322  | >20%                    |                 5 |              0.0644  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3291 | 10-15%                  |                 2 |              0.16455 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3373 | 15-20%                  |                 5 |              0.06746 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3416 | 10-15%                  |                 2 |              0.1708  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3487 | 5-10%                   |                10 |              0.03487 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3611 | >20%                    |                10 |              0.03611 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.366  | >20%                    |                 2 |              0.183   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3706 | <5%                     |                 2 |              0.1853  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3717 | >20%                    |                 5 |              0.07434 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3791 | >20%                    |                 5 |              0.07582 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3794 | >20%                    |                 5 |              0.07588 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3871 | >20%                    |                 5 |              0.07742 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3881 | >20%                    |                 5 |              0.07762 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3886 | >20%                    |                 2 |              0.1943  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4043 | 5-10%                   |                10 |              0.04043 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4059 | 15-20%                  |                 2 |              0.20295 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4148 | >20%                    |                10 |              0.04148 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4155 | 10-15%                  |                 2 |              0.20775 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4267 | >20%                    |                 2 |              0.21335 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4331 | >20%                    |                 5 |              0.08662 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4441 | >20%                    |                10 |              0.04441 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4478 | >20%                    |                 2 |              0.2239  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4483 | <5%                     |                 2 |              0.22415 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4495 | >20%                    |                 5 |              0.0899  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4577 | >20%                    |                 5 |              0.09154 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4698 | 10-15%                  |                 2 |              0.2349  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4769 | 15-20%                  |                 5 |              0.09538 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4786 | >20%                    |                 5 |              0.09572 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4822 | >20%                    |                 2 |              0.2411  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4827 | >20%                    |                 5 |              0.09654 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.485  | 10-15%                  |                10 |              0.0485  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4894 | >20%                    |                 2 |              0.2447  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4966 | >20%                    |                 2 |              0.2483  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5091 | >20%                    |                 5 |              0.10182 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5115 | >20%                    |                 5 |              0.1023  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5147 | >20%                    |                 2 |              0.25735 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5336 | <5%                     |                 2 |              0.2668  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5396 | >20%                    |                 5 |              0.10792 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5406 | >20%                    |                 5 |              0.10812 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5421 | >20%                    |                 5 |              0.10842 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5446 | 15-20%                  |                 2 |              0.2723  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5489 | >20%                    |                10 |              0.05489 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5504 | >20%                    |                 5 |              0.11008 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5594 | >20%                    |                 2 |              0.2797  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5617 | 10-15%                  |                 5 |              0.11234 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5636 | >20%                    |                 5 |              0.11272 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5689 | 5-10%                   |                 2 |              0.28445 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5689 | >20%                    |                 5 |              0.11378 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5818 | >20%                    |                 5 |              0.11636 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5894 | >20%                    |                 5 |              0.11788 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5921 | >20%                    |                 5 |              0.11842 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5922 | >20%                    |                 2 |              0.2961  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6105 | >20%                    |                10 |              0.06105 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6131 | >20%                    |                 2 |              0.30655 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6168 | >20%                    |                 5 |              0.12336 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6208 | >20%                    |                 2 |              0.3104  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6319 | >20%                    |                 2 |              0.31595 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6406 | >20%                    |                10 |              0.06406 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.656  | <5%                     |                 5 |              0.1312  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6604 | >20%                    |                 5 |              0.13208 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6694 | >20%                    |                10 |              0.06694 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6781 | 5-10%                   |                 5 |              0.13562 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6934 | 15-20%                  |                 5 |              0.13868 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6954 | >20%                    |                 5 |              0.13908 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6999 | >20%                    |                10 |              0.06999 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7031 | >20%                    |                 5 |              0.14062 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.708  | >20%                    |                10 |              0.0708  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7188 | 15-20%                  |                10 |              0.07188 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7208 | >20%                    |                 5 |              0.14416 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7307 | <5%                     |                10 |              0.07307 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7386 |                         |                 2 |              0.3693  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7627 | >20%                    |                 5 |              0.15254 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7855 |                         |                 5 |              0.1571  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.7888 |                         |                 2 |              0.3944  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7975 | >20%                    |                10 |              0.07975 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7986 | >20%                    |                10 |              0.07986 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8047 | >20%                    |                10 |              0.08047 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.806  | >20%                    |                 2 |              0.403   |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.812  | >20%                    |                 5 |              0.1624  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8144 | 5-10%                   |                10 |              0.08144 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8347 | >20%                    |                 5 |              0.16694 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8378 | >20%                    |                10 |              0.08378 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8431 | 10-15%                  |                 2 |              0.42155 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.859  | >20%                    |                 2 |              0.4295  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8611 | >20%                    |                 2 |              0.43055 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8618 | 15-20%                  |                10 |              0.08618 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8773 | >20%                    |                 5 |              0.17546 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8795 | >20%                    |                10 |              0.08795 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8827 | >20%                    |                 5 |              0.17654 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8874 | >20%                    |                 5 |              0.17748 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8994 | 10-15%                  |                 2 |              0.4497  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9024 | >20%                    |                10 |              0.09024 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9242 | 15-20%                  |                10 |              0.09242 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9247 | >20%                    |                10 |              0.09247 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.934  | >20%                    |                10 |              0.0934  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9519 | >20%                    |                 2 |              0.47595 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9608 | >20%                    |                10 |              0.09608 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9794 | 15-20%                  |                10 |              0.09794 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9937 | 5-10%                   |                10 |              0.09937 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.01   | >20%                    |                10 |              0.101   |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0112 | 15-20%                  |                10 |              0.10112 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0154 | 5-10%                   |                 2 |              0.5077  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0242 | >20%                    |                 5 |              0.20484 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0346 | >20%                    |                10 |              0.10346 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0368 | >20%                    |                 5 |              0.20736 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0376 | >20%                    |                10 |              0.10376 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0396 | >20%                    |                10 |              0.10396 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0487 | >20%                    |                 5 |              0.20974 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0622 | 15-20%                  |                 2 |              0.5311  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0692 | >20%                    |                10 |              0.10692 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0791 | >20%                    |                 5 |              0.21582 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1475 | >20%                    |                 2 |              0.57375 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1618 | 5-10%                   |                 2 |              0.5809  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1665 | >20%                    |                10 |              0.11665 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1777 | 5-10%                   |                 5 |              0.23554 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.2034 | 15-20%                  |                10 |              0.12034 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.2184 | >20%                    |                10 |              0.12184 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.247  | >20%                    |                10 |              0.1247  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2574 | >20%                    |                 5 |              0.25148 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2846 | 10-15%                  |                 2 |              0.6423  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3314 | 15-20%                  |                10 |              0.13314 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.369  |                         |                 5 |              0.2738  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3845 | >20%                    |                 5 |              0.2769  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4036 |                         |                10 |              0.14036 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4925 | >20%                    |                10 |              0.14925 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.599  | 10-15%                  |                10 |              0.1599  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6023 | 15-20%                  |                 5 |              0.32046 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6423 | 5-10%                   |                10 |              0.16423 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8027 | >20%                    |                10 |              0.18027 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8521 |                         |                10 |              0.18521 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8747 | 15-20%                  |                10 |              0.18747 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0011 | >20%                    |                10 |              0.20011 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0327 | 5-10%                   |                 2 |              1.01635 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.1322 | >20%                    |                10 |              0.21322 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.2679 | >20%                    |                 5 |              0.45358 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.5585 | >20%                    |                 5 |              0.5117  |