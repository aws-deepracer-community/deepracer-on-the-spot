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

Data correct as of 2025-12-02 01:55:56.772092, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1371 | >20%                    |                 2 |              0.06855 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1413 | >20%                    |                 2 |              0.07065 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1421 | 15-20%                  |                 2 |              0.07105 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1754 | <5%                     |                 2 |              0.0877  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2023 | >20%                    |                 2 |              0.10115 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2035 | <5%                     |                 2 |              0.10175 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.212  | 10-15%                  |                 2 |              0.106   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2266 | >20%                    |                 2 |              0.1133  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2301 | >20%                    |                 2 |              0.11505 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | >20%                    |                10 |              0.02308 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.235  | >20%                    |                 2 |              0.1175  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2418 | >20%                    |                 2 |              0.1209  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2466 | 5-10%                   |                 5 |              0.04932 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2587 | >20%                    |                 5 |              0.05174 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2671 | >20%                    |                 2 |              0.13355 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2699 | >20%                    |                 5 |              0.05398 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2719 | 10-15%                  |                 5 |              0.05438 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.276  | >20%                    |                 2 |              0.138   |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2805 | >20%                    |                 5 |              0.0561  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2827 | 10-15%                  |                 2 |              0.14135 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2834 | 5-10%                   |                 2 |              0.1417  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2849 | <5%                     |                 2 |              0.14245 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2939 | >20%                    |                 2 |              0.14695 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3033 | 10-15%                  |                10 |              0.03033 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3134 | >20%                    |                 2 |              0.1567  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3138 | >20%                    |                 5 |              0.06276 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3219 | 5-10%                   |                 2 |              0.16095 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3226 | 10-15%                  |                10 |              0.03226 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3247 | 15-20%                  |                 2 |              0.16235 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3403 | <5%                     |                 5 |              0.06806 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3414 | 5-10%                   |                10 |              0.03414 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3471 | 10-15%                  |                 2 |              0.17355 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3522 | >20%                    |                 2 |              0.1761  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.366  | >20%                    |                10 |              0.0366  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3669 | >20%                    |                 5 |              0.07338 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3671 | 15-20%                  |                 2 |              0.18355 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3699 | >20%                    |                 5 |              0.07398 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3727 | >20%                    |                 2 |              0.18635 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3752 | >20%                    |                 2 |              0.1876  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.377  | >20%                    |                 2 |              0.1885  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.381  | <5%                     |                 2 |              0.1905  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3851 | >20%                    |                 2 |              0.19255 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3854 | 15-20%                  |                 5 |              0.07708 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3869 | >20%                    |                 2 |              0.19345 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3899 | >20%                    |                 5 |              0.07798 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3972 | 15-20%                  |                 2 |              0.1986  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3976 | >20%                    |                 2 |              0.1988  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3997 | >20%                    |                 2 |              0.19985 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.413  | 10-15%                  |                 5 |              0.0826  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.416  | 15-20%                  |                 5 |              0.0832  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4168 | <5%                     |                 2 |              0.2084  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4219 | 10-15%                  |                10 |              0.04219 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.424  | 10-15%                  |                 2 |              0.212   |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4242 | >20%                    |                 5 |              0.08484 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4251 | 5-10%                   |                 2 |              0.21255 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4289 | >20%                    |                 2 |              0.21445 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4297 | 15-20%                  |                 2 |              0.21485 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4303 | >20%                    |                 5 |              0.08606 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4315 | >20%                    |                 2 |              0.21575 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4339 | >20%                    |                 2 |              0.21695 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4387 | >20%                    |                10 |              0.04387 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4474 | 10-15%                  |                 5 |              0.08948 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4484 | >20%                    |                10 |              0.04484 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4504 | >20%                    |                 5 |              0.09008 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4506 | >20%                    |                 2 |              0.2253  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4534 | >20%                    |                 2 |              0.2267  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4535 | >20%                    |                10 |              0.04535 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.454  | 15-20%                  |                 5 |              0.0908  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4543 | <5%                     |                 2 |              0.22715 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4673 | >20%                    |                 5 |              0.09346 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.47   | 15-20%                  |                10 |              0.047   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4715 | >20%                    |                 5 |              0.0943  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4726 | >20%                    |                 5 |              0.09452 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4782 | 10-15%                  |                 2 |              0.2391  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4821 | >20%                    |                 2 |              0.24105 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4835 | 10-15%                  |                 2 |              0.24175 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4866 | 15-20%                  |                 5 |              0.09732 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4925 | >20%                    |                 5 |              0.0985  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4962 | >20%                    |                 5 |              0.09924 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4988 | >20%                    |                 5 |              0.09976 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5023 | 10-15%                  |                 5 |              0.10046 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5041 | 15-20%                  |                 5 |              0.10082 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.505  | >20%                    |                 5 |              0.101   |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5118 | 10-15%                  |                 2 |              0.2559  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5149 | <5%                     |                10 |              0.05149 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5224 | >20%                    |                 2 |              0.2612  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5484 | >20%                    |                 5 |              0.10968 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5486 | >20%                    |                 5 |              0.10972 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5513 | >20%                    |                 5 |              0.11026 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5536 | 15-20%                  |                 5 |              0.11072 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5549 | >20%                    |                 5 |              0.11098 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5553 | 5-10%                   |                10 |              0.05553 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5571 | 10-15%                  |                 5 |              0.11142 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5673 | 10-15%                  |                 5 |              0.11346 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5699 | 15-20%                  |                 5 |              0.11398 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5735 | 15-20%                  |                10 |              0.05735 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5755 | <5%                     |                10 |              0.05755 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5813 | 15-20%                  |                 5 |              0.11626 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5838 | >20%                    |                 2 |              0.2919  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5993 | >20%                    |                 5 |              0.11986 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6072 | 15-20%                  |                 5 |              0.12144 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6137 | >20%                    |                 2 |              0.30685 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6159 | 10-15%                  |                 5 |              0.12318 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6182 | >20%                    |                 2 |              0.3091  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6198 | >20%                    |                 5 |              0.12396 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.621  | >20%                    |                 2 |              0.3105  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6224 | >20%                    |                10 |              0.06224 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6233 | 10-15%                  |                 5 |              0.12466 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6348 | >20%                    |                 5 |              0.12696 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6437 | >20%                    |                 5 |              0.12874 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6469 | 5-10%                   |                 2 |              0.32345 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6528 | 10-15%                  |                 5 |              0.13056 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6644 | >20%                    |                10 |              0.06644 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6663 | 5-10%                   |                10 |              0.06663 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6717 | <5%                     |                 5 |              0.13434 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6802 | >20%                    |                10 |              0.06802 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6806 | >20%                    |                10 |              0.06806 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6822 | 15-20%                  |                10 |              0.06822 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6839 | >20%                    |                10 |              0.06839 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6873 | >20%                    |                 5 |              0.13746 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.691  | >20%                    |                10 |              0.0691  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6933 | 5-10%                   |                 5 |              0.13866 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6982 | >20%                    |                 2 |              0.3491  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7033 | >20%                    |                 5 |              0.14066 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7139 | <5%                     |                10 |              0.07139 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7183 | >20%                    |                 2 |              0.35915 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7248 | >20%                    |                10 |              0.07248 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.728  | >20%                    |                10 |              0.0728  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7476 | >20%                    |                 5 |              0.14952 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7477 | 15-20%                  |                10 |              0.07477 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7524 | >20%                    |                 2 |              0.3762  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7644 | >20%                    |                10 |              0.07644 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7664 | >20%                    |                10 |              0.07664 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7673 | 10-15%                  |                10 |              0.07673 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7717 | 10-15%                  |                10 |              0.07717 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7742 | >20%                    |                 5 |              0.15484 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7744 | 15-20%                  |                10 |              0.07744 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7902 | >20%                    |                10 |              0.07902 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7985 | >20%                    |                10 |              0.07985 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8064 | >20%                    |                10 |              0.08064 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8127 | 15-20%                  |                 5 |              0.16254 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8385 | >20%                    |                10 |              0.08385 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8431 | 10-15%                  |                10 |              0.08431 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8581 | >20%                    |                 5 |              0.17162 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8584 | >20%                    |                10 |              0.08584 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8616 | >20%                    |                 5 |              0.17232 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8646 | >20%                    |                 2 |              0.4323  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8655 | 10-15%                  |                 2 |              0.43275 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8773 | >20%                    |                10 |              0.08773 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8966 | 10-15%                  |                10 |              0.08966 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9116 | >20%                    |                 5 |              0.18232 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9164 | >20%                    |                10 |              0.09164 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.917  | 5-10%                   |                10 |              0.0917  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9427 | >20%                    |                 5 |              0.18854 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9516 | 15-20%                  |                10 |              0.09516 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9604 | >20%                    |                 2 |              0.4802  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9645 | >20%                    |                10 |              0.09645 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.968  | <5%                     |                10 |              0.0968  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9837 | >20%                    |                 5 |              0.19674 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9862 | >20%                    |                10 |              0.09862 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9917 | >20%                    |                10 |              0.09917 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0247 | 10-15%                  |                10 |              0.10247 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0445 | 15-20%                  |                10 |              0.10445 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0514 | >20%                    |                 2 |              0.5257  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.0622 | <5%                     |                 2 |              0.5311  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0626 | >20%                    |                10 |              0.10626 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1125 | 15-20%                  |                10 |              0.11125 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1911 | <5%                     |                 5 |              0.23822 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2054 | >20%                    |                10 |              0.12054 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2468 | >20%                    |                 5 |              0.24936 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2621 | >20%                    |                10 |              0.12621 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2979 | >20%                    |                10 |              0.12979 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3669 | >20%                    |                 2 |              0.68345 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3885 | 10-15%                  |                10 |              0.13885 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4023 | >20%                    |                 2 |              0.70115 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4883 | >20%                    |                 5 |              0.29766 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.534  | >20%                    |                10 |              0.1534  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5457 | 5-10%                   |                 5 |              0.30914 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5523 | >20%                    |                10 |              0.15523 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9945 | 15-20%                  |                10 |              0.19945 |