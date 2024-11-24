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

Data correct as of 2024-11-24 01:47:19.555568, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1204 | >20%                    |                 5 |              0.02408 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1619 | 10-15%                  |                 2 |              0.08095 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.1889 | >20%                    |                 5 |              0.03778 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.223  | 5-10%                   |                 2 |              0.1115  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 5-10%                   |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2276 | 15-20%                  |                 2 |              0.1138  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2334 | 5-10%                   |                 2 |              0.1167  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2362 | <5%                     |                 2 |              0.1181  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2504 | <5%                     |                 2 |              0.1252  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2615 | 10-15%                  |                 2 |              0.13075 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2782 | <5%                     |                 2 |              0.1391  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2808 | 5-10%                   |                 2 |              0.1404  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2973 | 5-10%                   |                 2 |              0.14865 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | <5%                     |                 5 |              0.06008 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3016 | 15-20%                  |                 5 |              0.06032 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3045 | 10-15%                  |                 2 |              0.15225 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3233 | <5%                     |                 2 |              0.16165 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.3326 |                         |                 2 |              0.1663  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3352 | 5-10%                   |                 2 |              0.1676  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3391 | <5%                     |                 5 |              0.06782 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3393 | 15-20%                  |                 2 |              0.16965 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3396 | <5%                     |                 2 |              0.1698  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3401 | 15-20%                  |                 2 |              0.17005 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3442 | <5%                     |                10 |              0.03442 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3492 | >20%                    |                 2 |              0.1746  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.352  | >20%                    |                 5 |              0.0704  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.358  | <5%                     |                 5 |              0.0716  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3627 | <5%                     |                10 |              0.03627 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3634 | >20%                    |                 5 |              0.07268 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3756 | <5%                     |                 2 |              0.1878  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3863 | >20%                    |                 2 |              0.19315 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.388  | >20%                    |                 5 |              0.0776  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3887 | >20%                    |                 2 |              0.19435 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3905 | >20%                    |                 2 |              0.19525 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3959 | 5-10%                   |                 2 |              0.19795 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3996 | <5%                     |                 2 |              0.1998  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4048 | 15-20%                  |                 5 |              0.08096 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4073 | <5%                     |                 2 |              0.20365 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4116 | 5-10%                   |                 2 |              0.2058  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4141 | 5-10%                   |                 2 |              0.20705 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.424  | >20%                    |                10 |              0.0424  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4268 | 5-10%                   |                 2 |              0.2134  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4413 | >20%                    |                 2 |              0.22065 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.444  | 10-15%                  |                 2 |              0.222   |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4444 | >20%                    |                 2 |              0.2222  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4446 | 5-10%                   |                 5 |              0.08892 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.4472 |                         |                 5 |              0.08944 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4493 | 5-10%                   |                 5 |              0.08986 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4498 | <5%                     |                 2 |              0.2249  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.455  | 10-15%                  |                 5 |              0.091   |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4558 | >20%                    |                10 |              0.04558 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4567 | 15-20%                  |                 5 |              0.09134 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4569 | <5%                     |                 5 |              0.09138 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4592 | 5-10%                   |                10 |              0.04592 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4663 | 15-20%                  |                 5 |              0.09326 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4676 | <5%                     |                 5 |              0.09352 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4748 | 15-20%                  |                 5 |              0.09496 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4814 | 5-10%                   |                 5 |              0.09628 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4912 | 5-10%                   |                 2 |              0.2456  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4954 | <5%                     |                 2 |              0.2477  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5147 | 10-15%                  |                 2 |              0.25735 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5149 | <5%                     |                 5 |              0.10298 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5183 | 5-10%                   |                 2 |              0.25915 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5188 | 10-15%                  |                 2 |              0.2594  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5293 | >20%                    |                 5 |              0.10586 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.531  | <5%                     |                 5 |              0.1062  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5313 | >20%                    |                10 |              0.05313 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5324 | <5%                     |                 5 |              0.10648 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5412 | >20%                    |                 2 |              0.2706  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.546  | >20%                    |                 5 |              0.1092  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5488 | 10-15%                  |                 5 |              0.10976 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5546 | 10-15%                  |                 5 |              0.11092 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5554 | 5-10%                   |                 5 |              0.11108 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5565 | 10-15%                  |                 5 |              0.1113  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5604 | >20%                    |                 5 |              0.11208 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5625 | >20%                    |                10 |              0.05625 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5826 | 15-20%                  |                 2 |              0.2913  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5898 | 10-15%                  |                10 |              0.05898 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5998 | 10-15%                  |                10 |              0.05998 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6027 | >20%                    |                 5 |              0.12054 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.61   | >20%                    |                 5 |              0.122   |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6236 | 5-10%                   |                 5 |              0.12472 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6281 | 5-10%                   |                10 |              0.06281 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.666  | <5%                     |                 5 |              0.1332  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      0.6681 |                         |                10 |              0.06681 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6815 | 5-10%                   |                10 |              0.06815 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6844 | >20%                    |                10 |              0.06844 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6849 | <5%                     |                 5 |              0.13698 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6861 | 15-20%                  |                 5 |              0.13722 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6888 | >20%                    |                 2 |              0.3444  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6905 | 5-10%                   |                 5 |              0.1381  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6994 | <5%                     |                 5 |              0.13988 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7029 | >20%                    |                10 |              0.07029 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7216 | 10-15%                  |                10 |              0.07216 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7296 | <5%                     |                 5 |              0.14592 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7416 | 5-10%                   |                10 |              0.07416 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7443 | <5%                     |                 5 |              0.14886 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7478 | <5%                     |                 2 |              0.3739  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7536 | 15-20%                  |                 5 |              0.15072 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7664 | >20%                    |                10 |              0.07664 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7849 | <5%                     |                10 |              0.07849 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7875 | 5-10%                   |                 5 |              0.1575  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7888 | 5-10%                   |                10 |              0.07888 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8189 | 5-10%                   |                10 |              0.08189 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8206 | 10-15%                  |                10 |              0.08206 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8223 | 5-10%                   |                10 |              0.08223 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8381 | 15-20%                  |                10 |              0.08381 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8417 | 5-10%                   |                10 |              0.08417 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8497 | 10-15%                  |                10 |              0.08497 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8551 | 15-20%                  |                10 |              0.08551 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8584 | >20%                    |                 5 |              0.17168 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8748 | >20%                    |                10 |              0.08748 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9007 | <5%                     |                10 |              0.09007 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9111 | 5-10%                   |                10 |              0.09111 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9117 | 5-10%                   |                10 |              0.09117 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9205 | >20%                    |                10 |              0.09205 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9475 | <5%                     |                10 |              0.09475 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.991  | 5-10%                   |                10 |              0.0991  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0077 | >20%                    |                10 |              0.10077 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0254 | <5%                     |                10 |              0.10254 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0302 | 5-10%                   |                10 |              0.10302 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0327 | >20%                    |                10 |              0.10327 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0515 | 15-20%                  |                10 |              0.10515 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0542 | <5%                     |                10 |              0.10542 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1542 | 15-20%                  |                10 |              0.11542 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.169  | 10-15%                  |                10 |              0.1169  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3555 | >20%                    |                10 |              0.13555 |