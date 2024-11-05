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

Data correct as of 2024-11-05 01:36:16.731800, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 10-15%                  |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1953 | 10-15%                  |                 2 |              0.09765 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.202  | 15-20%                  |                 5 |              0.0404  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.214  | 10-15%                  |                 2 |              0.107   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2193 | 15-20%                  |                 2 |              0.10965 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2201 | >20%                    |                 5 |              0.04402 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 5-10%                   |                 5 |              0.04498 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2289 | 10-15%                  |                 2 |              0.11445 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2296 | 10-15%                  |                 2 |              0.1148  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2301 | >20%                    |                 2 |              0.11505 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2326 | <5%                     |                 2 |              0.1163  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2339 | >20%                    |                 2 |              0.11695 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2484 | <5%                     |                 2 |              0.1242  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2507 | 5-10%                   |                 2 |              0.12535 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2667 | 5-10%                   |                 2 |              0.13335 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.275  | 5-10%                   |                 5 |              0.055   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.275  | <5%                     |                 2 |              0.1375  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2792 | >20%                    |                 2 |              0.1396  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2836 | 10-15%                  |                 2 |              0.1418  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2839 | <5%                     |                 2 |              0.14195 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2855 | <5%                     |                 2 |              0.14275 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2885 | <5%                     |                 2 |              0.14425 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.304  | <5%                     |                 5 |              0.0608  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3059 | 10-15%                  |                 2 |              0.15295 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3079 | >20%                    |                 5 |              0.06158 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3107 | <5%                     |                 2 |              0.15535 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3342 | 5-10%                   |                 2 |              0.1671  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3366 | 15-20%                  |                 2 |              0.1683  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | <5%                     |                10 |              0.03426 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3484 | 5-10%                   |                 5 |              0.06968 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3555 | >20%                    |                 2 |              0.17775 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3595 | <5%                     |                 2 |              0.17975 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3611 | >20%                    |                 2 |              0.18055 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3626 | 5-10%                   |                 5 |              0.07252 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3713 | 15-20%                  |                 5 |              0.07426 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3733 | <5%                     |                 5 |              0.07466 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3745 | 5-10%                   |                 2 |              0.18725 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3794 | >20%                    |                 2 |              0.1897  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3804 | 5-10%                   |                 5 |              0.07608 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3809 | >20%                    |                 5 |              0.07618 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3895 | 10-15%                  |                 5 |              0.0779  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3896 | >20%                    |                 2 |              0.1948  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3902 | 5-10%                   |                 5 |              0.07804 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4089 | >20%                    |                 5 |              0.08178 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4099 | 15-20%                  |                 5 |              0.08198 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4102 | <5%                     |                 5 |              0.08204 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4142 | <5%                     |                 5 |              0.08284 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4206 | <5%                     |                10 |              0.04206 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4256 | 15-20%                  |                 2 |              0.2128  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4288 | 10-15%                  |                 2 |              0.2144  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.4337 | 5-10%                   |                 2 |              0.21685 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4393 | 15-20%                  |                 5 |              0.08786 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4414 | 10-15%                  |                 2 |              0.2207  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4498 | 15-20%                  |                 2 |              0.2249  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4543 | 5-10%                   |                 5 |              0.09086 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4608 | <5%                     |                10 |              0.04608 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4631 | 5-10%                   |                 5 |              0.09262 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4653 | 15-20%                  |                 2 |              0.23265 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4707 | <5%                     |                 5 |              0.09414 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4747 | 5-10%                   |                 5 |              0.09494 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4799 | <5%                     |                10 |              0.04799 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4807 | <5%                     |                 2 |              0.24035 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4815 | 10-15%                  |                 5 |              0.0963  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4818 | 10-15%                  |                 2 |              0.2409  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4855 | >20%                    |                 5 |              0.0971  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.496  | 10-15%                  |                10 |              0.0496  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4994 | >20%                    |                 5 |              0.09988 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5161 | 5-10%                   |                 2 |              0.25805 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5212 | 15-20%                  |                 2 |              0.2606  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5288 | 5-10%                   |                 5 |              0.10576 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5322 | <5%                     |                 5 |              0.10644 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.536  | <5%                     |                 5 |              0.1072  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5386 | 5-10%                   |                 5 |              0.10772 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5469 | <5%                     |                10 |              0.05469 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5473 | 10-15%                  |                10 |              0.05473 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5494 | 10-15%                  |                 5 |              0.10988 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.555  | >20%                    |                 5 |              0.111   |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.56   | 15-20%                  |                 2 |              0.28    |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5606 | 15-20%                  |                 2 |              0.2803  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5644 | >20%                    |                 5 |              0.11288 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5652 | 5-10%                   |                 5 |              0.11304 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5672 | 10-15%                  |                 5 |              0.11344 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5789 | 10-15%                  |                 5 |              0.11578 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5838 | >20%                    |                 2 |              0.2919  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5851 | 10-15%                  |                 5 |              0.11702 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5865 | 5-10%                   |                10 |              0.05865 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5953 | 10-15%                  |                10 |              0.05953 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5955 | 5-10%                   |                10 |              0.05955 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6082 | >20%                    |                10 |              0.06082 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6267 | >20%                    |                 5 |              0.12534 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6284 | >20%                    |                10 |              0.06284 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6405 | 5-10%                   |                10 |              0.06405 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6429 | 5-10%                   |                 5 |              0.12858 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6672 | 5-10%                   |                10 |              0.06672 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6705 | 10-15%                  |                 5 |              0.1341  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6734 | >20%                    |                 2 |              0.3367  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6786 | 5-10%                   |                10 |              0.06786 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6814 | 10-15%                  |                10 |              0.06814 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6959 | >20%                    |                10 |              0.06959 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6973 | >20%                    |                10 |              0.06973 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6996 | <5%                     |                10 |              0.06996 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7017 | 15-20%                  |                 5 |              0.14034 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7021 | 10-15%                  |                10 |              0.07021 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.7093 | >20%                    |                 2 |              0.35465 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7347 | >20%                    |                 5 |              0.14694 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7623 | >20%                    |                10 |              0.07623 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7772 | 15-20%                  |                10 |              0.07772 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7778 | <5%                     |                10 |              0.07778 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7833 | >20%                    |                10 |              0.07833 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7894 | 5-10%                   |                 5 |              0.15788 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8093 | >20%                    |                10 |              0.08093 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8374 | 5-10%                   |                10 |              0.08374 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8397 | >20%                    |                10 |              0.08397 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8407 | 10-15%                  |                 2 |              0.42035 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8533 | 5-10%                   |                10 |              0.08533 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8649 | <5%                     |                 2 |              0.43245 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8725 | >20%                    |                 5 |              0.1745  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8754 | >20%                    |                10 |              0.08754 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8802 | 15-20%                  |                10 |              0.08802 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8874 | 5-10%                   |                10 |              0.08874 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.888  | 5-10%                   |                 5 |              0.1776  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9228 | <5%                     |                10 |              0.09228 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9702 | 10-15%                  |                 5 |              0.19404 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9885 | 10-15%                  |                10 |              0.09885 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0119 | 10-15%                  |                10 |              0.10119 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0195 | <5%                     |                10 |              0.10195 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0629 | >20%                    |                10 |              0.10629 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0701 | >20%                    |                10 |              0.10701 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0749 | 5-10%                   |                10 |              0.10749 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.107  | >20%                    |                10 |              0.1107  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1394 | <5%                     |                10 |              0.11394 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1702 | 15-20%                  |                10 |              0.11702 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4324 | >20%                    |                10 |              0.14324 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4516 | 15-20%                  |                10 |              0.14516 |