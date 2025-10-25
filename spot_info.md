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

Data correct as of 2025-10-25 01:45:07.372988, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1195 | 5-10%                   |                 2 |              0.05975 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1316 | >20%                    |                 2 |              0.0658  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.174  | >20%                    |                 5 |              0.0348  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1772 | 10-15%                  |                 2 |              0.0886  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1929 | >20%                    |                 2 |              0.09645 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2167 | >20%                    |                 2 |              0.10835 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2309 | >20%                    |                 5 |              0.04618 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2445 | >20%                    |                 5 |              0.0489  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2447 | >20%                    |                 2 |              0.12235 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2457 | 10-15%                  |                 2 |              0.12285 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2467 | >20%                    |                 2 |              0.12335 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2562 | >20%                    |                 5 |              0.05124 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.26   | 5-10%                   |                 2 |              0.13    |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.261  | >20%                    |                 2 |              0.1305  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2617 | >20%                    |                 2 |              0.13085 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2621 | 10-15%                  |                 2 |              0.13105 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2676 | >20%                    |                 2 |              0.1338  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2778 | >20%                    |                 2 |              0.1389  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.2823 | >20%                    |                 5 |              0.05646 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2827 | 5-10%                   |                 2 |              0.14135 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2833 | >20%                    |                 2 |              0.14165 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3044 | 15-20%                  |                 2 |              0.1522  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3324 | >20%                    |                 2 |              0.1662  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3343 | >20%                    |                 2 |              0.16715 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3465 | >20%                    |                 2 |              0.17325 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3471 | >20%                    |                 2 |              0.17355 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3557 | 15-20%                  |                 2 |              0.17785 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3635 | >20%                    |                 5 |              0.0727  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3651 | 10-15%                  |                 2 |              0.18255 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3686 | >20%                    |                 5 |              0.07372 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3763 | 5-10%                   |                10 |              0.03763 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3776 | 15-20%                  |                 2 |              0.1888  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3847 | >20%                    |                 2 |              0.19235 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3865 | <5%                     |                10 |              0.03865 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3953 | >20%                    |                 2 |              0.19765 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3961 | >20%                    |                 2 |              0.19805 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3977 | >20%                    |                10 |              0.03977 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4003 | >20%                    |                 2 |              0.20015 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4051 | >20%                    |                 2 |              0.20255 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4139 | >20%                    |                 2 |              0.20695 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4143 | 15-20%                  |                 2 |              0.20715 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4178 | >20%                    |                 5 |              0.08356 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4216 | >20%                    |                 5 |              0.08432 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4231 | >20%                    |                 2 |              0.21155 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4269 | 5-10%                   |                 2 |              0.21345 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4291 | >20%                    |                 5 |              0.08582 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4292 | 5-10%                   |                 5 |              0.08584 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4356 | <5%                     |                 2 |              0.2178  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.44   | >20%                    |                 2 |              0.22    |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4412 | 5-10%                   |                 2 |              0.2206  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4425 | >20%                    |                 5 |              0.0885  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4509 | >20%                    |                 2 |              0.22545 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4509 | >20%                    |                 5 |              0.09018 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4601 | >20%                    |                 5 |              0.09202 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4673 | >20%                    |                 5 |              0.09346 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4685 | >20%                    |                 5 |              0.0937  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4694 | >20%                    |                 2 |              0.2347  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4728 | 10-15%                  |                 2 |              0.2364  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4735 | >20%                    |                 5 |              0.0947  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4759 | >20%                    |                 2 |              0.23795 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4834 | >20%                    |                 2 |              0.2417  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4911 | >20%                    |                 2 |              0.24555 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4927 | >20%                    |                 5 |              0.09854 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4935 | >20%                    |                 2 |              0.24675 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4971 | >20%                    |                 2 |              0.24855 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4976 | 15-20%                  |                 5 |              0.09952 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.509  | >20%                    |                10 |              0.0509  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5126 | 15-20%                  |                10 |              0.05126 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5153 | >20%                    |                 5 |              0.10306 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5178 | >20%                    |                 5 |              0.10356 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5341 | 10-15%                  |                 2 |              0.26705 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5457 | >20%                    |                 5 |              0.10914 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5486 | >20%                    |                 5 |              0.10972 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5496 | >20%                    |                 5 |              0.10992 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5519 | 15-20%                  |                 5 |              0.11038 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.554  | 10-15%                  |                 5 |              0.1108  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5564 | 5-10%                   |                 2 |              0.2782  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5578 | >20%                    |                 2 |              0.2789  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.571  | >20%                    |                 5 |              0.1142  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5756 | >20%                    |                 5 |              0.11512 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5766 | >20%                    |                 5 |              0.11532 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5831 | >20%                    |                 5 |              0.11662 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5857 | 15-20%                  |                 2 |              0.29285 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5867 | >20%                    |                 5 |              0.11734 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5942 | >20%                    |                 5 |              0.11884 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5954 | >20%                    |                 5 |              0.11908 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5996 | >20%                    |                 2 |              0.2998  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6134 | >20%                    |                 5 |              0.12268 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6146 | 10-15%                  |                 5 |              0.12292 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6321 | >20%                    |                 5 |              0.12642 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6346 | >20%                    |                 2 |              0.3173  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6397 | 10-15%                  |                 5 |              0.12794 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6406 | >20%                    |                 5 |              0.12812 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6409 | >20%                    |                 5 |              0.12818 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6452 | 15-20%                  |                 2 |              0.3226  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6479 | >20%                    |                 5 |              0.12958 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6559 | 15-20%                  |                 5 |              0.13118 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6594 | >20%                    |                 5 |              0.13188 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6632 | >20%                    |                10 |              0.06632 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6694 | >20%                    |                 2 |              0.3347  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6842 | >20%                    |                 5 |              0.13684 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.689  | >20%                    |                10 |              0.0689  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6921 | >20%                    |                 5 |              0.13842 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6938 | <5%                     |                10 |              0.06938 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7038 | 15-20%                  |                10 |              0.07038 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7083 | >20%                    |                 5 |              0.14166 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7091 | 15-20%                  |                10 |              0.07091 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7104 | 15-20%                  |                10 |              0.07104 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7188 | 15-20%                  |                 5 |              0.14376 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7199 | >20%                    |                10 |              0.07199 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7256 | >20%                    |                 5 |              0.14512 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7319 | 10-15%                  |                 2 |              0.36595 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7324 | >20%                    |                10 |              0.07324 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7336 | >20%                    |                 2 |              0.3668  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7346 | 15-20%                  |                10 |              0.07346 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7675 | >20%                    |                10 |              0.07675 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7716 | >20%                    |                 5 |              0.15432 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7776 | >20%                    |                10 |              0.07776 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7888 | >20%                    |                10 |              0.07888 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7892 | 15-20%                  |                10 |              0.07892 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8017 | 15-20%                  |                 5 |              0.16034 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.804  | >20%                    |                10 |              0.0804  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8047 | >20%                    |                 5 |              0.16094 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8112 | >20%                    |                10 |              0.08112 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.822  | <5%                     |                10 |              0.0822  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.827  | >20%                    |                10 |              0.0827  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8386 | >20%                    |                10 |              0.08386 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8397 | >20%                    |                 5 |              0.16794 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8521 | 15-20%                  |                10 |              0.08521 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8558 | 5-10%                   |                10 |              0.08558 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8613 | <5%                     |                10 |              0.08613 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8664 | 15-20%                  |                10 |              0.08664 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8682 | 10-15%                  |                 5 |              0.17364 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8695 | 10-15%                  |                 2 |              0.43475 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8724 | >20%                    |                 5 |              0.17448 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8755 | 15-20%                  |                10 |              0.08755 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8769 | >20%                    |                10 |              0.08769 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8847 | >20%                    |                 2 |              0.44235 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.894  | >20%                    |                 5 |              0.1788  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9063 | >20%                    |                10 |              0.09063 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9369 | 10-15%                  |                10 |              0.09369 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9408 | >20%                    |                 2 |              0.4704  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9472 | 10-15%                  |                10 |              0.09472 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9737 | 15-20%                  |                10 |              0.09737 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9908 | >20%                    |                 2 |              0.4954  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9932 | 10-15%                  |                10 |              0.09932 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0205 | >20%                    |                10 |              0.10205 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      1.0224 | 5-10%                   |                10 |              0.10224 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.024  | >20%                    |                 5 |              0.2048  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.043  | >20%                    |                10 |              0.1043  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.071  | 15-20%                  |                10 |              0.1071  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0899 | 15-20%                  |                10 |              0.10899 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0913 | >20%                    |                10 |              0.10913 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0951 | 10-15%                  |                 2 |              0.54755 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0987 | >20%                    |                10 |              0.10987 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1068 | >20%                    |                10 |              0.11068 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.112  | >20%                    |                 5 |              0.2224  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1232 | >20%                    |                10 |              0.11232 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1264 | 5-10%                   |                10 |              0.11264 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1338 | 10-15%                  |                10 |              0.11338 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1532 | >20%                    |                 5 |              0.23064 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1579 | 5-10%                   |                10 |              0.11579 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1913 | <5%                     |                10 |              0.11913 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1939 | >20%                    |                10 |              0.11939 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2105 | >20%                    |                 5 |              0.2421  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.268  | 10-15%                  |                10 |              0.1268  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.315  | 5-10%                   |                 2 |              0.6575  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3177 | >20%                    |                10 |              0.13177 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3698 | 10-15%                  |                 5 |              0.27396 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6007 | >20%                    |                10 |              0.16007 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6274 | 10-15%                  |                 5 |              0.32548 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6474 | >20%                    |                10 |              0.16474 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.6678 | >20%                    |                10 |              0.16678 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7614 | >20%                    |                10 |              0.17614 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1277 | 10-15%                  |                10 |              0.21277 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3739 | 15-20%                  |                10 |              0.23739 |