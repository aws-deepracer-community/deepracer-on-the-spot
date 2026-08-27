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

Data correct as of 2026-08-27 08:25:36.611564, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1506 | >20%                    |                 2 |              0.0753  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1792 | 15-20%                  |                 2 |              0.0896  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2125 | >20%                    |                 2 |              0.10625 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2156 | 15-20%                  |                 2 |              0.1078  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2183 | >20%                    |                 2 |              0.10915 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2312 | 10-15%                  |                 2 |              0.1156  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2346 | >20%                    |                 2 |              0.1173  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2521 | 10-15%                  |                 2 |              0.12605 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.259  | 15-20%                  |                 2 |              0.1295  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2633 | >20%                    |                 2 |              0.13165 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2647 | >20%                    |                 5 |              0.05294 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2692 | >20%                    |                 2 |              0.1346  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2767 | 5-10%                   |                10 |              0.02767 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2941 | >20%                    |                 2 |              0.14705 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3113 | >20%                    |                 2 |              0.15565 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3169 | >20%                    |                 2 |              0.15845 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3227 | >20%                    |                 5 |              0.06454 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3231 | 15-20%                  |                 5 |              0.06462 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3361 | >20%                    |                 5 |              0.06722 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3403 | >20%                    |                 2 |              0.17015 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3498 | <5%                     |                 2 |              0.1749  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3538 | 10-15%                  |                 2 |              0.1769  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3564 | >20%                    |                 5 |              0.07128 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3578 | >20%                    |                 2 |              0.1789  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3624 | 5-10%                   |                10 |              0.03624 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3653 | >20%                    |                 5 |              0.07306 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3716 | >20%                    |                 5 |              0.07432 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3812 | <5%                     |                 2 |              0.1906  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3845 | >20%                    |                 2 |              0.19225 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3858 | >20%                    |                 5 |              0.07716 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3879 | 15-20%                  |                 5 |              0.07758 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3986 | >20%                    |                10 |              0.03986 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3997 | >20%                    |                 5 |              0.07994 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4041 | 15-20%                  |                 2 |              0.20205 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4042 | >20%                    |                 2 |              0.2021  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4078 | >20%                    |                10 |              0.04078 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4102 | >20%                    |                10 |              0.04102 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4166 | 10-15%                  |                 2 |              0.2083  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4274 | >20%                    |                 5 |              0.08548 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4321 | >20%                    |                 2 |              0.21605 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4359 | >20%                    |                 5 |              0.08718 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.436  | >20%                    |                 2 |              0.218   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4401 | >20%                    |                 2 |              0.22005 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4415 | >20%                    |                 5 |              0.0883  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4462 | >20%                    |                 2 |              0.2231  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.447  | 15-20%                  |                 5 |              0.0894  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4511 | >20%                    |                10 |              0.04511 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4555 | >20%                    |                10 |              0.04555 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4639 | >20%                    |                 5 |              0.09278 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4694 | >20%                    |                 5 |              0.09388 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4695 | 15-20%                  |                 2 |              0.23475 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4759 | >20%                    |                 5 |              0.09518 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4993 | >20%                    |                 5 |              0.09986 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5013 | <5%                     |                 5 |              0.10026 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.5015 |                         |                 2 |              0.25075 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5153 | 15-20%                  |                10 |              0.05153 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5214 | >20%                    |                 5 |              0.10428 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5224 | >20%                    |                10 |              0.05224 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5242 | >20%                    |                 5 |              0.10484 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5257 | >20%                    |                 5 |              0.10514 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5263 | <5%                     |                 2 |              0.26315 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5313 | 5-10%                   |                 2 |              0.26565 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5401 | >20%                    |                 2 |              0.27005 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5522 | >20%                    |                 2 |              0.2761  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5538 | >20%                    |                 2 |              0.2769  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5609 | >20%                    |                10 |              0.05609 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.566  | >20%                    |                 5 |              0.1132  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5783 | >20%                    |                10 |              0.05783 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5863 | >20%                    |                 5 |              0.11726 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5915 | >20%                    |                 5 |              0.1183  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5962 | >20%                    |                 5 |              0.11924 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5971 | >20%                    |                 2 |              0.29855 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.602  |                         |                 5 |              0.1204  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6077 | 10-15%                  |                 5 |              0.12154 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6206 | 10-15%                  |                10 |              0.06206 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6211 | >20%                    |                 5 |              0.12422 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6381 | 5-10%                   |                 5 |              0.12762 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6401 | >20%                    |                10 |              0.06401 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6489 | >20%                    |                 2 |              0.32445 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6493 | >20%                    |                 2 |              0.32465 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6693 | >20%                    |                 5 |              0.13386 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6702 | >20%                    |                 2 |              0.3351  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.679  | >20%                    |                 5 |              0.1358  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6794 | 5-10%                   |                10 |              0.06794 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6857 | 15-20%                  |                10 |              0.06857 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7079 | >20%                    |                 2 |              0.35395 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7082 | >20%                    |                10 |              0.07082 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7176 | >20%                    |                10 |              0.07176 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7391 | 15-20%                  |                 2 |              0.36955 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.761  | >20%                    |                10 |              0.0761  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.763  | >20%                    |                 2 |              0.3815  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7654 | 5-10%                   |                10 |              0.07654 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7729 | >20%                    |                10 |              0.07729 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7912 | >20%                    |                 5 |              0.15824 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.799  | 15-20%                  |                10 |              0.0799  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7996 | 5-10%                   |                10 |              0.07996 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8053 | >20%                    |                10 |              0.08053 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8132 | >20%                    |                10 |              0.08132 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8191 | <5%                     |                10 |              0.08191 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.823  | 15-20%                  |                10 |              0.0823  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8278 | >20%                    |                 5 |              0.16556 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8287 | >20%                    |                10 |              0.08287 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8337 | >20%                    |                10 |              0.08337 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8389 | 10-15%                  |                 2 |              0.41945 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8436 | >20%                    |                10 |              0.08436 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8478 | >20%                    |                 5 |              0.16956 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8526 | >20%                    |                10 |              0.08526 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8532 | >20%                    |                 5 |              0.17064 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8554 | >20%                    |                 5 |              0.17108 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8625 | >20%                    |                10 |              0.08625 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8739 |                         |                10 |              0.08739 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9254 |                         |                 2 |              0.4627  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9323 | 10-15%                  |                 2 |              0.46615 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9363 | >20%                    |                 5 |              0.18726 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9464 | >20%                    |                 2 |              0.4732  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9576 | >20%                    |                10 |              0.09576 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9611 | >20%                    |                10 |              0.09611 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9619 | 5-10%                   |                 2 |              0.48095 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9846 | 15-20%                  |                10 |              0.09846 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9878 | 5-10%                   |                 5 |              0.19756 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      1.0133 | >20%                    |                 5 |              0.20266 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0228 | >20%                    |                10 |              0.10228 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0336 | >20%                    |                10 |              0.10336 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0365 | >20%                    |                10 |              0.10365 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0469 | >20%                    |                 5 |              0.20938 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0604 | >20%                    |                 5 |              0.21208 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0717 | >20%                    |                 5 |              0.21434 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0765 | 15-20%                  |                10 |              0.10765 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0857 | >20%                    |                 5 |              0.21714 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0865 | 10-15%                  |                 2 |              0.54325 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1136 | >20%                    |                10 |              0.11136 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1271 | >20%                    |                 5 |              0.22542 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.1417 | >20%                    |                 5 |              0.22834 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1425 | 5-10%                   |                10 |              0.11425 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1599 | >20%                    |                 2 |              0.57995 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1764 | >20%                    |                10 |              0.11764 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2026 | 15-20%                  |                10 |              0.12026 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2427 | >20%                    |                10 |              0.12427 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2615 |                         |                 5 |              0.2523  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.2713 |                         |                 2 |              0.63565 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3148 | >20%                    |                 5 |              0.26296 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.3389 |                         |                10 |              0.13389 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.3489 | >20%                    |                 5 |              0.26978 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.4048 |                         |                 5 |              0.28096 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.4167 | >20%                    |                10 |              0.14167 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4377 | 10-15%                  |                10 |              0.14377 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5328 | 15-20%                  |                 5 |              0.30656 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5856 | >20%                    |                10 |              0.15856 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6483 | >20%                    |                10 |              0.16483 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6767 | 15-20%                  |                10 |              0.16767 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6924 |                         |                10 |              0.16924 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.8941 | 5-10%                   |                 2 |              0.94705 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9079 | 5-10%                   |                 2 |              0.95395 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      2.4483 | >20%                    |                10 |              0.24483 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.5028 | >20%                    |                 5 |              0.50056 |