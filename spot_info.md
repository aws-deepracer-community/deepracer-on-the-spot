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

Data correct as of 2025-05-13 01:53:21.527762, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1556 | >20%                    |                 2 |              0.0778  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1685 | >20%                    |                 5 |              0.0337  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 5-10%                   |                 5 |              0.039   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2115 | >20%                    |                 5 |              0.0423  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2178 | <5%                     |                 2 |              0.1089  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2182 | >20%                    |                 2 |              0.1091  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.222  | <5%                     |                 5 |              0.0444  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2246 | <5%                     |                 2 |              0.1123  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2283 | 15-20%                  |                 2 |              0.11415 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2546 | 5-10%                   |                 5 |              0.05092 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2564 | <5%                     |                 2 |              0.1282  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2597 | >20%                    |                 2 |              0.12985 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2641 | 15-20%                  |                 2 |              0.13205 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2679 | 5-10%                   |                 2 |              0.13395 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2711 | >20%                    |                 2 |              0.13555 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2764 | 15-20%                  |                10 |              0.02764 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.283  | 10-15%                  |                10 |              0.0283  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.283  | >20%                    |                 2 |              0.1415  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2882 | 10-15%                  |                 2 |              0.1441  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2914 | >20%                    |                 2 |              0.1457  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | 15-20%                  |                10 |              0.0294  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.294  | 5-10%                   |                 2 |              0.147   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2972 | 5-10%                   |                 2 |              0.1486  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2992 | <5%                     |                 2 |              0.1496  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3    | 15-20%                  |                 5 |              0.06    |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3055 | >20%                    |                 2 |              0.15275 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3095 | >20%                    |                 2 |              0.15475 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3139 | >20%                    |                 5 |              0.06278 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3163 | 15-20%                  |                 5 |              0.06326 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3193 | 5-10%                   |                 2 |              0.15965 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3208 | >20%                    |                 2 |              0.1604  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3219 | >20%                    |                10 |              0.03219 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3259 | 5-10%                   |                 2 |              0.16295 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3317 | >20%                    |                 2 |              0.16585 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3423 | >20%                    |                 2 |              0.17115 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3571 | <5%                     |                 5 |              0.07142 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3582 | >20%                    |                 2 |              0.1791  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3591 | >20%                    |                 5 |              0.07182 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3592 | 10-15%                  |                 2 |              0.1796  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3593 | 5-10%                   |                 5 |              0.07186 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3658 | >20%                    |                10 |              0.03658 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3693 | <5%                     |                 2 |              0.18465 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3702 | >20%                    |                 5 |              0.07404 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3704 | >20%                    |                 2 |              0.1852  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3742 | >20%                    |                 2 |              0.1871  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3762 | >20%                    |                10 |              0.03762 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3775 | >20%                    |                 2 |              0.18875 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3831 | >20%                    |                 5 |              0.07662 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.385  | 10-15%                  |                10 |              0.0385  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3882 | 5-10%                   |                 5 |              0.07764 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3932 | >20%                    |                 2 |              0.1966  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.397  | 15-20%                  |                10 |              0.0397  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4074 | >20%                    |                 2 |              0.2037  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4078 | 5-10%                   |                 2 |              0.2039  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4136 | 10-15%                  |                 2 |              0.2068  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4231 | >20%                    |                 5 |              0.08462 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4258 | >20%                    |                 5 |              0.08516 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4276 | 15-20%                  |                 2 |              0.2138  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4313 | <5%                     |                 5 |              0.08626 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.432  | <5%                     |                10 |              0.0432  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.434  | 15-20%                  |                 5 |              0.0868  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4367 | 10-15%                  |                 2 |              0.21835 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4417 | >20%                    |                 2 |              0.22085 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4534 | 10-15%                  |                 5 |              0.09068 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4561 | >20%                    |                 5 |              0.09122 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4576 | 10-15%                  |                10 |              0.04576 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4626 | <5%                     |                 2 |              0.2313  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4657 | >20%                    |                 5 |              0.09314 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.466  | >20%                    |                 5 |              0.0932  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4695 | >20%                    |                 2 |              0.23475 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4718 | 5-10%                   |                 5 |              0.09436 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4719 | >20%                    |                 2 |              0.23595 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4741 | >20%                    |                 2 |              0.23705 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4764 | >20%                    |                10 |              0.04764 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4838 | >20%                    |                 5 |              0.09676 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4838 | >20%                    |                 5 |              0.09676 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4844 | <5%                     |                 5 |              0.09688 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4848 | >20%                    |                 2 |              0.2424  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4848 | <5%                     |                10 |              0.04848 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4916 | >20%                    |                 5 |              0.09832 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4963 | 5-10%                   |                 5 |              0.09926 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4983 | >20%                    |                 5 |              0.09966 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5014 | <5%                     |                 5 |              0.10028 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5074 | 15-20%                  |                 5 |              0.10148 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5182 | >20%                    |                 2 |              0.2591  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5188 | 10-15%                  |                 2 |              0.2594  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5192 | >20%                    |                 2 |              0.2596  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5233 | >20%                    |                 2 |              0.26165 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5288 | >20%                    |                 2 |              0.2644  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5301 | 10-15%                  |                 5 |              0.10602 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5529 | >20%                    |                 5 |              0.11058 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.557  | >20%                    |                 5 |              0.1114  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5577 | 10-15%                  |                 5 |              0.11154 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5589 | 5-10%                   |                 5 |              0.11178 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5826 | >20%                    |                 5 |              0.11652 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5841 | >20%                    |                 5 |              0.11682 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5879 | 10-15%                  |                10 |              0.05879 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5906 | >20%                    |                 2 |              0.2953  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5922 | >20%                    |                10 |              0.05922 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5939 | >20%                    |                 2 |              0.29695 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6016 | <5%                     |                 5 |              0.12032 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6027 | >20%                    |                 5 |              0.12054 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6059 | 10-15%                  |                 2 |              0.30295 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6166 | >20%                    |                 2 |              0.3083  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6246 | 10-15%                  |                 5 |              0.12492 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.637  | >20%                    |                 5 |              0.1274  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.643  | 10-15%                  |                 5 |              0.1286  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.653  | 5-10%                   |                10 |              0.0653  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6574 | >20%                    |                 5 |              0.13148 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6594 | 15-20%                  |                10 |              0.06594 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6649 | 15-20%                  |                 5 |              0.13298 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6821 | <5%                     |                 5 |              0.13642 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6915 | >20%                    |                 5 |              0.1383  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.695  | >20%                    |                 5 |              0.139   |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7031 | >20%                    |                10 |              0.07031 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7049 | >20%                    |                 2 |              0.35245 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7057 | >20%                    |                 2 |              0.35285 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.709  | >20%                    |                 2 |              0.3545  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7095 | >20%                    |                10 |              0.07095 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7199 | <5%                     |                 5 |              0.14398 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7219 | 5-10%                   |                10 |              0.07219 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7372 | >20%                    |                 2 |              0.3686  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7381 | >20%                    |                10 |              0.07381 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.739  | >20%                    |                 5 |              0.1478  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7568 | 10-15%                  |                10 |              0.07568 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7635 | >20%                    |                10 |              0.07635 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7686 | <5%                     |                10 |              0.07686 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7823 | >20%                    |                 5 |              0.15646 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7855 | 15-20%                  |                10 |              0.07855 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7907 | >20%                    |                10 |              0.07907 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8089 | >20%                    |                 5 |              0.16178 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8148 | <5%                     |                 5 |              0.16296 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8168 | 10-15%                  |                10 |              0.08168 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8225 | 10-15%                  |                10 |              0.08225 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8263 | 5-10%                   |                10 |              0.08263 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8295 | 15-20%                  |                10 |              0.08295 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8315 | 15-20%                  |                10 |              0.08315 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8321 | >20%                    |                10 |              0.08321 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.839  | 10-15%                  |                10 |              0.0839  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8393 | <5%                     |                 5 |              0.16786 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8502 | 15-20%                  |                10 |              0.08502 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8504 | <5%                     |                10 |              0.08504 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8781 | >20%                    |                 2 |              0.43905 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8885 | >20%                    |                 2 |              0.44425 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8894 | 10-15%                  |                10 |              0.08894 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9146 | 15-20%                  |                10 |              0.09146 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9229 | >20%                    |                 2 |              0.46145 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9242 | <5%                     |                10 |              0.09242 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9314 | >20%                    |                10 |              0.09314 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9342 | 15-20%                  |                10 |              0.09342 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9343 | >20%                    |                 5 |              0.18686 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9456 | >20%                    |                10 |              0.09456 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9722 | >20%                    |                10 |              0.09722 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9747 | 15-20%                  |                 2 |              0.48735 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9984 | 10-15%                  |                10 |              0.09984 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0017 | >20%                    |                10 |              0.10017 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.03   | <5%                     |                10 |              0.103   |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0305 | >20%                    |                10 |              0.10305 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0418 | >20%                    |                 5 |              0.20836 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0493 | >20%                    |                10 |              0.10493 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.072  | >20%                    |                 5 |              0.2144  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0852 | 10-15%                  |                 5 |              0.21704 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1364 | >20%                    |                 5 |              0.22728 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1413 | <5%                     |                10 |              0.11413 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1826 | >20%                    |                10 |              0.11826 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1942 | 10-15%                  |                 2 |              0.5971  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.243  | >20%                    |                 5 |              0.2486  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2441 | >20%                    |                10 |              0.12441 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2757 | >20%                    |                10 |              0.12757 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2888 | >20%                    |                 2 |              0.6444  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3063 | <5%                     |                 5 |              0.26126 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3293 | 15-20%                  |                10 |              0.13293 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3858 | >20%                    |                10 |              0.13858 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4196 | 15-20%                  |                10 |              0.14196 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4719 | 5-10%                   |                10 |              0.14719 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4952 | 15-20%                  |                10 |              0.14952 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7418 | >20%                    |                10 |              0.17418 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0452 | <5%                     |                10 |              0.20452 |