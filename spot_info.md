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

Data correct as of 2025-09-03 01:41:23.132524, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1025 | 5-10%                   |                 2 |              0.05125 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1114 | >20%                    |                 2 |              0.0557  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1462 | >20%                    |                 2 |              0.0731  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1704 | >20%                    |                 2 |              0.0852  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1923 | >20%                    |                 5 |              0.03846 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1961 | >20%                    |                 2 |              0.09805 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2088 | 10-15%                  |                 2 |              0.1044  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2157 | >20%                    |                 2 |              0.10785 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2173 | >20%                    |                 5 |              0.04346 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2197 | 10-15%                  |                 5 |              0.04394 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2303 | >20%                    |                 5 |              0.04606 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2332 | >20%                    |                 2 |              0.1166  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2446 | >20%                    |                 2 |              0.1223  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2488 | 15-20%                  |                 5 |              0.04976 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2733 | >20%                    |                 2 |              0.13665 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2822 | 15-20%                  |                 2 |              0.1411  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2837 | >20%                    |                 2 |              0.14185 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3091 | 5-10%                   |                 2 |              0.15455 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3152 | >20%                    |                 2 |              0.1576  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3177 | >20%                    |                10 |              0.03177 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3183 | 10-15%                  |                 2 |              0.15915 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.322  | 5-10%                   |                 2 |              0.161   |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3231 | 10-15%                  |                 5 |              0.06462 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3319 | >20%                    |                 2 |              0.16595 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3345 | >20%                    |                 2 |              0.16725 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3481 | >20%                    |                 2 |              0.17405 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3491 | >20%                    |                 2 |              0.17455 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3548 | >20%                    |                 5 |              0.07096 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3588 | >20%                    |                 2 |              0.1794  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.367  | >20%                    |                 5 |              0.0734  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3709 | >20%                    |                 2 |              0.18545 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3724 | >20%                    |                 2 |              0.1862  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3767 | >20%                    |                 5 |              0.07534 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3786 | 15-20%                  |                 2 |              0.1893  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3794 | >20%                    |                10 |              0.03794 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3809 | 10-15%                  |                10 |              0.03809 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3825 | 15-20%                  |                10 |              0.03825 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3833 | >20%                    |                 2 |              0.19165 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3861 | >20%                    |                 5 |              0.07722 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3879 | 10-15%                  |                 2 |              0.19395 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3985 | 15-20%                  |                10 |              0.03985 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4102 | 15-20%                  |                 2 |              0.2051  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4214 | 10-15%                  |                 2 |              0.2107  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4217 | >20%                    |                 5 |              0.08434 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4221 | >20%                    |                 5 |              0.08442 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4223 | >20%                    |                 5 |              0.08446 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4289 | >20%                    |                 5 |              0.08578 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4482 | >20%                    |                 2 |              0.2241  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4536 | 15-20%                  |                 2 |              0.2268  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4541 | 15-20%                  |                 2 |              0.22705 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4562 | 5-10%                   |                 2 |              0.2281  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4565 | >20%                    |                 5 |              0.0913  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4568 | >20%                    |                 2 |              0.2284  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4602 | 10-15%                  |                 2 |              0.2301  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4685 | <5%                     |                 2 |              0.23425 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4696 | >20%                    |                 5 |              0.09392 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4722 | >20%                    |                 2 |              0.2361  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4795 | >20%                    |                 2 |              0.23975 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4802 | >20%                    |                 5 |              0.09604 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4899 | >20%                    |                 5 |              0.09798 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4986 | >20%                    |                 5 |              0.09972 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5017 | 10-15%                  |                 2 |              0.25085 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.508  | >20%                    |                 2 |              0.254   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5083 | 5-10%                   |                 5 |              0.10166 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5128 | >20%                    |                 5 |              0.10256 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5165 | >20%                    |                10 |              0.05165 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5207 | >20%                    |                 2 |              0.26035 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5264 | >20%                    |                 5 |              0.10528 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5279 | >20%                    |                 2 |              0.26395 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5283 | 10-15%                  |                 2 |              0.26415 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.533  | >20%                    |                 2 |              0.2665  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5495 | >20%                    |                 2 |              0.27475 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5552 | >20%                    |                 2 |              0.2776  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.556  | >20%                    |                 2 |              0.278   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5598 | >20%                    |                 5 |              0.11196 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5675 | <5%                     |                 2 |              0.28375 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5683 | 15-20%                  |                 5 |              0.11366 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5698 | >20%                    |                 5 |              0.11396 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.572  | >20%                    |                 5 |              0.1144  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5744 | 5-10%                   |                 2 |              0.2872  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5744 | >20%                    |                 5 |              0.11488 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5914 | >20%                    |                 5 |              0.11828 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.593  | >20%                    |                 2 |              0.2965  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5948 | 10-15%                  |                 5 |              0.11896 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5972 | >20%                    |                 2 |              0.2986  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6041 | >20%                    |                 5 |              0.12082 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6072 | >20%                    |                 5 |              0.12144 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6084 | >20%                    |                 5 |              0.12168 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6118 | 15-20%                  |                 5 |              0.12236 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6223 | >20%                    |                 5 |              0.12446 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6254 | >20%                    |                 5 |              0.12508 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6324 | 10-15%                  |                 5 |              0.12648 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6341 | 15-20%                  |                 5 |              0.12682 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6486 | >20%                    |                 2 |              0.3243  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6498 | >20%                    |                 5 |              0.12996 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6512 | >20%                    |                 5 |              0.13024 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6583 | 15-20%                  |                 2 |              0.32915 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6762 | 15-20%                  |                 5 |              0.13524 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.683  | 5-10%                   |                10 |              0.0683  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6909 | 15-20%                  |                10 |              0.06909 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6911 | >20%                    |                 5 |              0.13822 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6946 | >20%                    |                 5 |              0.13892 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7218 | >20%                    |                 5 |              0.14436 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7296 | >20%                    |                 5 |              0.14592 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7298 | >20%                    |                 5 |              0.14596 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7332 | >20%                    |                10 |              0.07332 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7464 | >20%                    |                 2 |              0.3732  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7489 | >20%                    |                 5 |              0.14978 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7497 | >20%                    |                10 |              0.07497 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7562 | >20%                    |                10 |              0.07562 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7608 | >20%                    |                 5 |              0.15216 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7617 | >20%                    |                10 |              0.07617 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7644 | >20%                    |                10 |              0.07644 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7648 | >20%                    |                 5 |              0.15296 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7698 | >20%                    |                 5 |              0.15396 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7724 | >20%                    |                10 |              0.07724 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7781 | >20%                    |                10 |              0.07781 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.79   | 10-15%                  |                10 |              0.079   |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8037 | 10-15%                  |                10 |              0.08037 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8097 | 15-20%                  |                10 |              0.08097 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8234 | >20%                    |                 5 |              0.16468 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8555 | 15-20%                  |                10 |              0.08555 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8636 | 10-15%                  |                 2 |              0.4318  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8663 | <5%                     |                10 |              0.08663 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.872  | 10-15%                  |                10 |              0.0872  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.887  | >20%                    |                10 |              0.0887  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8939 | <5%                     |                10 |              0.08939 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8956 | >20%                    |                10 |              0.08956 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9311 | 15-20%                  |                10 |              0.09311 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9319 | 5-10%                   |                10 |              0.09319 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9368 | 15-20%                  |                10 |              0.09368 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9402 | 5-10%                   |                10 |              0.09402 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9444 | <5%                     |                10 |              0.09444 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.954  | >20%                    |                10 |              0.0954  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9576 | >20%                    |                 5 |              0.19152 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.973  | 10-15%                  |                10 |              0.0973  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9883 | >20%                    |                 2 |              0.49415 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9963 | >20%                    |                10 |              0.09963 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9983 | >20%                    |                10 |              0.09983 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0045 | 5-10%                   |                10 |              0.10045 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0129 | >20%                    |                10 |              0.10129 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.013  | 15-20%                  |                10 |              0.1013  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0186 | 15-20%                  |                10 |              0.10186 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0365 | <5%                     |                10 |              0.10365 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0401 | 15-20%                  |                10 |              0.10401 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0424 | >20%                    |                 5 |              0.20848 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0553 | >20%                    |                10 |              0.10553 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0598 | >20%                    |                 2 |              0.5299  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0766 | >20%                    |                10 |              0.10766 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0996 | 15-20%                  |                10 |              0.10996 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1188 | 10-15%                  |                 5 |              0.22376 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1216 | >20%                    |                 5 |              0.22432 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1362 | >20%                    |                 5 |              0.22724 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1519 | 15-20%                  |                10 |              0.11519 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.1667 | >20%                    |                10 |              0.11667 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1743 | 10-15%                  |                 2 |              0.58715 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1793 | >20%                    |                10 |              0.11793 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1917 | 5-10%                   |                10 |              0.11917 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2131 | >20%                    |                 2 |              0.60655 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.243  | 5-10%                   |                 2 |              0.6215  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2814 | 10-15%                  |                 5 |              0.25628 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3229 | 10-15%                  |                10 |              0.13229 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3584 | >20%                    |                 5 |              0.27168 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4413 | >20%                    |                10 |              0.14413 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4795 | 10-15%                  |                 5 |              0.2959  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.538  | >20%                    |                10 |              0.1538  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.5436 | 15-20%                  |                10 |              0.15436 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5804 | >20%                    |                10 |              0.15804 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5817 | >20%                    |                10 |              0.15817 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.584  | >20%                    |                10 |              0.1584  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.589  | >20%                    |                10 |              0.1589  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.3101 | 10-15%                  |                10 |              0.23101 |