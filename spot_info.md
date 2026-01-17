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

Data correct as of 2026-01-17 01:58:45.937763, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1372 | >20%                    |                 2 |              0.0686  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1596 | >20%                    |                 2 |              0.0798  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1631 | >20%                    |                 2 |              0.08155 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1771 | >20%                    |                 2 |              0.08855 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1787 | <5%                     |                 2 |              0.08935 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.1904 | <5%                     |                 5 |              0.03808 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1912 | >20%                    |                 2 |              0.0956  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2116 | 15-20%                  |                 5 |              0.04232 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2165 | >20%                    |                 5 |              0.0433  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2387 | >20%                    |                 2 |              0.11935 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2546 | >20%                    |                 2 |              0.1273  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2675 | >20%                    |                 5 |              0.0535  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2699 | 5-10%                   |                10 |              0.02699 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2746 | >20%                    |                 2 |              0.1373  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2831 | 15-20%                  |                 2 |              0.14155 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2834 | >20%                    |                 2 |              0.1417  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2835 | >20%                    |                 2 |              0.14175 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2869 | >20%                    |                 2 |              0.14345 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2879 | >20%                    |                 2 |              0.14395 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3018 | >20%                    |                 5 |              0.06036 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3093 | >20%                    |                10 |              0.03093 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3117 | >20%                    |                 5 |              0.06234 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3122 | >20%                    |                 5 |              0.06244 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3177 | >20%                    |                 2 |              0.15885 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3195 | >20%                    |                 2 |              0.15975 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3235 | >20%                    |                 2 |              0.16175 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3367 | 5-10%                   |                10 |              0.03367 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3378 | 15-20%                  |                10 |              0.03378 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3495 | 5-10%                   |                 2 |              0.17475 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3568 | 10-15%                  |                 2 |              0.1784  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3589 | >20%                    |                 2 |              0.17945 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3619 | 5-10%                   |                 5 |              0.07238 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3633 | <5%                     |                 5 |              0.07266 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3681 | <5%                     |                 2 |              0.18405 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3732 | >20%                    |                 5 |              0.07464 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3778 | >20%                    |                 2 |              0.1889  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3875 | >20%                    |                 5 |              0.0775  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3919 | >20%                    |                10 |              0.03919 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3923 | >20%                    |                 5 |              0.07846 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3927 | 5-10%                   |                 2 |              0.19635 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3933 | >20%                    |                 5 |              0.07866 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3974 | >20%                    |                 2 |              0.1987  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3996 | <5%                     |                 2 |              0.1998  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4006 | >20%                    |                 2 |              0.2003  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4013 | >20%                    |                 2 |              0.20065 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.404  | 10-15%                  |                 2 |              0.202   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4048 | >20%                    |                 2 |              0.2024  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4057 | >20%                    |                 5 |              0.08114 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.41   | >20%                    |                 2 |              0.205   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4121 | >20%                    |                 5 |              0.08242 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4121 | >20%                    |                 5 |              0.08242 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4146 | >20%                    |                10 |              0.04146 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.415  | >20%                    |                10 |              0.0415  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4153 | >20%                    |                 5 |              0.08306 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4169 | <5%                     |                10 |              0.04169 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4181 | >20%                    |                 5 |              0.08362 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4183 | >20%                    |                 2 |              0.20915 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4189 | 15-20%                  |                 5 |              0.08378 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.42   | >20%                    |                 5 |              0.084   |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4261 | >20%                    |                10 |              0.04261 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4322 | 10-15%                  |                 2 |              0.2161  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4348 | 15-20%                  |                10 |              0.04348 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4351 | >20%                    |                 5 |              0.08702 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4411 | >20%                    |                 2 |              0.22055 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4423 | >20%                    |                 2 |              0.22115 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4458 | >20%                    |                10 |              0.04458 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4481 | >20%                    |                 5 |              0.08962 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4481 | >20%                    |                 2 |              0.22405 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4498 | >20%                    |                 2 |              0.2249  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4505 | >20%                    |                 2 |              0.22525 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4555 | <5%                     |                 2 |              0.22775 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4573 | >20%                    |                 2 |              0.22865 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4718 | >20%                    |                 5 |              0.09436 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4756 | >20%                    |                10 |              0.04756 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4758 | >20%                    |                 2 |              0.2379  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.479  | 15-20%                  |                 2 |              0.2395  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4803 | >20%                    |                 5 |              0.09606 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4913 | >20%                    |                 2 |              0.24565 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4933 | <5%                     |                10 |              0.04933 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4955 | >20%                    |                 5 |              0.0991  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4961 | <5%                     |                 5 |              0.09922 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.502  | >20%                    |                 5 |              0.1004  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5044 | 15-20%                  |                 2 |              0.2522  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5064 | >20%                    |                 5 |              0.10128 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5304 | 15-20%                  |                 5 |              0.10608 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.533  | >20%                    |                 2 |              0.2665  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5339 | >20%                    |                 5 |              0.10678 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5358 | >20%                    |                 5 |              0.10716 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5407 | >20%                    |                 2 |              0.27035 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5538 | 5-10%                   |                 5 |              0.11076 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5573 | >20%                    |                 5 |              0.11146 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5652 | 10-15%                  |                 5 |              0.11304 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5682 | 15-20%                  |                 5 |              0.11364 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5692 | >20%                    |                 2 |              0.2846  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5769 | >20%                    |                 5 |              0.11538 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.583  | >20%                    |                 2 |              0.2915  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.587  | >20%                    |                 2 |              0.2935  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5878 | 15-20%                  |                10 |              0.05878 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5886 | <5%                     |                 2 |              0.2943  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5903 | 5-10%                   |                 5 |              0.11806 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5936 | >20%                    |                10 |              0.05936 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5944 | 15-20%                  |                 5 |              0.11888 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6015 | >20%                    |                 5 |              0.1203  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6241 | 10-15%                  |                 2 |              0.31205 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6346 | 5-10%                   |                 5 |              0.12692 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6372 | >20%                    |                10 |              0.06372 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6468 | >20%                    |                 5 |              0.12936 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.649  | 15-20%                  |                 5 |              0.1298  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6588 | 10-15%                  |                 5 |              0.13176 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6593 | 15-20%                  |                10 |              0.06593 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6625 | >20%                    |                 2 |              0.33125 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.678  | >20%                    |                 2 |              0.339   |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6809 | >20%                    |                 5 |              0.13618 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6815 | >20%                    |                10 |              0.06815 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6876 |                         |                 2 |              0.3438  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6962 | >20%                    |                10 |              0.06962 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.7022 | >20%                    |                 2 |              0.3511  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7134 | 10-15%                  |                 5 |              0.14268 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7201 | >20%                    |                10 |              0.07201 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7242 | <5%                     |                10 |              0.07242 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7243 | >20%                    |                10 |              0.07243 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7277 | <5%                     |                 5 |              0.14554 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7326 | >20%                    |                 5 |              0.14652 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7383 | 15-20%                  |                10 |              0.07383 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7446 | >20%                    |                10 |              0.07446 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7453 | 15-20%                  |                 2 |              0.37265 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7467 | 5-10%                   |                10 |              0.07467 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7525 | >20%                    |                10 |              0.07525 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7547 | >20%                    |                 5 |              0.15094 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.7697 | 10-15%                  |                10 |              0.07697 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7699 | >20%                    |                 2 |              0.38495 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7727 | >20%                    |                 2 |              0.38635 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7736 | >20%                    |                10 |              0.07736 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.775  | >20%                    |                 5 |              0.155   |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7752 | 15-20%                  |                10 |              0.07752 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7858 | <5%                     |                10 |              0.07858 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.789  | 15-20%                  |                10 |              0.0789  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8088 | <5%                     |                10 |              0.08088 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8108 | 15-20%                  |                 5 |              0.16216 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8213 | >20%                    |                10 |              0.08213 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8292 | >20%                    |                10 |              0.08292 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8337 | 10-15%                  |                 5 |              0.16674 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8508 | 10-15%                  |                 5 |              0.17016 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8647 | 15-20%                  |                10 |              0.08647 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8844 | >20%                    |                10 |              0.08844 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.887  | >20%                    |                10 |              0.0887  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8974 | >20%                    |                10 |              0.08974 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9058 | >20%                    |                10 |              0.09058 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.947  | >20%                    |                 5 |              0.1894  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9535 | >20%                    |                10 |              0.09535 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9577 | >20%                    |                10 |              0.09577 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9736 | >20%                    |                10 |              0.09736 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9896 | >20%                    |                 2 |              0.4948  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0013 | >20%                    |                 5 |              0.20026 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0103 | >20%                    |                 2 |              0.50515 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0128 | 15-20%                  |                10 |              0.10128 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.037  | 15-20%                  |                10 |              0.1037  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0449 | 15-20%                  |                10 |              0.10449 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0572 | >20%                    |                 2 |              0.5286  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0579 | >20%                    |                 5 |              0.21158 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.0747 | <5%                     |                10 |              0.10747 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0939 | >20%                    |                 2 |              0.54695 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1006 | 10-15%                  |                10 |              0.11006 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1041 | >20%                    |                10 |              0.11041 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1151 | >20%                    |                 5 |              0.22302 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1164 | >20%                    |                10 |              0.11164 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1212 | >20%                    |                 5 |              0.22424 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1897 | >20%                    |                10 |              0.11897 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2204 | >20%                    |                10 |              0.12204 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2323 | 15-20%                  |                10 |              0.12323 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2344 | >20%                    |                10 |              0.12344 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.237  | >20%                    |                 5 |              0.2474  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2574 | >20%                    |                 5 |              0.25148 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2984 | >20%                    |                10 |              0.12984 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.4094 | 10-15%                  |                10 |              0.14094 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4153 |                         |                10 |              0.14153 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4329 | >20%                    |                 2 |              0.71645 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4652 | 10-15%                  |                 5 |              0.29304 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5103 | >20%                    |                10 |              0.15103 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5316 | >20%                    |                10 |              0.15316 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.6415 |                         |                 5 |              0.3283  |