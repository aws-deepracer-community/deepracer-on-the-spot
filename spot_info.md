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

Data correct as of 2026-02-14 02:29:05.189812, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1545 | >20%                    |                 2 |              0.07725 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1578 | >20%                    |                 2 |              0.0789  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2024 | >20%                    |                 2 |              0.1012  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2044 | 5-10%                   |                 2 |              0.1022  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.211  | >20%                    |                 5 |              0.0422  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2187 | <5%                     |                 5 |              0.04374 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2236 | >20%                    |                 2 |              0.1118  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2247 | >20%                    |                 5 |              0.04494 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2539 | >20%                    |                 2 |              0.12695 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.259  | 10-15%                  |                 2 |              0.1295  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2592 | 15-20%                  |                 2 |              0.1296  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.261  | 10-15%                  |                 2 |              0.1305  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2615 | >20%                    |                 5 |              0.0523  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2664 | 5-10%                   |                10 |              0.02664 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.27   | >20%                    |                 2 |              0.135   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2772 | >20%                    |                 2 |              0.1386  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2871 | >20%                    |                 2 |              0.14355 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2947 | >20%                    |                 2 |              0.14735 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3021 | >20%                    |                 2 |              0.15105 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3095 | >20%                    |                 2 |              0.15475 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3111 | >20%                    |                 2 |              0.15555 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3204 | >20%                    |                 2 |              0.1602  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3256 | >20%                    |                 5 |              0.06512 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3354 | >20%                    |                 5 |              0.06708 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3457 | >20%                    |                 5 |              0.06914 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3499 | 5-10%                   |                 2 |              0.17495 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3506 | <5%                     |                 5 |              0.07012 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3599 | <5%                     |                 2 |              0.17995 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3617 | 15-20%                  |                 2 |              0.18085 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3618 | >20%                    |                 5 |              0.07236 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3629 | <5%                     |                 2 |              0.18145 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3665 | 5-10%                   |                10 |              0.03665 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3683 | 15-20%                  |                 2 |              0.18415 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3692 | >20%                    |                 2 |              0.1846  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.373  | >20%                    |                 5 |              0.0746  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3741 | >20%                    |                 2 |              0.18705 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3747 | <5%                     |                 5 |              0.07494 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3756 | 5-10%                   |                 2 |              0.1878  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3771 | 5-10%                   |                 5 |              0.07542 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3834 | >20%                    |                10 |              0.03834 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3877 | >20%                    |                 5 |              0.07754 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3891 | <5%                     |                 5 |              0.07782 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3901 | >20%                    |                10 |              0.03901 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3928 | >20%                    |                 5 |              0.07856 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3949 | 10-15%                  |                 2 |              0.19745 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.401  | >20%                    |                 2 |              0.2005  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4073 | >20%                    |                 5 |              0.08146 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.411  | 10-15%                  |                 5 |              0.0822  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4134 | >20%                    |                 2 |              0.2067  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4144 | >20%                    |                 5 |              0.08288 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4166 | >20%                    |                 2 |              0.2083  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4225 | >20%                    |                 5 |              0.0845  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4248 | 5-10%                   |                 2 |              0.2124  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4286 | >20%                    |                 2 |              0.2143  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4293 | <5%                     |                 2 |              0.21465 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4311 | 15-20%                  |                 2 |              0.21555 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4335 | 15-20%                  |                 5 |              0.0867  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.435  | >20%                    |                 5 |              0.087   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4357 | <5%                     |                 2 |              0.21785 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4365 | >20%                    |                 2 |              0.21825 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4369 | >20%                    |                 5 |              0.08738 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4384 | >20%                    |                10 |              0.04384 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4414 | 5-10%                   |                 2 |              0.2207  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4426 | 5-10%                   |                 2 |              0.2213  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4437 | 15-20%                  |                 2 |              0.22185 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4514 | >20%                    |                 2 |              0.2257  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4577 | >20%                    |                 2 |              0.22885 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4639 | 5-10%                   |                 2 |              0.23195 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4676 | >20%                    |                10 |              0.04676 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4709 | >20%                    |                 2 |              0.23545 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4717 | 15-20%                  |                 2 |              0.23585 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.4722 | <5%                     |                 5 |              0.09444 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4738 | 5-10%                   |                 5 |              0.09476 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4793 | 15-20%                  |                 5 |              0.09586 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4806 | >20%                    |                 2 |              0.2403  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4918 | >20%                    |                10 |              0.04918 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4983 | >20%                    |                 2 |              0.24915 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.503  | >20%                    |                 2 |              0.2515  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5046 | >20%                    |                 2 |              0.2523  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.511  | >20%                    |                10 |              0.0511  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5181 | >20%                    |                 5 |              0.10362 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5225 | 15-20%                  |                10 |              0.05225 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.526  | <5%                     |                 5 |              0.1052  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.53   | <5%                     |                 2 |              0.265   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5323 | >20%                    |                 5 |              0.10646 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5377 | 15-20%                  |                 5 |              0.10754 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5451 | >20%                    |                 5 |              0.10902 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5477 | >20%                    |                10 |              0.05477 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5537 | >20%                    |                 5 |              0.11074 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5644 | <5%                     |                10 |              0.05644 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5733 | >20%                    |                10 |              0.05733 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5814 | 15-20%                  |                10 |              0.05814 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5929 | 5-10%                   |                 2 |              0.29645 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5945 | 5-10%                   |                 5 |              0.1189  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5953 | >20%                    |                 5 |              0.11906 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5978 | <5%                     |                10 |              0.05978 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5982 | 5-10%                   |                 5 |              0.11964 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5986 | >20%                    |                 5 |              0.11972 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6001 | >20%                    |                 2 |              0.30005 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6012 | >20%                    |                10 |              0.06012 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6066 | 10-15%                  |                 5 |              0.12132 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6107 | 15-20%                  |                 2 |              0.30535 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6243 | >20%                    |                 5 |              0.12486 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6305 | >20%                    |                 5 |              0.1261  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6392 | >20%                    |                 5 |              0.12784 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6416 | <5%                     |                 5 |              0.12832 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.652  | 15-20%                  |                10 |              0.0652  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6582 | >20%                    |                 5 |              0.13164 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6599 | >20%                    |                 5 |              0.13198 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6697 | 5-10%                   |                 2 |              0.33485 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6767 | >20%                    |                10 |              0.06767 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6861 | 5-10%                   |                 5 |              0.13722 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6865 | >20%                    |                10 |              0.06865 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6894 | <5%                     |                10 |              0.06894 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6896 | 5-10%                   |                 5 |              0.13792 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6921 | <5%                     |                10 |              0.06921 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6928 | 15-20%                  |                10 |              0.06928 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6939 | >20%                    |                 5 |              0.13878 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7041 | 15-20%                  |                 5 |              0.14082 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7079 | 10-15%                  |                10 |              0.07079 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7212 | <5%                     |                10 |              0.07212 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7222 | >20%                    |                 2 |              0.3611  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7279 | >20%                    |                 5 |              0.14558 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7384 | 10-15%                  |                10 |              0.07384 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7409 | >20%                    |                10 |              0.07409 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7436 | >20%                    |                 5 |              0.14872 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7447 | >20%                    |                10 |              0.07447 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7557 | >20%                    |                10 |              0.07557 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7624 | 15-20%                  |                10 |              0.07624 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7703 | >20%                    |                 2 |              0.38515 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7822 | <5%                     |                10 |              0.07822 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7852 | >20%                    |                 5 |              0.15704 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7959 | >20%                    |                 5 |              0.15918 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8034 | >20%                    |                 5 |              0.16068 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.805  | >20%                    |                10 |              0.0805  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8065 | 10-15%                  |                 2 |              0.40325 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.81   | 5-10%                   |                10 |              0.081   |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8243 | >20%                    |                10 |              0.08243 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8264 | >20%                    |                10 |              0.08264 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8309 | <5%                     |                10 |              0.08309 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8352 | >20%                    |                 5 |              0.16704 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8435 | <5%                     |                 5 |              0.1687  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8469 | <5%                     |                10 |              0.08469 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8502 | >20%                    |                 2 |              0.4251  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8505 | 5-10%                   |                10 |              0.08505 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8661 | >20%                    |                 5 |              0.17322 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8749 | >20%                    |                10 |              0.08749 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8844 | >20%                    |                 2 |              0.4422  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.89   | >20%                    |                10 |              0.089   |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8918 | >20%                    |                 2 |              0.4459  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9085 | 10-15%                  |                10 |              0.09085 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9113 |                         |                 2 |              0.45565 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9302 | >20%                    |                 5 |              0.18604 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9342 | <5%                     |                10 |              0.09342 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9432 | 15-20%                  |                10 |              0.09432 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9521 | <5%                     |                10 |              0.09521 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9556 | >20%                    |                 2 |              0.4778  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9886 | >20%                    |                10 |              0.09886 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.005  | >20%                    |                10 |              0.1005  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0301 | >20%                    |                10 |              0.10301 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0336 | 5-10%                   |                 5 |              0.20672 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0372 | >20%                    |                10 |              0.10372 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0498 | 15-20%                  |                10 |              0.10498 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0499 | >20%                    |                10 |              0.10499 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0531 | >20%                    |                 5 |              0.21062 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0791 | 5-10%                   |                10 |              0.10791 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.101  | 10-15%                  |                 5 |              0.2202  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1123 | >20%                    |                10 |              0.11123 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1419 | >20%                    |                 2 |              0.57095 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1557 | >20%                    |                10 |              0.11557 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1765 | >20%                    |                 5 |              0.2353  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1869 | <5%                     |                10 |              0.11869 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.2085 | >20%                    |                10 |              0.12085 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2186 | >20%                    |                10 |              0.12186 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2196 |                         |                 5 |              0.24392 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2913 | >20%                    |                10 |              0.12913 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3614 | 10-15%                  |                 5 |              0.27228 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3953 | >20%                    |                10 |              0.13953 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4534 | >20%                    |                 2 |              0.7267  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7363 | 15-20%                  |                10 |              0.17363 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8708 |                         |                10 |              0.18708 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.085  | 10-15%                  |                10 |              0.2085  |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4259 | <5%                     |                 5 |              0.48518 |