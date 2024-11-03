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

Data correct as of 2024-11-03 01:43:23.735782, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1347 | 10-15%                  |                 2 |              0.06735 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 10-15%                  |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1978 | 10-15%                  |                 2 |              0.0989  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2132 | >20%                    |                 2 |              0.1066  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2137 | <5%                     |                 2 |              0.10685 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2149 | 10-15%                  |                 2 |              0.10745 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2234 | 15-20%                  |                 2 |              0.1117  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 5-10%                   |                 5 |              0.04498 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2255 | 10-15%                  |                 2 |              0.11275 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2275 | 15-20%                  |                 5 |              0.0455  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2473 | 5-10%                   |                 2 |              0.12365 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2476 | <5%                     |                 2 |              0.1238  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2479 | >20%                    |                 5 |              0.04958 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2508 | 10-15%                  |                 2 |              0.1254  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2518 | 5-10%                   |                 2 |              0.1259  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2535 | >20%                    |                 2 |              0.12675 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2564 | <5%                     |                 2 |              0.1282  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.258  | >20%                    |                 2 |              0.129   |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2629 | <5%                     |                 2 |              0.13145 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2747 | <5%                     |                 2 |              0.13735 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2781 | 10-15%                  |                 2 |              0.13905 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.279  | 5-10%                   |                 5 |              0.0558  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2828 | <5%                     |                 2 |              0.1414  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2986 | 10-15%                  |                 2 |              0.1493  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3008 | 5-10%                   |                 5 |              0.06016 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.302  | <5%                     |                 5 |              0.0604  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3055 | <5%                     |                 2 |              0.15275 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3087 | >20%                    |                 5 |              0.06174 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3305 | 15-20%                  |                 5 |              0.0661  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3331 | <5%                     |                 5 |              0.06662 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3353 | 15-20%                  |                 2 |              0.16765 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3359 | 5-10%                   |                 2 |              0.16795 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3419 | >20%                    |                 5 |              0.06838 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | <5%                     |                10 |              0.03426 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.352  | <5%                     |                 2 |              0.176   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3547 | 10-15%                  |                 5 |              0.07094 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3618 | >20%                    |                 2 |              0.1809  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3699 | 5-10%                   |                 5 |              0.07398 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3741 | 5-10%                   |                 5 |              0.07482 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3741 | >20%                    |                 2 |              0.18705 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3783 | 5-10%                   |                 2 |              0.18915 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3824 | >20%                    |                 2 |              0.1912  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3921 | >20%                    |                 2 |              0.19605 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3945 | 5-10%                   |                 5 |              0.0789  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.4099 | 5-10%                   |                 2 |              0.20495 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4125 | 10-15%                  |                 2 |              0.20625 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4126 | <5%                     |                 5 |              0.08252 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4139 | <5%                     |                 5 |              0.08278 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.414  | >20%                    |                 5 |              0.0828  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4156 | 15-20%                  |                 2 |              0.2078  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4255 | 15-20%                  |                 5 |              0.0851  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4371 | 10-15%                  |                 2 |              0.21855 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4404 | 15-20%                  |                 5 |              0.08808 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4491 | <5%                     |                10 |              0.04491 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4541 | 5-10%                   |                 5 |              0.09082 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4574 | <5%                     |                10 |              0.04574 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4593 | 10-15%                  |                10 |              0.04593 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4627 | 5-10%                   |                 5 |              0.09254 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4632 | 15-20%                  |                 2 |              0.2316  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4754 | 10-15%                  |                 5 |              0.09508 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4793 | >20%                    |                 5 |              0.09586 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4815 | 15-20%                  |                 2 |              0.24075 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4849 | <5%                     |                 2 |              0.24245 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4849 | 10-15%                  |                 2 |              0.24245 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4992 | 5-10%                   |                 5 |              0.09984 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4994 | >20%                    |                 5 |              0.09988 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.507  | <5%                     |                 5 |              0.1014  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5101 | 5-10%                   |                 2 |              0.25505 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.512  | <5%                     |                10 |              0.0512  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5126 | 10-15%                  |                10 |              0.05126 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.513  | 15-20%                  |                 2 |              0.2565  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5217 | 5-10%                   |                 5 |              0.10434 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.525  | <5%                     |                10 |              0.0525  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5336 | <5%                     |                 5 |              0.10672 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5369 | <5%                     |                 5 |              0.10738 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5373 | 10-15%                  |                 5 |              0.10746 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.539  | 10-15%                  |                10 |              0.0539  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5403 | 10-15%                  |                 5 |              0.10806 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5512 | 5-10%                   |                 5 |              0.11024 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5574 | 15-20%                  |                 2 |              0.2787  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5593 | 15-20%                  |                 2 |              0.27965 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.564  | >20%                    |                 5 |              0.1128  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5668 | >20%                    |                 5 |              0.11336 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5781 | 10-15%                  |                 5 |              0.11562 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5824 | 5-10%                   |                 5 |              0.11648 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5829 | >20%                    |                 2 |              0.29145 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5834 | 5-10%                   |                10 |              0.05834 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5872 | 10-15%                  |                 5 |              0.11744 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5905 | 5-10%                   |                10 |              0.05905 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6144 | 10-15%                  |                10 |              0.06144 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6153 | >20%                    |                10 |              0.06153 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6159 | >20%                    |                10 |              0.06159 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6206 | 5-10%                   |                 5 |              0.12412 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6386 | <5%                     |                10 |              0.06386 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6418 | 5-10%                   |                10 |              0.06418 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6519 | 5-10%                   |                10 |              0.06519 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6736 | >20%                    |                 2 |              0.3368  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6747 | >20%                    |                 5 |              0.13494 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6827 | 10-15%                  |                 5 |              0.13654 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6869 | 15-20%                  |                 5 |              0.13738 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6889 | >20%                    |                 2 |              0.34445 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6894 | 5-10%                   |                10 |              0.06894 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6933 | >20%                    |                10 |              0.06933 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7004 | >20%                    |                10 |              0.07004 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7068 | 10-15%                  |                10 |              0.07068 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7435 | >20%                    |                10 |              0.07435 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7468 | >20%                    |                 5 |              0.14936 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7734 | 15-20%                  |                10 |              0.07734 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7795 | 5-10%                   |                 5 |              0.1559  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7904 | <5%                     |                10 |              0.07904 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7923 | 5-10%                   |                10 |              0.07923 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8039 | >20%                    |                10 |              0.08039 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8347 | 5-10%                   |                10 |              0.08347 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8381 | 5-10%                   |                 5 |              0.16762 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8382 | >20%                    |                10 |              0.08382 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8466 | >20%                    |                10 |              0.08466 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8507 | 5-10%                   |                10 |              0.08507 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8522 | 10-15%                  |                 2 |              0.4261  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8627 | >20%                    |                10 |              0.08627 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8671 | <5%                     |                 2 |              0.43355 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8731 | >20%                    |                 5 |              0.17462 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9061 | 15-20%                  |                10 |              0.09061 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9221 | <5%                     |                10 |              0.09221 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9848 | 10-15%                  |                 5 |              0.19696 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9959 | 10-15%                  |                10 |              0.09959 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.01   | 10-15%                  |                10 |              0.101   |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0147 | <5%                     |                10 |              0.10147 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0526 | >20%                    |                10 |              0.10526 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0566 | >20%                    |                10 |              0.10566 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0789 | 5-10%                   |                10 |              0.10789 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1123 | >20%                    |                10 |              0.11123 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1826 | 15-20%                  |                10 |              0.11826 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1964 | <5%                     |                10 |              0.11964 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.441  | >20%                    |                10 |              0.1441  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4538 | 15-20%                  |                10 |              0.14538 |