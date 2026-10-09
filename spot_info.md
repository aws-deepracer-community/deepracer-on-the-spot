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

Data correct as of 2026-10-09 05:24:14.596018, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1238 | >20%                    |                 2 |              0.0619  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1521 | >20%                    |                 2 |              0.07605 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1791 | 15-20%                  |                 5 |              0.03582 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1901 | >20%                    |                 2 |              0.09505 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2004 | 15-20%                  |                 2 |              0.1002  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2156 | 15-20%                  |                 5 |              0.04312 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2408 | >20%                    |                 2 |              0.1204  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2633 | >20%                    |                 5 |              0.05266 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2766 | >20%                    |                 2 |              0.1383  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.278  | 10-15%                  |                 2 |              0.139   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2781 | >20%                    |                 2 |              0.13905 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2821 | >20%                    |                 2 |              0.14105 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2822 | >20%                    |                 2 |              0.1411  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2961 | 5-10%                   |                10 |              0.02961 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3026 | >20%                    |                 2 |              0.1513  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3055 | >20%                    |                 5 |              0.0611  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3105 | 15-20%                  |                 2 |              0.15525 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3304 | >20%                    |                 2 |              0.1652  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3378 | >20%                    |                 5 |              0.06756 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3546 | 10-15%                  |                 2 |              0.1773  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.368  | 5-10%                   |                10 |              0.0368  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3703 | 15-20%                  |                 2 |              0.18515 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3742 | 15-20%                  |                 2 |              0.1871  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3757 | >20%                    |                10 |              0.03757 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3765 | >20%                    |                 5 |              0.0753  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3797 | >20%                    |                 2 |              0.18985 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3823 | >20%                    |                 2 |              0.19115 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3873 | >20%                    |                 2 |              0.19365 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3874 | <5%                     |                 2 |              0.1937  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3876 | >20%                    |                 5 |              0.07752 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3964 | >20%                    |                 2 |              0.1982  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4053 | >20%                    |                 5 |              0.08106 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4056 | >20%                    |                 5 |              0.08112 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4077 | >20%                    |                10 |              0.04077 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4229 | >20%                    |                 2 |              0.21145 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4243 | >20%                    |                 5 |              0.08486 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.4334 | >20%                    |                 5 |              0.08668 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4391 | >20%                    |                 2 |              0.21955 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4413 | >20%                    |                 5 |              0.08826 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4502 | >20%                    |                 5 |              0.09004 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4539 | >20%                    |                 2 |              0.22695 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4634 | >20%                    |                 2 |              0.2317  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4657 | >20%                    |                 5 |              0.09314 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4665 | >20%                    |                10 |              0.04665 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4718 | 10-15%                  |                 2 |              0.2359  |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4827 |                         |                 2 |              0.24135 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.486  | >20%                    |                 2 |              0.243   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.491  | >20%                    |                 2 |              0.2455  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5039 | >20%                    |                 5 |              0.10078 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5089 | >20%                    |                 5 |              0.10178 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5219 | >20%                    |                 5 |              0.10438 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.528  | <5%                     |                 2 |              0.264   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5281 | >20%                    |                 5 |              0.10562 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5516 | >20%                    |                 2 |              0.2758  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5718 | 10-15%                  |                 5 |              0.11436 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5728 | 15-20%                  |                 2 |              0.2864  |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.5733 |                         |                10 |              0.05733 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5745 | >20%                    |                 5 |              0.1149  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5971 | >20%                    |                 5 |              0.11942 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6129 | >20%                    |                10 |              0.06129 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6188 | >20%                    |                 5 |              0.12376 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.619  | 10-15%                  |                 2 |              0.3095  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.627  | >20%                    |                10 |              0.0627  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6345 | >20%                    |                 5 |              0.1269  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6355 | >20%                    |                 2 |              0.31775 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6367 | 5-10%                   |                10 |              0.06367 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6411 | >20%                    |                 5 |              0.12822 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.65   | >20%                    |                 2 |              0.325   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6715 | >20%                    |                 5 |              0.1343  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6784 | 5-10%                   |                 2 |              0.3392  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6791 | <5%                     |                 2 |              0.33955 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6823 | 15-20%                  |                 2 |              0.34115 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6855 | >20%                    |                 5 |              0.1371  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6866 | >20%                    |                 5 |              0.13732 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6924 | >20%                    |                10 |              0.06924 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7022 | >20%                    |                 5 |              0.14044 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7033 | >20%                    |                 5 |              0.14066 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7065 | >20%                    |                 5 |              0.1413  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.719  | 15-20%                  |                10 |              0.0719  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7201 | >20%                    |                10 |              0.07201 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7342 | 15-20%                  |                 5 |              0.14684 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7362 | 5-10%                   |                 5 |              0.14724 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7402 | >20%                    |                10 |              0.07402 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7426 | >20%                    |                 5 |              0.14852 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.7449 |                         |                 5 |              0.14898 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7497 | >20%                    |                10 |              0.07497 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7518 | >20%                    |                 2 |              0.3759  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7586 | >20%                    |                 5 |              0.15172 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7602 | 15-20%                  |                10 |              0.07602 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7667 | >20%                    |                 2 |              0.38335 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7843 | >20%                    |                 5 |              0.15686 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7872 | 15-20%                  |                10 |              0.07872 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8225 | 5-10%                   |                10 |              0.08225 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8279 | 15-20%                  |                10 |              0.08279 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8361 | >20%                    |                10 |              0.08361 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8407 | 15-20%                  |                 5 |              0.16814 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8455 | >20%                    |                10 |              0.08455 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8476 | >20%                    |                 2 |              0.4238  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8595 | >20%                    |                10 |              0.08595 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8619 | 10-15%                  |                 2 |              0.43095 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.867  | >20%                    |                10 |              0.0867  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8767 | 10-15%                  |                10 |              0.08767 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8791 | >20%                    |                10 |              0.08791 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8875 | >20%                    |                10 |              0.08875 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8928 | >20%                    |                 5 |              0.17856 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8975 | >20%                    |                 5 |              0.1795  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8993 | >20%                    |                 5 |              0.17986 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9057 | <5%                     |                 5 |              0.18114 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9163 | >20%                    |                 5 |              0.18326 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9228 | >20%                    |                 2 |              0.4614  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9591 | >20%                    |                10 |              0.09591 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9664 | >20%                    |                10 |              0.09664 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9834 | >20%                    |                10 |              0.09834 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9867 | 15-20%                  |                10 |              0.09867 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9899 | >20%                    |                 5 |              0.19798 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9992 | >20%                    |                10 |              0.09992 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0008 | 10-15%                  |                 2 |              0.5004  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0291 | >20%                    |                10 |              0.10291 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0313 | >20%                    |                10 |              0.10313 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0507 | >20%                    |                10 |              0.10507 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.057  | >20%                    |                10 |              0.1057  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0586 | 15-20%                  |                10 |              0.10586 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1177 | 5-10%                   |                10 |              0.11177 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1646 | >20%                    |                 5 |              0.23292 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1871 | >20%                    |                10 |              0.11871 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2077 | >20%                    |                10 |              0.12077 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2302 | 5-10%                   |                 2 |              0.6151  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.2323 |                         |                 2 |              0.61615 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3192 | >20%                    |                 2 |              0.6596  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3288 | >20%                    |                 2 |              0.6644  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3336 | 10-15%                  |                 2 |              0.6668  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3566 | >20%                    |                10 |              0.13566 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3665 | 15-20%                  |                10 |              0.13665 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3813 | 10-15%                  |                10 |              0.13813 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4039 | 15-20%                  |                10 |              0.14039 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4494 | >20%                    |                10 |              0.14494 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5277 | 5-10%                   |                 5 |              0.30554 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.549  | >20%                    |                 2 |              0.7745  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5879 | >20%                    |                 5 |              0.31758 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.5992 | 5-10%                   |                 2 |              0.7996  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6154 | >20%                    |                10 |              0.16154 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6219 |                         |                10 |              0.16219 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.6346 |                         |                 2 |              0.8173  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7062 | >20%                    |                10 |              0.17062 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.7108 |                         |                 5 |              0.34216 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7263 | >20%                    |                 5 |              0.34526 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.9528 |                         |                 5 |              0.39056 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9567 | >20%                    |                10 |              0.19567 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0741 | 15-20%                  |                 5 |              0.41482 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.1077 | >20%                    |                 5 |              0.42154 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.1661 |                         |                10 |              0.21661 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2085 | 5-10%                   |                 2 |              1.10425 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.251  | 5-10%                   |                10 |              0.2251  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5668 | >20%                    |                10 |              0.25668 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.127  | >20%                    |                10 |              0.3127  |