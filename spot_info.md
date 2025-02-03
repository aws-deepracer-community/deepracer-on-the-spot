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

Data correct as of 2025-02-03 01:36:51.393734, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.189  | >20%                    |                 2 |              0.0945  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2137 | <5%                     |                 2 |              0.10685 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2228 | 5-10%                   |                 2 |              0.1114  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.226  | 10-15%                  |                 5 |              0.0452  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2261 | 10-15%                  |                 2 |              0.11305 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2329 | 10-15%                  |                 2 |              0.11645 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2382 | 5-10%                   |                 2 |              0.1191  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2448 | 10-15%                  |                 2 |              0.1224  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2523 | <5%                     |                 2 |              0.12615 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2556 | 5-10%                   |                 2 |              0.1278  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2777 | <5%                     |                 5 |              0.05554 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2801 | >20%                    |                 2 |              0.14005 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2925 | 15-20%                  |                10 |              0.02925 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2938 | <5%                     |                 2 |              0.1469  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.299  | 5-10%                   |                 2 |              0.1495  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3093 | 10-15%                  |                 2 |              0.15465 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3133 | >20%                    |                 2 |              0.15665 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3193 | 5-10%                   |                 5 |              0.06386 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3269 | <5%                     |                 2 |              0.16345 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.337  | >20%                    |                 2 |              0.1685  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3384 | 5-10%                   |                 2 |              0.1692  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3533 | 5-10%                   |                 2 |              0.17665 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3537 | 10-15%                  |                 5 |              0.07074 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3567 | <5%                     |                 5 |              0.07134 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3577 | <5%                     |                 2 |              0.17885 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3588 | 5-10%                   |                 2 |              0.1794  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3705 | >20%                    |                 2 |              0.18525 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3739 | 5-10%                   |                 2 |              0.18695 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3785 | 5-10%                   |                 5 |              0.0757  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3962 | >20%                    |                 2 |              0.1981  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3976 | 5-10%                   |                 5 |              0.07952 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3989 | <5%                     |                 5 |              0.07978 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4    | 15-20%                  |                 5 |              0.08    |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.402  | <5%                     |                 2 |              0.201   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4045 | 5-10%                   |                 2 |              0.20225 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4059 | 10-15%                  |                 2 |              0.20295 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4337 | <5%                     |                 2 |              0.21685 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4386 | 5-10%                   |                 2 |              0.2193  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4476 | 10-15%                  |                 5 |              0.08952 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4695 | >20%                    |                 5 |              0.0939  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4788 | 15-20%                  |                 5 |              0.09576 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4806 | <5%                     |                 2 |              0.2403  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4813 | >20%                    |                 2 |              0.24065 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4834 | 5-10%                   |                 2 |              0.2417  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4859 | >20%                    |                 5 |              0.09718 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4899 | 15-20%                  |                 5 |              0.09798 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.491  | 10-15%                  |                 5 |              0.0982  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4939 | <5%                     |                 5 |              0.09878 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4942 | <5%                     |                 5 |              0.09884 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5006 | 15-20%                  |                 5 |              0.10012 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5061 | <5%                     |                 5 |              0.10122 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5065 | 10-15%                  |                 2 |              0.25325 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5065 | >20%                    |                 2 |              0.25325 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5074 | <5%                     |                 5 |              0.10148 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5088 | <5%                     |                 2 |              0.2544  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5107 | >20%                    |                 5 |              0.10214 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5222 | >20%                    |                10 |              0.05222 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5265 | 5-10%                   |                 5 |              0.1053  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5271 | 5-10%                   |                 5 |              0.10542 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5299 | 10-15%                  |                 2 |              0.26495 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5322 | 5-10%                   |                 2 |              0.2661  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5447 | >20%                    |                 5 |              0.10894 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5456 | <5%                     |                 5 |              0.10912 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5531 | <5%                     |                 5 |              0.11062 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5535 | 10-15%                  |                 5 |              0.1107  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5564 | 15-20%                  |                 5 |              0.11128 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5572 | 5-10%                   |                 5 |              0.11144 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5603 | 15-20%                  |                 2 |              0.28015 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5615 | <5%                     |                10 |              0.05615 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5774 | 5-10%                   |                 5 |              0.11548 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5857 | 5-10%                   |                 5 |              0.11714 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5954 | 15-20%                  |                 2 |              0.2977  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5957 | 5-10%                   |                10 |              0.05957 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.6022 | >20%                    |                 2 |              0.3011  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6116 | 5-10%                   |                10 |              0.06116 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6264 | 5-10%                   |                 5 |              0.12528 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6291 | 5-10%                   |                 5 |              0.12582 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6335 | <5%                     |                10 |              0.06335 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6418 | <5%                     |                10 |              0.06418 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6475 | >20%                    |                 2 |              0.32375 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6553 | >20%                    |                10 |              0.06553 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.657  | 5-10%                   |                10 |              0.0657  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6579 | 5-10%                   |                10 |              0.06579 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6604 | >20%                    |                 5 |              0.13208 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.664  | 10-15%                  |                10 |              0.0664  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6782 | 5-10%                   |                 5 |              0.13564 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6927 | <5%                     |                 5 |              0.13854 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6952 | 15-20%                  |                10 |              0.06952 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6961 | 5-10%                   |                 5 |              0.13922 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6964 | 10-15%                  |                10 |              0.06964 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7103 | 10-15%                  |                10 |              0.07103 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7147 | >20%                    |                 5 |              0.14294 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7154 | 5-10%                   |                10 |              0.07154 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7297 | 5-10%                   |                10 |              0.07297 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7374 | >20%                    |                 5 |              0.14748 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7409 | <5%                     |                 2 |              0.37045 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7414 | >20%                    |                10 |              0.07414 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7472 | >20%                    |                 5 |              0.14944 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7554 | 10-15%                  |                10 |              0.07554 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7591 | 5-10%                   |                10 |              0.07591 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7633 | 15-20%                  |                10 |              0.07633 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7945 | >20%                    |                10 |              0.07945 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7965 | 15-20%                  |                10 |              0.07965 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8008 | 15-20%                  |                 2 |              0.4004  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8098 | <5%                     |                10 |              0.08098 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.819  | 5-10%                   |                10 |              0.0819  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8635 | <5%                     |                10 |              0.08635 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8644 | 5-10%                   |                10 |              0.08644 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8764 | >20%                    |                10 |              0.08764 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8916 | 5-10%                   |                10 |              0.08916 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8917 | <5%                     |                10 |              0.08917 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.9013 | >20%                    |                 5 |              0.18026 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9088 | <5%                     |                10 |              0.09088 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9136 | 15-20%                  |                 2 |              0.4568  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9261 | 5-10%                   |                10 |              0.09261 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9301 | 5-10%                   |                10 |              0.09301 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9401 | >20%                    |                10 |              0.09401 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9462 | 15-20%                  |                10 |              0.09462 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9572 | 15-20%                  |                10 |              0.09572 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9612 | 5-10%                   |                 5 |              0.19224 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9775 | 5-10%                   |                 5 |              0.1955  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0081 | >20%                    |                10 |              0.10081 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0274 | <5%                     |                10 |              0.10274 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.098  | 15-20%                  |                 5 |              0.2196  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0986 | 10-15%                  |                 2 |              0.5493  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.101  | 5-10%                   |                10 |              0.1101  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1035 | 10-15%                  |                10 |              0.11035 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1826 | 10-15%                  |                10 |              0.11826 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.1953 | >20%                    |                10 |              0.11953 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.196  | 10-15%                  |                 2 |              0.598   |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2322 | 5-10%                   |                10 |              0.12322 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2442 | 15-20%                  |                 5 |              0.24884 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3941 | 5-10%                   |                10 |              0.13941 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4248 | 5-10%                   |                10 |              0.14248 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9508 | 5-10%                   |                10 |              0.19508 |