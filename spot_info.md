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

Data correct as of 2026-08-26 01:36:31.850156, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1517 | >20%                    |                 2 |              0.07585 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1849 | 15-20%                  |                 2 |              0.09245 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2095 | >20%                    |                 2 |              0.10475 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2215 | 15-20%                  |                 2 |              0.11075 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2227 | >20%                    |                 2 |              0.11135 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2332 | >20%                    |                 2 |              0.1166  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.241  | 10-15%                  |                 2 |              0.1205  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2507 | 10-15%                  |                 2 |              0.12535 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.253  | 15-20%                  |                 2 |              0.1265  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2681 | >20%                    |                 2 |              0.13405 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.27   | >20%                    |                 2 |              0.135   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2713 | >20%                    |                 5 |              0.05426 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2933 | 5-10%                   |                10 |              0.02933 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3087 | >20%                    |                 2 |              0.15435 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3091 | >20%                    |                 2 |              0.15455 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3094 | >20%                    |                 5 |              0.06188 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3107 | >20%                    |                 2 |              0.15535 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.321  | >20%                    |                 2 |              0.1605  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3241 | 15-20%                  |                 5 |              0.06482 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3369 | >20%                    |                 5 |              0.06738 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3519 | >20%                    |                 5 |              0.07038 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3545 | 10-15%                  |                 2 |              0.17725 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3648 | >20%                    |                 2 |              0.1824  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3751 | <5%                     |                 2 |              0.18755 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3769 | >20%                    |                10 |              0.03769 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3791 | >20%                    |                 5 |              0.07582 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3808 | <5%                     |                 2 |              0.1904  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3869 | 5-10%                   |                10 |              0.03869 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3873 | >20%                    |                 5 |              0.07746 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3975 | >20%                    |                10 |              0.03975 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3998 | >20%                    |                 2 |              0.1999  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3999 | >20%                    |                 5 |              0.07998 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.407  | 15-20%                  |                 2 |              0.2035  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4076 | >20%                    |                10 |              0.04076 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4086 | >20%                    |                 2 |              0.2043  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4104 | >20%                    |                 5 |              0.08208 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4109 | 15-20%                  |                 5 |              0.08218 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4138 | >20%                    |                 5 |              0.08276 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4177 | >20%                    |                 5 |              0.08354 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4252 | 10-15%                  |                 2 |              0.2126  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4316 | >20%                    |                 5 |              0.08632 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4333 | >20%                    |                10 |              0.04333 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.436  | >20%                    |                 2 |              0.218   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4409 | >20%                    |                 2 |              0.22045 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4471 | >20%                    |                 2 |              0.22355 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4491 | >20%                    |                 2 |              0.22455 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4496 | 15-20%                  |                 5 |              0.08992 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.456  | 15-20%                  |                 2 |              0.228   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4635 | >20%                    |                 5 |              0.0927  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4661 | >20%                    |                10 |              0.04661 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4736 | >20%                    |                 5 |              0.09472 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4783 | >20%                    |                 5 |              0.09566 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4923 | >20%                    |                 5 |              0.09846 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5045 | <5%                     |                 5 |              0.1009  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5245 | >20%                    |                 5 |              0.1049  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5259 | >20%                    |                 5 |              0.10518 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5271 | >20%                    |                10 |              0.05271 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5271 | >20%                    |                 2 |              0.26355 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5275 | >20%                    |                 5 |              0.1055  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5296 | <5%                     |                 2 |              0.2648  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.532  | 15-20%                  |                10 |              0.0532  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5327 | >20%                    |                 2 |              0.26635 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.536  | 5-10%                   |                 2 |              0.268   |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.5384 |                         |                 2 |              0.2692  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5574 | >20%                    |                10 |              0.05574 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.559  | >20%                    |                 2 |              0.2795  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5639 | >20%                    |                 5 |              0.11278 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5812 | >20%                    |                 2 |              0.2906  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5813 | >20%                    |                 5 |              0.11626 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5958 | >20%                    |                 5 |              0.11916 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6043 | 10-15%                  |                 5 |              0.12086 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.606  | >20%                    |                 5 |              0.1212  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6071 | >20%                    |                10 |              0.06071 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6092 | >20%                    |                 5 |              0.12184 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.6321 |                         |                 5 |              0.12642 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6328 | 10-15%                  |                10 |              0.06328 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6418 | 5-10%                   |                 5 |              0.12836 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6456 | >20%                    |                 2 |              0.3228  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.647  | >20%                    |                 2 |              0.3235  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6496 | >20%                    |                 2 |              0.3248  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6781 | >20%                    |                10 |              0.06781 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6829 | >20%                    |                10 |              0.06829 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6893 | >20%                    |                 5 |              0.13786 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6894 | 15-20%                  |                10 |              0.06894 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6993 | >20%                    |                 2 |              0.34965 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7069 | 5-10%                   |                10 |              0.07069 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7106 | >20%                    |                10 |              0.07106 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7315 | >20%                    |                 5 |              0.1463  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.737  | >20%                    |                 2 |              0.3685  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7616 | >20%                    |                 5 |              0.15232 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7702 | 5-10%                   |                10 |              0.07702 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7727 | >20%                    |                10 |              0.07727 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7748 | >20%                    |                 5 |              0.15496 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7781 | 15-20%                  |                 2 |              0.38905 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7903 | >20%                    |                10 |              0.07903 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.792  | >20%                    |                10 |              0.0792  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7946 | 5-10%                   |                10 |              0.07946 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8014 | 15-20%                  |                10 |              0.08014 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8081 | 15-20%                  |                10 |              0.08081 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8182 | >20%                    |                10 |              0.08182 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8215 | <5%                     |                10 |              0.08215 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8272 | >20%                    |                 5 |              0.16544 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8333 | 10-15%                  |                 2 |              0.41665 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8369 | >20%                    |                10 |              0.08369 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8395 | >20%                    |                10 |              0.08395 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8469 | >20%                    |                 5 |              0.16938 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8512 |                         |                10 |              0.08512 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8653 | >20%                    |                10 |              0.08653 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8801 | >20%                    |                 5 |              0.17602 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8924 | >20%                    |                 5 |              0.17848 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8988 | >20%                    |                10 |              0.08988 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9093 | >20%                    |                10 |              0.09093 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9221 | 10-15%                  |                 2 |              0.46105 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9228 | >20%                    |                10 |              0.09228 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.924  | >20%                    |                 2 |              0.462   |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.963  | >20%                    |                10 |              0.0963  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9644 |                         |                 2 |              0.4822  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9781 | 15-20%                  |                10 |              0.09781 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9852 | >20%                    |                 5 |              0.19704 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0015 | 5-10%                   |                 5 |              0.2003  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0051 | 5-10%                   |                 2 |              0.50255 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0149 | >20%                    |                10 |              0.10149 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0231 | >20%                    |                 5 |              0.20462 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0279 | >20%                    |                 5 |              0.20558 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0326 | >20%                    |                 5 |              0.20652 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0413 | >20%                    |                10 |              0.10413 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.043  | >20%                    |                 5 |              0.2086  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0615 | 15-20%                  |                10 |              0.10615 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0694 | 10-15%                  |                 2 |              0.5347  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0765 | >20%                    |                10 |              0.10765 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0839 | >20%                    |                 5 |              0.21678 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.104  | >20%                    |                10 |              0.1104  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1139 | >20%                    |                10 |              0.11139 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1276 | >20%                    |                 5 |              0.22552 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1634 |                         |                 5 |              0.23268 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1674 | 5-10%                   |                10 |              0.11674 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1834 | >20%                    |                 2 |              0.5917  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2202 | 15-20%                  |                10 |              0.12202 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.2373 | >20%                    |                 5 |              0.24746 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2419 | >20%                    |                10 |              0.12419 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.2902 |                         |                 2 |              0.6451  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3043 | >20%                    |                 5 |              0.26086 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.3366 |                         |                10 |              0.13366 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.3646 |                         |                 5 |              0.27292 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4076 | 10-15%                  |                10 |              0.14076 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.5187 | >20%                    |                10 |              0.15187 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5381 | 15-20%                  |                 5 |              0.30762 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5714 | >20%                    |                10 |              0.15714 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5963 | >20%                    |                10 |              0.15963 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6747 | 15-20%                  |                10 |              0.16747 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.7308 |                         |                10 |              0.17308 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.883  | 5-10%                   |                 2 |              0.9415  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.8916 | 5-10%                   |                 2 |              0.9458  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.4033 | >20%                    |                 5 |              0.48066 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      2.5592 | >20%                    |                10 |              0.25592 |