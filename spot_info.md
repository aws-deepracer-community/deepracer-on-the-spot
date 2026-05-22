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

Data correct as of 2026-05-22 04:03:13.279314, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1317 | >20%                    |                 2 |              0.06585 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.146  | 15-20%                  |                 2 |              0.073   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.15   | >20%                    |                 2 |              0.075   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1926 | >20%                    |                 2 |              0.0963  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1961 | 15-20%                  |                 5 |              0.03922 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.218  | 15-20%                  |                 5 |              0.0436  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2209 | 15-20%                  |                 2 |              0.11045 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2253 | >20%                    |                 2 |              0.11265 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2276 | >20%                    |                 2 |              0.1138  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2532 | >20%                    |                 2 |              0.1266  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2567 | >20%                    |                 2 |              0.12835 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2598 | >20%                    |                 5 |              0.05196 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2694 | >20%                    |                 5 |              0.05388 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2694 | 5-10%                   |                10 |              0.02694 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.277  | 15-20%                  |                 5 |              0.0554  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2812 | >20%                    |                 5 |              0.05624 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2879 | >20%                    |                 2 |              0.14395 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2935 | >20%                    |                 2 |              0.14675 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3016 | >20%                    |                 2 |              0.1508  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3026 | >20%                    |                 2 |              0.1513  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3065 | 15-20%                  |                 2 |              0.15325 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3091 | 10-15%                  |                 2 |              0.15455 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.316  | >20%                    |                 2 |              0.158   |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3201 | >20%                    |                 5 |              0.06402 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3204 | 10-15%                  |                 2 |              0.1602  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3225 | >20%                    |                 2 |              0.16125 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3226 | 10-15%                  |                 2 |              0.1613  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3245 | >20%                    |                10 |              0.03245 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3308 | >20%                    |                 5 |              0.06616 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3326 | >20%                    |                 5 |              0.06652 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3332 | 5-10%                   |                10 |              0.03332 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3339 | <5%                     |                 2 |              0.16695 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3485 | >20%                    |                 5 |              0.0697  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3502 | >20%                    |                 2 |              0.1751  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3693 | >20%                    |                 5 |              0.07386 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3735 | >20%                    |                 5 |              0.0747  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.374  | >20%                    |                 5 |              0.0748  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3814 | 10-15%                  |                 2 |              0.1907  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3918 | >20%                    |                 5 |              0.07836 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4029 | <5%                     |                 5 |              0.08058 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4059 | <5%                     |                 2 |              0.20295 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4138 | >20%                    |                 2 |              0.2069  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4174 | 5-10%                   |                 2 |              0.2087  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4177 | >20%                    |                 5 |              0.08354 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4186 | >20%                    |                10 |              0.04186 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4266 | >20%                    |                 5 |              0.08532 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4325 | >20%                    |                 5 |              0.0865  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.433  | >20%                    |                 5 |              0.0866  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4357 | >20%                    |                10 |              0.04357 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4372 | >20%                    |                 2 |              0.2186  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4396 | >20%                    |                10 |              0.04396 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4427 | >20%                    |                 2 |              0.22135 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.447  | >20%                    |                 5 |              0.0894  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.46   | >20%                    |                 5 |              0.092   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4607 | <5%                     |                 2 |              0.23035 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.469  | >20%                    |                 2 |              0.2345  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4757 | >20%                    |                 2 |              0.23785 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4811 | 15-20%                  |                 2 |              0.24055 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4817 | 15-20%                  |                 2 |              0.24085 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4819 | >20%                    |                 5 |              0.09638 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4934 | >20%                    |                 5 |              0.09868 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5006 | >20%                    |                 2 |              0.2503  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5043 | >20%                    |                 5 |              0.10086 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5059 | 5-10%                   |                 5 |              0.10118 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5221 | 5-10%                   |                10 |              0.05221 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.524  | >20%                    |                 5 |              0.1048  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5304 | >20%                    |                 5 |              0.10608 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5356 | 10-15%                  |                 2 |              0.2678  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5432 | 10-15%                  |                 5 |              0.10864 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5509 | 15-20%                  |                 2 |              0.27545 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5516 | >20%                    |                10 |              0.05516 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5558 | >20%                    |                10 |              0.05558 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5565 | >20%                    |                 5 |              0.1113  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5678 | >20%                    |                 2 |              0.2839  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5696 | 15-20%                  |                 5 |              0.11392 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5748 | >20%                    |                 2 |              0.2874  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5927 | >20%                    |                 5 |              0.11854 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5927 | >20%                    |                 2 |              0.29635 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6035 | >20%                    |                 5 |              0.1207  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.6124 | >20%                    |                10 |              0.06124 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.616  | >20%                    |                10 |              0.0616  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6197 | >20%                    |                 2 |              0.30985 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6372 | >20%                    |                10 |              0.06372 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6464 |                         |                 2 |              0.3232  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6574 | >20%                    |                10 |              0.06574 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.662  |                         |                 5 |              0.1324  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.663  | 5-10%                   |                10 |              0.0663  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6684 | >20%                    |                 2 |              0.3342  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6709 | >20%                    |                 2 |              0.33545 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6785 | 15-20%                  |                10 |              0.06785 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.693  | >20%                    |                 5 |              0.1386  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7115 | >20%                    |                 5 |              0.1423  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7159 | >20%                    |                10 |              0.07159 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7192 | >20%                    |                 5 |              0.14384 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7223 | 15-20%                  |                10 |              0.07223 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7351 | >20%                    |                 2 |              0.36755 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.737  | >20%                    |                10 |              0.0737  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7381 | >20%                    |                 2 |              0.36905 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7431 | 5-10%                   |                 2 |              0.37155 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7439 | 15-20%                  |                10 |              0.07439 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7451 | >20%                    |                 5 |              0.14902 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7545 | >20%                    |                 5 |              0.1509  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7577 | >20%                    |                 5 |              0.15154 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7588 | >20%                    |                10 |              0.07588 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7687 | 10-15%                  |                 2 |              0.38435 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7704 | >20%                    |                 5 |              0.15408 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7963 | >20%                    |                 5 |              0.15926 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8029 | >20%                    |                10 |              0.08029 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8133 | >20%                    |                 5 |              0.16266 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8349 | >20%                    |                10 |              0.08349 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      0.8377 |                         |                 5 |              0.16754 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8408 |                         |                 2 |              0.4204  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8495 | >20%                    |                 5 |              0.1699  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8769 | 10-15%                  |                10 |              0.08769 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8931 | 15-20%                  |                10 |              0.08931 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9056 | >20%                    |                10 |              0.09056 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9355 | 15-20%                  |                10 |              0.09355 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9385 | >20%                    |                10 |              0.09385 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9447 | >20%                    |                 5 |              0.18894 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9494 | >20%                    |                10 |              0.09494 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.96   | >20%                    |                10 |              0.096   |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.962  | >20%                    |                10 |              0.0962  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9651 | >20%                    |                10 |              0.09651 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9816 | >20%                    |                 2 |              0.4908  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9926 | >20%                    |                 5 |              0.19852 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9937 | 5-10%                   |                 5 |              0.19874 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9986 | >20%                    |                 5 |              0.19972 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.999  | >20%                    |                 5 |              0.1998  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.012  | >20%                    |                10 |              0.1012  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0261 | >20%                    |                10 |              0.10261 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0266 | >20%                    |                10 |              0.10266 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0642 | >20%                    |                10 |              0.10642 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.0772 | 5-10%                   |                 2 |              0.5386  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0841 | >20%                    |                10 |              0.10841 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0925 | >20%                    |                10 |              0.10925 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1231 | >20%                    |                10 |              0.11231 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.1248 |                         |                10 |              0.11248 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1605 | 15-20%                  |                10 |              0.11605 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1621 | 5-10%                   |                 2 |              0.58105 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1689 |                         |                10 |              0.11689 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1976 | >20%                    |                10 |              0.11976 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2015 | 5-10%                   |                10 |              0.12015 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.276  | 15-20%                  |                 5 |              0.2552  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2988 | 10-15%                  |                10 |              0.12988 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3039 | >20%                    |                 5 |              0.26078 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3477 | >20%                    |                10 |              0.13477 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3734 | 15-20%                  |                10 |              0.13734 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4001 | >20%                    |                 5 |              0.28002 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4184 | >20%                    |                10 |              0.14184 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5314 | 10-15%                  |                 2 |              0.7657  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6849 | 15-20%                  |                10 |              0.16849 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9618 | >20%                    |                10 |              0.19618 |