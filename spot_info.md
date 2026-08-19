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

Data correct as of 2026-08-19 01:26:26.422791, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1641 | >20%                    |                 2 |              0.08205 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1718 | >20%                    |                 2 |              0.0859  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2085 | 15-20%                  |                 2 |              0.10425 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2111 | >20%                    |                 2 |              0.10555 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2151 | >20%                    |                 2 |              0.10755 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2181 | >20%                    |                 2 |              0.10905 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2285 | 15-20%                  |                 2 |              0.11425 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2323 | 10-15%                  |                 2 |              0.11615 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2377 | >20%                    |                 2 |              0.11885 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2541 | 15-20%                  |                 2 |              0.12705 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2661 | 10-15%                  |                 2 |              0.13305 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2667 | >20%                    |                 2 |              0.13335 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2863 | >20%                    |                 2 |              0.14315 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2869 | >20%                    |                 2 |              0.14345 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2962 | >20%                    |                 5 |              0.05924 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3113 | >20%                    |                 5 |              0.06226 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3186 | >20%                    |                 2 |              0.1593  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3191 | >20%                    |                 2 |              0.15955 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3287 | >20%                    |                 2 |              0.16435 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3357 | >20%                    |                10 |              0.03357 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3357 | 15-20%                  |                 5 |              0.06714 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3621 | 5-10%                   |                10 |              0.03621 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3737 | >20%                    |                 5 |              0.07474 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3741 | <5%                     |                 2 |              0.18705 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3785 | >20%                    |                 5 |              0.0757  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3808 | 15-20%                  |                 2 |              0.1904  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3896 | >20%                    |                 5 |              0.07792 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3911 | <5%                     |                 2 |              0.19555 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3919 | 15-20%                  |                 5 |              0.07838 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3925 | 10-15%                  |                 2 |              0.19625 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3958 | >20%                    |                10 |              0.03958 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4037 | 15-20%                  |                 2 |              0.20185 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4037 | >20%                    |                 5 |              0.08074 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4062 | 5-10%                   |                10 |              0.04062 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4079 | >20%                    |                10 |              0.04079 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4129 | >20%                    |                 5 |              0.08258 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4143 | >20%                    |                 5 |              0.08286 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4173 | >20%                    |                 2 |              0.20865 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4192 | >20%                    |                 5 |              0.08384 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4283 | >20%                    |                 2 |              0.21415 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4372 | >20%                    |                 5 |              0.08744 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4379 | >20%                    |                 2 |              0.21895 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4485 | 10-15%                  |                 2 |              0.22425 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4503 | >20%                    |                 2 |              0.22515 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4513 | >20%                    |                10 |              0.04513 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4548 | >20%                    |                 2 |              0.2274  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4843 | >20%                    |                 5 |              0.09686 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4888 | >20%                    |                 5 |              0.09776 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5002 | >20%                    |                 2 |              0.2501  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5012 | >20%                    |                 5 |              0.10024 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5021 | >20%                    |                 5 |              0.10042 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5051 | >20%                    |                 2 |              0.25255 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5053 | >20%                    |                 5 |              0.10106 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5127 | >20%                    |                10 |              0.05127 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5143 | >20%                    |                 2 |              0.25715 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5157 | >20%                    |                 2 |              0.25785 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5173 | >20%                    |                 2 |              0.25865 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5243 | >20%                    |                 5 |              0.10486 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5245 | >20%                    |                10 |              0.05245 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5314 | >20%                    |                 2 |              0.2657  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5349 | >20%                    |                 5 |              0.10698 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5355 | 5-10%                   |                 2 |              0.26775 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5377 | <5%                     |                 2 |              0.26885 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5393 | 5-10%                   |                10 |              0.05393 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5489 | >20%                    |                 2 |              0.27445 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5491 | 15-20%                  |                 5 |              0.10982 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5511 | >20%                    |                 5 |              0.11022 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5573 | >20%                    |                 5 |              0.11146 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5691 | <5%                     |                 5 |              0.11382 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5697 | >20%                    |                10 |              0.05697 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.58   | 10-15%                  |                10 |              0.058   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5888 | 10-15%                  |                 5 |              0.11776 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5911 | >20%                    |                 5 |              0.11822 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5949 | >20%                    |                 5 |              0.11898 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5954 | >20%                    |                 5 |              0.11908 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6169 | >20%                    |                 5 |              0.12338 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6339 | >20%                    |                 2 |              0.31695 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6474 | 15-20%                  |                10 |              0.06474 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6478 | >20%                    |                 5 |              0.12956 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6506 | >20%                    |                 2 |              0.3253  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6545 | 5-10%                   |                 5 |              0.1309  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6568 | >20%                    |                10 |              0.06568 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6584 | >20%                    |                 5 |              0.13168 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6713 | >20%                    |                 2 |              0.33565 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6795 | 15-20%                  |                10 |              0.06795 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6847 | >20%                    |                10 |              0.06847 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6888 | >20%                    |                10 |              0.06888 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.69   | >20%                    |                 5 |              0.138   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7033 | >20%                    |                10 |              0.07033 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7049 | >20%                    |                10 |              0.07049 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7079 | >20%                    |                 5 |              0.14158 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7101 | >20%                    |                 2 |              0.35505 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7507 | >20%                    |                10 |              0.07507 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7614 | >20%                    |                10 |              0.07614 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7984 | >20%                    |                10 |              0.07984 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8051 | >20%                    |                 5 |              0.16102 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8076 | >20%                    |                 5 |              0.16152 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8197 | 15-20%                  |                10 |              0.08197 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8215 | >20%                    |                 5 |              0.1643  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.825  | 5-10%                   |                10 |              0.0825  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8298 | >20%                    |                10 |              0.08298 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8344 | <5%                     |                10 |              0.08344 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8404 | 10-15%                  |                 2 |              0.4202  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8495 | >20%                    |                 5 |              0.1699  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.867  | >20%                    |                10 |              0.0867  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8725 | >20%                    |                10 |              0.08725 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8729 | >20%                    |                 5 |              0.17458 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8734 | >20%                    |                10 |              0.08734 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8765 | 10-15%                  |                 2 |              0.43825 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8816 | >20%                    |                 2 |              0.4408  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8823 | 5-10%                   |                10 |              0.08823 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8844 | >20%                    |                10 |              0.08844 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9025 | 15-20%                  |                10 |              0.09025 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9369 | >20%                    |                10 |              0.09369 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.938  |                         |                 2 |              0.469   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9427 | 15-20%                  |                 2 |              0.47135 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9444 | >20%                    |                10 |              0.09444 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9489 | >20%                    |                10 |              0.09489 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0012 | 15-20%                  |                10 |              0.10012 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0066 | >20%                    |                10 |              0.10066 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0173 | >20%                    |                 5 |              0.20346 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.028  | >20%                    |                 5 |              0.2056  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0392 | >20%                    |                10 |              0.10392 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0526 |                         |                 2 |              0.5263  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0529 | 15-20%                  |                10 |              0.10529 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0545 |                         |                10 |              0.10545 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0658 | >20%                    |                 5 |              0.21316 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0852 | >20%                    |                 5 |              0.21704 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1069 | >20%                    |                 5 |              0.22138 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.135  | >20%                    |                10 |              0.1135  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1445 |                         |                 5 |              0.2289  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1451 | >20%                    |                 5 |              0.22902 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1486 | >20%                    |                 5 |              0.22972 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1723 | >20%                    |                 2 |              0.58615 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.209  | >20%                    |                10 |              0.1209  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2093 | >20%                    |                10 |              0.12093 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2322 | 15-20%                  |                10 |              0.12322 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2355 | 5-10%                   |                 2 |              0.61775 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2452 | 5-10%                   |                 5 |              0.24904 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2674 |                         |                 5 |              0.25348 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.282  | >20%                    |                 5 |              0.2564  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3114 | 10-15%                  |                 2 |              0.6557  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3435 | 5-10%                   |                10 |              0.13435 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4275 | 10-15%                  |                10 |              0.14275 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5407 | 15-20%                  |                 5 |              0.30814 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.594  | >20%                    |                10 |              0.1594  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6688 | 15-20%                  |                10 |              0.16688 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.7    | 5-10%                   |                 2 |              0.85    |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.7155 | >20%                    |                10 |              0.17155 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.7418 | >20%                    |                10 |              0.17418 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8278 | >20%                    |                10 |              0.18278 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.866  |                         |                10 |              0.1866  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9304 | 5-10%                   |                 2 |              0.9652  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.4151 | >20%                    |                 5 |              0.48302 |