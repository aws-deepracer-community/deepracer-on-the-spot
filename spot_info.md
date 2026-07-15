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

Data correct as of 2026-07-15 02:46:59.427838, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1325 | >20%                    |                 2 |              0.06625 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1393 | >20%                    |                 2 |              0.06965 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1847 | >20%                    |                 2 |              0.09235 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2397 | 15-20%                  |                 2 |              0.11985 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2461 | >20%                    |                 2 |              0.12305 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2493 | >20%                    |                 2 |              0.12465 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2501 | >20%                    |                 2 |              0.12505 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2527 | >20%                    |                 2 |              0.12635 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2615 | >20%                    |                 2 |              0.13075 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2655 | >20%                    |                 2 |              0.13275 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2673 | 15-20%                  |                 2 |              0.13365 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2794 | >20%                    |                 2 |              0.1397  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2958 | 5-10%                   |                10 |              0.02958 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2986 | 10-15%                  |                 2 |              0.1493  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2997 | >20%                    |                 5 |              0.05994 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.307  | >20%                    |                 2 |              0.1535  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3173 | 15-20%                  |                 2 |              0.15865 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3236 | >20%                    |                 2 |              0.1618  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3246 | 15-20%                  |                 5 |              0.06492 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3296 | >20%                    |                 5 |              0.06592 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3395 | 15-20%                  |                 5 |              0.0679  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3487 | >20%                    |                 5 |              0.06974 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3552 | >20%                    |                 2 |              0.1776  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3601 | <5%                     |                 2 |              0.18005 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3623 | >20%                    |                 5 |              0.07246 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3631 | >20%                    |                10 |              0.03631 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3715 | >20%                    |                 5 |              0.0743  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3759 | >20%                    |                 2 |              0.18795 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.381  | 15-20%                  |                 5 |              0.0762  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3816 | 5-10%                   |                10 |              0.03816 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3863 | 5-10%                   |                10 |              0.03863 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3901 | >20%                    |                 5 |              0.07802 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3963 | 10-15%                  |                 2 |              0.19815 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3988 | >20%                    |                10 |              0.03988 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3998 | >20%                    |                 5 |              0.07996 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4183 | 10-15%                  |                 2 |              0.20915 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4264 | >20%                    |                 2 |              0.2132  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4298 | >20%                    |                 2 |              0.2149  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.432  | >20%                    |                 2 |              0.216   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4344 | >20%                    |                 5 |              0.08688 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4369 | 15-20%                  |                 2 |              0.21845 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4373 | >20%                    |                10 |              0.04373 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4394 | >20%                    |                 5 |              0.08788 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4436 | <5%                     |                 2 |              0.2218  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4471 | >20%                    |                 5 |              0.08942 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4505 | >20%                    |                 2 |              0.22525 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4506 | >20%                    |                10 |              0.04506 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4597 | 10-15%                  |                 2 |              0.22985 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4724 | >20%                    |                 2 |              0.2362  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4792 | >20%                    |                 5 |              0.09584 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4793 | >20%                    |                 5 |              0.09586 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.495  | <5%                     |                 2 |              0.2475  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5054 | >20%                    |                 2 |              0.2527  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5079 | >20%                    |                 5 |              0.10158 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5147 | >20%                    |                 5 |              0.10294 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5151 | >20%                    |                 5 |              0.10302 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5253 | >20%                    |                 5 |              0.10506 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.528  | 15-20%                  |                 2 |              0.264   |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5396 | >20%                    |                10 |              0.05396 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5408 | 15-20%                  |                 2 |              0.2704  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.541  | >20%                    |                 2 |              0.2705  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5537 | >20%                    |                10 |              0.05537 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5552 | >20%                    |                 5 |              0.11104 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5586 | >20%                    |                 5 |              0.11172 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5615 | 5-10%                   |                 2 |              0.28075 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5629 | >20%                    |                 2 |              0.28145 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.564  | >20%                    |                10 |              0.0564  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5692 | >20%                    |                10 |              0.05692 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.5723 |                         |                 2 |              0.28615 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.575  | >20%                    |                 5 |              0.115   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5818 | 10-15%                  |                 5 |              0.11636 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.582  | >20%                    |                 5 |              0.1164  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5834 | 5-10%                   |                 5 |              0.11668 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5905 | >20%                    |                 5 |              0.1181  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5917 | >20%                    |                 5 |              0.11834 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5953 | >20%                    |                10 |              0.05953 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6006 | >20%                    |                 2 |              0.3003  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6118 | >20%                    |                 5 |              0.12236 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6177 | 15-20%                  |                 5 |              0.12354 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6318 | >20%                    |                 2 |              0.3159  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6345 | <5%                     |                 5 |              0.1269  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6464 | 10-15%                  |                10 |              0.06464 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6545 | >20%                    |                10 |              0.06545 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6559 | >20%                    |                10 |              0.06559 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6725 | >20%                    |                 5 |              0.1345  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6787 | >20%                    |                10 |              0.06787 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6799 | >20%                    |                 5 |              0.13598 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6949 | >20%                    |                 2 |              0.34745 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6952 | >20%                    |                 5 |              0.13904 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.698  | >20%                    |                 2 |              0.349   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7051 | >20%                    |                 2 |              0.35255 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7145 |                         |                 2 |              0.35725 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7229 | >20%                    |                10 |              0.07229 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7333 | >20%                    |                10 |              0.07333 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7339 | >20%                    |                 5 |              0.14678 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7366 | >20%                    |                10 |              0.07366 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7399 | >20%                    |                 5 |              0.14798 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.748  | 15-20%                  |                10 |              0.0748  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7722 | 10-15%                  |                 2 |              0.3861  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7896 | >20%                    |                 2 |              0.3948  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7905 | >20%                    |                 5 |              0.1581  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7953 | >20%                    |                10 |              0.07953 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8073 | >20%                    |                10 |              0.08073 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8087 | >20%                    |                10 |              0.08087 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8177 | 5-10%                   |                10 |              0.08177 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8217 | >20%                    |                 5 |              0.16434 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8298 | <5%                     |                10 |              0.08298 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.8324 |                         |                10 |              0.08324 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8371 | >20%                    |                10 |              0.08371 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8451 | >20%                    |                 2 |              0.42255 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8738 | 10-15%                  |                 2 |              0.4369  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8742 | 15-20%                  |                10 |              0.08742 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8809 | 15-20%                  |                10 |              0.08809 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8853 | 5-10%                   |                 2 |              0.44265 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.886  | >20%                    |                10 |              0.0886  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9211 | 15-20%                  |                10 |              0.09211 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.926  | 5-10%                   |                10 |              0.0926  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9318 | >20%                    |                 5 |              0.18636 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9403 | >20%                    |                 5 |              0.18806 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9449 | >20%                    |                10 |              0.09449 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9535 |                         |                 5 |              0.1907  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9543 | >20%                    |                 5 |              0.19086 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9688 | >20%                    |                 5 |              0.19376 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9796 | >20%                    |                 5 |              0.19592 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9903 | >20%                    |                10 |              0.09903 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0111 | >20%                    |                10 |              0.10111 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0221 | >20%                    |                 5 |              0.20442 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0228 | 5-10%                   |                 5 |              0.20456 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0287 | >20%                    |                10 |              0.10287 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0356 | 15-20%                  |                10 |              0.10356 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0447 | >20%                    |                 5 |              0.20894 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0705 | >20%                    |                 5 |              0.2141  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0729 | >20%                    |                 2 |              0.53645 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0845 | >20%                    |                10 |              0.10845 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0883 | 15-20%                  |                10 |              0.10883 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0908 | 10-15%                  |                 2 |              0.5454  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0937 | >20%                    |                10 |              0.10937 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0943 | >20%                    |                10 |              0.10943 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1611 |                         |                10 |              0.11611 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1932 | 5-10%                   |                10 |              0.11932 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2445 |                         |                 5 |              0.2489  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2541 | >20%                    |                10 |              0.12541 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2767 | >20%                    |                10 |              0.12767 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2799 | 15-20%                  |                10 |              0.12799 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3199 | >20%                    |                 5 |              0.26398 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4248 | 15-20%                  |                10 |              0.14248 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4394 | >20%                    |                10 |              0.14394 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.5009 | >20%                    |                 5 |              0.30018 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5167 | 15-20%                  |                 5 |              0.30334 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5571 | >20%                    |                10 |              0.15571 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5906 | 10-15%                  |                10 |              0.15906 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.594  | >20%                    |                 5 |              0.3188  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9741 | 5-10%                   |                 2 |              0.98705 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      2.0687 | 5-10%                   |                 2 |              1.03435 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1618 | >20%                    |                10 |              0.21618 |