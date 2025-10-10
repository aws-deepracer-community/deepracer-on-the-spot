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

Data correct as of 2025-10-10 01:44:52.719341, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2035 | >20%                    |                 5 |              0.0407  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2133 | 10-15%                  |                 2 |              0.10665 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2215 | >20%                    |                 2 |              0.11075 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2456 | >20%                    |                 2 |              0.1228  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2468 | >20%                    |                 2 |              0.1234  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2508 | >20%                    |                 2 |              0.1254  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2525 | 5-10%                   |                 2 |              0.12625 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2637 | >20%                    |                 2 |              0.13185 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2827 | 5-10%                   |                 2 |              0.14135 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2828 | 10-15%                  |                 2 |              0.1414  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2907 | 15-20%                  |                 2 |              0.14535 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2932 | >20%                    |                 2 |              0.1466  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3035 | >20%                    |                10 |              0.03035 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3095 | >20%                    |                 2 |              0.15475 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3158 | >20%                    |                 5 |              0.06316 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3267 | 15-20%                  |                 2 |              0.16335 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3322 | 10-15%                  |                 2 |              0.1661  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3415 | >20%                    |                 2 |              0.17075 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3423 | >20%                    |                 2 |              0.17115 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.345  | >20%                    |                10 |              0.0345  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3461 | >20%                    |                 2 |              0.17305 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3462 | >20%                    |                 2 |              0.1731  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3714 | >20%                    |                 2 |              0.1857  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3752 | >20%                    |                 5 |              0.07504 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3794 | >20%                    |                 5 |              0.07588 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3799 | 15-20%                  |                 2 |              0.18995 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3807 | >20%                    |                 2 |              0.19035 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3824 | >20%                    |                 2 |              0.1912  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3925 | >20%                    |                 2 |              0.19625 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4007 | >20%                    |                 2 |              0.20035 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4037 | >20%                    |                 5 |              0.08074 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4043 | >20%                    |                 5 |              0.08086 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4166 | 15-20%                  |                 2 |              0.2083  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4185 | 5-10%                   |                 2 |              0.20925 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4277 | 5-10%                   |                 2 |              0.21385 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.428  | >20%                    |                 5 |              0.0856  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4281 | >20%                    |                 2 |              0.21405 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4308 | >20%                    |                 5 |              0.08616 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.436  | >20%                    |                 2 |              0.218   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4466 | >20%                    |                 5 |              0.08932 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4484 | >20%                    |                 2 |              0.2242  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4501 | >20%                    |                 2 |              0.22505 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4506 | >20%                    |                 2 |              0.2253  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4511 | 10-15%                  |                 5 |              0.09022 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4535 | >20%                    |                 5 |              0.0907  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4573 | 10-15%                  |                 2 |              0.22865 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4573 | >20%                    |                 5 |              0.09146 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4616 | 5-10%                   |                 5 |              0.09232 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4667 | <5%                     |                 2 |              0.23335 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4677 | 15-20%                  |                 5 |              0.09354 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4758 | >20%                    |                 2 |              0.2379  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4857 | 10-15%                  |                 2 |              0.24285 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4881 | >20%                    |                 2 |              0.24405 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4937 | >20%                    |                 2 |              0.24685 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4948 | >20%                    |                 5 |              0.09896 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5013 | >20%                    |                 5 |              0.10026 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5071 | >20%                    |                 2 |              0.25355 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5268 | >20%                    |                 5 |              0.10536 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5325 | >20%                    |                 5 |              0.1065  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5339 | >20%                    |                 5 |              0.10678 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5415 | >20%                    |                 5 |              0.1083  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5441 | 5-10%                   |                 2 |              0.27205 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5481 | >20%                    |                 5 |              0.10962 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5516 | 10-15%                  |                 2 |              0.2758  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5609 | >20%                    |                 2 |              0.28045 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.566  | >20%                    |                 5 |              0.1132  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5805 | >20%                    |                 5 |              0.1161  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5861 | 15-20%                  |                10 |              0.05861 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5908 | 15-20%                  |                 2 |              0.2954  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.595  | >20%                    |                 2 |              0.2975  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5957 | >20%                    |                 5 |              0.11914 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5998 | >20%                    |                10 |              0.05998 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6049 | >20%                    |                10 |              0.06049 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6083 | >20%                    |                 5 |              0.12166 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6126 | 10-15%                  |                 5 |              0.12252 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6128 | >20%                    |                 5 |              0.12256 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6201 | >20%                    |                 2 |              0.31005 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6275 | >20%                    |                 5 |              0.1255  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6322 | >20%                    |                 5 |              0.12644 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6372 | 10-15%                  |                 5 |              0.12744 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6379 | >20%                    |                 2 |              0.31895 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6402 | <5%                     |                10 |              0.06402 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6412 | >20%                    |                 5 |              0.12824 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6452 | >20%                    |                 5 |              0.12904 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6484 | 15-20%                  |                 2 |              0.3242  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6517 | 15-20%                  |                 5 |              0.13034 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6543 | >20%                    |                 5 |              0.13086 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.663  | 15-20%                  |                 5 |              0.1326  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6691 | >20%                    |                 5 |              0.13382 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6841 | >20%                    |                 5 |              0.13682 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6903 | >20%                    |                 5 |              0.13806 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6989 | 15-20%                  |                10 |              0.06989 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7026 | 15-20%                  |                 5 |              0.14052 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7031 | 15-20%                  |                10 |              0.07031 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.707  | >20%                    |                 5 |              0.1414  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7073 | >20%                    |                 2 |              0.35365 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7097 | >20%                    |                10 |              0.07097 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7099 | >20%                    |                 5 |              0.14198 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7158 | >20%                    |                10 |              0.07158 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7193 | >20%                    |                 5 |              0.14386 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7201 | >20%                    |                 5 |              0.14402 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7222 | 15-20%                  |                10 |              0.07222 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7658 | >20%                    |                10 |              0.07658 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7673 | 5-10%                   |                10 |              0.07673 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.77   | >20%                    |                10 |              0.077   |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7728 | 15-20%                  |                10 |              0.07728 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.774  | 10-15%                  |                 2 |              0.387   |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7766 | >20%                    |                 2 |              0.3883  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7882 | >20%                    |                 5 |              0.15764 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7883 | >20%                    |                10 |              0.07883 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7934 | >20%                    |                 5 |              0.15868 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.797  | 15-20%                  |                 5 |              0.1594  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8095 | >20%                    |                10 |              0.08095 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.813  | >20%                    |                10 |              0.0813  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8269 | 15-20%                  |                10 |              0.08269 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8303 | >20%                    |                 5 |              0.16606 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8394 | >20%                    |                10 |              0.08394 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.841  | >20%                    |                 5 |              0.1682  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8472 | <5%                     |                10 |              0.08472 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.851  | >20%                    |                10 |              0.0851  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8523 | 10-15%                  |                 2 |              0.42615 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8634 | <5%                     |                10 |              0.08634 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8684 | 10-15%                  |                 5 |              0.17368 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8991 | 15-20%                  |                10 |              0.08991 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9029 | >20%                    |                 5 |              0.18058 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.916  | 15-20%                  |                10 |              0.0916  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9177 | 15-20%                  |                10 |              0.09177 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9207 | 5-10%                   |                10 |              0.09207 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.927  | 10-15%                  |                10 |              0.0927  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9304 | <5%                     |                10 |              0.09304 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9306 | 10-15%                  |                10 |              0.09306 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9424 | >20%                    |                 2 |              0.4712  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9558 | >20%                    |                 5 |              0.19116 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9728 | >20%                    |                10 |              0.09728 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.976  | >20%                    |                10 |              0.0976  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9876 | 5-10%                   |                10 |              0.09876 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0039 | 15-20%                  |                10 |              0.10039 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0081 | >20%                    |                 2 |              0.50405 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0185 | 10-15%                  |                10 |              0.10185 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.021  | >20%                    |                 2 |              0.5105  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0355 | >20%                    |                 5 |              0.2071  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0475 | >20%                    |                 5 |              0.2095  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0522 | >20%                    |                10 |              0.10522 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0802 | >20%                    |                10 |              0.10802 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0857 | >20%                    |                10 |              0.10857 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0952 | >20%                    |                10 |              0.10952 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0977 | <5%                     |                10 |              0.10977 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1008 | 10-15%                  |                10 |              0.11008 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1038 | 15-20%                  |                10 |              0.11038 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1041 | 10-15%                  |                 2 |              0.55205 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1174 | >20%                    |                 5 |              0.22348 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1474 | >20%                    |                10 |              0.11474 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1511 | 5-10%                   |                10 |              0.11511 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1595 | 5-10%                   |                10 |              0.11595 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1673 | >20%                    |                 5 |              0.23346 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2207 | 15-20%                  |                10 |              0.12207 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2526 | 5-10%                   |                 2 |              0.6263  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2633 | >20%                    |                10 |              0.12633 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2844 | 10-15%                  |                10 |              0.12844 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3081 | >20%                    |                10 |              0.13081 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3968 | 10-15%                  |                 5 |              0.27936 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4459 | >20%                    |                10 |              0.14459 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5634 | >20%                    |                10 |              0.15634 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6236 | 10-15%                  |                 5 |              0.32472 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6868 | >20%                    |                10 |              0.16868 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7319 | >20%                    |                10 |              0.17319 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0788 | 10-15%                  |                10 |              0.20788 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.299  | 15-20%                  |                10 |              0.2299  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.6621 | >20%                    |                10 |              0.26621 |