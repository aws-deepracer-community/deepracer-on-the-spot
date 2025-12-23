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

Data correct as of 2025-12-23 02:00:36.019573, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1033 | >20%                    |                 2 |              0.05165 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1362 | >20%                    |                 2 |              0.0681  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1559 | >20%                    |                 2 |              0.07795 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1687 | >20%                    |                 2 |              0.08435 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1881 | 5-10%                   |                 2 |              0.09405 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1888 | <5%                     |                 2 |              0.0944  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1971 | >20%                    |                 5 |              0.03942 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2375 | >20%                    |                 2 |              0.11875 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2395 | >20%                    |                 2 |              0.11975 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2491 | >20%                    |                 2 |              0.12455 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2501 | >20%                    |                 2 |              0.12505 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2519 | >20%                    |                 5 |              0.05038 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2606 | >20%                    |                 2 |              0.1303  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2638 | 5-10%                   |                10 |              0.02638 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.266  | >20%                    |                 2 |              0.133   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2779 | >20%                    |                 2 |              0.13895 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2797 | >20%                    |                 2 |              0.13985 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2807 | 5-10%                   |                 5 |              0.05614 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2891 | <5%                     |                 2 |              0.14455 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2899 | 15-20%                  |                 2 |              0.14495 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2929 | >20%                    |                 2 |              0.14645 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3056 | >20%                    |                 2 |              0.1528  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3124 | 15-20%                  |                 5 |              0.06248 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3137 | >20%                    |                 2 |              0.15685 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3191 | >20%                    |                10 |              0.03191 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3239 | >20%                    |                 2 |              0.16195 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3244 | 5-10%                   |                10 |              0.03244 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3274 | >20%                    |                 5 |              0.06548 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3349 | >20%                    |                 5 |              0.06698 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3483 | >20%                    |                 5 |              0.06966 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3497 | >20%                    |                 2 |              0.17485 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3498 | >20%                    |                 5 |              0.06996 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3499 | >20%                    |                 2 |              0.17495 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3533 | >20%                    |                 5 |              0.07066 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3583 | 15-20%                  |                10 |              0.03583 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3662 | >20%                    |                 2 |              0.1831  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3673 | 5-10%                   |                 2 |              0.18365 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3678 | >20%                    |                10 |              0.03678 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3689 | <5%                     |                 5 |              0.07378 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3695 | >20%                    |                10 |              0.03695 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3697 | 10-15%                  |                 2 |              0.18485 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3739 | >20%                    |                 5 |              0.07478 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3755 | 10-15%                  |                 2 |              0.18775 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3764 | >20%                    |                10 |              0.03764 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3768 | >20%                    |                 5 |              0.07536 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3797 | >20%                    |                 5 |              0.07594 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3824 | >20%                    |                 5 |              0.07648 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3833 | >20%                    |                 2 |              0.19165 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3834 | <5%                     |                10 |              0.03834 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3851 | >20%                    |                 2 |              0.19255 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3889 | >20%                    |                 2 |              0.19445 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3897 | >20%                    |                 2 |              0.19485 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3937 | >20%                    |                 5 |              0.07874 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3984 | >20%                    |                 5 |              0.07968 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4112 | >20%                    |                 5 |              0.08224 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.415  | 10-15%                  |                 2 |              0.2075  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4232 | <5%                     |                 5 |              0.08464 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4271 | <5%                     |                 2 |              0.21355 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4322 | >20%                    |                 5 |              0.08644 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4345 | >20%                    |                 5 |              0.0869  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.44   | <5%                     |                 2 |              0.22    |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4402 | >20%                    |                 2 |              0.2201  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.441  | >20%                    |                 2 |              0.2205  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4432 | >20%                    |                 2 |              0.2216  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4456 | <5%                     |                10 |              0.04456 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4541 | >20%                    |                10 |              0.04541 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4643 | 15-20%                  |                 5 |              0.09286 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4673 | >20%                    |                 2 |              0.23365 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4693 | >20%                    |                 2 |              0.23465 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4783 | >20%                    |                 5 |              0.09566 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4794 | >20%                    |                 5 |              0.09588 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4838 | 15-20%                  |                 5 |              0.09676 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4846 | >20%                    |                10 |              0.04846 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4852 | >20%                    |                 5 |              0.09704 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4867 | 15-20%                  |                 2 |              0.24335 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4907 | >20%                    |                 2 |              0.24535 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4971 | 10-15%                  |                 5 |              0.09942 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4979 | 10-15%                  |                 5 |              0.09958 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4983 | >20%                    |                 2 |              0.24915 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4989 | >20%                    |                 5 |              0.09978 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5042 | >20%                    |                 2 |              0.2521  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5089 | >20%                    |                10 |              0.05089 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5211 | 15-20%                  |                10 |              0.05211 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5213 | 5-10%                   |                 5 |              0.10426 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5231 | >20%                    |                 2 |              0.26155 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5271 | >20%                    |                 2 |              0.26355 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5336 | 15-20%                  |                 2 |              0.2668  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5343 | <5%                     |                 5 |              0.10686 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5367 | >20%                    |                 2 |              0.26835 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5461 | >20%                    |                 5 |              0.10922 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.554  | >20%                    |                 5 |              0.1108  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5565 | >20%                    |                 5 |              0.1113  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5639 | >20%                    |                 5 |              0.11278 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5687 | 15-20%                  |                 5 |              0.11374 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5711 | 15-20%                  |                 5 |              0.11422 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5789 | >20%                    |                 2 |              0.28945 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5907 | 5-10%                   |                 5 |              0.11814 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5964 | >20%                    |                 5 |              0.11928 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6004 | >20%                    |                 5 |              0.12008 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6029 | <5%                     |                 5 |              0.12058 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6086 | >20%                    |                10 |              0.06086 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6158 | 15-20%                  |                 5 |              0.12316 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6235 | 5-10%                   |                 5 |              0.1247  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.627  | >20%                    |                 2 |              0.3135  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6317 | 10-15%                  |                 2 |              0.31585 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6355 | 10-15%                  |                 5 |              0.1271  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6414 | >20%                    |                 2 |              0.3207  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6486 | >20%                    |                 5 |              0.12972 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6519 | 10-15%                  |                 5 |              0.13038 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.658  | 15-20%                  |                10 |              0.0658  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6595 | >20%                    |                 2 |              0.32975 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.673  | >20%                    |                 5 |              0.1346  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.703  | >20%                    |                10 |              0.0703  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7078 | >20%                    |                10 |              0.07078 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7158 | >20%                    |                10 |              0.07158 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.72   | >20%                    |                10 |              0.072   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7242 | >20%                    |                 2 |              0.3621  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7249 | <5%                     |                10 |              0.07249 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.7264 | >20%                    |                 5 |              0.14528 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7335 | >20%                    |                10 |              0.07335 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7439 | >20%                    |                10 |              0.07439 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7526 | 15-20%                  |                 2 |              0.3763  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7554 | >20%                    |                10 |              0.07554 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7593 | >20%                    |                10 |              0.07593 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7616 | >20%                    |                 5 |              0.15232 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7627 | 5-10%                   |                10 |              0.07627 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.767  | >20%                    |                 2 |              0.3835  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7822 | 15-20%                  |                10 |              0.07822 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.795  | 15-20%                  |                 5 |              0.159   |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7974 | 15-20%                  |                10 |              0.07974 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8001 | >20%                    |                10 |              0.08001 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8006 | 15-20%                  |                10 |              0.08006 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8024 | >20%                    |                 5 |              0.16048 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8064 | 15-20%                  |                10 |              0.08064 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8092 | <5%                     |                10 |              0.08092 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8122 | >20%                    |                 5 |              0.16244 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8174 | >20%                    |                10 |              0.08174 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8218 | 15-20%                  |                10 |              0.08218 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8267 | 15-20%                  |                10 |              0.08267 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8424 | <5%                     |                10 |              0.08424 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8527 | >20%                    |                10 |              0.08527 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8593 | >20%                    |                 5 |              0.17186 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.864  | <5%                     |                 2 |              0.432   |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8711 | 15-20%                  |                10 |              0.08711 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8753 | >20%                    |                 5 |              0.17506 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8887 | >20%                    |                 2 |              0.44435 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9038 | >20%                    |                10 |              0.09038 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9191 | >20%                    |                 2 |              0.45955 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9298 | >20%                    |                10 |              0.09298 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9378 | >20%                    |                10 |              0.09378 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.939  | >20%                    |                 5 |              0.1878  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9647 | >20%                    |                10 |              0.09647 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9653 | >20%                    |                10 |              0.09653 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9669 | 15-20%                  |                10 |              0.09669 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9713 | >20%                    |                 5 |              0.19426 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9837 | >20%                    |                 5 |              0.19674 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9953 | >20%                    |                 2 |              0.49765 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0095 | 10-15%                  |                10 |              0.10095 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.019  | 10-15%                  |                 5 |              0.2038  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0213 | >20%                    |                 2 |              0.51065 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0319 | >20%                    |                10 |              0.10319 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0339 | >20%                    |                 5 |              0.20678 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0363 | >20%                    |                10 |              0.10363 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0746 | >20%                    |                10 |              0.10746 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.113  | 10-15%                  |                10 |              0.1113  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1231 | >20%                    |                 2 |              0.56155 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1402 | >20%                    |                10 |              0.11402 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1915 | <5%                     |                10 |              0.11915 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.193  | >20%                    |                10 |              0.1193  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2081 | >20%                    |                10 |              0.12081 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3194 | >20%                    |                10 |              0.13194 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3835 | >20%                    |                 2 |              0.69175 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4373 | 10-15%                  |                 5 |              0.28746 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4528 | >20%                    |                10 |              0.14528 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4623 | >20%                    |                 2 |              0.73115 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.481  | >20%                    |                 5 |              0.2962  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4948 | >20%                    |                 5 |              0.29896 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5743 | >20%                    |                10 |              0.15743 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6424 | 15-20%                  |                10 |              0.16424 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0224 | 10-15%                  |                10 |              0.20224 |