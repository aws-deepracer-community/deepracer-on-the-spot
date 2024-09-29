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

Data correct as of 2024-09-29 01:43:20.088406, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1049 | <5%                     |                 2 |              0.05245 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1268 |                         |                 2 |              0.0634  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1284 | 5-10%                   |                 2 |              0.0642  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.131  |                         |                 2 |              0.0655  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1357 |                         |                 2 |              0.06785 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.1592 |                         |                 2 |              0.0796  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1633 |                         |                 5 |              0.03266 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.185  |                         |                 5 |              0.037   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1896 |                         |                 5 |              0.03792 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2081 | 5-10%                   |                 2 |              0.10405 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2105 | 15-20%                  |                 2 |              0.10525 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.2106 |                         |                 5 |              0.04212 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2324 | <5%                     |                 2 |              0.1162  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2345 | 15-20%                  |                 2 |              0.11725 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2352 | <5%                     |                 2 |              0.1176  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2424 | <5%                     |                 2 |              0.1212  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2448 |                         |                10 |              0.02448 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2655 | 15-20%                  |                 5 |              0.0531  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2695 | <5%                     |                 5 |              0.0539  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2713 | <5%                     |                 2 |              0.13565 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.272  | <5%                     |                 2 |              0.136   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2793 | 15-20%                  |                 5 |              0.05586 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2893 | <5%                     |                 2 |              0.14465 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2906 |                         |                10 |              0.02906 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2921 | <5%                     |                 2 |              0.14605 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2924 |                         |                10 |              0.02924 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2974 | 10-15%                  |                 2 |              0.1487  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2997 | <5%                     |                 2 |              0.14985 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3043 | >20%                    |                10 |              0.03043 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3124 | 5-10%                   |                 2 |              0.1562  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.3185 |                         |                10 |              0.03185 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3185 | >20%                    |                 5 |              0.0637  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3256 | 15-20%                  |                10 |              0.03256 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3351 | <5%                     |                 2 |              0.16755 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3357 | <5%                     |                10 |              0.03357 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3388 | 10-15%                  |                 2 |              0.1694  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3451 | <5%                     |                 5 |              0.06902 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3522 | <5%                     |                 2 |              0.1761  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3566 | <5%                     |                 2 |              0.1783  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.368  | <5%                     |                 2 |              0.184   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3683 | 5-10%                   |                 5 |              0.07366 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3743 | <5%                     |                10 |              0.03743 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3808 | <5%                     |                 5 |              0.07616 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3857 | 5-10%                   |                 5 |              0.07714 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3965 | >20%                    |                 2 |              0.19825 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4064 | >20%                    |                 2 |              0.2032  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.408  | 5-10%                   |                 2 |              0.204   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4245 | <5%                     |                 2 |              0.21225 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4321 | >20%                    |                 2 |              0.21605 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4326 | 15-20%                  |                 5 |              0.08652 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4334 | >20%                    |                 5 |              0.08668 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4423 | <5%                     |                 2 |              0.22115 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4549 | <5%                     |                 5 |              0.09098 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4563 | 10-15%                  |                10 |              0.04563 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4567 | 10-15%                  |                 2 |              0.22835 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4581 | >20%                    |                 2 |              0.22905 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4626 | 5-10%                   |                 5 |              0.09252 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4653 | <5%                     |                 5 |              0.09306 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4775 | 15-20%                  |                 5 |              0.0955  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4798 | <5%                     |                 5 |              0.09596 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4807 | <5%                     |                 5 |              0.09614 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4873 | >20%                    |                 2 |              0.24365 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4877 | 15-20%                  |                 2 |              0.24385 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4893 | 5-10%                   |                 5 |              0.09786 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5027 | 5-10%                   |                 5 |              0.10054 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.512  | 10-15%                  |                 5 |              0.1024  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5127 | >20%                    |                 5 |              0.10254 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5289 | <5%                     |                 5 |              0.10578 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5296 | 15-20%                  |                 2 |              0.2648  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5332 | <5%                     |                 5 |              0.10664 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5359 | >20%                    |                 5 |              0.10718 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5437 | <5%                     |                 5 |              0.10874 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5579 | >20%                    |                 2 |              0.27895 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5652 | 5-10%                   |                 5 |              0.11304 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5817 | >20%                    |                10 |              0.05817 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5959 | >20%                    |                 5 |              0.11918 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5962 | 5-10%                   |                 5 |              0.11924 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6101 | >20%                    |                 5 |              0.12202 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6105 | >20%                    |                 5 |              0.1221  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6114 | 15-20%                  |                 2 |              0.3057  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6414 | >20%                    |                10 |              0.06414 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6565 | 5-10%                   |                10 |              0.06565 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6607 | >20%                    |                10 |              0.06607 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6891 | >20%                    |                 5 |              0.13782 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6988 | >20%                    |                 5 |              0.13976 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7057 | <5%                     |                10 |              0.07057 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.708  | >20%                    |                 2 |              0.354   |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7256 | <5%                     |                10 |              0.07256 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.7544 | <5%                     |                10 |              0.07544 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7569 | <5%                     |                10 |              0.07569 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7692 | 15-20%                  |                10 |              0.07692 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.771  | >20%                    |                 5 |              0.1542  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7821 | 15-20%                  |                10 |              0.07821 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7846 | 10-15%                  |                10 |              0.07846 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7851 | 10-15%                  |                10 |              0.07851 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8136 | >20%                    |                10 |              0.08136 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8223 | 5-10%                   |                 2 |              0.41115 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8247 | >20%                    |                10 |              0.08247 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8392 | >20%                    |                10 |              0.08392 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8514 | >20%                    |                 5 |              0.17028 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8648 | 5-10%                   |                10 |              0.08648 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8797 | <5%                     |                10 |              0.08797 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8826 | >20%                    |                 5 |              0.17652 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.887  | >20%                    |                10 |              0.0887  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8939 | >20%                    |                10 |              0.08939 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8942 | <5%                     |                 2 |              0.4471  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9056 | >20%                    |                10 |              0.09056 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9174 | <5%                     |                10 |              0.09174 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9305 | 5-10%                   |                10 |              0.09305 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9541 | 5-10%                   |                 5 |              0.19082 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0098 | 10-15%                  |                10 |              0.10098 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.012  | >20%                    |                10 |              0.1012  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0469 | 5-10%                   |                10 |              0.10469 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1012 | 10-15%                  |                 5 |              0.22024 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1024 | >20%                    |                10 |              0.11024 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1051 | <5%                     |                 2 |              0.55255 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1541 | >20%                    |                10 |              0.11541 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2003 | >20%                    |                10 |              0.12003 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3731 | 15-20%                  |                10 |              0.13731 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4902 | >20%                    |                10 |              0.14902 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7493 | 5-10%                   |                10 |              0.17493 |