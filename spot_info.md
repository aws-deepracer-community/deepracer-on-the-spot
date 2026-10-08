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

Data correct as of 2026-10-08 05:20:45.498764, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1227 | >20%                    |                 2 |              0.06135 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1531 | >20%                    |                 2 |              0.07655 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1878 | 15-20%                  |                 5 |              0.03756 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1934 | >20%                    |                 2 |              0.0967  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2025 | 15-20%                  |                 2 |              0.10125 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2172 | 15-20%                  |                 5 |              0.04344 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2411 | >20%                    |                 2 |              0.12055 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2413 | 5-10%                   |                10 |              0.02413 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2518 | >20%                    |                 5 |              0.05036 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2778 | >20%                    |                 2 |              0.1389  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2826 | >20%                    |                 2 |              0.1413  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2873 | 10-15%                  |                 2 |              0.14365 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2896 | >20%                    |                 5 |              0.05792 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2902 | >20%                    |                 2 |              0.1451  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2964 | >20%                    |                 2 |              0.1482  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3044 | >20%                    |                 2 |              0.1522  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3106 | 15-20%                  |                 2 |              0.1553  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3159 | >20%                    |                 5 |              0.06318 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3288 | >20%                    |                 2 |              0.1644  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3554 | 10-15%                  |                 2 |              0.1777  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3555 | 5-10%                   |                10 |              0.03555 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3649 | >20%                    |                 2 |              0.18245 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3668 | >20%                    |                 2 |              0.1834  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.372  | >20%                    |                10 |              0.0372  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3732 | 15-20%                  |                 2 |              0.1866  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3789 | >20%                    |                 5 |              0.07578 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3792 | 15-20%                  |                 2 |              0.1896  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3801 | >20%                    |                 5 |              0.07602 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.387  | >20%                    |                 2 |              0.1935  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3874 | <5%                     |                 2 |              0.1937  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3966 | >20%                    |                 2 |              0.1983  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4021 | >20%                    |                 5 |              0.08042 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4035 | >20%                    |                 2 |              0.20175 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4064 | >20%                    |                10 |              0.04064 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4101 | >20%                    |                 5 |              0.08202 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4284 | >20%                    |                 5 |              0.08568 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4343 | >20%                    |                 5 |              0.08686 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.4387 | >20%                    |                 5 |              0.08774 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4391 | >20%                    |                 2 |              0.21955 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4413 | >20%                    |                 5 |              0.08826 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4548 | >20%                    |                 2 |              0.2274  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4657 | >20%                    |                 5 |              0.09314 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4661 | >20%                    |                 2 |              0.23305 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4719 | >20%                    |                10 |              0.04719 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4721 | 10-15%                  |                 2 |              0.23605 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4827 |                         |                 2 |              0.24135 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4828 | >20%                    |                 2 |              0.2414  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.491  | >20%                    |                 2 |              0.2455  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5057 | >20%                    |                 5 |              0.10114 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.507  | >20%                    |                 5 |              0.1014  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5233 | >20%                    |                 5 |              0.10466 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5245 | <5%                     |                 2 |              0.26225 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5295 | >20%                    |                 5 |              0.1059  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5532 | >20%                    |                 2 |              0.2766  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5741 | 10-15%                  |                 5 |              0.11482 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5763 | 15-20%                  |                 2 |              0.28815 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5795 | >20%                    |                 5 |              0.1159  |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.5833 |                         |                10 |              0.05833 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5895 | >20%                    |                 5 |              0.1179  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.619  | 10-15%                  |                 2 |              0.3095  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6204 | >20%                    |                 5 |              0.12408 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.627  | >20%                    |                 5 |              0.1254  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6288 | >20%                    |                10 |              0.06288 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6293 | >20%                    |                10 |              0.06293 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6311 | >20%                    |                 2 |              0.31555 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6502 | 5-10%                   |                10 |              0.06502 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6553 | >20%                    |                 2 |              0.32765 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6677 | >20%                    |                 5 |              0.13354 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6724 | >20%                    |                 5 |              0.13448 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6789 | <5%                     |                 2 |              0.33945 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6797 | 5-10%                   |                 2 |              0.33985 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6832 | >20%                    |                 5 |              0.13664 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6867 | >20%                    |                 5 |              0.13734 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6885 | 15-20%                  |                 2 |              0.34425 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.694  | >20%                    |                10 |              0.0694  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6953 | >20%                    |                10 |              0.06953 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7034 | >20%                    |                 5 |              0.14068 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7102 | >20%                    |                 2 |              0.3551  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7167 | 5-10%                   |                 5 |              0.14334 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7222 | 15-20%                  |                10 |              0.07222 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.7252 |                         |                 5 |              0.14504 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7341 | 15-20%                  |                 5 |              0.14682 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7354 | >20%                    |                 5 |              0.14708 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7359 | >20%                    |                 5 |              0.14718 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7397 | >20%                    |                 5 |              0.14794 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7406 | >20%                    |                10 |              0.07406 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7438 | >20%                    |                 5 |              0.14876 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7516 | >20%                    |                10 |              0.07516 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7538 | >20%                    |                 2 |              0.3769  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7693 | 15-20%                  |                10 |              0.07693 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7839 | 15-20%                  |                10 |              0.07839 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.789  | >20%                    |                 5 |              0.1578  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8247 | >20%                    |                10 |              0.08247 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8263 | 5-10%                   |                10 |              0.08263 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8331 | 15-20%                  |                10 |              0.08331 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8414 | 15-20%                  |                 5 |              0.16828 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8499 | >20%                    |                 2 |              0.42495 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.86   | >20%                    |                10 |              0.086   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.861  | 10-15%                  |                 2 |              0.4305  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8691 | >20%                    |                10 |              0.08691 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8743 | 10-15%                  |                10 |              0.08743 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8767 | >20%                    |                10 |              0.08767 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8875 | >20%                    |                10 |              0.08875 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8894 | >20%                    |                 5 |              0.17788 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8901 | >20%                    |                 2 |              0.44505 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8912 | >20%                    |                 5 |              0.17824 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9006 | >20%                    |                10 |              0.09006 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9062 | <5%                     |                 5 |              0.18124 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.916  | >20%                    |                 5 |              0.1832  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9235 | >20%                    |                 5 |              0.1847  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9383 | >20%                    |                10 |              0.09383 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9659 | >20%                    |                10 |              0.09659 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9839 | 15-20%                  |                10 |              0.09839 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.991  | >20%                    |                10 |              0.0991  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9982 | >20%                    |                 5 |              0.19964 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0084 | >20%                    |                10 |              0.10084 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0159 | 10-15%                  |                 2 |              0.50795 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0313 | >20%                    |                10 |              0.10313 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0454 | >20%                    |                10 |              0.10454 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0488 | >20%                    |                10 |              0.10488 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0532 | >20%                    |                10 |              0.10532 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0662 | 15-20%                  |                10 |              0.10662 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1181 | 5-10%                   |                10 |              0.11181 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1708 | >20%                    |                 5 |              0.23416 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1843 | >20%                    |                10 |              0.11843 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2079 | >20%                    |                10 |              0.12079 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2272 | 5-10%                   |                 2 |              0.6136  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.2458 | >20%                    |                 2 |              0.6229  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.2886 |                         |                 2 |              0.6443  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3188 | >20%                    |                 2 |              0.6594  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3535 | >20%                    |                10 |              0.13535 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3661 | 15-20%                  |                10 |              0.13661 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3756 | 10-15%                  |                10 |              0.13756 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3952 | 10-15%                  |                 2 |              0.6976  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4271 | >20%                    |                10 |              0.14271 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4418 | 15-20%                  |                10 |              0.14418 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.5157 | 5-10%                   |                 2 |              0.75785 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5277 | 5-10%                   |                 5 |              0.30554 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5434 | >20%                    |                 2 |              0.7717  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5875 | >20%                    |                 5 |              0.3175  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.615  | >20%                    |                10 |              0.1615  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.6184 |                         |                 2 |              0.8092  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6542 |                         |                10 |              0.16542 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7109 | >20%                    |                10 |              0.17109 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7269 | >20%                    |                 5 |              0.34538 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.7568 |                         |                 5 |              0.35136 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.96   | >20%                    |                10 |              0.196   |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.9656 |                         |                 5 |              0.39312 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.044  |                         |                10 |              0.2044  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0747 | 15-20%                  |                 5 |              0.41494 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.1403 | >20%                    |                 5 |              0.42806 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2086 | 5-10%                   |                 2 |              1.1043  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2479 | 5-10%                   |                10 |              0.22479 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5631 | >20%                    |                10 |              0.25631 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1289 | >20%                    |                10 |              0.31289 |