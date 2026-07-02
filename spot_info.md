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

Data correct as of 2026-07-02 03:56:56.450523, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1356 | >20%                    |                 2 |              0.0678  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2042 | 15-20%                  |                 2 |              0.1021  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2228 | >20%                    |                 2 |              0.1114  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2289 | >20%                    |                 2 |              0.11445 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.238  | >20%                    |                 2 |              0.119   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2384 | >20%                    |                 2 |              0.1192  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2422 | >20%                    |                 2 |              0.1211  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2481 | >20%                    |                 2 |              0.12405 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2578 | 15-20%                  |                 5 |              0.05156 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2582 | >20%                    |                 2 |              0.1291  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2638 | 10-15%                  |                 2 |              0.1319  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2639 | >20%                    |                 2 |              0.13195 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2709 | 15-20%                  |                 2 |              0.13545 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2783 | 15-20%                  |                 2 |              0.13915 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2788 | 15-20%                  |                 5 |              0.05576 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2853 | 5-10%                   |                10 |              0.02853 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2877 | >20%                    |                 2 |              0.14385 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3263 | >20%                    |                 5 |              0.06526 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3326 | >20%                    |                 2 |              0.1663  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3333 | >20%                    |                 5 |              0.06666 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3422 | >20%                    |                 5 |              0.06844 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.35   | >20%                    |                 2 |              0.175   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3501 | <5%                     |                 2 |              0.17505 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3554 | >20%                    |                 5 |              0.07108 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3626 | >20%                    |                10 |              0.03626 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.366  | 10-15%                  |                 2 |              0.183   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3703 | >20%                    |                10 |              0.03703 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3714 | 5-10%                   |                10 |              0.03714 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3728 | >20%                    |                 5 |              0.07456 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3777 | >20%                    |                 5 |              0.07554 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3837 | 5-10%                   |                10 |              0.03837 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.385  | >20%                    |                 2 |              0.1925  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3868 | >20%                    |                 5 |              0.07736 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3951 | >20%                    |                 5 |              0.07902 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3971 | >20%                    |                 2 |              0.19855 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3986 | 10-15%                  |                 2 |              0.1993  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4038 | >20%                    |                 5 |              0.08076 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4172 | >20%                    |                10 |              0.04172 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4203 | >20%                    |                 2 |              0.21015 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4293 | >20%                    |                 2 |              0.21465 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4308 | >20%                    |                 5 |              0.08616 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4378 | 10-15%                  |                 2 |              0.2189  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4392 | >20%                    |                 5 |              0.08784 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4434 | <5%                     |                 2 |              0.2217  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4447 | <5%                     |                 2 |              0.22235 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4463 | >20%                    |                10 |              0.04463 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4475 | >20%                    |                 2 |              0.22375 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4606 | >20%                    |                 2 |              0.2303  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4629 | >20%                    |                 5 |              0.09258 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4662 | 15-20%                  |                 2 |              0.2331  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4703 | >20%                    |                 5 |              0.09406 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4711 | >20%                    |                10 |              0.04711 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4749 | >20%                    |                 2 |              0.23745 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4842 | 15-20%                  |                 5 |              0.09684 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4898 | >20%                    |                 2 |              0.2449  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4923 | >20%                    |                 5 |              0.09846 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.499  | >20%                    |                 5 |              0.0998  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5047 | 15-20%                  |                 2 |              0.25235 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5198 | >20%                    |                10 |              0.05198 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.525  | >20%                    |                 5 |              0.105   |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5264 | >20%                    |                 5 |              0.10528 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5305 | >20%                    |                10 |              0.05305 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5321 | 15-20%                  |                 5 |              0.10642 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5322 | >20%                    |                 2 |              0.2661  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5334 | >20%                    |                 5 |              0.10668 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5406 | 5-10%                   |                 2 |              0.2703  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5411 | 5-10%                   |                 5 |              0.10822 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5447 | 10-15%                  |                10 |              0.05447 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5471 | >20%                    |                 5 |              0.10942 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5494 | 10-15%                  |                 5 |              0.10988 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5661 | 15-20%                  |                 2 |              0.28305 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5835 | >20%                    |                 5 |              0.1167  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.594  | >20%                    |                 5 |              0.1188  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6014 | >20%                    |                10 |              0.06014 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6099 | >20%                    |                10 |              0.06099 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6124 | >20%                    |                10 |              0.06124 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.624  | <5%                     |                 5 |              0.1248  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6247 | >20%                    |                 5 |              0.12494 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6277 | >20%                    |                 5 |              0.12554 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6342 | >20%                    |                 5 |              0.12684 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6357 | >20%                    |                 2 |              0.31785 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6434 |                         |                 2 |              0.3217  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6497 | >20%                    |                 2 |              0.32485 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.6507 |                         |                 2 |              0.32535 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6512 | >20%                    |                 2 |              0.3256  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6566 | >20%                    |                10 |              0.06566 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.6568 |                         |                10 |              0.06568 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6698 | 5-10%                   |                 5 |              0.13396 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6702 | >20%                    |                10 |              0.06702 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6756 | >20%                    |                 2 |              0.3378  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6784 | >20%                    |                 2 |              0.3392  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.685  | >20%                    |                 5 |              0.137   |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6855 | 5-10%                   |                 2 |              0.34275 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6856 | >20%                    |                 5 |              0.13712 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6857 | >20%                    |                 5 |              0.13714 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.688  | >20%                    |                10 |              0.0688  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7113 | >20%                    |                 2 |              0.35565 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7116 | 10-15%                  |                 2 |              0.3558  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7351 | >20%                    |                 5 |              0.14702 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.74   | >20%                    |                10 |              0.074   |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7433 | 15-20%                  |                10 |              0.07433 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7445 | 15-20%                  |                10 |              0.07445 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7481 | >20%                    |                10 |              0.07481 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7599 | 5-10%                   |                10 |              0.07599 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7772 | >20%                    |                10 |              0.07772 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7846 | >20%                    |                 5 |              0.15692 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7932 | <5%                     |                10 |              0.07932 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7944 | >20%                    |                 5 |              0.15888 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8133 | >20%                    |                 5 |              0.16266 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8159 | >20%                    |                 2 |              0.40795 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.8245 | >20%                    |                10 |              0.08245 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8419 | >20%                    |                10 |              0.08419 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8463 | 15-20%                  |                10 |              0.08463 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8468 | 5-10%                   |                10 |              0.08468 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8547 | >20%                    |                10 |              0.08547 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8577 | 15-20%                  |                10 |              0.08577 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.861  | >20%                    |                 5 |              0.1722  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8689 | >20%                    |                10 |              0.08689 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.873  | >20%                    |                10 |              0.0873  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8948 | >20%                    |                10 |              0.08948 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.905  | >20%                    |                 5 |              0.181   |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9138 | >20%                    |                10 |              0.09138 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9157 | 10-15%                  |                 2 |              0.45785 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9166 | 10-15%                  |                 2 |              0.4583  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9211 | 15-20%                  |                10 |              0.09211 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9307 | >20%                    |                10 |              0.09307 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9338 | 5-10%                   |                10 |              0.09338 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9728 | >20%                    |                 5 |              0.19456 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9735 | >20%                    |                10 |              0.09735 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.981  |                         |                 5 |              0.1962  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9995 | >20%                    |                10 |              0.09995 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0023 | >20%                    |                 5 |              0.20046 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0193 | 15-20%                  |                10 |              0.10193 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0279 | >20%                    |                 5 |              0.20558 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0343 | >20%                    |                10 |              0.10343 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0375 | >20%                    |                10 |              0.10375 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0641 | >20%                    |                 5 |              0.21282 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0712 | >20%                    |                 2 |              0.5356  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0735 | >20%                    |                10 |              0.10735 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1401 | >20%                    |                 5 |              0.22802 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1436 | 5-10%                   |                 2 |              0.5718  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1755 | >20%                    |                10 |              0.11755 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1874 |                         |                10 |              0.11874 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2183 | >20%                    |                 5 |              0.24366 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2236 | >20%                    |                 5 |              0.24472 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2373 |                         |                 5 |              0.24746 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3264 | 15-20%                  |                10 |              0.13264 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3776 | 15-20%                  |                10 |              0.13776 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4091 | >20%                    |                10 |              0.14091 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4349 | 15-20%                  |                 5 |              0.28698 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4954 | >20%                    |                 5 |              0.29908 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5885 | 10-15%                  |                10 |              0.15885 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.7653 | 5-10%                   |                 2 |              0.88265 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.1902 | >20%                    |                10 |              0.21902 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4472 | >20%                    |                10 |              0.24472 |