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

Data correct as of 2024-12-02 01:47:56.384351, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1445 | >20%                    |                 5 |              0.0289  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2055 | 10-15%                  |                 2 |              0.10275 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2185 | >20%                    |                 5 |              0.0437  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.22   | 5-10%                   |                 2 |              0.11    |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2245 | 5-10%                   |                 2 |              0.11225 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2277 | 15-20%                  |                 2 |              0.11385 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2401 | <5%                     |                 2 |              0.12005 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.243  | <5%                     |                 2 |              0.1215  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2484 | 5-10%                   |                 2 |              0.1242  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2538 | 15-20%                  |                 5 |              0.05076 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.262  | >20%                    |                 5 |              0.0524  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | >20%                    |                 5 |              0.0552  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2761 | 10-15%                  |                 2 |              0.13805 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.282  | 5-10%                   |                 2 |              0.141   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2843 | <5%                     |                 2 |              0.14215 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.29   | 10-15%                  |                 2 |              0.145   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2925 | >20%                    |                 2 |              0.14625 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2973 | <5%                     |                10 |              0.02973 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3168 | 5-10%                   |                 2 |              0.1584  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3208 | <5%                     |                 5 |              0.06416 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3218 | <5%                     |                 2 |              0.1609  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3347 | >20%                    |                 2 |              0.16735 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3352 | <5%                     |                 2 |              0.1676  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3353 | 5-10%                   |                 2 |              0.16765 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3428 | >20%                    |                 2 |              0.1714  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3453 | <5%                     |                 5 |              0.06906 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3465 | >20%                    |                 5 |              0.0693  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3545 | <5%                     |                 5 |              0.0709  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3579 | 15-20%                  |                 2 |              0.17895 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3608 | <5%                     |                 2 |              0.1804  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3706 | <5%                     |                 2 |              0.1853  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3708 | <5%                     |                10 |              0.03708 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3738 | >20%                    |                 2 |              0.1869  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.376  | 15-20%                  |                 5 |              0.0752  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3776 | >20%                    |                10 |              0.03776 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.379  | 15-20%                  |                 2 |              0.1895  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3796 | >20%                    |                 2 |              0.1898  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4046 | <5%                     |                 2 |              0.2023  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4066 | 5-10%                   |                 2 |              0.2033  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4159 | 5-10%                   |                 2 |              0.20795 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4186 | 5-10%                   |                 2 |              0.2093  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4256 | 5-10%                   |                 5 |              0.08512 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4427 | <5%                     |                 2 |              0.22135 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.444  | >20%                    |                 2 |              0.222   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4441 | 15-20%                  |                 5 |              0.08882 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4451 | 10-15%                  |                 2 |              0.22255 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4597 | 10-15%                  |                 5 |              0.09194 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4627 | >20%                    |                10 |              0.04627 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.463  | 15-20%                  |                 5 |              0.0926  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4658 | >20%                    |                 2 |              0.2329  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4758 | <5%                     |                 5 |              0.09516 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4815 | <5%                     |                 2 |              0.24075 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4849 | 5-10%                   |                 2 |              0.24245 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4867 | <5%                     |                 5 |              0.09734 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.4923 |                         |                 2 |              0.24615 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4959 | 5-10%                   |                 5 |              0.09918 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4977 | 15-20%                  |                 5 |              0.09954 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5001 | 5-10%                   |                 2 |              0.25005 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5111 | 10-15%                  |                 2 |              0.25555 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5134 | 10-15%                  |                 2 |              0.2567  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5203 | >20%                    |                 5 |              0.10406 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.522  | 5-10%                   |                 5 |              0.1044  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5279 | >20%                    |                 5 |              0.10558 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5353 | <5%                     |                 5 |              0.10706 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.5375 | 5-10%                   |                10 |              0.05375 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5406 | >20%                    |                 2 |              0.2703  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5421 | <5%                     |                 5 |              0.10842 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5459 | 10-15%                  |                10 |              0.05459 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5468 | 10-15%                  |                 5 |              0.10936 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5475 | >20%                    |                 5 |              0.1095  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.548  | 10-15%                  |                 5 |              0.1096  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5484 | <5%                     |                 5 |              0.10968 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5629 | 15-20%                  |                 2 |              0.28145 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5633 | 5-10%                   |                 5 |              0.11266 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.569  | >20%                    |                 5 |              0.1138  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5699 | 10-15%                  |                 5 |              0.11398 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5863 | >20%                    |                 5 |              0.11726 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.6109 |                         |                 5 |              0.12218 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6152 | 10-15%                  |                10 |              0.06152 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6229 | >20%                    |                10 |              0.06229 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6286 | 5-10%                   |                10 |              0.06286 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6286 | >20%                    |                10 |              0.06286 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6314 | 5-10%                   |                10 |              0.06314 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6488 | 5-10%                   |                 2 |              0.3244  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6503 | <5%                     |                 5 |              0.13006 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6556 | 5-10%                   |                 5 |              0.13112 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6629 | <5%                     |                 5 |              0.13258 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6717 | >20%                    |                 2 |              0.33585 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6766 | >20%                    |                10 |              0.06766 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6774 | >20%                    |                10 |              0.06774 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6918 | 15-20%                  |                10 |              0.06918 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6926 | 10-15%                  |                10 |              0.06926 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7095 | 5-10%                   |                 5 |              0.1419  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7186 | 15-20%                  |                 5 |              0.14372 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7211 | 15-20%                  |                 5 |              0.14422 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7245 | <5%                     |                 5 |              0.1449  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7484 | 5-10%                   |                10 |              0.07484 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7502 | <5%                     |                 2 |              0.3751  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7721 | <5%                     |                 5 |              0.15442 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7734 | >20%                    |                10 |              0.07734 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.789  | <5%                     |                10 |              0.0789  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.79   | 5-10%                   |                 5 |              0.158   |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7914 | 5-10%                   |                10 |              0.07914 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8116 | 5-10%                   |                10 |              0.08116 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8213 | 5-10%                   |                10 |              0.08213 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8261 | 10-15%                  |                10 |              0.08261 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.846  | 5-10%                   |                10 |              0.0846  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8484 | >20%                    |                 5 |              0.16968 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8752 | 10-15%                  |                10 |              0.08752 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8788 | >20%                    |                10 |              0.08788 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.905  | 15-20%                  |                10 |              0.0905  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9338 | <5%                     |                 5 |              0.18676 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9358 | 5-10%                   |                10 |              0.09358 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9385 | <5%                     |                10 |              0.09385 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9699 | 5-10%                   |                10 |              0.09699 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9732 | <5%                     |                10 |              0.09732 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      0.9747 |                         |                10 |              0.09747 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9825 | 5-10%                   |                10 |              0.09825 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0076 | >20%                    |                10 |              0.10076 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0222 | 15-20%                  |                10 |              0.10222 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0259 | >20%                    |                10 |              0.10259 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0541 | 5-10%                   |                10 |              0.10541 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0556 | <5%                     |                10 |              0.10556 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0855 | <5%                     |                10 |              0.10855 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1625 | 10-15%                  |                10 |              0.11625 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1734 | 15-20%                  |                10 |              0.11734 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3692 | >20%                    |                10 |              0.13692 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4446 | >20%                    |                10 |              0.14446 |