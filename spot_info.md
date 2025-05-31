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

Data correct as of 2025-05-31 01:51:15.771040, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2    | >20%                    |                 2 |              0.1     |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.215  | >20%                    |                 2 |              0.1075  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2325 | >20%                    |                 2 |              0.11625 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2329 | 5-10%                   |                 5 |              0.04658 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2364 | 5-10%                   |                 2 |              0.1182  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2382 | >20%                    |                 2 |              0.1191  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.241  | <5%                     |                 2 |              0.1205  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 10-15%                  |                10 |              0.02419 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2512 | >20%                    |                10 |              0.02512 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2536 | >20%                    |                 2 |              0.1268  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2551 | >20%                    |                10 |              0.02551 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2571 | 15-20%                  |                 2 |              0.12855 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.26   | 10-15%                  |                 2 |              0.13    |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2621 | 10-15%                  |                 2 |              0.13105 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2686 | >20%                    |                 2 |              0.1343  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2696 | 15-20%                  |                 5 |              0.05392 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2733 | <5%                     |                 2 |              0.13665 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2767 | >20%                    |                 2 |              0.13835 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2774 | 15-20%                  |                 2 |              0.1387  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2924 | >20%                    |                 2 |              0.1462  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3042 | 15-20%                  |                 2 |              0.1521  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.31   | 15-20%                  |                 2 |              0.155   |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3106 | 15-20%                  |                 2 |              0.1553  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3238 | >20%                    |                 2 |              0.1619  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3364 | 15-20%                  |                 2 |              0.1682  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3371 | >20%                    |                 5 |              0.06742 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3396 | >20%                    |                 5 |              0.06792 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3439 | >20%                    |                 2 |              0.17195 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3457 | >20%                    |                 5 |              0.06914 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3465 | >20%                    |                 2 |              0.17325 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3515 | >20%                    |                10 |              0.03515 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3529 | >20%                    |                 5 |              0.07058 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3662 | 15-20%                  |                 2 |              0.1831  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3699 | 5-10%                   |                 2 |              0.18495 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3705 | >20%                    |                 5 |              0.0741  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3718 | 15-20%                  |                 2 |              0.1859  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3746 | 5-10%                   |                 2 |              0.1873  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3751 | 10-15%                  |                 5 |              0.07502 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.377  | >20%                    |                 5 |              0.0754  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3771 | >20%                    |                 2 |              0.18855 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3772 | <5%                     |                 2 |              0.1886  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3871 | >20%                    |                 2 |              0.19355 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3892 | 15-20%                  |                 2 |              0.1946  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3952 | >20%                    |                10 |              0.03952 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4051 | 10-15%                  |                 5 |              0.08102 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4078 | <5%                     |                 5 |              0.08156 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4082 | >20%                    |                 2 |              0.2041  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4112 | >20%                    |                 2 |              0.2056  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4175 | >20%                    |                 2 |              0.20875 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4199 | 10-15%                  |                 2 |              0.20995 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4234 | <5%                     |                 2 |              0.2117  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4245 | >20%                    |                 5 |              0.0849  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4346 | 15-20%                  |                 5 |              0.08692 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4349 | 15-20%                  |                 5 |              0.08698 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4371 | >20%                    |                10 |              0.04371 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4415 | >20%                    |                 2 |              0.22075 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4421 | >20%                    |                 5 |              0.08842 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4528 | 10-15%                  |                 5 |              0.09056 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4557 | 15-20%                  |                 5 |              0.09114 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4565 | >20%                    |                 2 |              0.22825 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4581 | >20%                    |                 2 |              0.22905 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4588 | 5-10%                   |                 5 |              0.09176 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4659 | >20%                    |                 2 |              0.23295 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4675 | 15-20%                  |                 5 |              0.0935  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4724 | >20%                    |                 2 |              0.2362  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4729 | >20%                    |                 5 |              0.09458 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4736 | <5%                     |                 5 |              0.09472 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4763 | 15-20%                  |                10 |              0.04763 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4807 | >20%                    |                 5 |              0.09614 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4871 | >20%                    |                 2 |              0.24355 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4903 | 10-15%                  |                 5 |              0.09806 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.491  | 5-10%                   |                 5 |              0.0982  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4918 | <5%                     |                 5 |              0.09836 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4921 | >20%                    |                 5 |              0.09842 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4945 | 15-20%                  |                 2 |              0.24725 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4969 | <5%                     |                 5 |              0.09938 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5003 | 15-20%                  |                 5 |              0.10006 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5012 | 15-20%                  |                10 |              0.05012 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5046 | >20%                    |                 2 |              0.2523  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5116 | >20%                    |                 5 |              0.10232 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5261 | >20%                    |                 5 |              0.10522 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5276 | >20%                    |                 5 |              0.10552 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5309 | >20%                    |                 2 |              0.26545 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5379 | 10-15%                  |                10 |              0.05379 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5476 | >20%                    |                 5 |              0.10952 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5503 | 5-10%                   |                 5 |              0.11006 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5664 | 15-20%                  |                10 |              0.05664 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5689 | 10-15%                  |                 2 |              0.28445 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5788 | >20%                    |                 5 |              0.11576 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5824 | >20%                    |                10 |              0.05824 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5827 | >20%                    |                10 |              0.05827 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5933 | >20%                    |                 2 |              0.29665 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5941 | >20%                    |                 5 |              0.11882 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.598  | >20%                    |                 2 |              0.299   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6051 | >20%                    |                 5 |              0.12102 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6091 | 5-10%                   |                 2 |              0.30455 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.616  | >20%                    |                 5 |              0.1232  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6166 | 10-15%                  |                 5 |              0.12332 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6215 | 5-10%                   |                 2 |              0.31075 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6306 | <5%                     |                 5 |              0.12612 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6337 | <5%                     |                10 |              0.06337 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6354 | >20%                    |                 5 |              0.12708 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6463 | >20%                    |                10 |              0.06463 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6466 | 5-10%                   |                10 |              0.06466 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.655  | >20%                    |                 2 |              0.3275  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6607 | >20%                    |                 5 |              0.13214 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6616 | >20%                    |                 5 |              0.13232 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6659 | <5%                     |                10 |              0.06659 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6739 | 15-20%                  |                 5 |              0.13478 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6751 | 10-15%                  |                10 |              0.06751 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6756 | >20%                    |                 2 |              0.3378  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.679  | 10-15%                  |                 2 |              0.3395  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6876 | >20%                    |                 2 |              0.3438  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7032 | 10-15%                  |                10 |              0.07032 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7048 | 10-15%                  |                 5 |              0.14096 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7125 | >20%                    |                10 |              0.07125 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7233 | <5%                     |                 5 |              0.14466 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7237 | <5%                     |                10 |              0.07237 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7263 | >20%                    |                10 |              0.07263 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.729  | >20%                    |                10 |              0.0729  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7346 | 10-15%                  |                 5 |              0.14692 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7401 | >20%                    |                 5 |              0.14802 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7417 | >20%                    |                10 |              0.07417 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7511 | >20%                    |                10 |              0.07511 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7776 | 15-20%                  |                10 |              0.07776 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7794 | >20%                    |                10 |              0.07794 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7801 | >20%                    |                10 |              0.07801 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7919 | >20%                    |                 5 |              0.15838 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7928 | >20%                    |                10 |              0.07928 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7998 | >20%                    |                 5 |              0.15996 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.808  | 10-15%                  |                10 |              0.0808  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8133 | 10-15%                  |                 5 |              0.16266 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8306 | 15-20%                  |                10 |              0.08306 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8403 | >20%                    |                10 |              0.08403 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8462 | >20%                    |                10 |              0.08462 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.865  | <5%                     |                10 |              0.0865  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8656 | 5-10%                   |                10 |              0.08656 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8839 | >20%                    |                10 |              0.08839 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8936 | >20%                    |                10 |              0.08936 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9089 | >20%                    |                10 |              0.09089 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9156 | >20%                    |                 2 |              0.4578  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9182 | 5-10%                   |                 2 |              0.4591  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9296 | 10-15%                  |                 5 |              0.18592 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9486 | >20%                    |                10 |              0.09486 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9494 | >20%                    |                10 |              0.09494 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9604 | >20%                    |                10 |              0.09604 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9635 | >20%                    |                 5 |              0.1927  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9651 | >20%                    |                10 |              0.09651 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9815 | >20%                    |                 2 |              0.49075 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9895 | >20%                    |                 5 |              0.1979  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9923 | <5%                     |                10 |              0.09923 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9943 | 10-15%                  |                 5 |              0.19886 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0226 | >20%                    |                 2 |              0.5113  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0512 | 15-20%                  |                10 |              0.10512 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0542 | <5%                     |                10 |              0.10542 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0699 | 15-20%                  |                10 |              0.10699 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0738 | >20%                    |                 5 |              0.21476 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0885 | <5%                     |                 2 |              0.54425 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1739 | 5-10%                   |                10 |              0.11739 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1931 | 15-20%                  |                10 |              0.11931 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2355 | 10-15%                  |                10 |              0.12355 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2961 | >20%                    |                10 |              0.12961 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3043 | >20%                    |                10 |              0.13043 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3056 | 10-15%                  |                10 |              0.13056 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3165 | 5-10%                   |                10 |              0.13165 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3416 | >20%                    |                 5 |              0.26832 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3454 | 15-20%                  |                10 |              0.13454 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3701 | >20%                    |                10 |              0.13701 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3888 | >20%                    |                 2 |              0.6944  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4365 | <5%                     |                 5 |              0.2873  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4977 | >20%                    |                10 |              0.14977 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0898 | <5%                     |                10 |              0.20898 |