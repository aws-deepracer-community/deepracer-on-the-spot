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

Data correct as of 2026-08-17 01:34:48.384799, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1673 | >20%                    |                 2 |              0.08365 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1728 | >20%                    |                 2 |              0.0864  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2056 | 15-20%                  |                 2 |              0.1028  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2065 | >20%                    |                 2 |              0.10325 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.207  | >20%                    |                 2 |              0.1035  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2084 | >20%                    |                 2 |              0.1042  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2306 | 10-15%                  |                 2 |              0.1153  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2439 | >20%                    |                 2 |              0.12195 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2443 | 15-20%                  |                 2 |              0.12215 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2652 | 15-20%                  |                 2 |              0.1326  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2679 | >20%                    |                 2 |              0.13395 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2769 | >20%                    |                 5 |              0.05538 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2827 | 10-15%                  |                 2 |              0.14135 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2853 | >20%                    |                 2 |              0.14265 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2867 | >20%                    |                 2 |              0.14335 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3061 | >20%                    |                 2 |              0.15305 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3108 | >20%                    |                 5 |              0.06216 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3292 | >20%                    |                 2 |              0.1646  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3306 | 15-20%                  |                 5 |              0.06612 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3404 | >20%                    |                 2 |              0.1702  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3508 | 5-10%                   |                10 |              0.03508 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3603 | 15-20%                  |                 2 |              0.18015 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3619 | 5-10%                   |                10 |              0.03619 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3633 | >20%                    |                 5 |              0.07266 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3721 | <5%                     |                 2 |              0.18605 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3738 | >20%                    |                 5 |              0.07476 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3797 | >20%                    |                10 |              0.03797 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.38   | 10-15%                  |                 2 |              0.19    |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3822 | >20%                    |                 5 |              0.07644 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3862 | >20%                    |                 5 |              0.07724 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3904 | >20%                    |                 5 |              0.07808 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3912 | 15-20%                  |                 5 |              0.07824 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3928 | <5%                     |                 2 |              0.1964  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3992 | >20%                    |                 5 |              0.07984 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4071 | 15-20%                  |                 2 |              0.20355 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4133 | >20%                    |                 2 |              0.20665 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4157 | >20%                    |                10 |              0.04157 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4179 | >20%                    |                 2 |              0.20895 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4191 | >20%                    |                 5 |              0.08382 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4339 | >20%                    |                10 |              0.04339 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.435  | >20%                    |                 5 |              0.087   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4503 | >20%                    |                 2 |              0.22515 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4561 | 10-15%                  |                 2 |              0.22805 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4594 | >20%                    |                 2 |              0.2297  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4641 | >20%                    |                 2 |              0.23205 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4651 | >20%                    |                 5 |              0.09302 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4861 | >20%                    |                 2 |              0.24305 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4879 | >20%                    |                 2 |              0.24395 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4928 | >20%                    |                10 |              0.04928 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4942 | >20%                    |                 5 |              0.09884 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4951 | >20%                    |                 2 |              0.24755 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5003 | >20%                    |                 2 |              0.25015 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5089 | >20%                    |                 5 |              0.10178 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.51   | >20%                    |                 5 |              0.102   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5142 | >20%                    |                10 |              0.05142 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5145 | >20%                    |                 5 |              0.1029  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5219 | 5-10%                   |                10 |              0.05219 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5269 | >20%                    |                 2 |              0.26345 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5288 | >20%                    |                 5 |              0.10576 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5361 | >20%                    |                10 |              0.05361 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5387 | >20%                    |                 2 |              0.26935 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5448 | 5-10%                   |                 2 |              0.2724  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.547  | <5%                     |                 2 |              0.2735  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5601 | >20%                    |                 2 |              0.28005 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5667 | 15-20%                  |                 5 |              0.11334 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5706 | >20%                    |                 5 |              0.11412 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5708 | >20%                    |                 5 |              0.11416 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5716 | 10-15%                  |                10 |              0.05716 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5802 | >20%                    |                10 |              0.05802 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5823 | 10-15%                  |                 5 |              0.11646 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.592  | >20%                    |                 5 |              0.1184  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5933 | <5%                     |                 5 |              0.11866 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5958 | >20%                    |                 5 |              0.11916 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5987 | >20%                    |                 5 |              0.11974 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6137 | >20%                    |                 5 |              0.12274 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6178 | 15-20%                  |                10 |              0.06178 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6207 | >20%                    |                 5 |              0.12414 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6253 | >20%                    |                10 |              0.06253 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6442 | 5-10%                   |                 5 |              0.12884 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6597 | >20%                    |                 2 |              0.32985 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6613 | >20%                    |                 5 |              0.13226 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6614 | >20%                    |                 5 |              0.13228 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6615 | >20%                    |                10 |              0.06615 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6765 | >20%                    |                 2 |              0.33825 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6909 | >20%                    |                10 |              0.06909 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6976 | >20%                    |                 5 |              0.13952 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6996 | >20%                    |                 5 |              0.13992 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7051 | >20%                    |                 2 |              0.35255 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.72   | >20%                    |                10 |              0.072   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7343 | >20%                    |                 2 |              0.36715 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7453 | 15-20%                  |                10 |              0.07453 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7512 | >20%                    |                10 |              0.07512 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7586 | >20%                    |                10 |              0.07586 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.771  | >20%                    |                10 |              0.0771  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7961 | >20%                    |                 5 |              0.15922 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8326 | 10-15%                  |                 2 |              0.4163  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8327 | >20%                    |                 5 |              0.16654 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8336 | 10-15%                  |                 2 |              0.4168  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8347 | >20%                    |                10 |              0.08347 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.841  | <5%                     |                10 |              0.0841  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8498 | >20%                    |                 5 |              0.16996 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8706 | 15-20%                  |                10 |              0.08706 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8709 | >20%                    |                 5 |              0.17418 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8809 | >20%                    |                10 |              0.08809 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.884  | >20%                    |                10 |              0.0884  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8859 | 5-10%                   |                10 |              0.08859 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8905 | >20%                    |                10 |              0.08905 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8976 | >20%                    |                10 |              0.08976 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8983 | >20%                    |                 2 |              0.44915 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9072 | 5-10%                   |                10 |              0.09072 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.912  |                         |                 2 |              0.456   |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9138 | >20%                    |                 5 |              0.18276 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9213 | >20%                    |                10 |              0.09213 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9219 | >20%                    |                10 |              0.09219 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.9225 | >20%                    |                 5 |              0.1845  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9227 | 15-20%                  |                10 |              0.09227 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.932  | 15-20%                  |                10 |              0.0932  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9368 | >20%                    |                10 |              0.09368 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9487 | >20%                    |                10 |              0.09487 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9547 | >20%                    |                 5 |              0.19094 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9676 |                         |                 2 |              0.4838  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9873 | >20%                    |                10 |              0.09873 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0077 | 15-20%                  |                 2 |              0.50385 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0469 | 15-20%                  |                10 |              0.10469 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0587 | >20%                    |                 5 |              0.21174 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0622 | >20%                    |                 5 |              0.21244 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0652 | >20%                    |                10 |              0.10652 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0866 |                         |                 5 |              0.21732 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1336 |                         |                10 |              0.11336 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1499 | >20%                    |                 2 |              0.57495 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1609 | >20%                    |                 5 |              0.23218 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1794 | >20%                    |                10 |              0.11794 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.2227 | >20%                    |                 5 |              0.24454 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2486 | >20%                    |                 5 |              0.24972 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2749 | 15-20%                  |                10 |              0.12749 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2795 | >20%                    |                 5 |              0.2559  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2811 | >20%                    |                10 |              0.12811 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.285  | >20%                    |                10 |              0.1285  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3047 |                         |                 5 |              0.26094 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3133 | 5-10%                   |                 2 |              0.65665 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3711 | 5-10%                   |                 5 |              0.27422 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3885 | 10-15%                  |                10 |              0.13885 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.401  | 10-15%                  |                 2 |              0.7005  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4477 | 5-10%                   |                10 |              0.14477 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5595 | 15-20%                  |                 5 |              0.3119  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5677 | >20%                    |                10 |              0.15677 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5821 | 15-20%                  |                10 |              0.15821 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.6009 | 5-10%                   |                 2 |              0.80045 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.6238 | >20%                    |                10 |              0.16238 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.648  | >20%                    |                10 |              0.1648  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7208 | >20%                    |                10 |              0.17208 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8825 |                         |                10 |              0.18825 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0109 | 5-10%                   |                 2 |              1.00545 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.681  | >20%                    |                 5 |              0.5362  |