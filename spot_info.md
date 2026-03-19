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

Data correct as of 2026-03-19 02:40:27.014373, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1016 | >20%                    |                 2 |              0.0508  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1035 | >20%                    |                 2 |              0.05175 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1366 | 10-15%                  |                 2 |              0.0683  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1687 | 15-20%                  |                 5 |              0.03374 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1764 | >20%                    |                 2 |              0.0882  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | >20%                    |                 5 |              0.03708 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.1866 | <5%                     |                 2 |              0.0933  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2083 | 10-15%                  |                 2 |              0.10415 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2338 | 10-15%                  |                 2 |              0.1169  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2344 | >20%                    |                 2 |              0.1172  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2397 | >20%                    |                 2 |              0.11985 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2489 | >20%                    |                 2 |              0.12445 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2551 | >20%                    |                 2 |              0.12755 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2568 | >20%                    |                 2 |              0.1284  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2581 | 15-20%                  |                10 |              0.02581 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2587 | 5-10%                   |                10 |              0.02587 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2735 | >20%                    |                 2 |              0.13675 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2835 | >20%                    |                 2 |              0.14175 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.285  | >20%                    |                 5 |              0.057   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2855 | >20%                    |                 5 |              0.0571  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2861 | 15-20%                  |                 2 |              0.14305 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2924 | 5-10%                   |                 2 |              0.1462  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.2943 | >20%                    |                 2 |              0.14715 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2945 | >20%                    |                 2 |              0.14725 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2956 | 5-10%                   |                 5 |              0.05912 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2984 | >20%                    |                 5 |              0.05968 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3032 | >20%                    |                 5 |              0.06064 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3072 | <5%                     |                 2 |              0.1536  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3117 | >20%                    |                 2 |              0.15585 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.321  | <5%                     |                 2 |              0.1605  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3238 | >20%                    |                10 |              0.03238 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3311 | >20%                    |                 2 |              0.16555 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.332  | 15-20%                  |                 2 |              0.166   |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3408 | 5-10%                   |                10 |              0.03408 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3454 | <5%                     |                 5 |              0.06908 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3455 | <5%                     |                 5 |              0.0691  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.3498 | >20%                    |                10 |              0.03498 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3526 | >20%                    |                10 |              0.03526 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3533 | 5-10%                   |                 5 |              0.07066 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3537 | 10-15%                  |                 2 |              0.17685 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3569 | <5%                     |                 5 |              0.07138 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3634 | 15-20%                  |                 5 |              0.07268 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3643 | >20%                    |                 5 |              0.07286 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3673 | 5-10%                   |                 2 |              0.18365 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3685 |                         |                 5 |              0.0737  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3744 | 5-10%                   |                 5 |              0.07488 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3765 | >20%                    |                 2 |              0.18825 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3769 | >20%                    |                10 |              0.03769 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3775 | 15-20%                  |                 2 |              0.18875 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3808 | >20%                    |                 5 |              0.07616 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3829 | >20%                    |                 5 |              0.07658 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3852 | <5%                     |                 5 |              0.07704 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3865 | >20%                    |                 2 |              0.19325 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.387  | 15-20%                  |                 2 |              0.1935  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3892 | >20%                    |                 5 |              0.07784 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3957 | 5-10%                   |                 2 |              0.19785 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3958 | 15-20%                  |                10 |              0.03958 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3984 | >20%                    |                 5 |              0.07968 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4037 | 5-10%                   |                 2 |              0.20185 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4086 | >20%                    |                10 |              0.04086 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4243 | >20%                    |                 2 |              0.21215 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4247 | 5-10%                   |                 2 |              0.21235 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.427  | 15-20%                  |                 2 |              0.2135  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4275 | <5%                     |                10 |              0.04275 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.431  | >20%                    |                 2 |              0.2155  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4375 | 15-20%                  |                 5 |              0.0875  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4437 | <5%                     |                 2 |              0.22185 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4443 | >20%                    |                 2 |              0.22215 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4464 | >20%                    |                 5 |              0.08928 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4602 | 5-10%                   |                 5 |              0.09204 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4664 | 15-20%                  |                 5 |              0.09328 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.472  | >20%                    |                 5 |              0.0944  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4723 | >20%                    |                 2 |              0.23615 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4791 | >20%                    |                 2 |              0.23955 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4847 | >20%                    |                 5 |              0.09694 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4933 | >20%                    |                 5 |              0.09866 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.494  | 5-10%                   |                 2 |              0.247   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4959 | <5%                     |                 5 |              0.09918 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4964 | >20%                    |                 2 |              0.2482  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5044 | <5%                     |                10 |              0.05044 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5053 | 10-15%                  |                 5 |              0.10106 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5068 | >20%                    |                 5 |              0.10136 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5078 | 15-20%                  |                 2 |              0.2539  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.51   | >20%                    |                 2 |              0.255   |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5115 | 15-20%                  |                10 |              0.05115 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5122 | >20%                    |                10 |              0.05122 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5177 | >20%                    |                 5 |              0.10354 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5193 | 15-20%                  |                 5 |              0.10386 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5207 | >20%                    |                 5 |              0.10414 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5232 | >20%                    |                 5 |              0.10464 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5237 | >20%                    |                 5 |              0.10474 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.547  | <5%                     |                10 |              0.0547  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5555 | 5-10%                   |                 2 |              0.27775 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5555 |                         |                10 |              0.05555 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5629 | >20%                    |                 2 |              0.28145 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5645 | >20%                    |                 5 |              0.1129  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5646 | 15-20%                  |                10 |              0.05646 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5663 | >20%                    |                10 |              0.05663 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5725 | >20%                    |                 2 |              0.28625 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5725 | >20%                    |                10 |              0.05725 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.576  | >20%                    |                 5 |              0.1152  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5788 | 15-20%                  |                10 |              0.05788 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5806 | >20%                    |                 2 |              0.2903  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6009 | <5%                     |                10 |              0.06009 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6032 | 15-20%                  |                10 |              0.06032 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6069 | >20%                    |                10 |              0.06069 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6122 | 5-10%                   |                 5 |              0.12244 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6138 | >20%                    |                 2 |              0.3069  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6144 | 5-10%                   |                 2 |              0.3072  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6148 | >20%                    |                10 |              0.06148 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.617  | >20%                    |                 2 |              0.3085  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6208 | >20%                    |                 5 |              0.12416 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.628  | <5%                     |                10 |              0.0628  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6306 | 5-10%                   |                 2 |              0.3153  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.633  | >20%                    |                 5 |              0.1266  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6368 | >20%                    |                10 |              0.06368 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.647  | >20%                    |                 5 |              0.1294  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6503 | >20%                    |                10 |              0.06503 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.6583 |                         |                 2 |              0.32915 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6724 | >20%                    |                 5 |              0.13448 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6779 | 5-10%                   |                 5 |              0.13558 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6783 | >20%                    |                10 |              0.06783 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6868 | 10-15%                  |                 5 |              0.13736 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6951 | <5%                     |                 5 |              0.13902 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7021 | >20%                    |                10 |              0.07021 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7067 | 15-20%                  |                 2 |              0.35335 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7248 | >20%                    |                 5 |              0.14496 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.73   | 10-15%                  |                10 |              0.073   |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7557 | >20%                    |                10 |              0.07557 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7615 | >20%                    |                 5 |              0.1523  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7677 | >20%                    |                 5 |              0.15354 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7692 | 10-15%                  |                10 |              0.07692 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7707 | <5%                     |                 5 |              0.15414 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7922 | >20%                    |                 5 |              0.15844 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7972 | >20%                    |                 5 |              0.15944 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8001 | <5%                     |                10 |              0.08001 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8116 | <5%                     |                 5 |              0.16232 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8242 | 10-15%                  |                 2 |              0.4121  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8364 | >20%                    |                 2 |              0.4182  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8416 | <5%                     |                10 |              0.08416 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8419 | >20%                    |                10 |              0.08419 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8423 | >20%                    |                10 |              0.08423 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8473 | >20%                    |                10 |              0.08473 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8535 | 5-10%                   |                10 |              0.08535 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8618 | >20%                    |                10 |              0.08618 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8727 | >20%                    |                10 |              0.08727 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8739 | >20%                    |                 5 |              0.17478 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8969 | 5-10%                   |                10 |              0.08969 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8992 | <5%                     |                10 |              0.08992 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9049 | >20%                    |                10 |              0.09049 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9052 | >20%                    |                10 |              0.09052 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9248 | >20%                    |                 2 |              0.4624  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.937  | 5-10%                   |                 5 |              0.1874  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9372 | >20%                    |                 5 |              0.18744 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9483 | >20%                    |                 5 |              0.18966 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9533 | >20%                    |                10 |              0.09533 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9627 | >20%                    |                10 |              0.09627 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.963  | >20%                    |                 2 |              0.4815  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9681 | >20%                    |                10 |              0.09681 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9734 | >20%                    |                10 |              0.09734 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9743 | >20%                    |                10 |              0.09743 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9774 | >20%                    |                 2 |              0.4887  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9892 | 15-20%                  |                10 |              0.09892 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0067 | 15-20%                  |                10 |              0.10067 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0375 | 5-10%                   |                10 |              0.10375 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      1.0875 | >20%                    |                 5 |              0.2175  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1563 | 10-15%                  |                 5 |              0.23126 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1585 | <5%                     |                10 |              0.11585 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2011 | >20%                    |                10 |              0.12011 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.2151 | <5%                     |                 5 |              0.24302 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2187 | >20%                    |                 2 |              0.60935 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3413 | >20%                    |                 2 |              0.67065 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.352  | 10-15%                  |                10 |              0.1352  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3561 | >20%                    |                10 |              0.13561 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3932 | >20%                    |                 5 |              0.27864 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4104 | >20%                    |                 2 |              0.7052  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4434 | >20%                    |                 2 |              0.7217  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4669 | >20%                    |                 5 |              0.29338 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4875 | >20%                    |                10 |              0.14875 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5025 | 10-15%                  |                 5 |              0.3005  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6793 | 15-20%                  |                10 |              0.16793 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3195 | 10-15%                  |                10 |              0.23195 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.7141 | <5%                     |                10 |              0.27141 |