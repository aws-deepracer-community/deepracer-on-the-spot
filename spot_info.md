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

Data correct as of 2026-10-21 03:59:14.768863, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0872 | >20%                    |                 2 |              0.0436  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1327 | >20%                    |                 2 |              0.06635 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1426 | 15-20%                  |                 5 |              0.02852 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1447 | 15-20%                  |                 2 |              0.07235 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1753 | >20%                    |                 5 |              0.03506 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1824 | 10-15%                  |                 2 |              0.0912  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1954 | >20%                    |                 2 |              0.0977  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2464 | >20%                    |                 2 |              0.1232  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2483 | >20%                    |                 2 |              0.12415 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2671 | >20%                    |                 2 |              0.13355 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2708 | >20%                    |                 5 |              0.05416 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2795 | >20%                    |                 5 |              0.0559  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2892 | >20%                    |                 2 |              0.1446  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3009 | >20%                    |                 2 |              0.15045 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3045 | >20%                    |                 2 |              0.15225 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.316  | >20%                    |                 2 |              0.158   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3186 | 15-20%                  |                 2 |              0.1593  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.319  | >20%                    |                 2 |              0.1595  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3491 | >20%                    |                10 |              0.03491 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3595 | >20%                    |                 2 |              0.17975 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.363  | >20%                    |                 5 |              0.0726  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.364  | 10-15%                  |                 2 |              0.182   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3707 | 15-20%                  |                 2 |              0.18535 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3763 | 15-20%                  |                 2 |              0.18815 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3808 | >20%                    |                 5 |              0.07616 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3825 | >20%                    |                 5 |              0.0765  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3933 | <5%                     |                 2 |              0.19665 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3941 | >20%                    |                 5 |              0.07882 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4017 | >20%                    |                 2 |              0.20085 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4137 | >20%                    |                 2 |              0.20685 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4149 | >20%                    |                10 |              0.04149 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4222 | >20%                    |                 5 |              0.08444 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4258 | >20%                    |                 5 |              0.08516 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4327 | >20%                    |                 2 |              0.21635 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4507 | >20%                    |                 5 |              0.09014 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4586 | >20%                    |                 5 |              0.09172 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4597 | <5%                     |                10 |              0.04597 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4698 | >20%                    |                 5 |              0.09396 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4713 | >20%                    |                 5 |              0.09426 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4791 | 10-15%                  |                 2 |              0.23955 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4815 | >20%                    |                 2 |              0.24075 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4878 | 5-10%                   |                10 |              0.04878 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4902 | >20%                    |                 2 |              0.2451  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4988 | >20%                    |                 2 |              0.2494  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5011 | >20%                    |                 2 |              0.25055 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5026 | >20%                    |                 5 |              0.10052 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5194 | >20%                    |                 5 |              0.10388 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.5207 |                         |                 2 |              0.26035 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.521  |                         |                10 |              0.0521  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.523  | 5-10%                   |                10 |              0.0523  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5243 | 15-20%                  |                 2 |              0.26215 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5478 | >20%                    |                10 |              0.05478 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5479 | >20%                    |                 2 |              0.27395 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5621 | >20%                    |                 2 |              0.28105 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5677 | >20%                    |                10 |              0.05677 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5716 | >20%                    |                 5 |              0.11432 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5773 | >20%                    |                 5 |              0.11546 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5779 | >20%                    |                 5 |              0.11558 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5841 | 10-15%                  |                 5 |              0.11682 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5858 | >20%                    |                 2 |              0.2929  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5989 | >20%                    |                 2 |              0.29945 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6171 | 10-15%                  |                 2 |              0.30855 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6201 | >20%                    |                 5 |              0.12402 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6405 | >20%                    |                 5 |              0.1281  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6409 | <5%                     |                 2 |              0.32045 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6451 | >20%                    |                10 |              0.06451 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6599 | >20%                    |                 5 |              0.13198 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6643 | 5-10%                   |                 2 |              0.33215 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6716 | >20%                    |                 2 |              0.3358  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.676  | >20%                    |                 5 |              0.1352  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6768 | <5%                     |                 2 |              0.3384  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7061 | >20%                    |                 5 |              0.14122 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7069 | 15-20%                  |                 2 |              0.35345 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7072 | >20%                    |                 5 |              0.14144 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7084 | >20%                    |                 5 |              0.14168 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7339 | 15-20%                  |                 5 |              0.14678 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7442 | >20%                    |                 5 |              0.14884 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7459 | >20%                    |                10 |              0.07459 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7533 | >20%                    |                 5 |              0.15066 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.76   | >20%                    |                 5 |              0.152   |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7626 | >20%                    |                10 |              0.07626 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7645 | 15-20%                  |                10 |              0.07645 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7851 | 10-15%                  |                10 |              0.07851 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7873 | >20%                    |                10 |              0.07873 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.796  | 15-20%                  |                10 |              0.0796  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7972 | 15-20%                  |                10 |              0.07972 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8259 | 5-10%                   |                10 |              0.08259 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8401 | >20%                    |                10 |              0.08401 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8433 | >20%                    |                 2 |              0.42165 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8536 | 15-20%                  |                 5 |              0.17072 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8543 | 10-15%                  |                 2 |              0.42715 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8608 | >20%                    |                 5 |              0.17216 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8624 | 10-15%                  |                 2 |              0.4312  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8821 | >20%                    |                 5 |              0.17642 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8889 | >20%                    |                 5 |              0.17778 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8904 | >20%                    |                10 |              0.08904 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9008 | >20%                    |                 5 |              0.18016 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9012 | >20%                    |                10 |              0.09012 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9102 | <5%                     |                 5 |              0.18204 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9134 | >20%                    |                10 |              0.09134 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.9184 | 5-10%                   |                 5 |              0.18368 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9233 | >20%                    |                10 |              0.09233 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9571 | >20%                    |                10 |              0.09571 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.959  | >20%                    |                10 |              0.0959  |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.9738 |                         |                 5 |              0.19476 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9885 | >20%                    |                10 |              0.09885 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9926 | 15-20%                  |                10 |              0.09926 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9927 | >20%                    |                 5 |              0.19854 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0027 | >20%                    |                 5 |              0.20054 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0271 | >20%                    |                10 |              0.10271 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0328 | >20%                    |                10 |              0.10328 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0524 | 15-20%                  |                10 |              0.10524 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0609 | >20%                    |                 2 |              0.53045 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1059 | >20%                    |                 5 |              0.22118 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1178 | 5-10%                   |                10 |              0.11178 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1415 | >20%                    |                10 |              0.11415 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1434 | 15-20%                  |                10 |              0.11434 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.1765 | >20%                    |                10 |              0.11765 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1987 | >20%                    |                10 |              0.11987 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2057 | >20%                    |                10 |              0.12057 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.2385 | >20%                    |                 5 |              0.2477  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.2622 | >20%                    |                 5 |              0.25244 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3457 | >20%                    |                 2 |              0.67285 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3516 |                         |                 5 |              0.27032 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3595 | 15-20%                  |                10 |              0.13595 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3753 | >20%                    |                10 |              0.13753 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3956 | >20%                    |                 2 |              0.6978  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.412  | 10-15%                  |                10 |              0.1412  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4504 | >20%                    |                10 |              0.14504 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4523 | >20%                    |                10 |              0.14523 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4588 | 5-10%                   |                 2 |              0.7294  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.4596 |                         |                 2 |              0.7298  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4896 | 5-10%                   |                 5 |              0.29792 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5246 | >20%                    |                 5 |              0.30492 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.536  | 10-15%                  |                 2 |              0.768   |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.5581 |                         |                 2 |              0.77905 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      1.5758 | >20%                    |                 2 |              0.7879  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5975 | >20%                    |                 2 |              0.79875 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6323 | >20%                    |                10 |              0.16323 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.639  | >20%                    |                10 |              0.1639  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.6494 | 5-10%                   |                 2 |              0.8247  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6517 |                         |                10 |              0.16517 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6553 | >20%                    |                10 |              0.16553 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7314 | >20%                    |                 5 |              0.34628 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.8636 | >20%                    |                10 |              0.18636 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8714 | 15-20%                  |                10 |              0.18714 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0909 | 15-20%                  |                 5 |              0.41818 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      2.1036 |                         |                 5 |              0.42072 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2131 | 5-10%                   |                10 |              0.22131 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2188 | 5-10%                   |                 2 |              1.1094  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.2565 | >20%                    |                 5 |              0.4513  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.3759 |                         |                10 |              0.23759 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5729 | >20%                    |                10 |              0.25729 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0612 | >20%                    |                10 |              0.30612 |