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

Data correct as of 2026-08-01 03:21:31.407089, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1398 | >20%                    |                 2 |              0.0699  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2006 | >20%                    |                 2 |              0.1003  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2284 | >20%                    |                 2 |              0.1142  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2313 | 15-20%                  |                 2 |              0.11565 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2366 | >20%                    |                 2 |              0.1183  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2437 | 15-20%                  |                 5 |              0.04874 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2471 | >20%                    |                 2 |              0.12355 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2473 | 5-10%                   |                10 |              0.02473 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2501 | >20%                    |                 2 |              0.12505 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2789 | >20%                    |                 2 |              0.13945 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.28   | >20%                    |                 2 |              0.14    |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2808 | >20%                    |                 2 |              0.1404  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2815 | 15-20%                  |                 2 |              0.14075 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3009 | >20%                    |                 5 |              0.06018 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3086 | >20%                    |                 2 |              0.1543  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3094 | >20%                    |                 2 |              0.1547  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.324  | >20%                    |                 2 |              0.162   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3344 | 15-20%                  |                 2 |              0.1672  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3409 | 10-15%                  |                 2 |              0.17045 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3425 | 15-20%                  |                 5 |              0.0685  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3507 | 10-15%                  |                 2 |              0.17535 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3577 | 5-10%                   |                10 |              0.03577 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.3588 | >20%                    |                10 |              0.03588 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3595 | >20%                    |                10 |              0.03595 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3717 | <5%                     |                 2 |              0.18585 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3719 | >20%                    |                 2 |              0.18595 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3774 | >20%                    |                 2 |              0.1887  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3809 | >20%                    |                 5 |              0.07618 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3811 | >20%                    |                 5 |              0.07622 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3811 | >20%                    |                 5 |              0.07622 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3906 | 15-20%                  |                 2 |              0.1953  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.394  | >20%                    |                 5 |              0.0788  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4029 | 5-10%                   |                10 |              0.04029 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4143 | 10-15%                  |                 2 |              0.20715 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4145 | >20%                    |                 5 |              0.0829  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4192 | >20%                    |                10 |              0.04192 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4299 | >20%                    |                 5 |              0.08598 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4339 | >20%                    |                 5 |              0.08678 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4344 | >20%                    |                10 |              0.04344 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4369 | >20%                    |                 2 |              0.21845 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4413 | <5%                     |                 2 |              0.22065 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4436 | >20%                    |                 2 |              0.2218  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4758 | 10-15%                  |                 2 |              0.2379  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.478  | >20%                    |                 2 |              0.239   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4795 | >20%                    |                 2 |              0.23975 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4817 | >20%                    |                 5 |              0.09634 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4863 | 15-20%                  |                 5 |              0.09726 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4992 | >20%                    |                 5 |              0.09984 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.503  | 10-15%                  |                10 |              0.0503  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5046 | >20%                    |                 2 |              0.2523  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5107 | >20%                    |                 2 |              0.25535 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5136 | >20%                    |                 5 |              0.10272 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5137 | >20%                    |                 5 |              0.10274 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5199 | 15-20%                  |                 2 |              0.25995 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5482 | >20%                    |                 5 |              0.10964 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5484 | <5%                     |                 2 |              0.2742  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5501 | >20%                    |                 5 |              0.11002 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5502 | >20%                    |                 2 |              0.2751  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5547 | >20%                    |                10 |              0.05547 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5574 | >20%                    |                 5 |              0.11148 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.56   | >20%                    |                 5 |              0.112   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5647 | 5-10%                   |                 2 |              0.28235 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.567  | 10-15%                  |                 5 |              0.1134  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5682 | >20%                    |                 5 |              0.11364 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5746 | >20%                    |                 5 |              0.11492 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5766 | >20%                    |                 5 |              0.11532 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.59   | >20%                    |                 5 |              0.118   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5909 | >20%                    |                 5 |              0.11818 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.591  | >20%                    |                 2 |              0.2955  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5913 | >20%                    |                 2 |              0.29565 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6206 | >20%                    |                 5 |              0.12412 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6313 | >20%                    |                 2 |              0.31565 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6357 | >20%                    |                 5 |              0.12714 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6453 | <5%                     |                 5 |              0.12906 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6498 | >20%                    |                10 |              0.06498 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6511 | >20%                    |                 2 |              0.32555 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6592 | >20%                    |                10 |              0.06592 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6637 | >20%                    |                 5 |              0.13274 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6736 | >20%                    |                10 |              0.06736 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6784 | >20%                    |                 5 |              0.13568 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6832 | <5%                     |                10 |              0.06832 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6846 | 5-10%                   |                 5 |              0.13692 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6874 | 15-20%                  |                 5 |              0.13748 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6926 | >20%                    |                 5 |              0.13852 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6969 | >20%                    |                 5 |              0.13938 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7023 | 15-20%                  |                10 |              0.07023 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7029 | >20%                    |                 5 |              0.14058 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7206 |                         |                 2 |              0.3603  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7327 | >20%                    |                10 |              0.07327 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7405 | >20%                    |                10 |              0.07405 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7801 | >20%                    |                 5 |              0.15602 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7839 | >20%                    |                10 |              0.07839 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7896 | >20%                    |                 5 |              0.15792 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.7989 |                         |                 2 |              0.39945 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8088 | >20%                    |                 2 |              0.4044  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.819  | >20%                    |                10 |              0.0819  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8311 | 10-15%                  |                 2 |              0.41555 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8332 | >20%                    |                10 |              0.08332 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8348 | >20%                    |                10 |              0.08348 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8485 | 5-10%                   |                10 |              0.08485 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8538 | >20%                    |                 2 |              0.4269  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8607 | 15-20%                  |                10 |              0.08607 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8669 |                         |                 5 |              0.17338 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.869  | >20%                    |                 5 |              0.1738  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8717 | >20%                    |                 5 |              0.17434 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8759 | >20%                    |                 2 |              0.43795 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8915 | >20%                    |                10 |              0.08915 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8919 | 10-15%                  |                 2 |              0.44595 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8941 | 15-20%                  |                10 |              0.08941 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9032 | >20%                    |                 5 |              0.18064 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9053 | >20%                    |                10 |              0.09053 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.912  | >20%                    |                 2 |              0.456   |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.917  | >20%                    |                10 |              0.0917  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9174 | >20%                    |                10 |              0.09174 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9687 | >20%                    |                10 |              0.09687 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9866 | >20%                    |                10 |              0.09866 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0004 | >20%                    |                 5 |              0.20008 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0036 | 5-10%                   |                10 |              0.10036 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0096 | >20%                    |                10 |              0.10096 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0166 | 15-20%                  |                10 |              0.10166 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.019  | 15-20%                  |                10 |              0.1019  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0316 | >20%                    |                 5 |              0.20632 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0392 | >20%                    |                 5 |              0.20784 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0414 | >20%                    |                10 |              0.10414 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0443 | >20%                    |                10 |              0.10443 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0552 | >20%                    |                10 |              0.10552 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0558 | 15-20%                  |                 2 |              0.5279  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0902 | >20%                    |                 5 |              0.21804 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1158 | 5-10%                   |                 2 |              0.5579  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.136  | >20%                    |                 2 |              0.568   |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1577 | >20%                    |                10 |              0.11577 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1961 | 15-20%                  |                10 |              0.11961 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1971 | 5-10%                   |                 2 |              0.59855 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.2115 | >20%                    |                10 |              0.12115 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2623 | >20%                    |                10 |              0.12623 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2656 | 5-10%                   |                 5 |              0.25312 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2752 | 10-15%                  |                 2 |              0.6376  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2864 | >20%                    |                 5 |              0.25728 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3189 | 15-20%                  |                10 |              0.13189 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3247 |                         |                10 |              0.13247 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3401 | >20%                    |                 5 |              0.26802 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3679 |                         |                 5 |              0.27358 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4756 | >20%                    |                10 |              0.14756 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5818 | 15-20%                  |                 5 |              0.31636 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.605  | 10-15%                  |                10 |              0.1605  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6896 | 5-10%                   |                10 |              0.16896 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7515 | >20%                    |                10 |              0.17515 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8465 |                         |                10 |              0.18465 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8921 | 15-20%                  |                10 |              0.18921 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0316 | >20%                    |                10 |              0.20316 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0385 | 5-10%                   |                 2 |              1.01925 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.0511 | >20%                    |                10 |              0.20511 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.2822 | >20%                    |                 5 |              0.45644 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.4902 | >20%                    |                 5 |              0.49804 |