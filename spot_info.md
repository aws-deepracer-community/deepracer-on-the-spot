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

Data correct as of 2025-01-27 01:37:13.865846, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2151 | <5%                     |                 2 |              0.10755 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2166 | 5-10%                   |                 2 |              0.1083  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2224 | >20%                    |                 2 |              0.1112  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2235 | 10-15%                  |                 2 |              0.11175 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2273 | 5-10%                   |                 2 |              0.11365 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2485 | 10-15%                  |                 2 |              0.12425 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2503 | 5-10%                   |                 2 |              0.12515 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2532 | 10-15%                  |                 2 |              0.1266  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2716 | <5%                     |                 2 |              0.1358  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2994 | <5%                     |                 2 |              0.1497  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3044 | >20%                    |                 2 |              0.1522  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3053 | 5-10%                   |                 2 |              0.15265 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3233 | 10-15%                  |                 2 |              0.16165 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3236 | 10-15%                  |                 5 |              0.06472 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3335 | 10-15%                  |                 5 |              0.0667  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3354 | <5%                     |                 5 |              0.06708 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.338  | >20%                    |                 2 |              0.169   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3403 | <5%                     |                 2 |              0.17015 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3405 | 5-10%                   |                 2 |              0.17025 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3519 | <5%                     |                 2 |              0.17595 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3563 | 15-20%                  |                10 |              0.03563 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3586 | >20%                    |                 2 |              0.1793  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3614 | >20%                    |                 2 |              0.1807  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3646 | 5-10%                   |                 5 |              0.07292 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3675 | 5-10%                   |                 2 |              0.18375 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3738 | 5-10%                   |                 2 |              0.1869  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3881 | 5-10%                   |                 5 |              0.07762 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3922 | 5-10%                   |                 2 |              0.1961  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3927 | 5-10%                   |                 5 |              0.07854 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3974 | 5-10%                   |                 2 |              0.1987  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.399  | <5%                     |                 5 |              0.0798  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4063 | <5%                     |                 2 |              0.20315 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4108 | 10-15%                  |                 2 |              0.2054  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4126 | 10-15%                  |                 2 |              0.2063  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.414  | >20%                    |                 2 |              0.207   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4309 | 15-20%                  |                 5 |              0.08618 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4368 | 5-10%                   |                 2 |              0.2184  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4472 | 15-20%                  |                 5 |              0.08944 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4551 | 15-20%                  |                 2 |              0.22755 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4556 | <5%                     |                 5 |              0.09112 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4661 | >20%                    |                 5 |              0.09322 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4677 | 15-20%                  |                 5 |              0.09354 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4696 | <5%                     |                 5 |              0.09392 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4712 | 10-15%                  |                 5 |              0.09424 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4731 | <5%                     |                 2 |              0.23655 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4748 | <5%                     |                 5 |              0.09496 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4801 | 5-10%                   |                 2 |              0.24005 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4831 | >20%                    |                 2 |              0.24155 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4935 | 15-20%                  |                 5 |              0.0987  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.494  | >20%                    |                 2 |              0.247   |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4959 | <5%                     |                 2 |              0.24795 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4973 | 15-20%                  |                 5 |              0.09946 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5021 | <5%                     |                 2 |              0.25105 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5022 | <5%                     |                 5 |              0.10044 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5033 | 10-15%                  |                 5 |              0.10066 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5129 | >20%                    |                 5 |              0.10258 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5181 | >20%                    |                 2 |              0.25905 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5189 | 5-10%                   |                 2 |              0.25945 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5226 | 5-10%                   |                 5 |              0.10452 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5241 | <5%                     |                 5 |              0.10482 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5254 | 10-15%                  |                 5 |              0.10508 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.536  | >20%                    |                 5 |              0.1072  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5454 | 10-15%                  |                 2 |              0.2727  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5473 | 5-10%                   |                 5 |              0.10946 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5547 | <5%                     |                 5 |              0.11094 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5623 | <5%                     |                 5 |              0.11246 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5679 | 5-10%                   |                 5 |              0.11358 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5684 | 15-20%                  |                 2 |              0.2842  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5686 | 5-10%                   |                 5 |              0.11372 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5704 | 5-10%                   |                 5 |              0.11408 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5717 | <5%                     |                10 |              0.05717 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.5735 | 5-10%                   |                10 |              0.05735 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5916 | 5-10%                   |                 5 |              0.11832 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5971 | >20%                    |                 5 |              0.11942 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5978 | 5-10%                   |                10 |              0.05978 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6283 | 5-10%                   |                 5 |              0.12566 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6316 | >20%                    |                10 |              0.06316 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6331 | 5-10%                   |                10 |              0.06331 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6364 | >20%                    |                10 |              0.06364 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6392 | >20%                    |                 2 |              0.3196  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6657 | 15-20%                  |                10 |              0.06657 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6674 | 5-10%                   |                10 |              0.06674 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6758 | 10-15%                  |                10 |              0.06758 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6833 | 5-10%                   |                 5 |              0.13666 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6848 | 5-10%                   |                 5 |              0.13696 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6867 | <5%                     |                10 |              0.06867 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6931 | 15-20%                  |                 2 |              0.34655 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6939 | >20%                    |                 5 |              0.13878 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7004 | >20%                    |                10 |              0.07004 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7101 | <5%                     |                10 |              0.07101 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7147 | 10-15%                  |                10 |              0.07147 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7148 | <5%                     |                 5 |              0.14296 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7204 | >20%                    |                 5 |              0.14408 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7357 | 10-15%                  |                10 |              0.07357 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7426 | 10-15%                  |                10 |              0.07426 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7433 | >20%                    |                 5 |              0.14866 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7436 | >20%                    |                 5 |              0.14872 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7566 | >20%                    |                10 |              0.07566 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7632 | >20%                    |                 5 |              0.15264 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7736 | 15-20%                  |                 2 |              0.3868  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7785 | 5-10%                   |                10 |              0.07785 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.783  | 5-10%                   |                10 |              0.0783  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7903 | >20%                    |                10 |              0.07903 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8026 | <5%                     |                 2 |              0.4013  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8159 | 15-20%                  |                10 |              0.08159 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8185 | 5-10%                   |                10 |              0.08185 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8202 | 5-10%                   |                10 |              0.08202 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8454 | 15-20%                  |                10 |              0.08454 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8588 | 15-20%                  |                10 |              0.08588 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8633 | <5%                     |                10 |              0.08633 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8759 | 5-10%                   |                 5 |              0.17518 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8883 | <5%                     |                10 |              0.08883 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8906 | 5-10%                   |                10 |              0.08906 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8912 | <5%                     |                10 |              0.08912 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8998 | 5-10%                   |                10 |              0.08998 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.9161 | 10-15%                  |                10 |              0.09161 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9327 | <5%                     |                10 |              0.09327 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9366 | 5-10%                   |                10 |              0.09366 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9438 | 5-10%                   |                10 |              0.09438 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9442 | >20%                    |                10 |              0.09442 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9985 | >20%                    |                10 |              0.09985 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0097 | 15-20%                  |                10 |              0.10097 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0409 | <5%                     |                10 |              0.10409 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0713 | 10-15%                  |                 2 |              0.53565 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0771 | 5-10%                   |                 5 |              0.21542 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0792 | 15-20%                  |                 5 |              0.21584 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0814 | 5-10%                   |                10 |              0.10814 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.1922 | >20%                    |                10 |              0.11922 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1966 | 10-15%                  |                10 |              0.11966 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3023 | 5-10%                   |                10 |              0.13023 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3071 | 10-15%                  |                 2 |              0.65355 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3468 | 5-10%                   |                10 |              0.13468 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3927 | 15-20%                  |                 5 |              0.27854 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4593 | 5-10%                   |                10 |              0.14593 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0287 | 5-10%                   |                10 |              0.20287 |