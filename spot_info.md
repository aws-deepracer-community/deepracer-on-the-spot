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

Data correct as of 2024-11-07 01:35:52.164915, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 10-15%                  |                 2 |              0.0831  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1744 | 15-20%                  |                 5 |              0.03488 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1913 | 10-15%                  |                 2 |              0.09565 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2095 | >20%                    |                 2 |              0.10475 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2161 | 10-15%                  |                 2 |              0.10805 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2183 | 5-10%                   |                 2 |              0.10915 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2228 | >20%                    |                 2 |              0.1114  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 10-15%                  |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 5-10%                   |                 5 |              0.04498 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2342 | 5-10%                   |                 2 |              0.1171  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2474 | >20%                    |                 2 |              0.1237  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2477 | 5-10%                   |                 2 |              0.12385 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2492 | <5%                     |                 2 |              0.1246  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2706 | <5%                     |                 2 |              0.1353  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2756 | 5-10%                   |                 2 |              0.1378  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2819 | <5%                     |                 5 |              0.05638 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2836 | 10-15%                  |                 2 |              0.1418  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2884 | <5%                     |                 2 |              0.1442  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3001 | <5%                     |                 5 |              0.06002 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3047 | >20%                    |                 2 |              0.15235 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3115 | <5%                     |                 2 |              0.15575 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3143 | <5%                     |                 2 |              0.15715 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3145 | 5-10%                   |                 5 |              0.0629  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3152 | <5%                     |                 2 |              0.1576  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3159 | 10-15%                  |                 2 |              0.15795 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3171 | <5%                     |                 5 |              0.06342 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3365 | 5-10%                   |                 2 |              0.16825 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3412 | <5%                     |                 2 |              0.1706  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | <5%                     |                10 |              0.03426 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3456 | 15-20%                  |                 2 |              0.1728  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3514 | 15-20%                  |                 2 |              0.1757  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3543 | <5%                     |                 2 |              0.17715 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3735 | >20%                    |                 5 |              0.0747  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3778 | 5-10%                   |                 2 |              0.1889  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.383  | 5-10%                   |                 5 |              0.0766  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3831 | <5%                     |                10 |              0.03831 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3833 | >20%                    |                 2 |              0.19165 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3844 | 5-10%                   |                 5 |              0.07688 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3848 | >20%                    |                 2 |              0.1924  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3848 | 5-10%                   |                 5 |              0.07696 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4034 | <5%                     |                 5 |              0.08068 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4065 | 15-20%                  |                 5 |              0.0813  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4089 | >20%                    |                 5 |              0.08178 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.41   | <5%                     |                 5 |              0.082   |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4129 | <5%                     |                 5 |              0.08258 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4236 | >20%                    |                 5 |              0.08472 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4329 | 10-15%                  |                 5 |              0.08658 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4334 | 5-10%                   |                 2 |              0.2167  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4335 | 10-15%                  |                 2 |              0.21675 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4393 | 5-10%                   |                 2 |              0.21965 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4413 | >20%                    |                 2 |              0.22065 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.4416 | <5%                     |                 2 |              0.2208  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4444 | 15-20%                  |                 5 |              0.08888 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4447 | 5-10%                   |                 5 |              0.08894 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4511 | 5-10%                   |                 5 |              0.09022 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4537 | 15-20%                  |                 2 |              0.22685 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.462  | <5%                     |                10 |              0.0462  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4627 | 5-10%                   |                 5 |              0.09254 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4655 | 5-10%                   |                 5 |              0.0931  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4748 | >20%                    |                 5 |              0.09496 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4766 | 15-20%                  |                 2 |              0.2383  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.478  | <5%                     |                 2 |              0.239   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4859 | 15-20%                  |                 5 |              0.09718 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4924 | >20%                    |                 5 |              0.09848 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4937 | <5%                     |                 2 |              0.24685 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5055 | <5%                     |                 5 |              0.1011  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5218 | 5-10%                   |                 2 |              0.2609  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5268 | 5-10%                   |                 5 |              0.10536 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5272 | <5%                     |                 5 |              0.10544 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5334 | 10-15%                  |                 5 |              0.10668 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.535  | 5-10%                   |                 5 |              0.107   |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5547 | 15-20%                  |                 2 |              0.27735 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5563 | 10-15%                  |                10 |              0.05563 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5585 | >20%                    |                 5 |              0.1117  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5596 | >20%                    |                 5 |              0.11192 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.562  | 5-10%                   |                 5 |              0.1124  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5656 | 10-15%                  |                 2 |              0.2828  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5675 | >20%                    |                 5 |              0.1135  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5739 | 10-15%                  |                 5 |              0.11478 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5834 | 10-15%                  |                10 |              0.05834 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5843 | 10-15%                  |                 5 |              0.11686 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5859 | 15-20%                  |                10 |              0.05859 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5873 | 10-15%                  |                 2 |              0.29365 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5973 | 5-10%                   |                10 |              0.05973 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5986 | 10-15%                  |                10 |              0.05986 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.608  | <5%                     |                10 |              0.0608  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6179 | >20%                    |                10 |              0.06179 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.631  | >20%                    |                 5 |              0.1262  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.643  | 5-10%                   |                10 |              0.0643  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6545 | 5-10%                   |                 5 |              0.1309  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6648 | 15-20%                  |                 5 |              0.13296 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6656 | >20%                    |                 2 |              0.3328  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6657 | 10-15%                  |                10 |              0.06657 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6675 | 5-10%                   |                10 |              0.06675 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.69   | >20%                    |                10 |              0.069   |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6931 | <5%                     |                10 |              0.06931 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.7093 | <5%                     |                 2 |              0.35465 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7105 | 5-10%                   |                10 |              0.07105 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7111 | 5-10%                   |                 5 |              0.14222 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7175 | >20%                    |                10 |              0.07175 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7467 | 15-20%                  |                 5 |              0.14934 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7578 | 10-15%                  |                10 |              0.07578 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7618 | <5%                     |                10 |              0.07618 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7637 | >20%                    |                10 |              0.07637 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7686 | >20%                    |                10 |              0.07686 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.783  | 15-20%                  |                10 |              0.0783  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7881 | 5-10%                   |                 5 |              0.15762 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7895 | <5%                     |                10 |              0.07895 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8045 | >20%                    |                10 |              0.08045 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8253 | 10-15%                  |                 2 |              0.41265 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8375 | >20%                    |                10 |              0.08375 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8385 | 5-10%                   |                10 |              0.08385 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8471 | <5%                     |                 2 |              0.42355 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8534 | 5-10%                   |                10 |              0.08534 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.865  | >20%                    |                10 |              0.0865  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8748 | 15-20%                  |                10 |              0.08748 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8809 | >20%                    |                 5 |              0.17618 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8987 | <5%                     |                 5 |              0.17974 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9036 | 5-10%                   |                10 |              0.09036 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9358 | <5%                     |                10 |              0.09358 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9789 | 10-15%                  |                 5 |              0.19578 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9921 | 10-15%                  |                10 |              0.09921 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0022 | <5%                     |                10 |              0.10022 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0166 | 10-15%                  |                10 |              0.10166 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0562 | >20%                    |                10 |              0.10562 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0691 | <5%                     |                10 |              0.10691 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0706 | >20%                    |                10 |              0.10706 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1135 | 15-20%                  |                10 |              0.11135 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1165 | <5%                     |                10 |              0.11165 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.157  | 15-20%                  |                10 |              0.1157  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.423  | >20%                    |                10 |              0.1423  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4858 | >20%                    |                10 |              0.14858 |