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

Data correct as of 2026-01-05 02:13:00.130309, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1459 | >20%                    |                 2 |              0.07295 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1485 | >20%                    |                 2 |              0.07425 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1673 | >20%                    |                 5 |              0.03346 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1727 | <5%                     |                 2 |              0.08635 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1761 | >20%                    |                 2 |              0.08805 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2237 | >20%                    |                 2 |              0.11185 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2338 | >20%                    |                 2 |              0.1169  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2413 | >20%                    |                 2 |              0.12065 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2542 | >20%                    |                 2 |              0.1271  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2601 | >20%                    |                 2 |              0.13005 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2662 | >20%                    |                 5 |              0.05324 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2689 | >20%                    |                 2 |              0.13445 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2726 | >20%                    |                 2 |              0.1363  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2789 | <5%                     |                 5 |              0.05578 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2827 | >20%                    |                 2 |              0.14135 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2849 | 15-20%                  |                 2 |              0.14245 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2866 | 5-10%                   |                10 |              0.02866 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.289  | >20%                    |                10 |              0.0289  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2913 | >20%                    |                10 |              0.02913 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3024 | >20%                    |                 2 |              0.1512  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3089 | >20%                    |                 2 |              0.15445 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3128 | >20%                    |                 5 |              0.06256 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3167 | >20%                    |                 2 |              0.15835 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3275 | >20%                    |                 2 |              0.16375 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3282 | 15-20%                  |                 5 |              0.06564 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3335 | >20%                    |                 2 |              0.16675 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.338  | >20%                    |                 5 |              0.0676  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3389 | >20%                    |                 5 |              0.06778 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3462 | <5%                     |                 5 |              0.06924 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3503 | 5-10%                   |                 5 |              0.07006 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.362  | >20%                    |                 2 |              0.181   |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3642 | 5-10%                   |                10 |              0.03642 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3666 | 5-10%                   |                 2 |              0.1833  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3671 | >20%                    |                 5 |              0.07342 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3677 | 5-10%                   |                 2 |              0.18385 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3701 | 10-15%                  |                 2 |              0.18505 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3709 | >20%                    |                 2 |              0.18545 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3718 | >20%                    |                 5 |              0.07436 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.372  | >20%                    |                 2 |              0.186   |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3723 | <5%                     |                10 |              0.03723 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3734 | >20%                    |                 5 |              0.07468 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3749 | >20%                    |                 5 |              0.07498 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3765 | >20%                    |                 5 |              0.0753  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3847 | >20%                    |                 2 |              0.19235 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3859 | >20%                    |                 2 |              0.19295 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3868 | 10-15%                  |                 2 |              0.1934  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3933 | >20%                    |                 2 |              0.19665 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3939 | >20%                    |                10 |              0.03939 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3956 | >20%                    |                 2 |              0.1978  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3961 | >20%                    |                 2 |              0.19805 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3982 | >20%                    |                 5 |              0.07964 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4042 | >20%                    |                 5 |              0.08084 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4046 | >20%                    |                 5 |              0.08092 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4049 | >20%                    |                 5 |              0.08098 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.405  | >20%                    |                10 |              0.0405  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4164 | <5%                     |                 2 |              0.2082  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4241 | >20%                    |                 5 |              0.08482 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4247 | >20%                    |                 2 |              0.21235 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4256 | <5%                     |                 2 |              0.2128  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4301 | 15-20%                  |                10 |              0.04301 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4303 | 10-15%                  |                 2 |              0.21515 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4484 | >20%                    |                10 |              0.04484 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4486 | >20%                    |                 2 |              0.2243  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4497 | >20%                    |                 5 |              0.08994 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4618 | >20%                    |                 5 |              0.09236 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4642 | <5%                     |                 2 |              0.2321  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4645 | >20%                    |                 2 |              0.23225 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.467  | >20%                    |                 5 |              0.0934  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4678 | >20%                    |                 5 |              0.09356 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.468  | <5%                     |                10 |              0.0468  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4686 | >20%                    |                 2 |              0.2343  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4688 | >20%                    |                 2 |              0.2344  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4704 | <5%                     |                 5 |              0.09408 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4766 | >20%                    |                 5 |              0.09532 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4807 | >20%                    |                10 |              0.04807 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4841 | >20%                    |                 2 |              0.24205 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4859 | 15-20%                  |                 2 |              0.24295 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.487  | >20%                    |                 5 |              0.0974  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.502  | >20%                    |                 2 |              0.251   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5026 | 15-20%                  |                 2 |              0.2513  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5105 | 15-20%                  |                 5 |              0.1021  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5154 | >20%                    |                 5 |              0.10308 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5157 | 15-20%                  |                10 |              0.05157 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5253 | 10-15%                  |                 5 |              0.10506 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.53   | >20%                    |                 5 |              0.106   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5372 | >20%                    |                 2 |              0.2686  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5529 | 15-20%                  |                 5 |              0.11058 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5538 | 5-10%                   |                 5 |              0.11076 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5683 | >20%                    |                 5 |              0.11366 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5708 | 15-20%                  |                 5 |              0.11416 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5742 | >20%                    |                 5 |              0.11484 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5786 | 15-20%                  |                 5 |              0.11572 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5811 | >20%                    |                 5 |              0.11622 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.6081 | >20%                    |                 2 |              0.30405 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.611  | >20%                    |                10 |              0.0611  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6163 | 15-20%                  |                10 |              0.06163 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.621  | >20%                    |                10 |              0.0621  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.624  | 10-15%                  |                 2 |              0.312   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6244 | 10-15%                  |                 5 |              0.12488 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6307 | 5-10%                   |                 5 |              0.12614 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6383 | >20%                    |                 2 |              0.31915 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6516 | 15-20%                  |                 5 |              0.13032 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6533 | >20%                    |                 2 |              0.32665 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6552 | >20%                    |                 2 |              0.3276  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6574 | >20%                    |                 2 |              0.3287  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6597 | >20%                    |                 5 |              0.13194 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6621 | >20%                    |                 5 |              0.13242 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6624 | >20%                    |                 5 |              0.13248 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6647 | 15-20%                  |                10 |              0.06647 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6734 | 5-10%                   |                 5 |              0.13468 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6795 | <5%                     |                 5 |              0.1359  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6849 | >20%                    |                 5 |              0.13698 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.6969 | 10-15%                  |                 5 |              0.13938 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6982 | >20%                    |                 2 |              0.3491  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7088 | 5-10%                   |                10 |              0.07088 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7145 | >20%                    |                10 |              0.07145 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7148 | >20%                    |                10 |              0.07148 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7239 | >20%                    |                10 |              0.07239 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7309 | 15-20%                  |                 2 |              0.36545 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7393 | <5%                     |                 2 |              0.36965 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7431 | <5%                     |                10 |              0.07431 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7467 | >20%                    |                 5 |              0.14934 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7587 | >20%                    |                10 |              0.07587 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7601 | >20%                    |                10 |              0.07601 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7714 | 15-20%                  |                10 |              0.07714 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7784 | 15-20%                  |                10 |              0.07784 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7786 | >20%                    |                10 |              0.07786 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7838 | >20%                    |                 5 |              0.15676 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7864 | >20%                    |                 2 |              0.3932  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7923 | >20%                    |                 2 |              0.39615 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8059 | >20%                    |                10 |              0.08059 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8129 | <5%                     |                10 |              0.08129 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8154 | 15-20%                  |                10 |              0.08154 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8354 | 15-20%                  |                 5 |              0.16708 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8359 | 15-20%                  |                10 |              0.08359 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.837  | >20%                    |                10 |              0.0837  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8445 | >20%                    |                 2 |              0.42225 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8451 | >20%                    |                 2 |              0.42255 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8498 | >20%                    |                10 |              0.08498 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8514 | 10-15%                  |                 5 |              0.17028 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8525 | <5%                     |                10 |              0.08525 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8526 | >20%                    |                 5 |              0.17052 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.856  | 15-20%                  |                10 |              0.0856  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8628 | >20%                    |                10 |              0.08628 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8935 | >20%                    |                10 |              0.08935 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8959 | >20%                    |                10 |              0.08959 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8982 | >20%                    |                10 |              0.08982 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8984 | 10-15%                  |                 5 |              0.17968 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8986 | >20%                    |                10 |              0.08986 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9078 | >20%                    |                10 |              0.09078 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.914  | >20%                    |                 5 |              0.1828  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9852 | >20%                    |                10 |              0.09852 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9883 | >20%                    |                 2 |              0.49415 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0185 | 15-20%                  |                10 |              0.10185 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0255 | 15-20%                  |                10 |              0.10255 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0453 | 10-15%                  |                10 |              0.10453 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0692 | >20%                    |                 5 |              0.21384 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0723 | >20%                    |                 5 |              0.21446 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0796 | >20%                    |                10 |              0.10796 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1346 | <5%                     |                10 |              0.11346 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1427 | >20%                    |                 2 |              0.57135 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1438 | 10-15%                  |                10 |              0.11438 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1567 | >20%                    |                10 |              0.11567 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1726 | >20%                    |                 5 |              0.23452 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1999 | 15-20%                  |                10 |              0.11999 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2115 | >20%                    |                 2 |              0.60575 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2633 | >20%                    |                10 |              0.12633 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2682 | >20%                    |                 5 |              0.25364 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2898 | >20%                    |                 5 |              0.25796 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2914 | >20%                    |                10 |              0.12914 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.335  | >20%                    |                10 |              0.1335  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3811 | >20%                    |                10 |              0.13811 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.3862 | >20%                    |                 5 |              0.27724 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.423  | 10-15%                  |                 5 |              0.2846  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4687 | >20%                    |                 2 |              0.73435 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4917 | >20%                    |                10 |              0.14917 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6684 | >20%                    |                10 |              0.16684 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.7264 | 10-15%                  |                10 |              0.17264 |