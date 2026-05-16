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

Data correct as of 2026-05-16 03:34:25.939861, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1153 | >20%                    |                 2 |              0.05765 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.149  | 15-20%                  |                 2 |              0.0745  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1644 | >20%                    |                 2 |              0.0822  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2002 | 15-20%                  |                 5 |              0.04004 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2155 | >20%                    |                 2 |              0.10775 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2265 | >20%                    |                 2 |              0.11325 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2342 | 15-20%                  |                 2 |              0.1171  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2349 | >20%                    |                 2 |              0.11745 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2362 | 15-20%                  |                 5 |              0.04724 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2374 | >20%                    |                 2 |              0.1187  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2384 | >20%                    |                 2 |              0.1192  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2391 | >20%                    |                 5 |              0.04782 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2516 | 15-20%                  |                 5 |              0.05032 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2689 | >20%                    |                 5 |              0.05378 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2708 | >20%                    |                 2 |              0.1354  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2751 | 5-10%                   |                10 |              0.02751 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2808 | >20%                    |                 2 |              0.1404  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2811 | 15-20%                  |                 2 |              0.14055 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2951 | >20%                    |                 5 |              0.05902 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3024 | >20%                    |                 5 |              0.06048 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3031 | 10-15%                  |                 2 |              0.15155 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3077 | >20%                    |                 2 |              0.15385 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3126 | >20%                    |                 2 |              0.1563  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3145 | >20%                    |                10 |              0.03145 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3166 | 10-15%                  |                 2 |              0.1583  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3167 | 5-10%                   |                10 |              0.03167 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3205 | >20%                    |                 2 |              0.16025 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3223 | 10-15%                  |                 2 |              0.16115 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3325 | <5%                     |                 2 |              0.16625 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3391 | >20%                    |                 2 |              0.16955 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.347  | >20%                    |                 5 |              0.0694  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3619 | >20%                    |                 5 |              0.07238 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.368  | >20%                    |                 5 |              0.0736  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3684 | >20%                    |                 5 |              0.07368 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3761 | >20%                    |                 5 |              0.07522 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3761 | >20%                    |                 5 |              0.07522 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3893 | >20%                    |                 5 |              0.07786 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3952 | >20%                    |                 2 |              0.1976  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3989 | 10-15%                  |                 2 |              0.19945 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4018 | >20%                    |                 5 |              0.08036 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4031 | <5%                     |                 2 |              0.20155 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.411  | 5-10%                   |                 2 |              0.2055  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4204 | >20%                    |                 2 |              0.2102  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4268 | >20%                    |                10 |              0.04268 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4276 | >20%                    |                 5 |              0.08552 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4327 | >20%                    |                 2 |              0.21635 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4383 | >20%                    |                 5 |              0.08766 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4397 | >20%                    |                 2 |              0.21985 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4534 | <5%                     |                 2 |              0.2267  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4584 | 15-20%                  |                 2 |              0.2292  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.46   | >20%                    |                 5 |              0.092   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4602 | >20%                    |                 2 |              0.2301  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4634 | >20%                    |                 5 |              0.09268 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4677 | 15-20%                  |                 2 |              0.23385 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4719 | >20%                    |                 5 |              0.09438 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4724 | >20%                    |                 5 |              0.09448 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4776 | >20%                    |                 5 |              0.09552 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4779 | >20%                    |                 2 |              0.23895 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4874 | >20%                    |                10 |              0.04874 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4963 | >20%                    |                 5 |              0.09926 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5056 | 5-10%                   |                10 |              0.05056 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5057 | 5-10%                   |                 5 |              0.10114 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5059 | >20%                    |                 2 |              0.25295 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5139 | 15-20%                  |                 5 |              0.10278 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5172 | >20%                    |                 5 |              0.10344 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.519  | <5%                     |                 5 |              0.1038  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5291 | >20%                    |                10 |              0.05291 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5325 | 10-15%                  |                 5 |              0.1065  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5458 | >20%                    |                10 |              0.05458 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5545 | >20%                    |                10 |              0.05545 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5559 | 15-20%                  |                 2 |              0.27795 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.556  | >20%                    |                 2 |              0.278   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5568 | >20%                    |                10 |              0.05568 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5582 | >20%                    |                 5 |              0.11164 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5605 | 10-15%                  |                 2 |              0.28025 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6126 | >20%                    |                 2 |              0.3063  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6251 | >20%                    |                 5 |              0.12502 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6298 | >20%                    |                 2 |              0.3149  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6371 | >20%                    |                 5 |              0.12742 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6427 | >20%                    |                 2 |              0.32135 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6442 | >20%                    |                 2 |              0.3221  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6491 | >20%                    |                 2 |              0.32455 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6594 | >20%                    |                10 |              0.06594 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6654 | 5-10%                   |                10 |              0.06654 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6659 | 15-20%                  |                10 |              0.06659 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6761 | >20%                    |                 5 |              0.13522 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6881 | >20%                    |                10 |              0.06881 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6963 | 5-10%                   |                 2 |              0.34815 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6967 | 10-15%                  |                 2 |              0.34835 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7034 | >20%                    |                10 |              0.07034 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7042 | 15-20%                  |                10 |              0.07042 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.705  | >20%                    |                 5 |              0.141   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7062 | >20%                    |                 2 |              0.3531  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7083 | >20%                    |                 5 |              0.14166 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.721  | >20%                    |                 5 |              0.1442  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7298 | >20%                    |                 5 |              0.14596 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7305 | >20%                    |                10 |              0.07305 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7354 | >20%                    |                10 |              0.07354 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.74   | >20%                    |                 5 |              0.148   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7577 | >20%                    |                10 |              0.07577 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7578 |                         |                 2 |              0.3789  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7636 | >20%                    |                 2 |              0.3818  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7645 | >20%                    |                 5 |              0.1529  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7983 | >20%                    |                 5 |              0.15966 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.806  | >20%                    |                10 |              0.0806  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.807  | >20%                    |                 5 |              0.1614  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8083 |                         |                 5 |              0.16166 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8234 | >20%                    |                 5 |              0.16468 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8628 | >20%                    |                10 |              0.08628 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8681 | >20%                    |                10 |              0.08681 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      0.8694 |                         |                 5 |              0.17388 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8732 | 10-15%                  |                10 |              0.08732 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8741 | >20%                    |                10 |              0.08741 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8764 |                         |                 2 |              0.4382  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8797 | 15-20%                  |                10 |              0.08797 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8892 | >20%                    |                10 |              0.08892 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8946 | 15-20%                  |                10 |              0.08946 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9054 | 5-10%                   |                 5 |              0.18108 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.908  | >20%                    |                10 |              0.0908  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9152 | >20%                    |                10 |              0.09152 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9315 | 15-20%                  |                10 |              0.09315 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9321 | >20%                    |                 5 |              0.18642 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9383 | >20%                    |                10 |              0.09383 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9598 | >20%                    |                10 |              0.09598 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9644 | >20%                    |                10 |              0.09644 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9978 | >20%                    |                10 |              0.09978 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0047 | >20%                    |                 5 |              0.20094 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0083 | >20%                    |                 5 |              0.20166 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0197 | >20%                    |                 5 |              0.20394 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0207 | >20%                    |                 2 |              0.51035 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      1.0286 | >20%                    |                 5 |              0.20572 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0295 | >20%                    |                10 |              0.10295 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0438 | >20%                    |                10 |              0.10438 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0545 | >20%                    |                10 |              0.10545 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1128 | 5-10%                   |                10 |              0.11128 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.2098 | 15-20%                  |                10 |              0.12098 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.215  | 5-10%                   |                 2 |              0.6075  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2175 | 5-10%                   |                 2 |              0.60875 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2176 | 10-15%                  |                10 |              0.12176 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2258 | >20%                    |                 5 |              0.24516 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2766 | >20%                    |                10 |              0.12766 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3007 | 15-20%                  |                 5 |              0.26014 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3203 | >20%                    |                10 |              0.13203 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3213 | >20%                    |                10 |              0.13213 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3771 | 10-15%                  |                 2 |              0.68855 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3981 | >20%                    |                 5 |              0.27962 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4794 | 15-20%                  |                10 |              0.14794 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4921 |                         |                10 |              0.14921 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5037 | >20%                    |                10 |              0.15037 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.5106 |                         |                10 |              0.15106 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5433 | 15-20%                  |                10 |              0.15433 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0336 | >20%                    |                10 |              0.20336 |