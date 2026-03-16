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

Data correct as of 2026-03-16 02:50:15.606701, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0907 | >20%                    |                 2 |              0.04535 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1407 | 10-15%                  |                 2 |              0.07035 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1757 | 15-20%                  |                 5 |              0.03514 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.178  | >20%                    |                 2 |              0.089   |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.1866 | <5%                     |                 2 |              0.0933  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1948 | >20%                    |                 5 |              0.03896 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2122 | 10-15%                  |                 2 |              0.1061  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2343 | >20%                    |                 2 |              0.11715 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2473 | >20%                    |                 2 |              0.12365 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2534 | 5-10%                   |                10 |              0.02534 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.26   | >20%                    |                 2 |              0.13    |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2629 | >20%                    |                 2 |              0.13145 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2695 | 15-20%                  |                10 |              0.02695 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2723 | >20%                    |                 2 |              0.13615 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2731 | >20%                    |                 5 |              0.05462 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2748 | >20%                    |                 2 |              0.1374  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2752 | 10-15%                  |                 2 |              0.1376  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.2768 | <5%                     |                 2 |              0.1384  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2841 | 15-20%                  |                 2 |              0.14205 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2843 | 5-10%                   |                 5 |              0.05686 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2882 | >20%                    |                 5 |              0.05764 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.291  | >20%                    |                 2 |              0.1455  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.294  | >20%                    |                 2 |              0.147   |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.2977 | >20%                    |                 2 |              0.14885 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3023 | 15-20%                  |                 2 |              0.15115 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3045 | 5-10%                   |                 2 |              0.15225 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3107 | >20%                    |                 2 |              0.15535 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3158 | >20%                    |                 5 |              0.06316 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3219 | <5%                     |                 2 |              0.16095 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3387 | 5-10%                   |                10 |              0.03387 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3462 | <5%                     |                 5 |              0.06924 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3483 | >20%                    |                 5 |              0.06966 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.3491 | >20%                    |                10 |              0.03491 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3508 | >20%                    |                10 |              0.03508 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3513 | >20%                    |                 2 |              0.17565 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3536 | 5-10%                   |                 5 |              0.07072 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.355  | 10-15%                  |                 2 |              0.1775  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3566 | <5%                     |                 5 |              0.07132 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3578 | 5-10%                   |                 5 |              0.07156 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3596 | <5%                     |                 5 |              0.07192 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3605 | >20%                    |                 5 |              0.0721  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3608 | 5-10%                   |                 2 |              0.1804  |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3685 |                         |                 5 |              0.0737  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.374  | >20%                    |                10 |              0.0374  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.374  | 5-10%                   |                 2 |              0.187   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3757 | >20%                    |                 5 |              0.07514 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3759 | 15-20%                  |                 2 |              0.18795 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3836 | 15-20%                  |                 5 |              0.07672 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3841 | >20%                    |                 5 |              0.07682 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3849 | >20%                    |                 2 |              0.19245 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3891 | 5-10%                   |                 2 |              0.19455 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3895 | >20%                    |                 5 |              0.0779  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3907 | <5%                     |                 5 |              0.07814 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.395  | 15-20%                  |                10 |              0.0395  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3968 | >20%                    |                10 |              0.03968 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3973 | 15-20%                  |                 2 |              0.19865 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.404  | >20%                    |                 2 |              0.202   |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4066 | 15-20%                  |                 5 |              0.08132 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4072 | >20%                    |                 5 |              0.08144 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.411  | 5-10%                   |                 2 |              0.2055  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.414  | >20%                    |                10 |              0.0414  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4268 | >20%                    |                 2 |              0.2134  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4354 | >20%                    |                 5 |              0.08708 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4358 | <5%                     |                10 |              0.04358 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.436  | 15-20%                  |                 2 |              0.218   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4369 | <5%                     |                 2 |              0.21845 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4385 | <5%                     |                 5 |              0.0877  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4396 | 15-20%                  |                 5 |              0.08792 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.442  | >20%                    |                 2 |              0.221   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4516 | >20%                    |                 2 |              0.2258  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4553 | 15-20%                  |                 2 |              0.22765 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4712 | >20%                    |                 5 |              0.09424 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4721 | >20%                    |                 5 |              0.09442 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4729 | <5%                     |                10 |              0.04729 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.474  | 5-10%                   |                 5 |              0.0948  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4746 | >20%                    |                 2 |              0.2373  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.48   | >20%                    |                 5 |              0.096   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.489  | >20%                    |                 2 |              0.2445  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4933 | 5-10%                   |                 2 |              0.24665 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4954 | 10-15%                  |                 5 |              0.09908 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4995 | >20%                    |                 2 |              0.24975 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4998 | >20%                    |                10 |              0.04998 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5002 | >20%                    |                 2 |              0.2501  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5003 | >20%                    |                 5 |              0.10006 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5065 | >20%                    |                 2 |              0.25325 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5159 | <5%                     |                10 |              0.05159 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5191 | 15-20%                  |                 5 |              0.10382 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5196 | 5-10%                   |                 2 |              0.2598  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.524  | >20%                    |                 5 |              0.1048  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5384 | >20%                    |                 5 |              0.10768 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.547  | >20%                    |                 5 |              0.1094  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5488 | >20%                    |                10 |              0.05488 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5531 | 15-20%                  |                10 |              0.05531 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.555  | >20%                    |                 2 |              0.2775  |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5555 |                         |                10 |              0.05555 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5603 | >20%                    |                 5 |              0.11206 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5786 | >20%                    |                10 |              0.05786 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5824 | >20%                    |                 5 |              0.11648 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5918 | 15-20%                  |                10 |              0.05918 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5926 | >20%                    |                 2 |              0.2963  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5937 | <5%                     |                10 |              0.05937 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6021 | <5%                     |                10 |              0.06021 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6021 | >20%                    |                 5 |              0.12042 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6025 | >20%                    |                10 |              0.06025 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6076 | >20%                    |                 5 |              0.12152 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.61   | 15-20%                  |                10 |              0.061   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6107 | 5-10%                   |                 2 |              0.30535 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6139 | 5-10%                   |                 2 |              0.30695 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6153 | 5-10%                   |                 5 |              0.12306 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6295 | >20%                    |                10 |              0.06295 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6302 | 15-20%                  |                10 |              0.06302 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6388 | >20%                    |                 5 |              0.12776 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6399 | >20%                    |                 2 |              0.31995 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6472 | >20%                    |                10 |              0.06472 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.649  | >20%                    |                 2 |              0.3245  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6598 | >20%                    |                10 |              0.06598 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6621 | >20%                    |                10 |              0.06621 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6656 | 5-10%                   |                 5 |              0.13312 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6705 | 15-20%                  |                 2 |              0.33525 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6725 | >20%                    |                 5 |              0.1345  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6844 | >20%                    |                 5 |              0.13688 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6858 | <5%                     |                 5 |              0.13716 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6875 | 10-15%                  |                 5 |              0.1375  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6929 | >20%                    |                 5 |              0.13858 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7074 | >20%                    |                10 |              0.07074 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7234 | >20%                    |                 5 |              0.14468 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7383 | 10-15%                  |                10 |              0.07383 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.741  | >20%                    |                10 |              0.0741  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7497 | 10-15%                  |                10 |              0.07497 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7529 | >20%                    |                10 |              0.07529 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7577 | >20%                    |                 5 |              0.15154 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7609 |                         |                 2 |              0.38045 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7688 | >20%                    |                 5 |              0.15376 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7912 | <5%                     |                 5 |              0.15824 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8015 | <5%                     |                10 |              0.08015 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8137 | <5%                     |                10 |              0.08137 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.818  | >20%                    |                 5 |              0.1636  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8238 | >20%                    |                 5 |              0.16476 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8243 | <5%                     |                 5 |              0.16486 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8286 | 5-10%                   |                10 |              0.08286 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8349 | >20%                    |                10 |              0.08349 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8405 | >20%                    |                 2 |              0.42025 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8516 | >20%                    |                10 |              0.08516 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8574 | >20%                    |                10 |              0.08574 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8968 | >20%                    |                 5 |              0.17936 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8998 | >20%                    |                 2 |              0.4499  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9013 | 5-10%                   |                10 |              0.09013 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9037 | <5%                     |                10 |              0.09037 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9099 | >20%                    |                10 |              0.09099 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9116 | >20%                    |                10 |              0.09116 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9164 | 10-15%                  |                 2 |              0.4582  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9223 | >20%                    |                 5 |              0.18446 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.925  | >20%                    |                10 |              0.0925  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9277 | >20%                    |                10 |              0.09277 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9288 | >20%                    |                10 |              0.09288 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.945  | >20%                    |                10 |              0.0945  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9554 | 15-20%                  |                10 |              0.09554 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9672 | >20%                    |                 2 |              0.4836  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9795 | 5-10%                   |                 5 |              0.1959  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0143 | >20%                    |                 2 |              0.50715 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      1.0159 | >20%                    |                 5 |              0.20318 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0281 | >20%                    |                10 |              0.10281 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0383 | >20%                    |                10 |              0.10383 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0397 | 5-10%                   |                10 |              0.10397 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1245 | 15-20%                  |                10 |              0.11245 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1557 | <5%                     |                10 |              0.11557 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1793 | 10-15%                  |                 5 |              0.23586 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2021 | >20%                    |                 2 |              0.60105 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2115 | >20%                    |                10 |              0.12115 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3508 | 10-15%                  |                10 |              0.13508 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.3766 | <5%                     |                 5 |              0.27532 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3933 | >20%                    |                 2 |              0.69665 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4337 | >20%                    |                 2 |              0.71685 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4542 | 15-20%                  |                10 |              0.14542 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5125 | 10-15%                  |                 5 |              0.3025  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.5161 | >20%                    |                 5 |              0.30322 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5229 | >20%                    |                10 |              0.15229 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5277 | >20%                    |                 5 |              0.30554 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.567  | >20%                    |                 2 |              0.7835  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5751 | >20%                    |                10 |              0.15751 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3463 | 10-15%                  |                10 |              0.23463 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.7784 | <5%                     |                10 |              0.27784 |