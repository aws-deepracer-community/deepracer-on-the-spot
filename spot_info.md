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

Data correct as of 2026-08-05 02:48:59.430612, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1715 | >20%                    |                 2 |              0.08575 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1971 | >20%                    |                 2 |              0.09855 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2149 | >20%                    |                 2 |              0.10745 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2353 | 15-20%                  |                 5 |              0.04706 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2425 | 15-20%                  |                 2 |              0.12125 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2464 | >20%                    |                 2 |              0.1232  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2553 | >20%                    |                 2 |              0.12765 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2698 | >20%                    |                 2 |              0.1349  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2787 | 15-20%                  |                 2 |              0.13935 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2833 | >20%                    |                 2 |              0.14165 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2835 | >20%                    |                 2 |              0.14175 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2882 | >20%                    |                 2 |              0.1441  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3034 | >20%                    |                 5 |              0.06068 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3108 | >20%                    |                 2 |              0.1554  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3225 | 15-20%                  |                 2 |              0.16125 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3321 | >20%                    |                 2 |              0.16605 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3407 | >20%                    |                 5 |              0.06814 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3525 | 5-10%                   |                10 |              0.03525 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3526 | >20%                    |                10 |              0.03526 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3575 | 10-15%                  |                 2 |              0.17875 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3593 | >20%                    |                10 |              0.03593 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3625 | >20%                    |                 5 |              0.0725  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3645 | >20%                    |                 2 |              0.18225 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3728 | 5-10%                   |                10 |              0.03728 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3734 | 15-20%                  |                 5 |              0.07468 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3751 | <5%                     |                 2 |              0.18755 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3758 | 15-20%                  |                 2 |              0.1879  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3835 | >20%                    |                10 |              0.03835 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.387  | >20%                    |                 5 |              0.0774  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3897 | 5-10%                   |                10 |              0.03897 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3947 | >20%                    |                 5 |              0.07894 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3957 | >20%                    |                 2 |              0.19785 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3982 | >20%                    |                10 |              0.03982 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.399  | >20%                    |                 2 |              0.1995  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3999 | 10-15%                  |                 2 |              0.19995 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.425  | 10-15%                  |                 2 |              0.2125  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4262 | >20%                    |                 2 |              0.2131  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4339 | <5%                     |                 2 |              0.21695 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.436  | >20%                    |                 5 |              0.0872  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4364 | 10-15%                  |                10 |              0.04364 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4417 | 15-20%                  |                 2 |              0.22085 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4452 | >20%                    |                 5 |              0.08904 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4527 | >20%                    |                 2 |              0.22635 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.4538 | >20%                    |                10 |              0.04538 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4553 | >20%                    |                10 |              0.04553 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4583 | 10-15%                  |                 2 |              0.22915 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4603 | >20%                    |                 2 |              0.23015 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4615 | >20%                    |                 5 |              0.0923  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4751 | >20%                    |                 2 |              0.23755 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4781 | >20%                    |                 5 |              0.09562 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4906 | >20%                    |                 2 |              0.2453  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5023 | >20%                    |                 5 |              0.10046 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5083 | >20%                    |                 5 |              0.10166 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5148 | 15-20%                  |                 5 |              0.10296 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.522  | >20%                    |                 2 |              0.261   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5266 | >20%                    |                 5 |              0.10532 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.536  | >20%                    |                 2 |              0.268   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5382 | >20%                    |                10 |              0.05382 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5478 | 5-10%                   |                 2 |              0.2739  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5559 | >20%                    |                 5 |              0.11118 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5587 | >20%                    |                 5 |              0.11174 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5614 | <5%                     |                 2 |              0.2807  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5687 | >20%                    |                 5 |              0.11374 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5717 | >20%                    |                 5 |              0.11434 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.575  | >20%                    |                 2 |              0.2875  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5787 | 10-15%                  |                 5 |              0.11574 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5999 | >20%                    |                 5 |              0.11998 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6079 | >20%                    |                 5 |              0.12158 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6082 | >20%                    |                 2 |              0.3041  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6222 | >20%                    |                 5 |              0.12444 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6285 | >20%                    |                 5 |              0.1257  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6346 | >20%                    |                 2 |              0.3173  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6426 | >20%                    |                 5 |              0.12852 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.648  | <5%                     |                 5 |              0.1296  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6528 | >20%                    |                 5 |              0.13056 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6541 | >20%                    |                 5 |              0.13082 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6606 | >20%                    |                 5 |              0.13212 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6699 | >20%                    |                10 |              0.06699 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6709 | 15-20%                  |                 5 |              0.13418 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.68   | 15-20%                  |                10 |              0.068   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6812 | >20%                    |                10 |              0.06812 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6831 | >20%                    |                 5 |              0.13662 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6871 | >20%                    |                 5 |              0.13742 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6876 | 5-10%                   |                 5 |              0.13752 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.71   | >20%                    |                 5 |              0.142   |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7155 | >20%                    |                10 |              0.07155 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.72   | >20%                    |                 2 |              0.36    |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7259 | >20%                    |                10 |              0.07259 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7372 | >20%                    |                 5 |              0.14744 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7388 |                         |                 2 |              0.3694  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7468 | >20%                    |                 2 |              0.3734  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7483 | >20%                    |                10 |              0.07483 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7522 | <5%                     |                10 |              0.07522 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7772 | >20%                    |                10 |              0.07772 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7972 | >20%                    |                 5 |              0.15944 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.809  | >20%                    |                10 |              0.0809  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8098 | 10-15%                  |                 2 |              0.4049  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8129 | >20%                    |                10 |              0.08129 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8259 |                         |                 2 |              0.41295 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8443 | >20%                    |                 2 |              0.42215 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8509 | >20%                    |                10 |              0.08509 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8544 | >20%                    |                 2 |              0.4272  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.857  | >20%                    |                10 |              0.0857  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8722 |                         |                 5 |              0.17444 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8785 | >20%                    |                 5 |              0.1757  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8817 | 15-20%                  |                10 |              0.08817 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8849 | >20%                    |                 5 |              0.17698 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8858 | >20%                    |                 5 |              0.17716 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8909 | 15-20%                  |                10 |              0.08909 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8971 | >20%                    |                 5 |              0.17942 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8993 | 10-15%                  |                 2 |              0.44965 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9046 | >20%                    |                10 |              0.09046 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9205 | 15-20%                  |                10 |              0.09205 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9233 | >20%                    |                10 |              0.09233 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9277 | 5-10%                   |                10 |              0.09277 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9348 | >20%                    |                 2 |              0.4674  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9491 | >20%                    |                 5 |              0.18982 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9736 | >20%                    |                10 |              0.09736 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9798 | >20%                    |                10 |              0.09798 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9821 | 5-10%                   |                10 |              0.09821 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9881 | >20%                    |                 5 |              0.19762 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0131 | >20%                    |                10 |              0.10131 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0332 | >20%                    |                 5 |              0.20664 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0381 | 15-20%                  |                10 |              0.10381 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0383 | 15-20%                  |                 2 |              0.51915 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.045  | >20%                    |                10 |              0.1045  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0558 | >20%                    |                10 |              0.10558 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0662 | >20%                    |                10 |              0.10662 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.106  | 15-20%                  |                10 |              0.1106  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.111  | >20%                    |                 2 |              0.5555  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1402 |                         |                10 |              0.11402 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.161  | 5-10%                   |                 2 |              0.5805  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1725 | >20%                    |                 5 |              0.2345  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1959 | >20%                    |                10 |              0.11959 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2066 | >20%                    |                10 |              0.12066 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2195 | 15-20%                  |                10 |              0.12195 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.2296 | >20%                    |                10 |              0.12296 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2948 |                         |                 5 |              0.25896 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3004 | >20%                    |                 5 |              0.26008 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3104 | >20%                    |                 5 |              0.26208 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3119 | 10-15%                  |                 2 |              0.65595 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3659 | 5-10%                   |                 2 |              0.68295 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.396  | >20%                    |                10 |              0.1396  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4011 | 5-10%                   |                 5 |              0.28022 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.422  | >20%                    |                10 |              0.1422  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5507 | 15-20%                  |                 5 |              0.31014 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.6145 | 10-15%                  |                10 |              0.16145 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6328 | >20%                    |                10 |              0.16328 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7038 | 5-10%                   |                10 |              0.17038 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7827 | >20%                    |                10 |              0.17827 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8193 | >20%                    |                10 |              0.18193 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8441 |                         |                10 |              0.18441 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.9405 | 15-20%                  |                10 |              0.19405 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.0893 | >20%                    |                 5 |              0.41786 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.1484 | 5-10%                   |                 2 |              1.0742  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.7751 | >20%                    |                 5 |              0.55502 |