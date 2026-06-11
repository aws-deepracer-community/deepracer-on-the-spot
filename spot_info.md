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

Data correct as of 2026-06-11 04:20:42.657544, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1113 | >20%                    |                 2 |              0.05565 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1564 | >20%                    |                 2 |              0.0782  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1731 | 15-20%                  |                 2 |              0.08655 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1895 | >20%                    |                 2 |              0.09475 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2172 | 15-20%                  |                 5 |              0.04344 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2236 | 15-20%                  |                 2 |              0.1118  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2265 | >20%                    |                 2 |              0.11325 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2327 | >20%                    |                 2 |              0.11635 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2365 | >20%                    |                 2 |              0.11825 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2387 | 10-15%                  |                 2 |              0.11935 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2392 | >20%                    |                 2 |              0.1196  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2441 | 5-10%                   |                10 |              0.02441 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2459 | >20%                    |                 5 |              0.04918 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2508 | >20%                    |                 2 |              0.1254  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.253  | >20%                    |                 2 |              0.1265  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2548 | >20%                    |                 5 |              0.05096 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.276  | >20%                    |                 2 |              0.138   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2874 | 15-20%                  |                 2 |              0.1437  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2912 | 10-15%                  |                 2 |              0.1456  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3058 | >20%                    |                 2 |              0.1529  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3062 | 5-10%                   |                10 |              0.03062 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3142 | 15-20%                  |                 5 |              0.06284 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.315  | 15-20%                  |                 5 |              0.063   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3179 | >20%                    |                10 |              0.03179 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.321  | >20%                    |                10 |              0.0321  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3238 | >20%                    |                 2 |              0.1619  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3294 | >20%                    |                 5 |              0.06588 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3339 | <5%                     |                 2 |              0.16695 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3348 | 10-15%                  |                 2 |              0.1674  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3417 | >20%                    |                 5 |              0.06834 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3439 | >20%                    |                 5 |              0.06878 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3447 | 5-10%                   |                10 |              0.03447 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3494 | >20%                    |                 2 |              0.1747  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3612 | >20%                    |                 5 |              0.07224 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3626 | >20%                    |                 2 |              0.1813  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3728 | >20%                    |                 5 |              0.07456 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3765 | >20%                    |                 5 |              0.0753  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3785 | >20%                    |                 2 |              0.18925 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3787 | >20%                    |                10 |              0.03787 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3808 | >20%                    |                 5 |              0.07616 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3855 | >20%                    |                 5 |              0.0771  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3903 | >20%                    |                 5 |              0.07806 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3927 | >20%                    |                 5 |              0.07854 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4105 | 15-20%                  |                 2 |              0.20525 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4149 | >20%                    |                 2 |              0.20745 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4166 | >20%                    |                 2 |              0.2083  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4214 | <5%                     |                10 |              0.04214 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4245 | >20%                    |                 2 |              0.21225 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4292 | <5%                     |                 2 |              0.2146  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4356 | >20%                    |                 5 |              0.08712 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.4356 |                         |                 2 |              0.2178  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4403 | >20%                    |                 5 |              0.08806 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4409 | >20%                    |                10 |              0.04409 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.446  | >20%                    |                 5 |              0.0892  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4598 | 10-15%                  |                 2 |              0.2299  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4613 | 5-10%                   |                 2 |              0.23065 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4623 | >20%                    |                 2 |              0.23115 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4692 | <5%                     |                 2 |              0.2346  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4729 | 15-20%                  |                 5 |              0.09458 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4849 | >20%                    |                10 |              0.04849 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4874 | >20%                    |                 5 |              0.09748 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4899 | 5-10%                   |                 2 |              0.24495 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5058 | >20%                    |                 5 |              0.10116 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5127 | 15-20%                  |                 2 |              0.25635 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.513  | >20%                    |                 2 |              0.2565  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5134 | >20%                    |                 5 |              0.10268 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5219 | 5-10%                   |                 5 |              0.10438 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5224 | 10-15%                  |                 2 |              0.2612  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5255 | >20%                    |                10 |              0.05255 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5268 | >20%                    |                10 |              0.05268 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5316 | >20%                    |                 5 |              0.10632 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5336 | >20%                    |                 5 |              0.10672 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.534  | >20%                    |                 2 |              0.267   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5365 | 15-20%                  |                 2 |              0.26825 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5449 | 10-15%                  |                 5 |              0.10898 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5497 | <5%                     |                 5 |              0.10994 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5553 | >20%                    |                 2 |              0.27765 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5617 | 10-15%                  |                10 |              0.05617 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5631 | >20%                    |                 5 |              0.11262 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5789 | >20%                    |                 2 |              0.28945 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5867 | >20%                    |                 2 |              0.29335 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5988 | >20%                    |                 5 |              0.11976 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6144 | >20%                    |                 5 |              0.12288 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6166 | >20%                    |                 5 |              0.12332 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6232 | >20%                    |                 5 |              0.12464 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6437 | 15-20%                  |                10 |              0.06437 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6578 | >20%                    |                10 |              0.06578 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6686 | 5-10%                   |                10 |              0.06686 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.67   |                         |                 5 |              0.134   |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6757 | >20%                    |                10 |              0.06757 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6831 | 5-10%                   |                10 |              0.06831 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6834 | 15-20%                  |                10 |              0.06834 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6902 | >20%                    |                 5 |              0.13804 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6908 | >20%                    |                 5 |              0.13816 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6914 | >20%                    |                 2 |              0.3457  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7017 | >20%                    |                 5 |              0.14034 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7027 | >20%                    |                 2 |              0.35135 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7041 | >20%                    |                10 |              0.07041 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7198 | >20%                    |                 5 |              0.14396 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7257 | 15-20%                  |                10 |              0.07257 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7326 | >20%                    |                 5 |              0.14652 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.7388 |                         |                10 |              0.07388 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7488 | >20%                    |                 5 |              0.14976 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7496 | >20%                    |                 2 |              0.3748  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7541 | >20%                    |                10 |              0.07541 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7563 | >20%                    |                 5 |              0.15126 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7595 | >20%                    |                10 |              0.07595 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7627 | >20%                    |                10 |              0.07627 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7645 | >20%                    |                10 |              0.07645 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.765  | >20%                    |                 2 |              0.3825  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7832 | >20%                    |                 5 |              0.15664 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8006 | 15-20%                  |                10 |              0.08006 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8075 | >20%                    |                10 |              0.08075 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8119 | >20%                    |                10 |              0.08119 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8295 | >20%                    |                10 |              0.08295 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8312 | 5-10%                   |                 5 |              0.16624 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.832  | >20%                    |                10 |              0.0832  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8376 | >20%                    |                 5 |              0.16752 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8381 |                         |                 2 |              0.41905 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8501 | 15-20%                  |                10 |              0.08501 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8521 | >20%                    |                10 |              0.08521 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8722 | >20%                    |                 5 |              0.17444 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9045 | 10-15%                  |                 2 |              0.45225 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9207 | 5-10%                   |                 2 |              0.46035 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9424 | >20%                    |                10 |              0.09424 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.943  | >20%                    |                10 |              0.0943  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9442 | >20%                    |                10 |              0.09442 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9482 | >20%                    |                 5 |              0.18964 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9493 | >20%                    |                10 |              0.09493 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9999 | >20%                    |                 5 |              0.19998 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0124 | >20%                    |                10 |              0.10124 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0341 | >20%                    |                10 |              0.10341 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0401 | >20%                    |                 5 |              0.20802 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0434 | 10-15%                  |                 2 |              0.5217  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0449 |                         |                 5 |              0.20898 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0462 | >20%                    |                 2 |              0.5231  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0568 | >20%                    |                10 |              0.10568 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0586 | >20%                    |                 5 |              0.21172 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0933 | 5-10%                   |                10 |              0.10933 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1289 | >20%                    |                10 |              0.11289 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1339 | 15-20%                  |                10 |              0.11339 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1951 | >20%                    |                10 |              0.11951 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2007 | 5-10%                   |                 2 |              0.60035 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2488 | >20%                    |                10 |              0.12488 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2925 | >20%                    |                10 |              0.12925 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2942 | 15-20%                  |                10 |              0.12942 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3331 | >20%                    |                10 |              0.13331 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3783 | 15-20%                  |                 5 |              0.27566 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4053 | >20%                    |                 5 |              0.28106 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4225 | 10-15%                  |                10 |              0.14225 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5434 | 15-20%                  |                10 |              0.15434 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5758 | >20%                    |                 5 |              0.31516 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7117 |                         |                10 |              0.17117 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1988 | >20%                    |                10 |              0.21988 |