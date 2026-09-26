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

Data correct as of 2026-09-26 04:17:59.373961, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0798 | >20%                    |                 2 |              0.0399  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1249 | 15-20%                  |                 2 |              0.06245 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1383 | >20%                    |                 2 |              0.06915 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1474 | >20%                    |                 5 |              0.02948 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1617 | 15-20%                  |                 5 |              0.03234 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2122 | 15-20%                  |                 5 |              0.04244 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.234  | >20%                    |                 2 |              0.117   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2377 | >20%                    |                 2 |              0.11885 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2389 | >20%                    |                 2 |              0.11945 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2552 | >20%                    |                 2 |              0.1276  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2662 | >20%                    |                 2 |              0.1331  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2796 | >20%                    |                 2 |              0.1398  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2944 | >20%                    |                 2 |              0.1472  |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.2964 |                         |                 5 |              0.05928 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3004 | >20%                    |                 2 |              0.1502  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.306  | 15-20%                  |                 2 |              0.153   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3302 | >20%                    |                 2 |              0.1651  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3306 | 10-15%                  |                 2 |              0.1653  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3382 | >20%                    |                10 |              0.03382 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3511 | >20%                    |                 5 |              0.07022 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3657 | >20%                    |                 5 |              0.07314 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3711 | 15-20%                  |                 2 |              0.18555 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3735 | >20%                    |                 5 |              0.0747  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3836 | >20%                    |                 5 |              0.07672 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3849 | >20%                    |                 2 |              0.19245 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3866 | 10-15%                  |                 2 |              0.1933  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.393  | <5%                     |                 2 |              0.1965  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3941 | >20%                    |                 5 |              0.07882 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3994 | >20%                    |                 2 |              0.1997  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4057 | >20%                    |                 2 |              0.20285 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4128 | <5%                     |                10 |              0.04128 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4174 | 5-10%                   |                10 |              0.04174 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4218 | >20%                    |                 5 |              0.08436 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4254 | >20%                    |                 5 |              0.08508 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4363 | >20%                    |                 2 |              0.21815 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4417 | >20%                    |                 2 |              0.22085 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4451 | >20%                    |                 5 |              0.08902 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4511 | >20%                    |                 5 |              0.09022 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4583 | 15-20%                  |                 2 |              0.22915 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4715 | >20%                    |                 2 |              0.23575 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4776 | 10-15%                  |                 2 |              0.2388  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4877 | >20%                    |                 5 |              0.09754 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4915 |                         |                 2 |              0.24575 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4946 | 15-20%                  |                 2 |              0.2473  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4964 | >20%                    |                 5 |              0.09928 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4989 | >20%                    |                 2 |              0.24945 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5021 | <5%                     |                 2 |              0.25105 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5025 | >20%                    |                 2 |              0.25125 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5194 | >20%                    |                10 |              0.05194 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5221 | >20%                    |                 5 |              0.10442 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5262 | >20%                    |                 2 |              0.2631  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5378 | 5-10%                   |                10 |              0.05378 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5396 | >20%                    |                 5 |              0.10792 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5472 | >20%                    |                 2 |              0.2736  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5572 | >20%                    |                 5 |              0.11144 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5882 | >20%                    |                 5 |              0.11764 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5941 | >20%                    |                 2 |              0.29705 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5993 | >20%                    |                10 |              0.05993 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6052 | 10-15%                  |                 5 |              0.12104 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6114 | >20%                    |                 5 |              0.12228 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6202 | >20%                    |                 5 |              0.12404 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6206 | >20%                    |                 2 |              0.3103  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.627  | 15-20%                  |                10 |              0.0627  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6453 | 10-15%                  |                 2 |              0.32265 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6491 | >20%                    |                 5 |              0.12982 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6502 | >20%                    |                10 |              0.06502 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6576 | >20%                    |                 5 |              0.13152 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6612 | 5-10%                   |                 5 |              0.13224 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6645 | >20%                    |                 5 |              0.1329  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.671  | >20%                    |                 5 |              0.1342  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6762 | >20%                    |                 5 |              0.13524 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.686  | >20%                    |                 5 |              0.1372  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6912 | <5%                     |                 2 |              0.3456  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6924 | 5-10%                   |                 2 |              0.3462  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6925 | >20%                    |                 2 |              0.34625 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6961 | 15-20%                  |                 2 |              0.34805 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6972 | 15-20%                  |                10 |              0.06972 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7105 | >20%                    |                 5 |              0.1421  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7188 | >20%                    |                 2 |              0.3594  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7369 | 15-20%                  |                 5 |              0.14738 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7392 | >20%                    |                 5 |              0.14784 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7392 | >20%                    |                10 |              0.07392 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7503 | >20%                    |                 5 |              0.15006 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7536 | >20%                    |                10 |              0.07536 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7613 | >20%                    |                10 |              0.07613 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7702 | 10-15%                  |                10 |              0.07702 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7734 | >20%                    |                 5 |              0.15468 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8149 | 10-15%                  |                 2 |              0.40745 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8319 | 15-20%                  |                10 |              0.08319 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8388 | >20%                    |                10 |              0.08388 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.844  | 5-10%                   |                10 |              0.0844  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.8495 | >20%                    |                 2 |              0.42475 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8521 | >20%                    |                10 |              0.08521 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8555 | >20%                    |                 2 |              0.42775 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8612 | >20%                    |                 5 |              0.17224 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8646 | 15-20%                  |                 5 |              0.17292 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8661 | >20%                    |                10 |              0.08661 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8698 | >20%                    |                10 |              0.08698 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.8852 |                         |                10 |              0.08852 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8884 | >20%                    |                 2 |              0.4442  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9068 | <5%                     |                 5 |              0.18136 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.917  | >20%                    |                 5 |              0.1834  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9174 | >20%                    |                 5 |              0.18348 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9265 | 15-20%                  |                10 |              0.09265 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9393 | >20%                    |                10 |              0.09393 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9404 | >20%                    |                 5 |              0.18808 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9478 | >20%                    |                 5 |              0.18956 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9547 | >20%                    |                10 |              0.09547 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9584 | >20%                    |                10 |              0.09584 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9655 | >20%                    |                10 |              0.09655 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9725 | >20%                    |                10 |              0.09725 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9949 |                         |                 2 |              0.49745 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0153 | 15-20%                  |                10 |              0.10153 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0224 | >20%                    |                10 |              0.10224 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0239 | 15-20%                  |                10 |              0.10239 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0275 | >20%                    |                10 |              0.10275 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0325 | 10-15%                  |                 2 |              0.51625 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.039  | >20%                    |                10 |              0.1039  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0541 | >20%                    |                10 |              0.10541 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0623 | >20%                    |                 5 |              0.21246 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.0776 | >20%                    |                 5 |              0.21552 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1027 | >20%                    |                10 |              0.11027 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1125 |                         |                 2 |              0.55625 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1164 | 5-10%                   |                10 |              0.11164 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1301 | >20%                    |                10 |              0.11301 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1555 | 5-10%                   |                 2 |              0.57775 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2063 | >20%                    |                10 |              0.12063 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2153 | >20%                    |                10 |              0.12153 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2364 |                         |                 5 |              0.24728 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2899 | 5-10%                   |                 2 |              0.64495 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3185 | 10-15%                  |                10 |              0.13185 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3385 | >20%                    |                10 |              0.13385 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.3452 |                         |                 5 |              0.26904 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.349  | >20%                    |                 2 |              0.6745  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3727 | 15-20%                  |                10 |              0.13727 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3749 | >20%                    |                10 |              0.13749 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4598 | 10-15%                  |                 2 |              0.7299  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5352 | >20%                    |                 2 |              0.7676  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5754 | 5-10%                   |                 5 |              0.31508 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5761 | >20%                    |                 5 |              0.31522 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6294 | >20%                    |                10 |              0.16294 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6701 |                         |                10 |              0.16701 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7398 | 15-20%                  |                10 |              0.17398 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7614 | >20%                    |                 5 |              0.35228 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8705 | >20%                    |                10 |              0.18705 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8867 |                         |                10 |              0.18867 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.0588 | >20%                    |                 5 |              0.41176 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1115 | 15-20%                  |                 5 |              0.4223  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2109 | 5-10%                   |                 2 |              1.10545 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2554 | 5-10%                   |                10 |              0.22554 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6048 | >20%                    |                10 |              0.26048 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.6621 | >20%                    |                10 |              0.26621 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1007 | >20%                    |                10 |              0.31007 |