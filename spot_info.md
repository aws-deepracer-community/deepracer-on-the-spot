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

Data correct as of 2026-04-25 02:50:51.989979, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1597 | >20%                    |                 2 |              0.07985 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1644 | 15-20%                  |                 2 |              0.0822  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1815 | >20%                    |                 2 |              0.09075 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2258 | >20%                    |                 2 |              0.1129  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2399 | 5-10%                   |                10 |              0.02399 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2402 | 15-20%                  |                 5 |              0.04804 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2422 | >20%                    |                 2 |              0.1211  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2574 | >20%                    |                 2 |              0.1287  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2609 | 10-15%                  |                 2 |              0.13045 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.267  | 15-20%                  |                 2 |              0.1335  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.269  | >20%                    |                 2 |              0.1345  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2776 | 15-20%                  |                 5 |              0.05552 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2797 | >20%                    |                 5 |              0.05594 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2847 | 15-20%                  |                 2 |              0.14235 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2974 | 15-20%                  |                 5 |              0.05948 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3023 | >20%                    |                 2 |              0.15115 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3155 | >20%                    |                10 |              0.03155 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3189 | >20%                    |                 2 |              0.15945 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3193 | >20%                    |                 5 |              0.06386 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3219 | 10-15%                  |                 2 |              0.16095 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3271 | 10-15%                  |                 2 |              0.16355 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3359 | >20%                    |                10 |              0.03359 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3367 | <5%                     |                 2 |              0.16835 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3409 | >20%                    |                 5 |              0.06818 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3411 | >20%                    |                 2 |              0.17055 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3554 | >20%                    |                 2 |              0.1777  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3573 | >20%                    |                 5 |              0.07146 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3615 | 10-15%                  |                 2 |              0.18075 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3717 | >20%                    |                 2 |              0.18585 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3762 | 5-10%                   |                10 |              0.03762 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3776 | >20%                    |                 5 |              0.07552 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3792 | >20%                    |                 5 |              0.07584 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3801 | >20%                    |                 5 |              0.07602 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3936 | >20%                    |                 5 |              0.07872 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3956 | >20%                    |                 2 |              0.1978  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.396  | >20%                    |                 5 |              0.0792  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3991 | >20%                    |                 5 |              0.07982 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4016 | >20%                    |                 2 |              0.2008  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.403  | <5%                     |                 2 |              0.2015  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4058 | 5-10%                   |                10 |              0.04058 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4225 | >20%                    |                 5 |              0.0845  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4237 | >20%                    |                 5 |              0.08474 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4302 | >20%                    |                 5 |              0.08604 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4324 | <5%                     |                 2 |              0.2162  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4361 | >20%                    |                 2 |              0.21805 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4364 | >20%                    |                 2 |              0.2182  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4381 | >20%                    |                 2 |              0.21905 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4431 | >20%                    |                 5 |              0.08862 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4434 | >20%                    |                 5 |              0.08868 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4441 | >20%                    |                 5 |              0.08882 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4491 | >20%                    |                 2 |              0.22455 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4588 | >20%                    |                10 |              0.04588 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.46   | 15-20%                  |                 2 |              0.23    |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.464  | 15-20%                  |                 2 |              0.232   |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4649 | >20%                    |                 2 |              0.23245 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4673 | 5-10%                   |                 2 |              0.23365 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4683 | >20%                    |                 2 |              0.23415 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4787 | >20%                    |                 5 |              0.09574 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4798 | >20%                    |                 5 |              0.09596 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4833 | >20%                    |                 5 |              0.09666 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4838 | >20%                    |                 5 |              0.09676 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4839 | >20%                    |                 2 |              0.24195 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4999 | 10-15%                  |                 2 |              0.24995 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5014 | >20%                    |                10 |              0.05014 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5031 | >20%                    |                 2 |              0.25155 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5133 | >20%                    |                 5 |              0.10266 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.52   | >20%                    |                10 |              0.052   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5312 | 5-10%                   |                 5 |              0.10624 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5401 | 15-20%                  |                 5 |              0.10802 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5547 | >20%                    |                 5 |              0.11094 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5566 | <5%                     |                 5 |              0.11132 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5581 | 5-10%                   |                 2 |              0.27905 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5611 | 10-15%                  |                 5 |              0.11222 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.571  | >20%                    |                 5 |              0.1142  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5763 | 5-10%                   |                 5 |              0.11526 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5888 | 15-20%                  |                 2 |              0.2944  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5895 | >20%                    |                10 |              0.05895 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5913 | >20%                    |                 2 |              0.29565 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6097 | >20%                    |                 2 |              0.30485 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6142 | >20%                    |                 2 |              0.3071  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.62   | >20%                    |                10 |              0.062   |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6225 | >20%                    |                10 |              0.06225 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6308 | >20%                    |                 5 |              0.12616 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6361 | 10-15%                  |                 2 |              0.31805 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6394 | >20%                    |                 2 |              0.3197  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6404 | >20%                    |                 5 |              0.12808 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6554 | >20%                    |                 2 |              0.3277  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6566 | >20%                    |                 5 |              0.13132 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6695 | >20%                    |                10 |              0.06695 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.6748 | >20%                    |                10 |              0.06748 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6861 | >20%                    |                10 |              0.06861 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6956 | >20%                    |                 5 |              0.13912 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7    | 5-10%                   |                10 |              0.07    |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7119 | >20%                    |                10 |              0.07119 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7139 | >20%                    |                 5 |              0.14278 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7278 | >20%                    |                 5 |              0.14556 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7362 | >20%                    |                 5 |              0.14724 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7455 | 15-20%                  |                10 |              0.07455 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7485 | >20%                    |                10 |              0.07485 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.758  | >20%                    |                 5 |              0.1516  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7582 | 15-20%                  |                10 |              0.07582 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7602 | >20%                    |                10 |              0.07602 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7748 | >20%                    |                 2 |              0.3874  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7844 | >20%                    |                10 |              0.07844 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7912 | >20%                    |                10 |              0.07912 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7927 | >20%                    |                 5 |              0.15854 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7934 | >20%                    |                 5 |              0.15868 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7995 | 5-10%                   |                10 |              0.07995 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8045 | >20%                    |                10 |              0.08045 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8174 | >20%                    |                10 |              0.08174 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8183 | >20%                    |                 5 |              0.16366 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8221 | 15-20%                  |                10 |              0.08221 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8532 | >20%                    |                 2 |              0.4266  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8794 | >20%                    |                10 |              0.08794 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9052 | >20%                    |                 5 |              0.18104 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9127 | >20%                    |                 5 |              0.18254 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9184 | 10-15%                  |                10 |              0.09184 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9235 | >20%                    |                10 |              0.09235 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9404 | >20%                    |                10 |              0.09404 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9524 | >20%                    |                 5 |              0.19048 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9669 | >20%                    |                10 |              0.09669 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9697 | >20%                    |                10 |              0.09697 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9784 | 15-20%                  |                10 |              0.09784 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9831 | >20%                    |                10 |              0.09831 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0128 | 5-10%                   |                10 |              0.10128 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0178 | >20%                    |                10 |              0.10178 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0418 | >20%                    |                 5 |              0.20836 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0438 | 15-20%                  |                10 |              0.10438 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.0547 |                         |                 2 |              0.52735 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0769 | 15-20%                  |                10 |              0.10769 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.086  | 10-15%                  |                10 |              0.1086  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0921 | >20%                    |                10 |              0.10921 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0934 | >20%                    |                10 |              0.10934 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1161 | >20%                    |                 2 |              0.55805 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1329 | 5-10%                   |                 2 |              0.56645 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1853 |                         |                 5 |              0.23706 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1857 | >20%                    |                10 |              0.11857 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1905 | 10-15%                  |                 2 |              0.59525 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1928 | >20%                    |                 5 |              0.23856 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2714 | 15-20%                  |                10 |              0.12714 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2952 | >20%                    |                10 |              0.12952 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3397 | >20%                    |                 5 |              0.26794 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3604 | 5-10%                   |                 2 |              0.6802  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3898 | >20%                    |                 5 |              0.27796 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.419  | >20%                    |                10 |              0.1419  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4704 | 15-20%                  |                10 |              0.14704 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5885 | 15-20%                  |                 5 |              0.3177  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.6032 | >20%                    |                10 |              0.16032 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6769 |                         |                10 |              0.16769 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.6655 | >20%                    |                10 |              0.26655 |