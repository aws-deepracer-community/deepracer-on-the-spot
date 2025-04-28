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

Data correct as of 2025-04-28 01:52:43.718260, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.117  | >20%                    |                 2 |              0.0585  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1426 | >20%                    |                 2 |              0.0713  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1528 | <5%                     |                 2 |              0.0764  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.156  | 15-20%                  |                 5 |              0.0312  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1884 | <5%                     |                 5 |              0.03768 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1914 | 15-20%                  |                 2 |              0.0957  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2086 | >20%                    |                 5 |              0.04172 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.222  | <5%                     |                 2 |              0.111   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2234 | 15-20%                  |                 2 |              0.1117  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2396 | 5-10%                   |                 2 |              0.1198  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2461 | 5-10%                   |                 5 |              0.04922 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2554 | 15-20%                  |                10 |              0.02554 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2559 | >20%                    |                 2 |              0.12795 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2594 | >20%                    |                 5 |              0.05188 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2726 | 5-10%                   |                 2 |              0.1363  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2786 | <5%                     |                 2 |              0.1393  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2824 | >20%                    |                 2 |              0.1412  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2831 | >20%                    |                 2 |              0.14155 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | 10-15%                  |                10 |              0.02887 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2957 | 5-10%                   |                 2 |              0.14785 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3016 | 10-15%                  |                 2 |              0.1508  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3016 | <5%                     |                 2 |              0.1508  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3018 | <5%                     |                 2 |              0.1509  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3022 | <5%                     |                 5 |              0.06044 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3069 | >20%                    |                 2 |              0.15345 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3069 | 10-15%                  |                10 |              0.03069 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3085 | 5-10%                   |                 2 |              0.15425 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3131 | >20%                    |                 2 |              0.15655 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3168 | >20%                    |                 2 |              0.1584  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3172 | 10-15%                  |                10 |              0.03172 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3176 | >20%                    |                10 |              0.03176 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3183 | >20%                    |                10 |              0.03183 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3346 | >20%                    |                10 |              0.03346 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3383 | >20%                    |                 2 |              0.16915 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3388 | 15-20%                  |                10 |              0.03388 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3401 | 5-10%                   |                 2 |              0.17005 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3436 | >20%                    |                 2 |              0.1718  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3458 | >20%                    |                 2 |              0.1729  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3523 | >20%                    |                 2 |              0.17615 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3526 | >20%                    |                 5 |              0.07052 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3594 | >20%                    |                 2 |              0.1797  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.36   | <5%                     |                 5 |              0.072   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3603 | >20%                    |                 2 |              0.18015 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3619 | >20%                    |                 5 |              0.07238 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3666 | >20%                    |                 5 |              0.07332 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3717 | 5-10%                   |                 5 |              0.07434 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.373  | >20%                    |                10 |              0.0373  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3803 | 10-15%                  |                 2 |              0.19015 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3829 | <5%                     |                 2 |              0.19145 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.385  | 15-20%                  |                10 |              0.0385  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.391  | 5-10%                   |                 5 |              0.0782  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4035 | 5-10%                   |                 2 |              0.20175 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.413  | 10-15%                  |                 2 |              0.2065  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4141 | >20%                    |                 2 |              0.20705 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4145 | 15-20%                  |                 5 |              0.0829  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4148 | >20%                    |                 2 |              0.2074  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4188 | 10-15%                  |                 2 |              0.2094  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4253 | >20%                    |                 5 |              0.08506 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4255 | 15-20%                  |                 5 |              0.0851  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4256 | 5-10%                   |                 5 |              0.08512 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.43   | <5%                     |                 5 |              0.086   |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4409 | >20%                    |                 2 |              0.22045 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4415 | 15-20%                  |                 2 |              0.22075 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4457 | >20%                    |                 5 |              0.08914 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4544 | >20%                    |                10 |              0.04544 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4585 | 10-15%                  |                 5 |              0.0917  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4597 | >20%                    |                 2 |              0.22985 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4698 | >20%                    |                 5 |              0.09396 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4701 | >20%                    |                 5 |              0.09402 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4705 | >20%                    |                 2 |              0.23525 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4718 | <5%                     |                 5 |              0.09436 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.472  | 5-10%                   |                 5 |              0.0944  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4763 | >20%                    |                 5 |              0.09526 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.484  | >20%                    |                 5 |              0.0968  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4895 | >20%                    |                 5 |              0.0979  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4932 | 10-15%                  |                 5 |              0.09864 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5001 | >20%                    |                 2 |              0.25005 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5003 | <5%                     |                 2 |              0.25015 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5004 | 5-10%                   |                 5 |              0.10008 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5111 | >20%                    |                 5 |              0.10222 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.512  | >20%                    |                 2 |              0.256   |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5149 | >20%                    |                 2 |              0.25745 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5202 | 15-20%                  |                 5 |              0.10404 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5281 | 10-15%                  |                 2 |              0.26405 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5299 | >20%                    |                10 |              0.05299 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.536  | >20%                    |                 5 |              0.1072  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5523 | >20%                    |                 2 |              0.27615 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5581 | >20%                    |                 2 |              0.27905 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5612 | 10-15%                  |                10 |              0.05612 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5619 | 10-15%                  |                10 |              0.05619 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.562  | >20%                    |                 5 |              0.1124  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5648 | >20%                    |                 5 |              0.11296 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5702 | 5-10%                   |                 5 |              0.11404 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5738 | 10-15%                  |                 2 |              0.2869  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5753 | 10-15%                  |                 5 |              0.11506 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5831 | >20%                    |                 2 |              0.29155 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5843 | >20%                    |                 5 |              0.11686 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5849 | >20%                    |                 2 |              0.29245 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5883 | >20%                    |                 5 |              0.11766 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5889 | >20%                    |                 5 |              0.11778 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5956 | 15-20%                  |                10 |              0.05956 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5957 | <5%                     |                 5 |              0.11914 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6228 | >20%                    |                 2 |              0.3114  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6233 | >20%                    |                 5 |              0.12466 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6253 | 10-15%                  |                 5 |              0.12506 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6412 | 15-20%                  |                10 |              0.06412 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6553 | >20%                    |                 2 |              0.32765 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6608 | <5%                     |                10 |              0.06608 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6613 | >20%                    |                 5 |              0.13226 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6681 | 10-15%                  |                10 |              0.06681 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6764 | >20%                    |                 2 |              0.3382  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.682  | 15-20%                  |                 5 |              0.1364  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6829 | >20%                    |                 2 |              0.34145 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.704  | >20%                    |                 2 |              0.352   |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7053 | >20%                    |                 2 |              0.35265 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7128 | <5%                     |                 5 |              0.14256 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7139 | <5%                     |                 5 |              0.14278 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7149 | 5-10%                   |                10 |              0.07149 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7161 | >20%                    |                10 |              0.07161 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7182 | >20%                    |                10 |              0.07182 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7198 | >20%                    |                10 |              0.07198 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7209 | 5-10%                   |                10 |              0.07209 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7209 | >20%                    |                 5 |              0.14418 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7431 | >20%                    |                 5 |              0.14862 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7431 | <5%                     |                 5 |              0.14862 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7432 | >20%                    |                 5 |              0.14864 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7722 | >20%                    |                10 |              0.07722 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7735 | >20%                    |                 5 |              0.1547  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7791 | >20%                    |                 5 |              0.15582 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7942 | 10-15%                  |                10 |              0.07942 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.796  | >20%                    |                10 |              0.0796  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.805  | 15-20%                  |                10 |              0.0805  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8287 | <5%                     |                10 |              0.08287 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8325 | >20%                    |                 5 |              0.1665  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8338 | 15-20%                  |                10 |              0.08338 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8444 | 10-15%                  |                10 |              0.08444 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8505 | 10-15%                  |                10 |              0.08505 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8515 | 10-15%                  |                10 |              0.08515 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8541 | >20%                    |                10 |              0.08541 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8598 | 10-15%                  |                 5 |              0.17196 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.865  | >20%                    |                10 |              0.0865  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8659 | 5-10%                   |                10 |              0.08659 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8712 | 10-15%                  |                10 |              0.08712 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8723 | 15-20%                  |                10 |              0.08723 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8788 | >20%                    |                 2 |              0.4394  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8934 | <5%                     |                10 |              0.08934 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8946 | <5%                     |                10 |              0.08946 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9003 | >20%                    |                10 |              0.09003 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9014 | >20%                    |                 2 |              0.4507  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9088 | 15-20%                  |                10 |              0.09088 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.937  | <5%                     |                10 |              0.0937  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9476 | 10-15%                  |                 5 |              0.18952 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9605 | >20%                    |                10 |              0.09605 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9623 | 15-20%                  |                10 |              0.09623 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9767 | >20%                    |                 5 |              0.19534 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9913 | >20%                    |                10 |              0.09913 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0149 | >20%                    |                10 |              0.10149 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0276 | >20%                    |                 2 |              0.5138  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.048  | >20%                    |                10 |              0.1048  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0538 | <5%                     |                10 |              0.10538 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0594 | >20%                    |                 2 |              0.5297  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0731 | >20%                    |                 5 |              0.21462 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0834 | >20%                    |                10 |              0.10834 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0836 | <5%                     |                 5 |              0.21672 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0916 | <5%                     |                10 |              0.10916 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1542 | >20%                    |                10 |              0.11542 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1619 | 15-20%                  |                 2 |              0.58095 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.204  | >20%                    |                10 |              0.1204  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2307 | >20%                    |                 5 |              0.24614 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2333 | 10-15%                  |                 2 |              0.61665 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2514 | >20%                    |                10 |              0.12514 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2613 | 5-10%                   |                10 |              0.12613 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2686 | <5%                     |                 5 |              0.25372 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2746 | >20%                    |                 5 |              0.25492 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3543 | 15-20%                  |                10 |              0.13543 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3662 | >20%                    |                 2 |              0.6831  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3751 | 15-20%                  |                10 |              0.13751 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4087 | >20%                    |                 5 |              0.28174 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.696  | >20%                    |                10 |              0.1696  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7157 | 15-20%                  |                10 |              0.17157 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8522 | >20%                    |                10 |              0.18522 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9804 | <5%                     |                10 |              0.19804 |