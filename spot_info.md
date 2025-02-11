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

Data correct as of 2025-02-11 01:37:19.203933, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1311 | >20%                    |                 2 |              0.06555 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1906 | <5%                     |                 5 |              0.03812 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.1958 | 5-10%                   |                 2 |              0.0979  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2175 | 5-10%                   |                 2 |              0.10875 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2205 | 15-20%                  |                 2 |              0.11025 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2312 | 15-20%                  |                 2 |              0.1156  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2336 | 15-20%                  |                 2 |              0.1168  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.235  | >20%                    |                 2 |              0.1175  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2371 | <5%                     |                 2 |              0.11855 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2458 | 5-10%                   |                 2 |              0.1229  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2536 | 10-15%                  |                 2 |              0.1268  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2569 | <5%                     |                 5 |              0.05138 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2606 | >20%                    |                 2 |              0.1303  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2773 | <5%                     |                 2 |              0.13865 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2901 | <5%                     |                 2 |              0.14505 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2928 | 5-10%                   |                 2 |              0.1464  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2933 | <5%                     |                 2 |              0.14665 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2971 | 10-15%                  |                 2 |              0.14855 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2974 | <5%                     |                 2 |              0.1487  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3006 | 5-10%                   |                 2 |              0.1503  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3071 | 10-15%                  |                 2 |              0.15355 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3132 | 10-15%                  |                 2 |              0.1566  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3289 | >20%                    |                 5 |              0.06578 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3313 | <5%                     |                 2 |              0.16565 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3373 | >20%                    |                 2 |              0.16865 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3391 | <5%                     |                 2 |              0.16955 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3394 | 15-20%                  |                 2 |              0.1697  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3428 | 15-20%                  |                 5 |              0.06856 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3437 | <5%                     |                10 |              0.03437 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3489 | 10-15%                  |                 5 |              0.06978 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3559 | 10-15%                  |                 2 |              0.17795 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3566 | <5%                     |                10 |              0.03566 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3611 | 10-15%                  |                 5 |              0.07222 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3626 | <5%                     |                 2 |              0.1813  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3651 | 10-15%                  |                 2 |              0.18255 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3661 | 10-15%                  |                 2 |              0.18305 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3758 | 10-15%                  |                10 |              0.03758 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.378  | <5%                     |                 5 |              0.0756  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.379  | 5-10%                   |                 2 |              0.1895  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3842 | <5%                     |                 2 |              0.1921  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3958 | 5-10%                   |                 5 |              0.07916 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4018 | >20%                    |                 2 |              0.2009  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4031 | 5-10%                   |                 5 |              0.08062 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4045 | 10-15%                  |                 2 |              0.20225 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4045 | 5-10%                   |                 2 |              0.20225 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4054 | <5%                     |                 5 |              0.08108 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4177 | >20%                    |                 5 |              0.08354 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4266 | <5%                     |                 2 |              0.2133  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4314 | >20%                    |                 5 |              0.08628 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4479 | >20%                    |                 5 |              0.08958 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4553 | >20%                    |                 5 |              0.09106 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4555 | <5%                     |                 2 |              0.22775 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4622 | >20%                    |                 5 |              0.09244 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4739 | <5%                     |                 5 |              0.09478 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4816 | >20%                    |                 2 |              0.2408  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.483  | <5%                     |                 2 |              0.2415  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4836 | <5%                     |                 5 |              0.09672 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.485  | 5-10%                   |                 5 |              0.097   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4905 | >20%                    |                 2 |              0.24525 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.493  | >20%                    |                 5 |              0.0986  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4957 | 10-15%                  |                 5 |              0.09914 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4975 | >20%                    |                 5 |              0.0995  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4978 | 15-20%                  |                10 |              0.04978 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5004 | >20%                    |                10 |              0.05004 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5031 | <5%                     |                 5 |              0.10062 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.506  | 10-15%                  |                 5 |              0.1012  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5093 | <5%                     |                 5 |              0.10186 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5131 | >20%                    |                 2 |              0.25655 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5139 | 15-20%                  |                 2 |              0.25695 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5152 | >20%                    |                 2 |              0.2576  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5213 | 15-20%                  |                 5 |              0.10426 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5217 | >20%                    |                 2 |              0.26085 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5227 | <5%                     |                 2 |              0.26135 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.529  | >20%                    |                 2 |              0.2645  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5365 | 5-10%                   |                10 |              0.05365 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5384 | 10-15%                  |                 5 |              0.10768 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5392 | >20%                    |                 5 |              0.10784 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5452 | <5%                     |                 5 |              0.10904 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5567 | >20%                    |                 5 |              0.11134 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5586 | >20%                    |                 2 |              0.2793  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5644 | 10-15%                  |                 2 |              0.2822  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.566  | <5%                     |                 5 |              0.1132  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5673 | 10-15%                  |                 5 |              0.11346 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.572  | 5-10%                   |                 5 |              0.1144  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5731 | >20%                    |                 2 |              0.28655 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.574  | 5-10%                   |                10 |              0.0574  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.584  | 5-10%                   |                 5 |              0.1168  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5863 | >20%                    |                10 |              0.05863 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.597  | >20%                    |                10 |              0.0597  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.599  | 5-10%                   |                 5 |              0.1198  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.6063 | >20%                    |                 2 |              0.30315 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6182 | 5-10%                   |                10 |              0.06182 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6187 | >20%                    |                 2 |              0.30935 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6257 | 5-10%                   |                 5 |              0.12514 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6267 | <5%                     |                10 |              0.06267 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6278 | >20%                    |                 5 |              0.12556 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6524 | 10-15%                  |                 5 |              0.13048 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6545 | <5%                     |                 5 |              0.1309  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.656  | 15-20%                  |                 5 |              0.1312  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6673 | <5%                     |                10 |              0.06673 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6761 | 15-20%                  |                 5 |              0.13522 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6761 | >20%                    |                 5 |              0.13522 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6815 | >20%                    |                10 |              0.06815 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6875 | >20%                    |                10 |              0.06875 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6886 | 15-20%                  |                 5 |              0.13772 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6955 | >20%                    |                10 |              0.06955 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6968 | >20%                    |                 5 |              0.13936 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.698  | >20%                    |                 2 |              0.349   |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7226 | <5%                     |                10 |              0.07226 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.725  | 5-10%                   |                10 |              0.0725  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7252 | >20%                    |                 5 |              0.14504 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7499 | >20%                    |                 5 |              0.14998 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7538 | >20%                    |                 5 |              0.15076 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7553 | <5%                     |                 5 |              0.15106 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7685 | 15-20%                  |                10 |              0.07685 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7725 | >20%                    |                 5 |              0.1545  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7774 | 15-20%                  |                10 |              0.07774 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7895 | >20%                    |                10 |              0.07895 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8025 | 10-15%                  |                10 |              0.08025 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.8135 | <5%                     |                 5 |              0.1627  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8138 | >20%                    |                10 |              0.08138 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.816  | 15-20%                  |                10 |              0.0816  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8199 | 15-20%                  |                10 |              0.08199 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8235 | <5%                     |                 2 |              0.41175 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8237 | <5%                     |                10 |              0.08237 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8278 | 10-15%                  |                 2 |              0.4139  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8291 | >20%                    |                10 |              0.08291 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8477 | 5-10%                   |                10 |              0.08477 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8534 | 15-20%                  |                10 |              0.08534 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8565 | <5%                     |                10 |              0.08565 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8662 | <5%                     |                10 |              0.08662 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8667 | 10-15%                  |                10 |              0.08667 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.867  | 10-15%                  |                10 |              0.0867  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8701 | >20%                    |                10 |              0.08701 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8732 | 15-20%                  |                 5 |              0.17464 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8874 | <5%                     |                10 |              0.08874 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.892  | 10-15%                  |                10 |              0.0892  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8941 | >20%                    |                 2 |              0.44705 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9003 | 15-20%                  |                 5 |              0.18006 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9022 | <5%                     |                10 |              0.09022 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9119 | <5%                     |                10 |              0.09119 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9135 | <5%                     |                10 |              0.09135 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9239 | 10-15%                  |                10 |              0.09239 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9511 | >20%                    |                10 |              0.09511 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9846 | >20%                    |                10 |              0.09846 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0363 | <5%                     |                10 |              0.10363 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0505 | >20%                    |                10 |              0.10505 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0667 | >20%                    |                 2 |              0.53335 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0779 | >20%                    |                 5 |              0.21558 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0964 | >20%                    |                 2 |              0.5482  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0986 | 15-20%                  |                10 |              0.10986 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1234 | 5-10%                   |                10 |              0.11234 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1295 | >20%                    |                10 |              0.11295 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1399 | 15-20%                  |                 5 |              0.22798 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2021 | 15-20%                  |                10 |              0.12021 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2143 | 15-20%                  |                 2 |              0.60715 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2665 | 10-15%                  |                 5 |              0.2533  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2719 | >20%                    |                10 |              0.12719 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2969 | 5-10%                   |                10 |              0.12969 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3045 | 15-20%                  |                10 |              0.13045 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.349  | 15-20%                  |                10 |              0.1349  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3881 | >20%                    |                10 |              0.13881 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5055 | 15-20%                  |                10 |              0.15055 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0538 | 5-10%                   |                10 |              0.20538 |