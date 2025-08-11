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

Data correct as of 2025-08-11 02:08:12.820583, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.098  | 5-10%                   |                 2 |              0.049   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1032 | >20%                    |                 2 |              0.0516  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1289 | 5-10%                   |                 2 |              0.06445 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.15   | <5%                     |                 5 |              0.03    |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1637 | <5%                     |                 5 |              0.03274 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.216  | 15-20%                  |                 2 |              0.108   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2206 | >20%                    |                 2 |              0.1103  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 15-20%                  |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2473 | 15-20%                  |                 2 |              0.12365 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.251  | >20%                    |                 2 |              0.1255  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2582 | >20%                    |                 2 |              0.1291  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2628 | 5-10%                   |                 2 |              0.1314  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2656 | >20%                    |                 2 |              0.1328  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2864 | >20%                    |                 2 |              0.1432  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3036 | 15-20%                  |                 2 |              0.1518  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3098 | >20%                    |                 2 |              0.1549  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.322  | 5-10%                   |                 2 |              0.161   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3238 | <5%                     |                 2 |              0.1619  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3335 | 5-10%                   |                 2 |              0.16675 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3566 | >20%                    |                 2 |              0.1783  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3568 | >20%                    |                 5 |              0.07136 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3596 | >20%                    |                 2 |              0.1798  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.36   | 15-20%                  |                 2 |              0.18    |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3605 | <5%                     |                 2 |              0.18025 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3646 | 10-15%                  |                 2 |              0.1823  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3697 | 15-20%                  |                 2 |              0.18485 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3716 | >20%                    |                 2 |              0.1858  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3837 | >20%                    |                 2 |              0.19185 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3871 | >20%                    |                 5 |              0.07742 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4049 | >20%                    |                 5 |              0.08098 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4053 | <5%                     |                10 |              0.04053 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.408  | <5%                     |                 2 |              0.204   |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4103 | >20%                    |                 5 |              0.08206 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4235 | >20%                    |                 5 |              0.0847  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4304 | >20%                    |                 5 |              0.08608 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4338 | 5-10%                   |                 5 |              0.08676 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4357 | >20%                    |                 2 |              0.21785 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4395 | >20%                    |                 5 |              0.0879  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4407 | >20%                    |                 2 |              0.22035 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.444  | >20%                    |                10 |              0.0444  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4472 | >20%                    |                 5 |              0.08944 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4522 | <5%                     |                 2 |              0.2261  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.462  | 5-10%                   |                 2 |              0.231   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4634 | >20%                    |                 5 |              0.09268 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4674 | 5-10%                   |                 2 |              0.2337  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4674 | >20%                    |                 2 |              0.2337  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4676 | 15-20%                  |                 5 |              0.09352 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.468  | >20%                    |                 5 |              0.0936  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4686 | >20%                    |                 2 |              0.2343  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.469  | >20%                    |                 2 |              0.2345  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4709 | >20%                    |                 2 |              0.23545 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4931 | >20%                    |                 2 |              0.24655 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4958 | >20%                    |                 2 |              0.2479  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4965 | 10-15%                  |                 2 |              0.24825 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5069 | 5-10%                   |                 5 |              0.10138 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5071 | >20%                    |                 5 |              0.10142 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5137 | >20%                    |                 2 |              0.25685 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5162 | >20%                    |                 2 |              0.2581  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5191 | 10-15%                  |                 5 |              0.10382 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5402 | >20%                    |                 5 |              0.10804 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5435 | >20%                    |                 5 |              0.1087  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5502 | 10-15%                  |                 5 |              0.11004 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5533 | >20%                    |                 5 |              0.11066 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5543 | >20%                    |                 2 |              0.27715 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5551 | 15-20%                  |                10 |              0.05551 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5553 | >20%                    |                 2 |              0.27765 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5554 | <5%                     |                 2 |              0.2777  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5646 | >20%                    |                 2 |              0.2823  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5667 | >20%                    |                 2 |              0.28335 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5714 | >20%                    |                 5 |              0.11428 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5728 | 15-20%                  |                 2 |              0.2864  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5757 | >20%                    |                 2 |              0.28785 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5882 | 5-10%                   |                 2 |              0.2941  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5939 | 15-20%                  |                10 |              0.05939 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5955 | >20%                    |                 5 |              0.1191  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6011 | 5-10%                   |                 5 |              0.12022 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6098 | >20%                    |                 5 |              0.12196 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6102 | 10-15%                  |                 5 |              0.12204 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6118 | >20%                    |                 5 |              0.12236 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6132 | >20%                    |                 5 |              0.12264 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6292 | >20%                    |                 5 |              0.12584 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6302 | 10-15%                  |                 5 |              0.12604 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6358 | >20%                    |                 5 |              0.12716 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6443 | >20%                    |                 2 |              0.32215 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6513 | >20%                    |                 2 |              0.32565 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6535 | 5-10%                   |                 5 |              0.1307  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6595 | <5%                     |                 5 |              0.1319  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6606 | <5%                     |                10 |              0.06606 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6683 | <5%                     |                 5 |              0.13366 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6742 | >20%                    |                 5 |              0.13484 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6787 | >20%                    |                 5 |              0.13574 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6835 | 15-20%                  |                 2 |              0.34175 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6948 | >20%                    |                 5 |              0.13896 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7081 | >20%                    |                 2 |              0.35405 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7127 | 10-15%                  |                 2 |              0.35635 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7133 | 15-20%                  |                 5 |              0.14266 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7159 | >20%                    |                10 |              0.07159 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7188 | >20%                    |                10 |              0.07188 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7226 | 15-20%                  |                10 |              0.07226 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7274 | >20%                    |                10 |              0.07274 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7336 | >20%                    |                10 |              0.07336 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7347 | 15-20%                  |                 2 |              0.36735 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7371 | <5%                     |                10 |              0.07371 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7458 | 5-10%                   |                 5 |              0.14916 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7505 | >20%                    |                 5 |              0.1501  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7671 | >20%                    |                 5 |              0.15342 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7725 | 15-20%                  |                10 |              0.07725 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7736 | >20%                    |                 5 |              0.15472 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7753 | >20%                    |                 5 |              0.15506 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7765 | 15-20%                  |                10 |              0.07765 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7794 | >20%                    |                10 |              0.07794 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8039 | 15-20%                  |                10 |              0.08039 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8049 | >20%                    |                 5 |              0.16098 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8239 | >20%                    |                 2 |              0.41195 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8265 | >20%                    |                10 |              0.08265 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8289 | >20%                    |                 5 |              0.16578 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8349 | >20%                    |                 5 |              0.16698 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8439 | >20%                    |                10 |              0.08439 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8463 | >20%                    |                10 |              0.08463 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8632 | >20%                    |                10 |              0.08632 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8711 | 5-10%                   |                10 |              0.08711 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8822 | >20%                    |                 5 |              0.17644 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8911 | <5%                     |                10 |              0.08911 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8921 | 5-10%                   |                10 |              0.08921 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9047 | 5-10%                   |                10 |              0.09047 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9147 | 5-10%                   |                 5 |              0.18294 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9156 | 5-10%                   |                10 |              0.09156 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9185 | <5%                     |                 5 |              0.1837  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9245 | 5-10%                   |                10 |              0.09245 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9312 | 15-20%                  |                10 |              0.09312 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9322 | 15-20%                  |                10 |              0.09322 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9538 | 5-10%                   |                10 |              0.09538 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9638 | >20%                    |                 2 |              0.4819  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.982  | 15-20%                  |                10 |              0.0982  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9947 | >20%                    |                10 |              0.09947 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9985 | 15-20%                  |                10 |              0.09985 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0067 | >20%                    |                10 |              0.10067 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0206 | <5%                     |                10 |              0.10206 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0353 | 5-10%                   |                10 |              0.10353 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0405 | <5%                     |                10 |              0.10405 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0445 | 15-20%                  |                10 |              0.10445 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.064  | <5%                     |                10 |              0.1064  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0713 | 15-20%                  |                10 |              0.10713 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0734 | 5-10%                   |                10 |              0.10734 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0871 | 15-20%                  |                 5 |              0.21742 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0992 | >20%                    |                10 |              0.10992 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1014 | >20%                    |                10 |              0.11014 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1476 | >20%                    |                10 |              0.11476 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1507 | >20%                    |                10 |              0.11507 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1727 | >20%                    |                 5 |              0.23454 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1846 | <5%                     |                 2 |              0.5923  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1855 | >20%                    |                10 |              0.11855 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1879 | >20%                    |                10 |              0.11879 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1899 | >20%                    |                 2 |              0.59495 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.206  | >20%                    |                 5 |              0.2412  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2503 | >20%                    |                10 |              0.12503 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2509 | >20%                    |                 5 |              0.25018 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2522 | >20%                    |                 2 |              0.6261  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2934 | >20%                    |                 5 |              0.25868 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3249 | 5-10%                   |                10 |              0.13249 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3895 | >20%                    |                10 |              0.13895 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.4505 | 5-10%                   |                 2 |              0.72525 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4737 | 15-20%                  |                 5 |              0.29474 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5241 | >20%                    |                10 |              0.15241 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5368 | >20%                    |                10 |              0.15368 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5709 | <5%                     |                 5 |              0.31418 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5889 | >20%                    |                10 |              0.15889 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5956 | <5%                     |                10 |              0.15956 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6933 | 10-15%                  |                10 |              0.16933 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2049 | <5%                     |                10 |              0.22049 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2381 | 5-10%                   |                10 |              0.22381 |