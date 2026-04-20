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

Data correct as of 2026-04-20 03:25:43.132230, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1827 | >20%                    |                 2 |              0.09135 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1867 | 15-20%                  |                 2 |              0.09335 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1966 | >20%                    |                 2 |              0.0983  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2285 | >20%                    |                 2 |              0.11425 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.231  | >20%                    |                 2 |              0.1155  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.261  | 10-15%                  |                 2 |              0.1305  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2619 | 15-20%                  |                 5 |              0.05238 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2622 | >20%                    |                 2 |              0.1311  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2625 | 15-20%                  |                 5 |              0.0525  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2638 | >20%                    |                 2 |              0.1319  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2834 | 15-20%                  |                 2 |              0.1417  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2961 | 5-10%                   |                10 |              0.02961 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3046 | 15-20%                  |                 2 |              0.1523  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.308  | >20%                    |                10 |              0.0308  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3085 | >20%                    |                 2 |              0.15425 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.311  | >20%                    |                 2 |              0.1555  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.312  | 15-20%                  |                 5 |              0.0624  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3229 | >20%                    |                 5 |              0.06458 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3256 | >20%                    |                 5 |              0.06512 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3286 | 10-15%                  |                 2 |              0.1643  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3319 | <5%                     |                10 |              0.03319 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3337 | 10-15%                  |                 2 |              0.16685 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.334  | <5%                     |                 2 |              0.167   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3408 | >20%                    |                10 |              0.03408 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3425 | 5-10%                   |                10 |              0.03425 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3518 | >20%                    |                 5 |              0.07036 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3547 | >20%                    |                 2 |              0.17735 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3615 | >20%                    |                 5 |              0.0723  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3624 | 5-10%                   |                10 |              0.03624 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3682 | >20%                    |                 5 |              0.07364 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3718 | >20%                    |                 2 |              0.1859  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3828 | >20%                    |                 2 |              0.1914  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3838 | >20%                    |                 5 |              0.07676 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3868 | >20%                    |                 2 |              0.1934  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3881 | 10-15%                  |                 2 |              0.19405 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4015 | >20%                    |                 2 |              0.20075 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4042 | >20%                    |                10 |              0.04042 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4045 | >20%                    |                 5 |              0.0809  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.406  | >20%                    |                 5 |              0.0812  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4088 | <5%                     |                 2 |              0.2044  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4096 | >20%                    |                 5 |              0.08192 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.412  | >20%                    |                 2 |              0.206   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4127 | >20%                    |                 5 |              0.08254 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4127 | <5%                     |                 2 |              0.20635 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4162 | >20%                    |                 5 |              0.08324 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4189 | >20%                    |                 2 |              0.20945 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4198 | >20%                    |                 2 |              0.2099  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4209 | >20%                    |                 2 |              0.21045 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4262 | >20%                    |                 5 |              0.08524 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4321 | >20%                    |                 5 |              0.08642 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4478 | 15-20%                  |                 2 |              0.2239  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4493 | >20%                    |                 2 |              0.22465 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.452  | >20%                    |                 5 |              0.0904  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.454  | >20%                    |                 5 |              0.0908  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4551 | 15-20%                  |                 2 |              0.22755 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4647 | >20%                    |                 2 |              0.23235 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4668 | >20%                    |                 5 |              0.09336 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4681 | >20%                    |                 5 |              0.09362 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4769 | 10-15%                  |                 2 |              0.23845 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4803 | >20%                    |                 5 |              0.09606 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4845 | >20%                    |                 5 |              0.0969  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4871 | >20%                    |                 5 |              0.09742 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4982 | >20%                    |                10 |              0.04982 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4993 | >20%                    |                 5 |              0.09986 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5    | >20%                    |                10 |              0.05    |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5001 | >20%                    |                 2 |              0.25005 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5022 | 15-20%                  |                 2 |              0.2511  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5058 | >20%                    |                 2 |              0.2529  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.525  | 5-10%                   |                 2 |              0.2625  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5288 | 5-10%                   |                 2 |              0.2644  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5326 | 5-10%                   |                 5 |              0.10652 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5399 | >20%                    |                 5 |              0.10798 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5541 | 15-20%                  |                 5 |              0.11082 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5575 | >20%                    |                10 |              0.05575 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5577 | >20%                    |                 2 |              0.27885 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5633 | 10-15%                  |                 5 |              0.11266 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5729 | <5%                     |                 5 |              0.11458 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5855 | >20%                    |                 2 |              0.29275 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5866 | 5-10%                   |                 5 |              0.11732 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.599  | >20%                    |                 2 |              0.2995  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6054 | >20%                    |                10 |              0.06054 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6096 | >20%                    |                10 |              0.06096 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6136 | >20%                    |                 5 |              0.12272 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6247 | 10-15%                  |                 2 |              0.31235 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6326 | >20%                    |                10 |              0.06326 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.644  | >20%                    |                 5 |              0.1288  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6472 | >20%                    |                 5 |              0.12944 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6548 | >20%                    |                 5 |              0.13096 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6663 | >20%                    |                 2 |              0.33315 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6767 | >20%                    |                 5 |              0.13534 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6802 | >20%                    |                 2 |              0.3401  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6863 | >20%                    |                 5 |              0.13726 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6911 | >20%                    |                10 |              0.06911 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.695  | >20%                    |                10 |              0.0695  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6973 | >20%                    |                10 |              0.06973 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7117 | 5-10%                   |                10 |              0.07117 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7151 | >20%                    |                 5 |              0.14302 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7153 | >20%                    |                 2 |              0.35765 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7409 | >20%                    |                 5 |              0.14818 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7443 | >20%                    |                 5 |              0.14886 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7514 | >20%                    |                10 |              0.07514 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7553 | >20%                    |                10 |              0.07553 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7592 | >20%                    |                10 |              0.07592 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7711 | >20%                    |                10 |              0.07711 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7781 | 15-20%                  |                10 |              0.07781 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7817 | >20%                    |                 5 |              0.15634 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7835 | >20%                    |                10 |              0.07835 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7878 | 5-10%                   |                10 |              0.07878 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7989 | >20%                    |                10 |              0.07989 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.8003 | >20%                    |                10 |              0.08003 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8068 | >20%                    |                 2 |              0.4034  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8074 | 15-20%                  |                10 |              0.08074 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8111 | >20%                    |                 5 |              0.16222 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.832  | >20%                    |                10 |              0.0832  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8324 | >20%                    |                 5 |              0.16648 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8594 | 15-20%                  |                10 |              0.08594 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8935 | >20%                    |                10 |              0.08935 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8965 | >20%                    |                 5 |              0.1793  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9045 | 15-20%                  |                10 |              0.09045 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9067 | 5-10%                   |                 2 |              0.45335 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9245 | >20%                    |                 5 |              0.1849  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9481 | >20%                    |                10 |              0.09481 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9524 | 10-15%                  |                10 |              0.09524 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9665 | 15-20%                  |                10 |              0.09665 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9757 | >20%                    |                10 |              0.09757 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9823 | >20%                    |                10 |              0.09823 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9833 | >20%                    |                10 |              0.09833 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0021 | >20%                    |                 5 |              0.20042 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0032 | >20%                    |                10 |              0.10032 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0212 | 15-20%                  |                10 |              0.10212 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0387 | >20%                    |                 5 |              0.20774 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0466 | 10-15%                  |                 2 |              0.5233  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0563 | >20%                    |                10 |              0.10563 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0615 | 5-10%                   |                10 |              0.10615 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0797 | >20%                    |                10 |              0.10797 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1011 | 10-15%                  |                10 |              0.11011 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1202 | >20%                    |                 5 |              0.22404 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1632 | >20%                    |                10 |              0.11632 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.184  |                         |                 5 |              0.2368  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.201  | >20%                    |                 2 |              0.6005  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.2973 |                         |                 2 |              0.64865 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3557 | >20%                    |                 5 |              0.27114 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3659 | >20%                    |                10 |              0.13659 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3779 | >20%                    |                 5 |              0.27558 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4087 | 15-20%                  |                10 |              0.14087 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4105 | 15-20%                  |                10 |              0.14105 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4971 | >20%                    |                10 |              0.14971 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.5275 | >20%                    |                10 |              0.15275 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.5383 | 5-10%                   |                 2 |              0.76915 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.5683 |                         |                10 |              0.15683 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6304 | 15-20%                  |                 5 |              0.32608 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0173 | >20%                    |                10 |              0.30173 |