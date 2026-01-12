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

Data correct as of 2026-01-12 02:09:19.497925, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1088 | >20%                    |                 2 |              0.0544  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1472 | >20%                    |                 2 |              0.0736  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1534 | >20%                    |                 5 |              0.03068 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1578 | >20%                    |                 2 |              0.0789  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1714 | <5%                     |                 2 |              0.0857  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.1939 | <5%                     |                 5 |              0.03878 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1983 | >20%                    |                 2 |              0.09915 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2219 | >20%                    |                 2 |              0.11095 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2359 | >20%                    |                 2 |              0.11795 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2443 | >20%                    |                 5 |              0.04886 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2513 | >20%                    |                 2 |              0.12565 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2558 | >20%                    |                 2 |              0.1279  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2664 | >20%                    |                 5 |              0.05328 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2692 | 15-20%                  |                 5 |              0.05384 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2695 | >20%                    |                 2 |              0.13475 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.273  | >20%                    |                 2 |              0.1365  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2825 | >20%                    |                10 |              0.02825 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.283  | >20%                    |                 2 |              0.1415  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.289  | 5-10%                   |                10 |              0.0289  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2891 | 15-20%                  |                 2 |              0.14455 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2907 | >20%                    |                 2 |              0.14535 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2913 | >20%                    |                 5 |              0.05826 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2987 | >20%                    |                 2 |              0.14935 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3133 | 5-10%                   |                 5 |              0.06266 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3221 | >20%                    |                 5 |              0.06442 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3254 | >20%                    |                 2 |              0.1627  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3288 | >20%                    |                 2 |              0.1644  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3403 | <5%                     |                 5 |              0.06806 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3439 | 5-10%                   |                10 |              0.03439 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3461 | >20%                    |                 5 |              0.06922 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3503 | 5-10%                   |                 2 |              0.17515 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.361  | >20%                    |                 2 |              0.1805  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3627 | 10-15%                  |                 2 |              0.18135 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.363  | >20%                    |                 5 |              0.0726  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3732 | 5-10%                   |                 2 |              0.1866  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3781 | >20%                    |                 2 |              0.18905 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3827 | >20%                    |                 5 |              0.07654 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3845 | >20%                    |                 5 |              0.0769  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3846 | >20%                    |                 2 |              0.1923  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3846 | >20%                    |                 5 |              0.07692 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3866 | >20%                    |                 2 |              0.1933  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3911 | >20%                    |                 5 |              0.07822 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3929 | >20%                    |                 5 |              0.07858 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3959 | 15-20%                  |                10 |              0.03959 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3987 | >20%                    |                 2 |              0.19935 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4027 | <5%                     |                10 |              0.04027 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4062 | 10-15%                  |                 2 |              0.2031  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4063 | >20%                    |                 5 |              0.08126 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4066 | >20%                    |                 2 |              0.2033  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4073 | >20%                    |                10 |              0.04073 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4076 | <5%                     |                 2 |              0.2038  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4099 | >20%                    |                 2 |              0.20495 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4105 | >20%                    |                 2 |              0.20525 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4151 | >20%                    |                 5 |              0.08302 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4157 | >20%                    |                10 |              0.04157 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4173 | >20%                    |                 2 |              0.20865 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4182 | >20%                    |                10 |              0.04182 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4216 | 15-20%                  |                10 |              0.04216 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4224 | >20%                    |                 2 |              0.2112  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4271 | >20%                    |                 5 |              0.08542 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4297 | >20%                    |                 5 |              0.08594 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4397 | <5%                     |                10 |              0.04397 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4408 | 10-15%                  |                 2 |              0.2204  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4443 | >20%                    |                 2 |              0.22215 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.449  | >20%                    |                10 |              0.0449  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4527 | >20%                    |                 2 |              0.22635 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4535 | >20%                    |                 2 |              0.22675 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4546 | <5%                     |                 2 |              0.2273  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4578 | >20%                    |                 5 |              0.09156 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.462  | >20%                    |                 5 |              0.0924  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4695 | >20%                    |                 2 |              0.23475 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4707 | >20%                    |                 5 |              0.09414 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4723 | >20%                    |                 5 |              0.09446 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4742 | 15-20%                  |                 5 |              0.09484 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4751 | 15-20%                  |                 2 |              0.23755 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4832 | >20%                    |                10 |              0.04832 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4867 | >20%                    |                 5 |              0.09734 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4867 | <5%                     |                 2 |              0.24335 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4901 | >20%                    |                 2 |              0.24505 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4951 | <5%                     |                 5 |              0.09902 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5059 | >20%                    |                 2 |              0.25295 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5076 | 15-20%                  |                 2 |              0.2538  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5193 | >20%                    |                 5 |              0.10386 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5313 | >20%                    |                 5 |              0.10626 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5353 | >20%                    |                 5 |              0.10706 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5369 | >20%                    |                 2 |              0.26845 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5371 | 15-20%                  |                 5 |              0.10742 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5423 | >20%                    |                 2 |              0.27115 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5519 | 5-10%                   |                 5 |              0.11038 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5529 | >20%                    |                 2 |              0.27645 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5544 | 10-15%                  |                 5 |              0.11088 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5634 | 15-20%                  |                 5 |              0.11268 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5673 | >20%                    |                 5 |              0.11346 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5772 | 15-20%                  |                 5 |              0.11544 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.586  | >20%                    |                 5 |              0.1172  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5877 | 15-20%                  |                10 |              0.05877 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5908 | >20%                    |                 2 |              0.2954  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5963 | >20%                    |                10 |              0.05963 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5979 | >20%                    |                 2 |              0.29895 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6009 | >20%                    |                 5 |              0.12018 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6063 | >20%                    |                10 |              0.06063 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6186 | 5-10%                   |                 5 |              0.12372 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6342 | >20%                    |                 5 |              0.12684 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6349 | 10-15%                  |                 2 |              0.31745 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6437 | 5-10%                   |                 5 |              0.12874 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6441 | 10-15%                  |                 5 |              0.12882 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.648  | 15-20%                  |                10 |              0.0648  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6579 | 15-20%                  |                 5 |              0.13158 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6652 | >20%                    |                 5 |              0.13304 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6653 | >20%                    |                 2 |              0.33265 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6676 | >20%                    |                10 |              0.06676 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6691 | <5%                     |                 2 |              0.33455 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6758 | >20%                    |                 5 |              0.13516 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6898 | >20%                    |                10 |              0.06898 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.6949 | 10-15%                  |                 5 |              0.13898 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6971 | >20%                    |                 2 |              0.34855 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7023 | 15-20%                  |                10 |              0.07023 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7237 | 15-20%                  |                 2 |              0.36185 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7278 | <5%                     |                10 |              0.07278 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7287 | <5%                     |                 5 |              0.14574 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7307 | >20%                    |                10 |              0.07307 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7372 | >20%                    |                 2 |              0.3686  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7434 | >20%                    |                10 |              0.07434 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7446 | >20%                    |                10 |              0.07446 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7463 | 5-10%                   |                10 |              0.07463 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7493 | >20%                    |                 5 |              0.14986 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7538 | 15-20%                  |                10 |              0.07538 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7756 | <5%                     |                10 |              0.07756 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7767 |                         |                 2 |              0.38835 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7839 | >20%                    |                 5 |              0.15678 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7846 | 15-20%                  |                10 |              0.07846 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7861 | >20%                    |                10 |              0.07861 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7876 | >20%                    |                 2 |              0.3938  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7911 | >20%                    |                10 |              0.07911 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7918 | >20%                    |                 2 |              0.3959  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8079 | >20%                    |                 5 |              0.16158 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8201 | <5%                     |                10 |              0.08201 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8238 | 15-20%                  |                10 |              0.08238 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8242 | 15-20%                  |                 5 |              0.16484 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8337 | >20%                    |                10 |              0.08337 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8429 | >20%                    |                10 |              0.08429 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8543 | >20%                    |                10 |              0.08543 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8612 | 10-15%                  |                 5 |              0.17224 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8745 | 10-15%                  |                 5 |              0.1749  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8745 | >20%                    |                10 |              0.08745 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8955 | >20%                    |                10 |              0.08955 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9021 | >20%                    |                 5 |              0.18042 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9238 | >20%                    |                 2 |              0.4619  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9298 | >20%                    |                10 |              0.09298 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9444 | 10-15%                  |                10 |              0.09444 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9657 | 15-20%                  |                10 |              0.09657 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0138 | >20%                    |                10 |              0.10138 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0144 | >20%                    |                10 |              0.10144 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0415 | >20%                    |                 5 |              0.2083  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0448 | >20%                    |                 2 |              0.5224  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0584 | >20%                    |                10 |              0.10584 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.07   | >20%                    |                 2 |              0.535   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0769 | >20%                    |                10 |              0.10769 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0822 | >20%                    |                 5 |              0.21644 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0834 | 15-20%                  |                10 |              0.10834 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0849 | >20%                    |                10 |              0.10849 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1148 | >20%                    |                 2 |              0.5574  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1287 | 10-15%                  |                10 |              0.11287 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1548 | 15-20%                  |                10 |              0.11548 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1742 | >20%                    |                10 |              0.11742 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1762 | >20%                    |                 5 |              0.23524 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1819 | 15-20%                  |                10 |              0.11819 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1944 | <5%                     |                10 |              0.11944 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1947 | >20%                    |                10 |              0.11947 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2337 | >20%                    |                 5 |              0.24674 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2788 | >20%                    |                10 |              0.12788 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.2996 | >20%                    |                 5 |              0.25992 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3088 | >20%                    |                10 |              0.13088 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.3374 |                         |                 5 |              0.26748 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3726 | >20%                    |                 5 |              0.27452 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4274 | 10-15%                  |                 5 |              0.28548 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4463 | >20%                    |                 2 |              0.72315 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.5021 | 10-15%                  |                10 |              0.15021 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5491 | >20%                    |                10 |              0.15491 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5657 |                         |                10 |              0.15657 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5856 | >20%                    |                10 |              0.15856 |