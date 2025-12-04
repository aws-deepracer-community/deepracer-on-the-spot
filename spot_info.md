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

Data correct as of 2025-12-04 01:56:39.513782, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1326 | >20%                    |                 2 |              0.0663  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1454 | >20%                    |                 2 |              0.0727  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1763 | <5%                     |                 2 |              0.08815 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1965 | <5%                     |                 2 |              0.09825 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1979 | >20%                    |                 2 |              0.09895 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2097 | 10-15%                  |                 2 |              0.10485 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2262 | >20%                    |                 2 |              0.1131  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.23   | >20%                    |                 2 |              0.115   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | >20%                    |                10 |              0.02308 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.234  | >20%                    |                 2 |              0.117   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2383 | >20%                    |                 2 |              0.11915 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2515 | >20%                    |                 5 |              0.0503  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2526 | >20%                    |                 5 |              0.05052 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2612 | 10-15%                  |                 5 |              0.05224 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2641 | 5-10%                   |                 5 |              0.05282 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2649 | >20%                    |                 5 |              0.05298 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2722 | 15-20%                  |                 2 |              0.1361  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2759 | 10-15%                  |                 2 |              0.13795 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2771 | >20%                    |                 2 |              0.13855 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2824 | >20%                    |                 2 |              0.1412  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2863 | <5%                     |                 2 |              0.14315 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2897 | >20%                    |                 2 |              0.14485 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2912 | 5-10%                   |                 2 |              0.1456  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3054 | >20%                    |                 5 |              0.06108 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3063 | >20%                    |                 2 |              0.15315 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.314  | 5-10%                   |                 2 |              0.157   |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3217 | 10-15%                  |                10 |              0.03217 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.335  | 15-20%                  |                 2 |              0.1675  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3368 | 10-15%                  |                10 |              0.03368 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3414 | 5-10%                   |                10 |              0.03414 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3432 | <5%                     |                 5 |              0.06864 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3433 | 10-15%                  |                 2 |              0.17165 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3491 | >20%                    |                 2 |              0.17455 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3582 | 15-20%                  |                 2 |              0.1791  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3653 | >20%                    |                10 |              0.03653 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3702 | >20%                    |                 2 |              0.1851  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3706 | >20%                    |                 5 |              0.07412 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.372  | >20%                    |                 2 |              0.186   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3748 | >20%                    |                 5 |              0.07496 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.375  | >20%                    |                 2 |              0.1875  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3825 | 15-20%                  |                 5 |              0.0765  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3851 | >20%                    |                 5 |              0.07702 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3874 | >20%                    |                 2 |              0.1937  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3882 | >20%                    |                 2 |              0.1941  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3885 | 15-20%                  |                 2 |              0.19425 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3941 | >20%                    |                 2 |              0.19705 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3965 | >20%                    |                 2 |              0.19825 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4025 | <5%                     |                 2 |              0.20125 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.405  | 10-15%                  |                10 |              0.0405  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4124 | 10-15%                  |                 5 |              0.08248 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4181 | >20%                    |                 2 |              0.20905 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4199 | 15-20%                  |                 5 |              0.08398 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.422  | >20%                    |                 5 |              0.0844  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4226 | <5%                     |                 2 |              0.2113  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4256 | 5-10%                   |                 2 |              0.2128  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4271 | >20%                    |                10 |              0.04271 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4331 | 15-20%                  |                 2 |              0.21655 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.437  | >20%                    |                 2 |              0.2185  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4389 | >20%                    |                 2 |              0.21945 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4403 | 10-15%                  |                 5 |              0.08806 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4403 | >20%                    |                10 |              0.04403 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4482 | >20%                    |                 5 |              0.08964 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4495 | >20%                    |                 2 |              0.22475 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4495 | <5%                     |                 2 |              0.22475 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.452  | 15-20%                  |                 5 |              0.0904  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4527 | >20%                    |                10 |              0.04527 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4581 | 10-15%                  |                 2 |              0.22905 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4643 | >20%                    |                 2 |              0.23215 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4654 | >20%                    |                 5 |              0.09308 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4658 | 15-20%                  |                10 |              0.04658 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4662 | >20%                    |                 5 |              0.09324 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4679 | >20%                    |                 5 |              0.09358 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4686 | 10-15%                  |                 2 |              0.2343  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.475  | >20%                    |                 5 |              0.095   |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4816 | >20%                    |                 5 |              0.09632 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4826 | 15-20%                  |                 5 |              0.09652 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4875 | 10-15%                  |                 2 |              0.24375 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4955 | >20%                    |                 5 |              0.0991  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4977 | <5%                     |                10 |              0.04977 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4998 | >20%                    |                 2 |              0.2499  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5022 | 10-15%                  |                 5 |              0.10044 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5033 | >20%                    |                 5 |              0.10066 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5054 | >20%                    |                 5 |              0.10108 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.513  | 10-15%                  |                 2 |              0.2565  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5167 | 15-20%                  |                 5 |              0.10334 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5452 | 10-15%                  |                 5 |              0.10904 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5469 | >20%                    |                 5 |              0.10938 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.547  | 15-20%                  |                10 |              0.0547  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5473 | >20%                    |                 2 |              0.27365 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5481 | >20%                    |                 5 |              0.10962 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5518 | 5-10%                   |                10 |              0.05518 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.555  | 15-20%                  |                 5 |              0.111   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.559  | >20%                    |                 5 |              0.1118  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5635 | 15-20%                  |                 5 |              0.1127  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5658 | <5%                     |                10 |              0.05658 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5665 | >20%                    |                 5 |              0.1133  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5749 | 10-15%                  |                 5 |              0.11498 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5816 | 15-20%                  |                 5 |              0.11632 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5837 | >20%                    |                 5 |              0.11674 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5914 | >20%                    |                 2 |              0.2957  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6042 | 10-15%                  |                 5 |              0.12084 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.607  | 15-20%                  |                 5 |              0.1214  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6093 | <5%                     |                 5 |              0.12186 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6106 | >20%                    |                10 |              0.06106 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6148 | >20%                    |                 2 |              0.3074  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6199 | >20%                    |                 2 |              0.30995 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6202 | 10-15%                  |                 5 |              0.12404 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6248 | >20%                    |                 5 |              0.12496 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6257 | >20%                    |                 2 |              0.31285 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6287 | 5-10%                   |                 2 |              0.31435 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6553 | >20%                    |                10 |              0.06553 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6593 | >20%                    |                 5 |              0.13186 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6606 | 10-15%                  |                 5 |              0.13212 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6628 | >20%                    |                10 |              0.06628 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6648 | 5-10%                   |                10 |              0.06648 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6683 | >20%                    |                10 |              0.06683 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6724 | 15-20%                  |                10 |              0.06724 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6761 | >20%                    |                 5 |              0.13522 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6848 | >20%                    |                 5 |              0.13696 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6875 | >20%                    |                 5 |              0.1375  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7082 | >20%                    |                10 |              0.07082 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7094 | >20%                    |                10 |              0.07094 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7152 | >20%                    |                10 |              0.07152 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7184 | >20%                    |                 5 |              0.14368 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7196 | 5-10%                   |                 5 |              0.14392 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7231 | >20%                    |                 2 |              0.36155 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.731  | 15-20%                  |                10 |              0.0731  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7356 | <5%                     |                10 |              0.07356 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7451 | 15-20%                  |                10 |              0.07451 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7459 | >20%                    |                 2 |              0.37295 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7529 | >20%                    |                10 |              0.07529 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7578 | 10-15%                  |                10 |              0.07578 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7627 | 10-15%                  |                10 |              0.07627 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7634 | >20%                    |                10 |              0.07634 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.764  | >20%                    |                 5 |              0.1528  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7667 | >20%                    |                10 |              0.07667 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7808 | >20%                    |                10 |              0.07808 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7847 | >20%                    |                10 |              0.07847 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7872 | >20%                    |                 2 |              0.3936  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8176 | 15-20%                  |                 5 |              0.16352 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8315 | 10-15%                  |                10 |              0.08315 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.842  | >20%                    |                10 |              0.0842  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8466 | 10-15%                  |                 2 |              0.4233  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8471 | >20%                    |                 2 |              0.42355 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8475 | >20%                    |                10 |              0.08475 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8505 | >20%                    |                 5 |              0.1701  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.858  | >20%                    |                10 |              0.0858  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8747 | >20%                    |                 5 |              0.17494 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8957 | >20%                    |                 5 |              0.17914 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8967 | 10-15%                  |                10 |              0.08967 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8994 | >20%                    |                10 |              0.08994 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9027 | 5-10%                   |                10 |              0.09027 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9159 | 15-20%                  |                10 |              0.09159 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9165 | >20%                    |                 2 |              0.45825 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9185 | >20%                    |                10 |              0.09185 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9206 | >20%                    |                 5 |              0.18412 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9752 | >20%                    |                10 |              0.09752 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9826 | >20%                    |                10 |              0.09826 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9835 | <5%                     |                10 |              0.09835 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9947 | >20%                    |                10 |              0.09947 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9972 | >20%                    |                 5 |              0.19944 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0076 | >20%                    |                 2 |              0.5038  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0321 | 10-15%                  |                10 |              0.10321 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.033  | >20%                    |                10 |              0.1033  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.0457 | <5%                     |                 2 |              0.52285 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.051  | 15-20%                  |                10 |              0.1051  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1024 | 15-20%                  |                10 |              0.11024 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1758 | <5%                     |                 5 |              0.23516 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2051 | >20%                    |                 5 |              0.24102 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2069 | >20%                    |                10 |              0.12069 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2744 | >20%                    |                10 |              0.12744 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2975 | >20%                    |                10 |              0.12975 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4018 | 10-15%                  |                10 |              0.14018 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4412 | >20%                    |                 2 |              0.7206  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4458 | >20%                    |                10 |              0.14458 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4477 | >20%                    |                 2 |              0.72385 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.5131 | >20%                    |                10 |              0.15131 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5431 | 5-10%                   |                 5 |              0.30862 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.6014 | >20%                    |                 5 |              0.32028 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0205 | 15-20%                  |                10 |              0.20205 |