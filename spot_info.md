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

Data correct as of 2025-07-04 01:57:04.825868, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1584 | <5%                     |                 2 |              0.0792  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1638 | >20%                    |                 5 |              0.03276 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1653 | >20%                    |                 5 |              0.03306 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1813 | 15-20%                  |                 2 |              0.09065 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | >20%                    |                 5 |              0.039   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1958 | 15-20%                  |                 5 |              0.03916 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2014 | 10-15%                  |                10 |              0.02014 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2082 | 5-10%                   |                 2 |              0.1041  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2094 | >20%                    |                 2 |              0.1047  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2108 | >20%                    |                 2 |              0.1054  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2153 | >20%                    |                 2 |              0.10765 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2173 | <5%                     |                 5 |              0.04346 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2224 | 15-20%                  |                 2 |              0.1112  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2308 | >20%                    |                 2 |              0.1154  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2313 | 15-20%                  |                 2 |              0.11565 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2387 | 15-20%                  |                 2 |              0.11935 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | >20%                    |                10 |              0.02395 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2594 | >20%                    |                 2 |              0.1297  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2653 | >20%                    |                 2 |              0.13265 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2701 | 5-10%                   |                10 |              0.02701 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2748 | >20%                    |                 5 |              0.05496 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2944 | <5%                     |                 2 |              0.1472  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2957 | >20%                    |                 5 |              0.05914 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3039 | >20%                    |                 2 |              0.15195 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3056 | >20%                    |                 2 |              0.1528  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3069 | >20%                    |                 2 |              0.15345 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3079 | >20%                    |                10 |              0.03079 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3169 | >20%                    |                 2 |              0.15845 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.32   | >20%                    |                 2 |              0.16    |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3214 | 15-20%                  |                 5 |              0.06428 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3247 | >20%                    |                 2 |              0.16235 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3278 | 10-15%                  |                 2 |              0.1639  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.339  | <5%                     |                 2 |              0.1695  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3461 | 15-20%                  |                 5 |              0.06922 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3528 | 10-15%                  |                 2 |              0.1764  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3584 | 15-20%                  |                10 |              0.03584 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3707 | >20%                    |                 2 |              0.18535 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3746 | >20%                    |                 5 |              0.07492 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3794 | >20%                    |                 2 |              0.1897  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3851 | <5%                     |                10 |              0.03851 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3879 | >20%                    |                 2 |              0.19395 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3891 | 5-10%                   |                 2 |              0.19455 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3901 | >20%                    |                 2 |              0.19505 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3949 | 10-15%                  |                 2 |              0.19745 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4023 | >20%                    |                 5 |              0.08046 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4052 | >20%                    |                 2 |              0.2026  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4141 | <5%                     |                 2 |              0.20705 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4236 | >20%                    |                 2 |              0.2118  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4257 | 10-15%                  |                 5 |              0.08514 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4337 | >20%                    |                 2 |              0.21685 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4388 | 10-15%                  |                 2 |              0.2194  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4408 | >20%                    |                 5 |              0.08816 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4474 | 15-20%                  |                10 |              0.04474 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4487 | >20%                    |                10 |              0.04487 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4515 | >20%                    |                 5 |              0.0903  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4612 | <5%                     |                 5 |              0.09224 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4628 | >20%                    |                 2 |              0.2314  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4686 | >20%                    |                 2 |              0.2343  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4701 | 15-20%                  |                 5 |              0.09402 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4713 | >20%                    |                 2 |              0.23565 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4732 | >20%                    |                 5 |              0.09464 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4748 | >20%                    |                 5 |              0.09496 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4759 | 5-10%                   |                 2 |              0.23795 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.477  | 5-10%                   |                 2 |              0.2385  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4772 | <5%                     |                 5 |              0.09544 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4773 | >20%                    |                 2 |              0.23865 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4804 | >20%                    |                 2 |              0.2402  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4806 | >20%                    |                 5 |              0.09612 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.483  | 10-15%                  |                 5 |              0.0966  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4863 | >20%                    |                 2 |              0.24315 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4906 | >20%                    |                 5 |              0.09812 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4964 | 10-15%                  |                 5 |              0.09928 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4977 | >20%                    |                 2 |              0.24885 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5043 | >20%                    |                 5 |              0.10086 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5165 | 15-20%                  |                 2 |              0.25825 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5175 | >20%                    |                 5 |              0.1035  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5189 | 5-10%                   |                 5 |              0.10378 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5197 | >20%                    |                 2 |              0.25985 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5272 | 10-15%                  |                 5 |              0.10544 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5292 | >20%                    |                 2 |              0.2646  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5339 | 10-15%                  |                 2 |              0.26695 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5366 | >20%                    |                 5 |              0.10732 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5367 | >20%                    |                10 |              0.05367 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.537  | >20%                    |                 2 |              0.2685  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5379 | >20%                    |                 2 |              0.26895 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5383 | >20%                    |                10 |              0.05383 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5405 | >20%                    |                 5 |              0.1081  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5411 | >20%                    |                 5 |              0.10822 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5478 | <5%                     |                 5 |              0.10956 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5689 | 15-20%                  |                 2 |              0.28445 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5722 | 15-20%                  |                 2 |              0.2861  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5822 | >20%                    |                 5 |              0.11644 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5866 | >20%                    |                 2 |              0.2933  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5906 | >20%                    |                 5 |              0.11812 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5954 | <5%                     |                 2 |              0.2977  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6052 | 15-20%                  |                 5 |              0.12104 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6082 | >20%                    |                 5 |              0.12164 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6126 | >20%                    |                 5 |              0.12252 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6193 | 10-15%                  |                10 |              0.06193 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6209 | >20%                    |                 5 |              0.12418 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6212 | <5%                     |                 5 |              0.12424 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6285 | >20%                    |                 5 |              0.1257  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6309 | 10-15%                  |                 5 |              0.12618 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6318 | >20%                    |                10 |              0.06318 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6336 | 5-10%                   |                 2 |              0.3168  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6404 | >20%                    |                 5 |              0.12808 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6456 | >20%                    |                 5 |              0.12912 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6521 | >20%                    |                10 |              0.06521 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6603 | >20%                    |                 5 |              0.13206 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6603 | >20%                    |                10 |              0.06603 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6608 | >20%                    |                 5 |              0.13216 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6631 | >20%                    |                10 |              0.06631 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6672 | >20%                    |                 2 |              0.3336  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6745 | <5%                     |                 5 |              0.1349  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6794 | >20%                    |                 5 |              0.13588 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6829 | <5%                     |                 5 |              0.13658 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7002 | 15-20%                  |                10 |              0.07002 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.706  | >20%                    |                10 |              0.0706  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7138 | 10-15%                  |                 2 |              0.3569  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7163 | <5%                     |                 5 |              0.14326 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.717  | <5%                     |                 5 |              0.1434  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7254 | 15-20%                  |                10 |              0.07254 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7323 | >20%                    |                 5 |              0.14646 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7351 | 10-15%                  |                 5 |              0.14702 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7381 | >20%                    |                10 |              0.07381 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7428 | >20%                    |                 5 |              0.14856 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7476 | 10-15%                  |                 5 |              0.14952 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7649 | >20%                    |                10 |              0.07649 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7848 | >20%                    |                 5 |              0.15696 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7905 | >20%                    |                10 |              0.07905 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8004 | 5-10%                   |                 5 |              0.16008 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8027 | >20%                    |                10 |              0.08027 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8043 | 15-20%                  |                10 |              0.08043 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8148 | <5%                     |                10 |              0.08148 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.822  | 15-20%                  |                10 |              0.0822  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8243 | <5%                     |                10 |              0.08243 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8264 | >20%                    |                10 |              0.08264 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8272 | <5%                     |                10 |              0.08272 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8307 | 10-15%                  |                10 |              0.08307 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8427 | >20%                    |                10 |              0.08427 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.848  | >20%                    |                10 |              0.0848  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8556 | <5%                     |                10 |              0.08556 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8821 | 15-20%                  |                10 |              0.08821 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8878 | >20%                    |                10 |              0.08878 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8937 | >20%                    |                10 |              0.08937 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9221 | >20%                    |                10 |              0.09221 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9294 | >20%                    |                10 |              0.09294 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9343 | >20%                    |                10 |              0.09343 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9419 | >20%                    |                10 |              0.09419 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9624 | 15-20%                  |                10 |              0.09624 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9637 | >20%                    |                10 |              0.09637 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9693 | >20%                    |                 5 |              0.19386 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.98   | >20%                    |                 2 |              0.49    |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9846 | >20%                    |                10 |              0.09846 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9965 | >20%                    |                10 |              0.09965 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0008 | >20%                    |                10 |              0.10008 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0217 | >20%                    |                10 |              0.10217 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0256 | >20%                    |                10 |              0.10256 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0416 | 10-15%                  |                10 |              0.10416 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0433 | >20%                    |                10 |              0.10433 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0641 | >20%                    |                 2 |              0.53205 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0711 | <5%                     |                 2 |              0.53555 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0744 | 15-20%                  |                10 |              0.10744 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0927 | <5%                     |                10 |              0.10927 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1061 | >20%                    |                 2 |              0.55305 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1142 | >20%                    |                10 |              0.11142 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1492 | 15-20%                  |                10 |              0.11492 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1616 | >20%                    |                10 |              0.11616 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1764 | 10-15%                  |                10 |              0.11764 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1911 | >20%                    |                 2 |              0.59555 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2465 | <5%                     |                 5 |              0.2493  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2607 | 15-20%                  |                10 |              0.12607 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2839 | >20%                    |                 5 |              0.25678 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3555 | >20%                    |                 5 |              0.2711  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3588 | >20%                    |                10 |              0.13588 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4403 | <5%                     |                 5 |              0.28806 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4833 | >20%                    |                 5 |              0.29666 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6584 | 10-15%                  |                10 |              0.16584 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8181 | >20%                    |                10 |              0.18181 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8395 | <5%                     |                10 |              0.18395 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1315 | <5%                     |                10 |              0.21315 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      2.2431 | <5%                     |                 2 |              1.12155 |