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

Data correct as of 2026-02-23 02:38:24.940373, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1388 | >20%                    |                 2 |              0.0694  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1596 | >20%                    |                 2 |              0.0798  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1813 | >20%                    |                 5 |              0.03626 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2105 | >20%                    |                 2 |              0.10525 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2228 | >20%                    |                 2 |              0.1114  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2409 | >20%                    |                 2 |              0.12045 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2488 | 15-20%                  |                 2 |              0.1244  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2519 | >20%                    |                 2 |              0.12595 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2529 | 10-15%                  |                 2 |              0.12645 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2666 | >20%                    |                 2 |              0.1333  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2694 | >20%                    |                 5 |              0.05388 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2712 | 5-10%                   |                10 |              0.02712 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2783 | <5%                     |                10 |              0.02783 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2825 | 5-10%                   |                 2 |              0.14125 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.29   | <5%                     |                 2 |              0.145   |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2943 | 10-15%                  |                 2 |              0.14715 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2984 | 5-10%                   |                 2 |              0.1492  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2998 | >20%                    |                 2 |              0.1499  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3064 | >20%                    |                 2 |              0.1532  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3092 | <5%                     |                 5 |              0.06184 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3108 | >20%                    |                 2 |              0.1554  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3141 | >20%                    |                 2 |              0.15705 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3201 | >20%                    |                 2 |              0.16005 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3221 | >20%                    |                 2 |              0.16105 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3328 | >20%                    |                 5 |              0.06656 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3404 | 5-10%                   |                 5 |              0.06808 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3422 | >20%                    |                 5 |              0.06844 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3493 | >20%                    |                 2 |              0.17465 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.352  | <5%                     |                10 |              0.0352  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.356  | <5%                     |                 5 |              0.0712  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3563 | >20%                    |                 5 |              0.07126 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3624 | >20%                    |                 5 |              0.07248 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3666 | >20%                    |                 5 |              0.07332 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3698 | >20%                    |                10 |              0.03698 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3715 | >20%                    |                 5 |              0.0743  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.375  | 5-10%                   |                 2 |              0.1875  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3795 | 10-15%                  |                 2 |              0.18975 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3865 | 15-20%                  |                 2 |              0.19325 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3898 | >20%                    |                 5 |              0.07796 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3901 | 5-10%                   |                10 |              0.03901 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.391  | >20%                    |                10 |              0.0391  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.391  | >20%                    |                 2 |              0.1955  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3948 | >20%                    |                 2 |              0.1974  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3949 | 10-15%                  |                 5 |              0.07898 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3956 | 15-20%                  |                 2 |              0.1978  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3994 | >20%                    |                 2 |              0.1997  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.419  | >20%                    |                 5 |              0.0838  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4212 | >20%                    |                10 |              0.04212 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4216 | 5-10%                   |                 2 |              0.2108  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4218 | >20%                    |                 5 |              0.08436 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4232 | 5-10%                   |                 2 |              0.2116  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4236 | >20%                    |                 2 |              0.2118  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4274 | >20%                    |                 2 |              0.2137  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4294 | 15-20%                  |                 2 |              0.2147  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.43   | >20%                    |                 2 |              0.215   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4323 | <5%                     |                 2 |              0.21615 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4348 | <5%                     |                 2 |              0.2174  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4375 | <5%                     |                 5 |              0.0875  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4388 | 15-20%                  |                 5 |              0.08776 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4396 | <5%                     |                 2 |              0.2198  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4433 | >20%                    |                 5 |              0.08866 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4471 | 5-10%                   |                 2 |              0.22355 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4503 | >20%                    |                 5 |              0.09006 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4534 | >20%                    |                 2 |              0.2267  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.46   | >20%                    |                 2 |              0.23    |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4621 | 15-20%                  |                 2 |              0.23105 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4649 | 5-10%                   |                 5 |              0.09298 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4654 | >20%                    |                 5 |              0.09308 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4654 | 5-10%                   |                 2 |              0.2327  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4655 | >20%                    |                10 |              0.04655 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4741 | <5%                     |                 5 |              0.09482 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4767 | >20%                    |                 2 |              0.23835 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4973 | <5%                     |                10 |              0.04973 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4975 | >20%                    |                 5 |              0.0995  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.498  | >20%                    |                 2 |              0.249   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5143 | 15-20%                  |                 2 |              0.25715 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5156 | 15-20%                  |                 5 |              0.10312 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.52   | >20%                    |                 5 |              0.104   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5231 | >20%                    |                 2 |              0.26155 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5234 | >20%                    |                 5 |              0.10468 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5242 | >20%                    |                10 |              0.05242 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5252 | >20%                    |                 2 |              0.2626  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.532  | >20%                    |                 5 |              0.1064  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5384 | >20%                    |                10 |              0.05384 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5404 | <5%                     |                 5 |              0.10808 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5414 | <5%                     |                10 |              0.05414 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5417 | >20%                    |                10 |              0.05417 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5484 | >20%                    |                 5 |              0.10968 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5492 | <5%                     |                10 |              0.05492 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5545 | 15-20%                  |                 5 |              0.1109  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5589 | 15-20%                  |                10 |              0.05589 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5639 | >20%                    |                 5 |              0.11278 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5759 | 15-20%                  |                10 |              0.05759 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5833 | >20%                    |                10 |              0.05833 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.587  | 5-10%                   |                 5 |              0.1174  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5903 | >20%                    |                 5 |              0.11806 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5929 | 5-10%                   |                 2 |              0.29645 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5944 | >20%                    |                10 |              0.05944 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6042 | 15-20%                  |                 2 |              0.3021  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6144 | 15-20%                  |                10 |              0.06144 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6266 | >20%                    |                 5 |              0.12532 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6271 | >20%                    |                 2 |              0.31355 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6282 | >20%                    |                 5 |              0.12564 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6292 | >20%                    |                 5 |              0.12584 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6348 | >20%                    |                 2 |              0.3174  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6409 | 5-10%                   |                 5 |              0.12818 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6432 | >20%                    |                10 |              0.06432 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6466 | >20%                    |                 5 |              0.12932 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6482 | 10-15%                  |                 5 |              0.12964 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6536 | 15-20%                  |                10 |              0.06536 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.661  | >20%                    |                 5 |              0.1322  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.6696 | >20%                    |                10 |              0.06696 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6777 | <5%                     |                 5 |              0.13554 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6779 | 5-10%                   |                 5 |              0.13558 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6842 | 15-20%                  |                 5 |              0.13684 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6882 | >20%                    |                 5 |              0.13764 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6908 | 5-10%                   |                 5 |              0.13816 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6916 | <5%                     |                10 |              0.06916 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6929 | >20%                    |                 5 |              0.13858 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7045 | 10-15%                  |                10 |              0.07045 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7086 | >20%                    |                 2 |              0.3543  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7182 | 10-15%                  |                10 |              0.07182 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7188 | >20%                    |                 5 |              0.14376 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7212 | 5-10%                   |                 2 |              0.3606  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7275 | >20%                    |                10 |              0.07275 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7412 | >20%                    |                10 |              0.07412 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7419 |                         |                 2 |              0.37095 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7704 | <5%                     |                10 |              0.07704 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.772  | >20%                    |                10 |              0.0772  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7803 | >20%                    |                 2 |              0.39015 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.783  | >20%                    |                 5 |              0.1566  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7844 | >20%                    |                 5 |              0.15688 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8168 | 15-20%                  |                10 |              0.08168 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8179 | 5-10%                   |                10 |              0.08179 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8209 | >20%                    |                 2 |              0.41045 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8273 | <5%                     |                10 |              0.08273 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.828  | >20%                    |                10 |              0.0828  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8295 | >20%                    |                10 |              0.08295 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8368 | >20%                    |                 2 |              0.4184  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8381 | <5%                     |                 5 |              0.16762 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8471 | >20%                    |                10 |              0.08471 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8475 | <5%                     |                 5 |              0.1695  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8487 | >20%                    |                 5 |              0.16974 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.857  | >20%                    |                 2 |              0.4285  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.8595 | <5%                     |                 2 |              0.42975 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8601 | >20%                    |                 5 |              0.17202 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8632 | <5%                     |                10 |              0.08632 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8646 | <5%                     |                10 |              0.08646 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8682 | 5-10%                   |                10 |              0.08682 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8692 | 10-15%                  |                 2 |              0.4346  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8754 | >20%                    |                10 |              0.08754 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8881 | >20%                    |                 5 |              0.17762 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9334 | <5%                     |                10 |              0.09334 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9518 | >20%                    |                10 |              0.09518 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9776 | >20%                    |                10 |              0.09776 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9813 | >20%                    |                10 |              0.09813 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9919 | >20%                    |                 2 |              0.49595 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9957 | >20%                    |                 5 |              0.19914 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0039 | >20%                    |                10 |              0.10039 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0116 |                         |                 5 |              0.20232 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0222 | >20%                    |                10 |              0.10222 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0224 | 5-10%                   |                 5 |              0.20448 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0563 | 15-20%                  |                10 |              0.10563 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0688 | 5-10%                   |                10 |              0.10688 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0731 | >20%                    |                10 |              0.10731 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0767 | 10-15%                  |                 5 |              0.21534 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0949 | 15-20%                  |                10 |              0.10949 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1141 | >20%                    |                10 |              0.11141 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1349 | >20%                    |                 5 |              0.22698 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1381 | >20%                    |                 5 |              0.22762 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1389 | 10-15%                  |                10 |              0.11389 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1709 | <5%                     |                10 |              0.11709 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1884 | >20%                    |                10 |              0.11884 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1929 | >20%                    |                10 |              0.11929 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2173 | >20%                    |                 2 |              0.60865 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3957 | 10-15%                  |                 5 |              0.27914 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4316 | >20%                    |                10 |              0.14316 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4581 | >20%                    |                 2 |              0.72905 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4738 |                         |                10 |              0.14738 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5737 | >20%                    |                10 |              0.15737 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6115 | >20%                    |                10 |              0.16115 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6965 | 15-20%                  |                10 |              0.16965 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2795 | 10-15%                  |                10 |              0.22795 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.5003 | <5%                     |                 5 |              0.50006 |