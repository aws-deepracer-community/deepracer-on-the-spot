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

Data correct as of 2025-11-28 01:51:26.673023, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1429 | >20%                    |                 2 |              0.07145 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.144  | 15-20%                  |                 2 |              0.072   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1467 | >20%                    |                 2 |              0.07335 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1781 | <5%                     |                 2 |              0.08905 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1973 | <5%                     |                 2 |              0.09865 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2076 | 10-15%                  |                 2 |              0.1038  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2112 | >20%                    |                 2 |              0.1056  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2219 | >20%                    |                 2 |              0.11095 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2276 | >20%                    |                 2 |              0.1138  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2357 | >20%                    |                10 |              0.02357 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2391 | >20%                    |                 2 |              0.11955 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2538 | >20%                    |                 2 |              0.1269  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2583 | 15-20%                  |                 2 |              0.12915 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.259  | >20%                    |                 2 |              0.1295  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.262  | 10-15%                  |                 5 |              0.0524  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2676 | >20%                    |                 5 |              0.05352 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2714 | 5-10%                   |                 5 |              0.05428 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2715 | <5%                     |                 2 |              0.13575 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2727 | >20%                    |                 2 |              0.13635 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2768 | >20%                    |                 5 |              0.05536 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2827 | 5-10%                   |                 2 |              0.14135 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2881 | 10-15%                  |                 2 |              0.14405 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2911 | >20%                    |                 2 |              0.14555 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2995 | >20%                    |                 5 |              0.0599  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.301  | 10-15%                  |                10 |              0.0301  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3296 | 10-15%                  |                10 |              0.03296 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3303 | <5%                     |                 5 |              0.06606 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.332  | >20%                    |                 5 |              0.0664  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3359 | <5%                     |                 2 |              0.16795 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3428 | >20%                    |                 2 |              0.1714  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3475 | 5-10%                   |                10 |              0.03475 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3487 | >20%                    |                 5 |              0.06974 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3494 | >20%                    |                 2 |              0.1747  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.35   | 5-10%                   |                 2 |              0.175   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3508 | 10-15%                  |                 2 |              0.1754  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3616 | >20%                    |                10 |              0.03616 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3624 | >20%                    |                 5 |              0.07248 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3642 | >20%                    |                 2 |              0.1821  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3698 | 10-15%                  |                 2 |              0.1849  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3707 | >20%                    |                 2 |              0.18535 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3811 | 15-20%                  |                 5 |              0.07622 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3854 | >20%                    |                 5 |              0.07708 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.386  | >20%                    |                 2 |              0.193   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3873 | 15-20%                  |                 2 |              0.19365 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3881 | >20%                    |                10 |              0.03881 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3907 | 15-20%                  |                 2 |              0.19535 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.394  | >20%                    |                 2 |              0.197   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3943 | >20%                    |                 2 |              0.19715 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.395  | <5%                     |                 2 |              0.1975  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3956 | >20%                    |                 5 |              0.07912 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3973 | 15-20%                  |                 5 |              0.07946 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4011 | >20%                    |                 5 |              0.08022 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4035 | 10-15%                  |                 5 |              0.0807  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4039 | >20%                    |                 2 |              0.20195 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4066 | >20%                    |                 2 |              0.2033  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4082 | 10-15%                  |                10 |              0.04082 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4172 | >20%                    |                 2 |              0.2086  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4233 | 15-20%                  |                 2 |              0.21165 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.427  | >20%                    |                 5 |              0.0854  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4355 | >20%                    |                 2 |              0.21775 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4395 | 5-10%                   |                 2 |              0.21975 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4426 | 15-20%                  |                 5 |              0.08852 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4452 | >20%                    |                 2 |              0.2226  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4458 | >20%                    |                 2 |              0.2229  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4555 | 10-15%                  |                 5 |              0.0911  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4586 | >20%                    |                 5 |              0.09172 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4616 | >20%                    |                10 |              0.04616 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4617 | <5%                     |                 2 |              0.23085 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4668 | >20%                    |                 5 |              0.09336 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4698 | >20%                    |                10 |              0.04698 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4743 | >20%                    |                 2 |              0.23715 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4788 | 15-20%                  |                10 |              0.04788 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4799 | >20%                    |                 5 |              0.09598 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4812 | >20%                    |                 2 |              0.2406  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.482  | >20%                    |                 5 |              0.0964  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4821 | 10-15%                  |                 2 |              0.24105 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4873 | 15-20%                  |                 5 |              0.09746 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4877 | 10-15%                  |                 5 |              0.09754 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.488  | >20%                    |                 2 |              0.244   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4972 | 10-15%                  |                 2 |              0.2486  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5002 | 15-20%                  |                 5 |              0.10004 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.502  | >20%                    |                 5 |              0.1004  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5026 | 10-15%                  |                 2 |              0.2513  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5128 | >20%                    |                 5 |              0.10256 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5182 | 10-15%                  |                 5 |              0.10364 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5216 | >20%                    |                 5 |              0.10432 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5236 | >20%                    |                 5 |              0.10472 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5478 | >20%                    |                 5 |              0.10956 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5491 | 15-20%                  |                 5 |              0.10982 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5633 | >20%                    |                 5 |              0.11266 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5637 | <5%                     |                10 |              0.05637 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5654 | 5-10%                   |                10 |              0.05654 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.57   | >20%                    |                 5 |              0.114   |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.582  | 15-20%                  |                 5 |              0.1164  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5833 | 10-15%                  |                 5 |              0.11666 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.587  | >20%                    |                 2 |              0.2935  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5872 | 15-20%                  |                10 |              0.05872 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5888 | >20%                    |                 2 |              0.2944  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5915 | 15-20%                  |                 5 |              0.1183  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.605  | 10-15%                  |                 5 |              0.121   |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6062 | 10-15%                  |                 5 |              0.12124 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6081 | 15-20%                  |                 5 |              0.12162 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6082 | <5%                     |                10 |              0.06082 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6104 | >20%                    |                10 |              0.06104 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6111 | >20%                    |                 2 |              0.30555 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6111 | >20%                    |                 2 |              0.30555 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6121 | >20%                    |                 5 |              0.12242 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6283 | 5-10%                   |                 5 |              0.12566 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6336 | >20%                    |                 5 |              0.12672 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6355 | >20%                    |                 5 |              0.1271  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6448 | 10-15%                  |                 5 |              0.12896 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6495 | >20%                    |                 5 |              0.1299  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6495 | >20%                    |                 5 |              0.1299  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6514 | >20%                    |                 2 |              0.3257  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6558 | >20%                    |                10 |              0.06558 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6715 | >20%                    |                10 |              0.06715 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.674  | 5-10%                   |                 2 |              0.337   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6859 | >20%                    |                 2 |              0.34295 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6889 | 15-20%                  |                10 |              0.06889 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6914 | 5-10%                   |                10 |              0.06914 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7172 | >20%                    |                10 |              0.07172 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7224 | >20%                    |                 5 |              0.14448 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7224 | >20%                    |                10 |              0.07224 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7327 | >20%                    |                10 |              0.07327 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7427 | <5%                     |                10 |              0.07427 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.744  | 10-15%                  |                10 |              0.0744  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7541 | 15-20%                  |                10 |              0.07541 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7563 | >20%                    |                10 |              0.07563 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7573 | >20%                    |                10 |              0.07573 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7592 | >20%                    |                10 |              0.07592 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7606 | >20%                    |                 2 |              0.3803  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7771 | >20%                    |                10 |              0.07771 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7777 | 10-15%                  |                10 |              0.07777 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7787 | >20%                    |                10 |              0.07787 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7791 | >20%                    |                10 |              0.07791 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.792  | <5%                     |                 5 |              0.1584  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7936 | >20%                    |                 5 |              0.15872 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7956 | >20%                    |                 5 |              0.15912 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8218 | >20%                    |                10 |              0.08218 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8248 | 10-15%                  |                 2 |              0.4124  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8272 | 15-20%                  |                 5 |              0.16544 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8283 | >20%                    |                 5 |              0.16566 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8371 | >20%                    |                10 |              0.08371 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8622 | 10-15%                  |                10 |              0.08622 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8668 | >20%                    |                 5 |              0.17336 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8692 | >20%                    |                 5 |              0.17384 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8962 | 10-15%                  |                10 |              0.08962 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9058 | >20%                    |                 2 |              0.4529  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9061 | >20%                    |                 5 |              0.18122 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9089 | 5-10%                   |                10 |              0.09089 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9128 | 15-20%                  |                10 |              0.09128 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9144 | >20%                    |                10 |              0.09144 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9185 | >20%                    |                10 |              0.09185 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.934  | 10-15%                  |                10 |              0.0934  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9358 | >20%                    |                10 |              0.09358 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9442 | 15-20%                  |                10 |              0.09442 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9728 | >20%                    |                 2 |              0.4864  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9765 | <5%                     |                10 |              0.09765 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9853 | >20%                    |                 5 |              0.19706 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0251 | >20%                    |                10 |              0.10251 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0316 | >20%                    |                10 |              0.10316 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0325 | >20%                    |                 2 |              0.51625 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.0514 | >20%                    |                10 |              0.10514 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0518 | >20%                    |                10 |              0.10518 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0656 | 15-20%                  |                10 |              0.10656 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0742 | <5%                     |                 5 |              0.21484 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.093  | >20%                    |                10 |              0.1093  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.1294 | <5%                     |                 2 |              0.5647  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1298 | 15-20%                  |                10 |              0.11298 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1758 | >20%                    |                10 |              0.11758 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2322 | >20%                    |                 5 |              0.24644 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2978 | >20%                    |                 2 |              0.6489  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3414 | >20%                    |                 2 |              0.6707  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3425 | 10-15%                  |                10 |              0.13425 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3488 | >20%                    |                 5 |              0.26976 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3614 | >20%                    |                10 |              0.13614 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4117 | >20%                    |                10 |              0.14117 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5213 | 5-10%                   |                 5 |              0.30426 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6157 | >20%                    |                10 |              0.16157 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9206 | 15-20%                  |                10 |              0.19206 |