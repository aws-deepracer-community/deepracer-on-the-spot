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

Data correct as of 2026-10-05 04:52:36.091254, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1182 | >20%                    |                 2 |              0.0591  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1473 | >20%                    |                 2 |              0.07365 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.187  | 15-20%                  |                 2 |              0.0935  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2062 | >20%                    |                 2 |              0.1031  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2077 | 15-20%                  |                 5 |              0.04154 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2207 | 15-20%                  |                 5 |              0.04414 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2211 | >20%                    |                 5 |              0.04422 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2349 | >20%                    |                 2 |              0.11745 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.235  | 5-10%                   |                10 |              0.0235  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2477 | >20%                    |                 5 |              0.04954 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.284  | >20%                    |                 2 |              0.142   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2871 | >20%                    |                 2 |              0.14355 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2943 | >20%                    |                 2 |              0.14715 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2994 | >20%                    |                 2 |              0.1497  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2996 | 15-20%                  |                 2 |              0.1498  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3062 | >20%                    |                 5 |              0.06124 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3144 | >20%                    |                 2 |              0.1572  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3303 | 10-15%                  |                 2 |              0.16515 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.34   | 10-15%                  |                 2 |              0.17    |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3443 | >20%                    |                 2 |              0.17215 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3498 | >20%                    |                 2 |              0.1749  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3519 | >20%                    |                 5 |              0.07038 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3661 | >20%                    |                 2 |              0.18305 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3691 | >20%                    |                10 |              0.03691 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3716 | 15-20%                  |                 2 |              0.1858  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3716 | 5-10%                   |                10 |              0.03716 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3792 | >20%                    |                 2 |              0.1896  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3804 | >20%                    |                 5 |              0.07608 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3814 | >20%                    |                 2 |              0.1907  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3879 | <5%                     |                 2 |              0.19395 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3939 | >20%                    |                 5 |              0.07878 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.395  | >20%                    |                 2 |              0.1975  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4133 | >20%                    |                 5 |              0.08266 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4157 | >20%                    |                 5 |              0.08314 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4191 | >20%                    |                10 |              0.04191 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4201 | 15-20%                  |                 2 |              0.21005 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4361 | >20%                    |                 2 |              0.21805 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4601 | >20%                    |                 5 |              0.09202 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4629 | >20%                    |                 5 |              0.09258 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4665 | >20%                    |                 5 |              0.0933  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4738 | 10-15%                  |                 2 |              0.2369  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4781 | >20%                    |                 5 |              0.09562 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4818 |                         |                 2 |              0.2409  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4834 | >20%                    |                 2 |              0.2417  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.4839 | >20%                    |                 5 |              0.09678 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4908 | >20%                    |                 5 |              0.09816 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4927 | >20%                    |                 2 |              0.24635 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4973 | >20%                    |                 2 |              0.24865 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5001 | >20%                    |                 2 |              0.25005 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5042 | <5%                     |                 2 |              0.2521  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5086 | >20%                    |                10 |              0.05086 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5113 | >20%                    |                 5 |              0.10226 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5206 | >20%                    |                 5 |              0.10412 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.553  | >20%                    |                 2 |              0.2765  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5743 | >20%                    |                 5 |              0.11486 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5808 | 10-15%                  |                 5 |              0.11616 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5858 | >20%                    |                10 |              0.05858 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5882 | >20%                    |                 5 |              0.11764 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5894 | 15-20%                  |                 2 |              0.2947  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6104 | >20%                    |                 2 |              0.3052  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6158 | >20%                    |                 5 |              0.12316 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6177 | 10-15%                  |                 2 |              0.30885 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6188 | >20%                    |                 2 |              0.3094  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6206 | >20%                    |                10 |              0.06206 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6211 | >20%                    |                 5 |              0.12422 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6294 | >20%                    |                 5 |              0.12588 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.6364 |                         |                 5 |              0.12728 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.6486 |                         |                10 |              0.06486 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.65   | >20%                    |                 2 |              0.325   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6636 | >20%                    |                 5 |              0.13272 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6683 | 5-10%                   |                10 |              0.06683 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6822 | 5-10%                   |                 2 |              0.3411  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6823 | <5%                     |                 2 |              0.34115 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6946 | >20%                    |                 5 |              0.13892 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6996 | 5-10%                   |                 5 |              0.13992 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.717  | 15-20%                  |                 2 |              0.3585  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7184 | >20%                    |                10 |              0.07184 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7276 | >20%                    |                10 |              0.07276 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7297 | >20%                    |                 2 |              0.36485 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7321 | >20%                    |                 5 |              0.14642 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7326 | >20%                    |                 5 |              0.14652 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7341 | 15-20%                  |                 5 |              0.14682 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.736  | 15-20%                  |                10 |              0.0736  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7412 | >20%                    |                10 |              0.07412 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7432 | >20%                    |                 5 |              0.14864 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7461 | >20%                    |                 5 |              0.14922 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7581 | >20%                    |                 5 |              0.15162 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7716 | >20%                    |                10 |              0.07716 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7817 | 15-20%                  |                10 |              0.07817 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7836 | 15-20%                  |                10 |              0.07836 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8189 | >20%                    |                 5 |              0.16378 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8219 | >20%                    |                 5 |              0.16438 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8229 | >20%                    |                10 |              0.08229 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.823  | >20%                    |                10 |              0.0823  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8358 | 5-10%                   |                10 |              0.08358 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8412 | 15-20%                  |                10 |              0.08412 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8524 | >20%                    |                 2 |              0.4262  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.853  | >20%                    |                 5 |              0.1706  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.856  | 15-20%                  |                 5 |              0.1712  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.867  | 10-15%                  |                 2 |              0.4335  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8705 | >20%                    |                10 |              0.08705 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8731 | 10-15%                  |                10 |              0.08731 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8841 | >20%                    |                10 |              0.08841 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8956 | >20%                    |                10 |              0.08956 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.898  | >20%                    |                 2 |              0.449   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9082 | >20%                    |                10 |              0.09082 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9086 | <5%                     |                 5 |              0.18172 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9125 | >20%                    |                 5 |              0.1825  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9213 | >20%                    |                 5 |              0.18426 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9296 | >20%                    |                 5 |              0.18592 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9351 | >20%                    |                10 |              0.09351 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9424 | 10-15%                  |                 2 |              0.4712  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9615 | >20%                    |                10 |              0.09615 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.994  | 15-20%                  |                10 |              0.0994  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9997 | 15-20%                  |                10 |              0.09997 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0098 | >20%                    |                 5 |              0.20196 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0126 | >20%                    |                10 |              0.10126 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.019  | >20%                    |                 2 |              0.5095  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0242 | >20%                    |                10 |              0.10242 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0308 | >20%                    |                10 |              0.10308 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.052  | >20%                    |                10 |              0.1052  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0582 | >20%                    |                10 |              0.10582 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1147 | >20%                    |                10 |              0.11147 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1185 | 5-10%                   |                10 |              0.11185 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1604 | >20%                    |                 5 |              0.23208 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.2035 |                         |                 2 |              0.60175 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2067 | >20%                    |                10 |              0.12067 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2078 | >20%                    |                10 |              0.12078 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.24   | 5-10%                   |                 2 |              0.62    |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2724 | 5-10%                   |                 2 |              0.6362  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.325  | >20%                    |                 2 |              0.6625  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3504 | >20%                    |                10 |              0.13504 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3683 | 15-20%                  |                10 |              0.13683 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4088 | 10-15%                  |                10 |              0.14088 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4169 | >20%                    |                10 |              0.14169 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4195 | 10-15%                  |                 2 |              0.70975 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5343 | 5-10%                   |                 5 |              0.30686 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5362 | >20%                    |                 2 |              0.7681  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.5621 |                         |                 2 |              0.78105 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5764 | 15-20%                  |                10 |              0.15764 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5817 | >20%                    |                 5 |              0.31634 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6218 | >20%                    |                10 |              0.16218 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7045 |                         |                10 |              0.17045 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7288 | >20%                    |                 5 |              0.34576 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8087 | >20%                    |                10 |              0.18087 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.8496 |                         |                 5 |              0.36992 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8707 |                         |                10 |              0.18707 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.9779 |                         |                 5 |              0.39558 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.0706 | >20%                    |                10 |              0.20706 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0783 | 15-20%                  |                 5 |              0.41566 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2149 | 5-10%                   |                 2 |              1.10745 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.2171 | >20%                    |                 5 |              0.44342 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2467 | 5-10%                   |                10 |              0.22467 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5614 | >20%                    |                10 |              0.25614 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1397 | >20%                    |                10 |              0.31397 |