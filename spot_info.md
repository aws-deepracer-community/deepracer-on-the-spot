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

Data correct as of 2025-07-28 02:11:10.465828, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1324 | 5-10%                   |                 2 |              0.0662  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1406 | >20%                    |                 2 |              0.0703  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1574 | 5-10%                   |                 2 |              0.0787  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1981 | <5%                     |                 5 |              0.03962 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2023 | >20%                    |                 2 |              0.10115 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2234 | >20%                    |                 2 |              0.1117  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2323 | 15-20%                  |                 2 |              0.11615 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2437 | <5%                     |                 5 |              0.04874 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2444 | >20%                    |                 2 |              0.1222  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2466 | >20%                    |                 2 |              0.1233  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2471 | 15-20%                  |                 2 |              0.12355 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2541 | >20%                    |                 2 |              0.12705 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2589 | >20%                    |                 2 |              0.12945 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2668 | >20%                    |                 2 |              0.1334  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2687 | 5-10%                   |                 2 |              0.13435 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2867 | 5-10%                   |                 5 |              0.05734 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2897 | >20%                    |                 5 |              0.05794 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2983 | 15-20%                  |                 5 |              0.05966 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3025 | <5%                     |                 2 |              0.15125 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3148 | >20%                    |                 5 |              0.06296 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3176 | 5-10%                   |                 2 |              0.1588  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3234 | <5%                     |                10 |              0.03234 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3291 | 15-20%                  |                 2 |              0.16455 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3312 | >20%                    |                 5 |              0.06624 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3343 | >20%                    |                 5 |              0.06686 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.335  | >20%                    |                 2 |              0.1675  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3443 | 5-10%                   |                 2 |              0.17215 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3452 | 15-20%                  |                 2 |              0.1726  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3476 | <5%                     |                 2 |              0.1738  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3479 | 15-20%                  |                 2 |              0.17395 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.362  | >20%                    |                 5 |              0.0724  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3625 | >20%                    |                 5 |              0.0725  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3713 | >20%                    |                 2 |              0.18565 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3783 | >20%                    |                 2 |              0.18915 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.382  | >20%                    |                 5 |              0.0764  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3921 | >20%                    |                 2 |              0.19605 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.3999 | >20%                    |                10 |              0.03999 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4032 | >20%                    |                 2 |              0.2016  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4094 | 15-20%                  |                10 |              0.04094 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4095 | <5%                     |                 2 |              0.20475 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4109 | >20%                    |                 5 |              0.08218 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.413  | 10-15%                  |                 2 |              0.2065  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4178 | >20%                    |                 2 |              0.2089  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4304 | >20%                    |                 2 |              0.2152  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4428 | 15-20%                  |                10 |              0.04428 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.444  | >20%                    |                 5 |              0.0888  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4459 | <5%                     |                10 |              0.04459 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4462 | 15-20%                  |                 5 |              0.08924 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4463 | 15-20%                  |                10 |              0.04463 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4481 | <5%                     |                 2 |              0.22405 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4484 | >20%                    |                 2 |              0.2242  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.449  | >20%                    |                 2 |              0.2245  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4501 | 5-10%                   |                 2 |              0.22505 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4604 | >20%                    |                 2 |              0.2302  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4634 | >20%                    |                 5 |              0.09268 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4654 | >20%                    |                 5 |              0.09308 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4813 | >20%                    |                 2 |              0.24065 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4875 | 10-15%                  |                 2 |              0.24375 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4892 | 5-10%                   |                 2 |              0.2446  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4933 | >20%                    |                 2 |              0.24665 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.497  | 10-15%                  |                 5 |              0.0994  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4991 | 5-10%                   |                 5 |              0.09982 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4999 | >20%                    |                 5 |              0.09998 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5011 | >20%                    |                 2 |              0.25055 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5036 | >20%                    |                 2 |              0.2518  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5066 | >20%                    |                 2 |              0.2533  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5233 | >20%                    |                 5 |              0.10466 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5248 | <5%                     |                 2 |              0.2624  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5264 | >20%                    |                 5 |              0.10528 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5333 | 15-20%                  |                 2 |              0.26665 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5351 | >20%                    |                 5 |              0.10702 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5408 | 15-20%                  |                10 |              0.05408 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5451 | >20%                    |                 5 |              0.10902 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5482 | 10-15%                  |                 2 |              0.2741  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5514 | 10-15%                  |                 5 |              0.11028 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.562  | 10-15%                  |                 5 |              0.1124  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5686 | >20%                    |                 5 |              0.11372 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5706 | >20%                    |                 2 |              0.2853  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5782 | >20%                    |                 2 |              0.2891  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5798 | >20%                    |                 2 |              0.2899  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5839 | >20%                    |                 5 |              0.11678 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5937 | 5-10%                   |                 5 |              0.11874 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5948 | >20%                    |                 5 |              0.11896 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5954 | >20%                    |                 2 |              0.2977  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5994 | 5-10%                   |                 2 |              0.2997  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6005 | >20%                    |                 5 |              0.1201  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6022 | <5%                     |                 5 |              0.12044 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6025 | >20%                    |                 5 |              0.1205  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6095 | >20%                    |                 2 |              0.30475 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6188 | >20%                    |                 2 |              0.3094  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6196 | 5-10%                   |                 5 |              0.12392 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6275 | >20%                    |                 5 |              0.1255  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6305 | >20%                    |                10 |              0.06305 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6366 | <5%                     |                10 |              0.06366 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6482 | >20%                    |                10 |              0.06482 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6487 | >20%                    |                 5 |              0.12974 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6595 | >20%                    |                 5 |              0.1319  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6611 | 10-15%                  |                 5 |              0.13222 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6785 | >20%                    |                 2 |              0.33925 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6905 | 15-20%                  |                 2 |              0.34525 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6921 | >20%                    |                10 |              0.06921 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6952 | >20%                    |                 5 |              0.13904 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6957 | <5%                     |                 5 |              0.13914 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7023 | 15-20%                  |                 2 |              0.35115 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7058 | 5-10%                   |                 5 |              0.14116 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7079 | <5%                     |                 5 |              0.14158 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7337 | 15-20%                  |                10 |              0.07337 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7355 | >20%                    |                 5 |              0.1471  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7471 | >20%                    |                10 |              0.07471 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7517 | 15-20%                  |                10 |              0.07517 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7563 | >20%                    |                 5 |              0.15126 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7636 | >20%                    |                 5 |              0.15272 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7739 | <5%                     |                10 |              0.07739 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7854 | 15-20%                  |                 5 |              0.15708 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7981 | >20%                    |                10 |              0.07981 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8044 | >20%                    |                 5 |              0.16088 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8119 | >20%                    |                 2 |              0.40595 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.815  | >20%                    |                 5 |              0.163   |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8222 | >20%                    |                 5 |              0.16444 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8247 | 5-10%                   |                10 |              0.08247 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8636 | >20%                    |                10 |              0.08636 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8644 | >20%                    |                10 |              0.08644 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8726 | <5%                     |                10 |              0.08726 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8811 | 15-20%                  |                10 |              0.08811 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8826 | 5-10%                   |                10 |              0.08826 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8842 | >20%                    |                10 |              0.08842 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8865 | <5%                     |                10 |              0.08865 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8947 | 5-10%                   |                 5 |              0.17894 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8979 | 5-10%                   |                10 |              0.08979 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9099 | 15-20%                  |                10 |              0.09099 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9178 | >20%                    |                 5 |              0.18356 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9307 | 5-10%                   |                10 |              0.09307 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9329 | >20%                    |                10 |              0.09329 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9544 | 15-20%                  |                 5 |              0.19088 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9576 | 15-20%                  |                10 |              0.09576 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9591 | 5-10%                   |                10 |              0.09591 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.96   | 5-10%                   |                10 |              0.096   |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.968  | >20%                    |                10 |              0.0968  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9752 | 15-20%                  |                10 |              0.09752 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9881 | 5-10%                   |                10 |              0.09881 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9985 | <5%                     |                10 |              0.09985 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0019 | >20%                    |                10 |              0.10019 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0036 | 15-20%                  |                10 |              0.10036 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.009  | 15-20%                  |                10 |              0.1009  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0203 | >20%                    |                 2 |              0.51015 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0372 | <5%                     |                10 |              0.10372 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.077  | >20%                    |                 5 |              0.2154  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0859 | 5-10%                   |                10 |              0.10859 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0859 | >20%                    |                10 |              0.10859 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0986 | >20%                    |                10 |              0.10986 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1038 | 15-20%                  |                10 |              0.11038 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1145 | >20%                    |                10 |              0.11145 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1289 | >20%                    |                10 |              0.11289 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1338 | >20%                    |                10 |              0.11338 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1484 | >20%                    |                 2 |              0.5742  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1525 | >20%                    |                10 |              0.11525 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.156  | >20%                    |                10 |              0.1156  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1729 | >20%                    |                 5 |              0.23458 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.2096 | >20%                    |                 5 |              0.24192 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2159 | <5%                     |                 2 |              0.60795 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2789 | <5%                     |                10 |              0.12789 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.31   | >20%                    |                 5 |              0.262   |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3189 | >20%                    |                10 |              0.13189 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3454 | 15-20%                  |                 5 |              0.26908 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3956 | >20%                    |                10 |              0.13956 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.4018 | >20%                    |                 2 |              0.7009  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4429 | 5-10%                   |                10 |              0.14429 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.523  | >20%                    |                 5 |              0.3046  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5504 | >20%                    |                10 |              0.15504 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5742 | <5%                     |                 5 |              0.31484 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.6688 | 5-10%                   |                 2 |              0.8344  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9344 | 10-15%                  |                10 |              0.19344 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.031  | 5-10%                   |                10 |              0.2031  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0755 | <5%                     |                10 |              0.20755 |