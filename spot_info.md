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

Data correct as of 2026-06-25 03:59:00.950440, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1593 | >20%                    |                 2 |              0.07965 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1885 | 15-20%                  |                 2 |              0.09425 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2186 | >20%                    |                 2 |              0.1093  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2243 | >20%                    |                 2 |              0.11215 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2258 | 15-20%                  |                 5 |              0.04516 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2331 | >20%                    |                 2 |              0.11655 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2469 | 10-15%                  |                 2 |              0.12345 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2481 | >20%                    |                 2 |              0.12405 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2513 | >20%                    |                 2 |              0.12565 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2615 | >20%                    |                 2 |              0.13075 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2645 | >20%                    |                 2 |              0.13225 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2676 | >20%                    |                 2 |              0.1338  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2686 | 15-20%                  |                 2 |              0.1343  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2731 | >20%                    |                 2 |              0.13655 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2822 | 15-20%                  |                 2 |              0.1411  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2939 | >20%                    |                 5 |              0.05878 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3036 | 15-20%                  |                 5 |              0.06072 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3053 | >20%                    |                 5 |              0.06106 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3058 | >20%                    |                 5 |              0.06116 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3118 | >20%                    |                 2 |              0.1559  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3297 | >20%                    |                 2 |              0.16485 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3301 | >20%                    |                 5 |              0.06602 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3495 | 10-15%                  |                 2 |              0.17475 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3496 | >20%                    |                 5 |              0.06992 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3506 | <5%                     |                 2 |              0.1753  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3531 | 5-10%                   |                10 |              0.03531 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3532 | >20%                    |                10 |              0.03532 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3561 | >20%                    |                10 |              0.03561 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3562 | 5-10%                   |                10 |              0.03562 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3585 | 10-15%                  |                 2 |              0.17925 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3627 | >20%                    |                 5 |              0.07254 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3664 | 5-10%                   |                10 |              0.03664 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3866 | >20%                    |                 2 |              0.1933  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3921 | >20%                    |                 2 |              0.19605 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4038 | >20%                    |                 5 |              0.08076 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4046 | >20%                    |                 5 |              0.08092 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4102 | >20%                    |                 2 |              0.2051  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4111 | >20%                    |                 5 |              0.08222 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4156 | 15-20%                  |                 5 |              0.08312 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4241 | >20%                    |                 5 |              0.08482 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4277 | >20%                    |                10 |              0.04277 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4291 | >20%                    |                 2 |              0.21455 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4293 | 10-15%                  |                10 |              0.04293 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.436  | >20%                    |                10 |              0.0436  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4416 | <5%                     |                 2 |              0.2208  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4421 | >20%                    |                 5 |              0.08842 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4438 | >20%                    |                 5 |              0.08876 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4439 | 10-15%                  |                 2 |              0.22195 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4463 | >20%                    |                 2 |              0.22315 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4552 | <5%                     |                 2 |              0.2276  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4591 | >20%                    |                 5 |              0.09182 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.473  | 15-20%                  |                 2 |              0.2365  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4736 | >20%                    |                 5 |              0.09472 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4811 | >20%                    |                 2 |              0.24055 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4834 | >20%                    |                 2 |              0.2417  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4887 | 15-20%                  |                 2 |              0.24435 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4948 | >20%                    |                 5 |              0.09896 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5053 | >20%                    |                10 |              0.05053 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5259 | >20%                    |                 2 |              0.26295 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5294 | >20%                    |                 5 |              0.10588 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5369 | 15-20%                  |                 5 |              0.10738 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5377 | 5-10%                   |                 5 |              0.10754 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5383 | 5-10%                   |                 2 |              0.26915 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.541  | >20%                    |                 5 |              0.1082  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5499 | 10-15%                  |                 5 |              0.10998 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.5521 | >20%                    |                 5 |              0.11042 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5551 | 5-10%                   |                 2 |              0.27755 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.557  | >20%                    |                10 |              0.0557  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5571 | >20%                    |                 5 |              0.11142 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5618 | >20%                    |                 5 |              0.11236 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.575  | 15-20%                  |                 2 |              0.2875  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5793 | >20%                    |                 2 |              0.28965 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5835 | >20%                    |                 2 |              0.29175 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5856 | >20%                    |                 5 |              0.11712 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5883 | >20%                    |                 2 |              0.29415 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6019 | >20%                    |                10 |              0.06019 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6038 | >20%                    |                 5 |              0.12076 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6241 | >20%                    |                10 |              0.06241 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6244 | >20%                    |                10 |              0.06244 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6293 | >20%                    |                 5 |              0.12586 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6377 | 10-15%                  |                 2 |              0.31885 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6442 | >20%                    |                 5 |              0.12884 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6462 | >20%                    |                10 |              0.06462 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6482 | >20%                    |                10 |              0.06482 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6612 | <5%                     |                 5 |              0.13224 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6732 |                         |                 2 |              0.3366  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6812 | >20%                    |                 2 |              0.3406  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6912 | >20%                    |                 2 |              0.3456  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6922 | >20%                    |                 5 |              0.13844 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6924 | >20%                    |                 2 |              0.3462  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6939 | 5-10%                   |                 5 |              0.13878 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6987 | >20%                    |                 2 |              0.34935 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7013 | 15-20%                  |                10 |              0.07013 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7041 | 15-20%                  |                10 |              0.07041 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.712  | >20%                    |                10 |              0.0712  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7171 | >20%                    |                 5 |              0.14342 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.7194 |                         |                 2 |              0.3597  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7212 | >20%                    |                 5 |              0.14424 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7303 | 5-10%                   |                10 |              0.07303 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7356 | >20%                    |                 2 |              0.3678  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7362 | >20%                    |                 5 |              0.14724 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7438 | >20%                    |                 5 |              0.14876 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7588 | >20%                    |                 5 |              0.15176 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7639 | >20%                    |                10 |              0.07639 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.77   | <5%                     |                10 |              0.077   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7913 | >20%                    |                 5 |              0.15826 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.8056 | >20%                    |                10 |              0.08056 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.8173 |                         |                10 |              0.08173 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8215 | >20%                    |                10 |              0.08215 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8471 | 15-20%                  |                10 |              0.08471 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8517 | >20%                    |                 5 |              0.17034 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8728 | >20%                    |                 5 |              0.17456 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8768 | >20%                    |                10 |              0.08768 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8776 | 15-20%                  |                10 |              0.08776 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8785 | >20%                    |                10 |              0.08785 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8799 | 5-10%                   |                10 |              0.08799 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8811 | 10-15%                  |                 2 |              0.44055 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8898 | >20%                    |                10 |              0.08898 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.926  | 5-10%                   |                 2 |              0.463   |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9281 | >20%                    |                10 |              0.09281 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9365 | >20%                    |                10 |              0.09365 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9427 | >20%                    |                10 |              0.09427 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9514 | 5-10%                   |                10 |              0.09514 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9628 | 15-20%                  |                10 |              0.09628 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9634 | >20%                    |                 5 |              0.19268 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9723 | >20%                    |                 5 |              0.19446 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.976  |                         |                 5 |              0.1952  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9819 | >20%                    |                10 |              0.09819 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9829 | 10-15%                  |                 2 |              0.49145 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9851 | >20%                    |                10 |              0.09851 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.992  | >20%                    |                10 |              0.0992  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9937 | >20%                    |                 5 |              0.19874 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0051 | >20%                    |                10 |              0.10051 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0202 | >20%                    |                10 |              0.10202 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0332 | >20%                    |                 2 |              0.5166  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0628 | >20%                    |                10 |              0.10628 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.093  | 15-20%                  |                10 |              0.1093  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0984 | >20%                    |                 5 |              0.21968 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1128 | >20%                    |                 5 |              0.22256 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1373 | >20%                    |                 5 |              0.22746 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1419 |                         |                 5 |              0.22838 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1573 | >20%                    |                10 |              0.11573 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1949 | >20%                    |                10 |              0.11949 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2725 | >20%                    |                 5 |              0.2545  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2979 |                         |                10 |              0.12979 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.35   | 15-20%                  |                10 |              0.135   |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4185 | >20%                    |                10 |              0.14185 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4718 | 15-20%                  |                 5 |              0.29436 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4943 | 10-15%                  |                10 |              0.14943 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5466 | >20%                    |                 5 |              0.30932 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.6432 | 5-10%                   |                 2 |              0.8216  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6464 | 15-20%                  |                10 |              0.16464 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.2969 | >20%                    |                10 |              0.22969 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4965 | >20%                    |                10 |              0.24965 |