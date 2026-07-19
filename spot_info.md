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

Data correct as of 2026-07-19 03:18:26.676691, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1338 | >20%                    |                 2 |              0.0669  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1535 | >20%                    |                 2 |              0.07675 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1829 | >20%                    |                 2 |              0.09145 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2322 | 15-20%                  |                 2 |              0.1161  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2448 | >20%                    |                 2 |              0.1224  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2481 | >20%                    |                 2 |              0.12405 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2531 | >20%                    |                 2 |              0.12655 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2583 | >20%                    |                 2 |              0.12915 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2584 | >20%                    |                 2 |              0.1292  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2663 | >20%                    |                 2 |              0.13315 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2727 | 15-20%                  |                 2 |              0.13635 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2777 | 5-10%                   |                10 |              0.02777 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2787 | >20%                    |                 2 |              0.13935 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2958 | 10-15%                  |                 2 |              0.1479  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2966 | >20%                    |                 2 |              0.1483  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3034 | 15-20%                  |                 2 |              0.1517  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3245 | >20%                    |                 2 |              0.16225 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3317 | 15-20%                  |                 5 |              0.06634 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3327 | 15-20%                  |                 5 |              0.06654 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3366 | >20%                    |                 5 |              0.06732 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3386 | >20%                    |                 5 |              0.06772 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3509 | >20%                    |                 5 |              0.07018 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3525 | 5-10%                   |                10 |              0.03525 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3543 | >20%                    |                10 |              0.03543 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3584 | >20%                    |                 2 |              0.1792  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3626 | <5%                     |                 2 |              0.1813  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3709 | >20%                    |                 5 |              0.07418 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3717 | >20%                    |                 5 |              0.07434 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3813 | >20%                    |                 5 |              0.07626 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3888 | >20%                    |                10 |              0.03888 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3918 | >20%                    |                 5 |              0.07836 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3986 | 10-15%                  |                 2 |              0.1993  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4005 | >20%                    |                 5 |              0.0801  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4023 | 15-20%                  |                 2 |              0.20115 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4112 | >20%                    |                 2 |              0.2056  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4181 | >20%                    |                 2 |              0.20905 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4186 | 10-15%                  |                 2 |              0.2093  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4213 | >20%                    |                10 |              0.04213 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4259 | 5-10%                   |                10 |              0.04259 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4332 | >20%                    |                10 |              0.04332 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4338 | >20%                    |                 5 |              0.08676 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4398 | >20%                    |                 5 |              0.08796 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4561 | >20%                    |                 2 |              0.22805 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4562 | >20%                    |                 2 |              0.2281  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4605 | >20%                    |                 2 |              0.23025 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4655 | >20%                    |                 2 |              0.23275 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4668 | 15-20%                  |                 5 |              0.09336 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4701 | >20%                    |                 2 |              0.23505 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4723 | >20%                    |                 5 |              0.09446 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4728 | 10-15%                  |                 2 |              0.2364  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.4793 | >20%                    |                10 |              0.04793 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4838 | >20%                    |                 5 |              0.09676 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4901 | <5%                     |                 2 |              0.24505 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4913 | <5%                     |                 2 |              0.24565 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4927 | >20%                    |                10 |              0.04927 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5068 | >20%                    |                 5 |              0.10136 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5198 | >20%                    |                 5 |              0.10396 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5204 | >20%                    |                 2 |              0.2602  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5278 | >20%                    |                 5 |              0.10556 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5318 | 15-20%                  |                 2 |              0.2659  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5371 | >20%                    |                 5 |              0.10742 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5379 | >20%                    |                10 |              0.05379 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5507 | >20%                    |                 5 |              0.11014 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.5676 |                         |                 2 |              0.2838  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5702 | 10-15%                  |                 5 |              0.11404 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5711 | >20%                    |                 5 |              0.11422 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5719 | >20%                    |                 2 |              0.28595 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5749 | 5-10%                   |                 2 |              0.28745 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5805 | 10-15%                  |                10 |              0.05805 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5834 | >20%                    |                 5 |              0.11668 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5862 | >20%                    |                 5 |              0.11724 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5922 | >20%                    |                 5 |              0.11844 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6034 | >20%                    |                 2 |              0.3017  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6057 | 5-10%                   |                 5 |              0.12114 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.614  | 15-20%                  |                 2 |              0.307   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6171 | >20%                    |                 5 |              0.12342 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.639  | >20%                    |                10 |              0.0639  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6416 | >20%                    |                10 |              0.06416 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6431 | >20%                    |                 5 |              0.12862 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.653  | >20%                    |                10 |              0.0653  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6532 | >20%                    |                10 |              0.06532 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.679  | >20%                    |                 5 |              0.1358  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6889 | >20%                    |                 5 |              0.13778 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6903 |                         |                 2 |              0.34515 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6969 | >20%                    |                 2 |              0.34845 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6989 | 15-20%                  |                 5 |              0.13978 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6995 | >20%                    |                 5 |              0.1399  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.7026 | >20%                    |                 2 |              0.3513  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7059 | >20%                    |                 2 |              0.35295 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7118 | >20%                    |                 2 |              0.3559  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7136 | <5%                     |                 5 |              0.14272 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7137 | >20%                    |                10 |              0.07137 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7272 | 15-20%                  |                10 |              0.07272 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7281 | >20%                    |                 5 |              0.14562 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7371 | >20%                    |                10 |              0.07371 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7457 | >20%                    |                10 |              0.07457 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7467 | >20%                    |                10 |              0.07467 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7494 | >20%                    |                10 |              0.07494 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7498 | >20%                    |                 5 |              0.14996 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7727 | 5-10%                   |                10 |              0.07727 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7845 | 10-15%                  |                 2 |              0.39225 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7923 | >20%                    |                10 |              0.07923 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7995 | >20%                    |                10 |              0.07995 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8098 | <5%                     |                10 |              0.08098 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8275 | 15-20%                  |                10 |              0.08275 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8336 | >20%                    |                 5 |              0.16672 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8342 | >20%                    |                10 |              0.08342 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.853  | 5-10%                   |                 2 |              0.4265  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.867  |                         |                 5 |              0.1734  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8742 | 15-20%                  |                10 |              0.08742 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8829 | >20%                    |                 5 |              0.17658 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.893  | 15-20%                  |                10 |              0.0893  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9008 | >20%                    |                10 |              0.09008 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9015 | 10-15%                  |                 2 |              0.45075 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9091 | >20%                    |                 5 |              0.18182 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9148 | >20%                    |                10 |              0.09148 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9259 | >20%                    |                 2 |              0.46295 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9317 | >20%                    |                 5 |              0.18634 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.937  | 5-10%                   |                10 |              0.0937  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9625 | >20%                    |                10 |              0.09625 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9646 | >20%                    |                 5 |              0.19292 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9782 | >20%                    |                 2 |              0.4891  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9807 | >20%                    |                 5 |              0.19614 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9882 | >20%                    |                 5 |              0.19764 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0077 | 10-15%                  |                 2 |              0.50385 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0078 | 15-20%                  |                10 |              0.10078 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0308 | >20%                    |                 5 |              0.20616 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0373 | 5-10%                   |                 5 |              0.20746 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.0571 |                         |                10 |              0.10571 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0822 | >20%                    |                10 |              0.10822 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0881 | >20%                    |                10 |              0.10881 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0959 |                         |                10 |              0.10959 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.097  | >20%                    |                 2 |              0.5485  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1361 | >20%                    |                 5 |              0.22722 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.138  | >20%                    |                10 |              0.1138  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1529 | 15-20%                  |                10 |              0.11529 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1536 | >20%                    |                10 |              0.11536 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1662 | >20%                    |                 5 |              0.23324 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2079 |                         |                 5 |              0.24158 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.221  | >20%                    |                10 |              0.1221  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.243  | 5-10%                   |                10 |              0.1243  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3223 | >20%                    |                 5 |              0.26446 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3285 | 15-20%                  |                10 |              0.13285 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3662 | >20%                    |                10 |              0.13662 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4044 | >20%                    |                10 |              0.14044 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4341 | 15-20%                  |                10 |              0.14341 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4356 | >20%                    |                10 |              0.14356 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5155 | >20%                    |                10 |              0.15155 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5906 | 10-15%                  |                10 |              0.15906 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6005 | 15-20%                  |                 5 |              0.3201  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.775  | 5-10%                   |                 2 |              0.8875  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.8688 | >20%                    |                 5 |              0.37376 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.9266 | >20%                    |                 5 |              0.38532 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.049  | 5-10%                   |                 2 |              1.0245  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0805 | >20%                    |                10 |              0.20805 |