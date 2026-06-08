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

Data correct as of 2026-06-08 04:24:34.016899, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1167 | >20%                    |                 2 |              0.05835 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1711 | 15-20%                  |                 2 |              0.08555 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1735 | >20%                    |                 2 |              0.08675 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1834 | >20%                    |                 2 |              0.0917  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2144 | 10-15%                  |                 2 |              0.1072  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2144 | 15-20%                  |                 2 |              0.1072  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2225 | >20%                    |                 2 |              0.11125 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2234 | 15-20%                  |                 5 |              0.04468 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2328 | >20%                    |                 2 |              0.1164  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.233  | >20%                    |                 2 |              0.1165  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2427 | >20%                    |                 2 |              0.12135 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.253  | >20%                    |                 2 |              0.1265  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2545 | >20%                    |                 2 |              0.12725 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2579 | >20%                    |                 5 |              0.05158 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2672 | 15-20%                  |                 5 |              0.05344 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2724 | >20%                    |                10 |              0.02724 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2801 | >20%                    |                 5 |              0.05602 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2825 | >20%                    |                 2 |              0.14125 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.295  | 5-10%                   |                10 |              0.0295  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2954 | 15-20%                  |                 2 |              0.1477  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2998 | >20%                    |                 5 |              0.05996 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3076 | >20%                    |                 2 |              0.1538  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3115 | 10-15%                  |                 2 |              0.15575 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3171 | >20%                    |                10 |              0.03171 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3277 | 15-20%                  |                 5 |              0.06554 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3331 | >20%                    |                 2 |              0.16655 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.335  | <5%                     |                 2 |              0.1675  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3382 | 10-15%                  |                 2 |              0.1691  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3401 | >20%                    |                 5 |              0.06802 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3404 | >20%                    |                 2 |              0.1702  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.341  | >20%                    |                 2 |              0.1705  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.343  | <5%                     |                10 |              0.0343  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3624 | >20%                    |                 5 |              0.07248 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3706 | >20%                    |                 5 |              0.07412 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3716 | 5-10%                   |                10 |              0.03716 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3735 | >20%                    |                 5 |              0.0747  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3785 | >20%                    |                 5 |              0.0757  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.38   | >20%                    |                 5 |              0.076   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3825 | >20%                    |                 2 |              0.19125 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3911 | >20%                    |                 5 |              0.07822 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3941 | >20%                    |                10 |              0.03941 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3969 | >20%                    |                 5 |              0.07938 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.398  | >20%                    |                 5 |              0.0796  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4048 | >20%                    |                 5 |              0.08096 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4176 | >20%                    |                 2 |              0.2088  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4206 | >20%                    |                 2 |              0.2103  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4227 | 15-20%                  |                 2 |              0.21135 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4264 | <5%                     |                 2 |              0.2132  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4284 | >20%                    |                 5 |              0.08568 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.4302 |                         |                 2 |              0.2151  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4353 | >20%                    |                10 |              0.04353 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4375 | 10-15%                  |                 2 |              0.21875 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4487 | >20%                    |                 5 |              0.08974 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4548 | >20%                    |                 2 |              0.2274  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4638 | >20%                    |                 2 |              0.2319  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4669 | <5%                     |                 2 |              0.23345 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4682 | 15-20%                  |                 5 |              0.09364 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4846 | 5-10%                   |                 2 |              0.2423  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4867 | 5-10%                   |                 2 |              0.24335 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4898 | >20%                    |                 5 |              0.09796 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4975 | >20%                    |                 5 |              0.0995  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4981 | >20%                    |                 5 |              0.09962 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4981 | 10-15%                  |                10 |              0.04981 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4994 | >20%                    |                 5 |              0.09988 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5067 | >20%                    |                 2 |              0.25335 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5086 | 15-20%                  |                 2 |              0.2543  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5087 | 5-10%                   |                 5 |              0.10174 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5161 | >20%                    |                 5 |              0.10322 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5204 | >20%                    |                10 |              0.05204 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5221 | >20%                    |                10 |              0.05221 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5262 | 10-15%                  |                 2 |              0.2631  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5405 | >20%                    |                 5 |              0.1081  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5421 | 10-15%                  |                 5 |              0.10842 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5457 | >20%                    |                10 |              0.05457 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5463 | >20%                    |                 2 |              0.27315 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5486 | >20%                    |                 2 |              0.2743  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.564  | <5%                     |                 5 |              0.1128  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5725 | >20%                    |                 2 |              0.28625 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5736 | >20%                    |                 2 |              0.2868  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6061 | 15-20%                  |                10 |              0.06061 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6095 | 15-20%                  |                 2 |              0.30475 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6173 | >20%                    |                 5 |              0.12346 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6303 | >20%                    |                 5 |              0.12606 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6303 | >20%                    |                 5 |              0.12606 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6401 | >20%                    |                 5 |              0.12802 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6485 | >20%                    |                 5 |              0.1297  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6492 | 15-20%                  |                10 |              0.06492 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6498 | >20%                    |                 5 |              0.12996 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6668 | >20%                    |                 5 |              0.13336 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6741 | >20%                    |                10 |              0.06741 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6776 | 15-20%                  |                10 |              0.06776 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6832 | 15-20%                  |                10 |              0.06832 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6861 |                         |                 5 |              0.13722 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6874 | >20%                    |                10 |              0.06874 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.69   | 5-10%                   |                10 |              0.069   |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6907 | >20%                    |                10 |              0.06907 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6912 | 5-10%                   |                10 |              0.06912 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.695  | >20%                    |                 5 |              0.139   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6981 | >20%                    |                 2 |              0.34905 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7111 | >20%                    |                 2 |              0.35555 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7213 | >20%                    |                10 |              0.07213 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7307 | >20%                    |                 5 |              0.14614 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7382 | >20%                    |                 2 |              0.3691  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7414 | >20%                    |                10 |              0.07414 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7538 | >20%                    |                 2 |              0.3769  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.7601 |                         |                10 |              0.07601 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7856 | >20%                    |                10 |              0.07856 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7868 | >20%                    |                10 |              0.07868 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7914 | >20%                    |                 5 |              0.15828 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8127 | >20%                    |                10 |              0.08127 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8219 | >20%                    |                10 |              0.08219 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8243 | >20%                    |                10 |              0.08243 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.827  | 10-15%                  |                 2 |              0.4135  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8396 | 5-10%                   |                 5 |              0.16792 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8399 |                         |                 2 |              0.41995 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8403 | >20%                    |                 5 |              0.16806 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8435 | >20%                    |                 5 |              0.1687  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8509 | >20%                    |                10 |              0.08509 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8534 | >20%                    |                 5 |              0.17068 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8553 | 15-20%                  |                10 |              0.08553 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8582 | >20%                    |                 5 |              0.17164 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8641 | >20%                    |                10 |              0.08641 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.897  | >20%                    |                10 |              0.0897  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9135 | >20%                    |                 5 |              0.1827  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9207 | 5-10%                   |                 2 |              0.46035 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9221 | >20%                    |                10 |              0.09221 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9405 | >20%                    |                10 |              0.09405 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.97   | >20%                    |                10 |              0.097   |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9709 | >20%                    |                10 |              0.09709 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9716 | >20%                    |                 5 |              0.19432 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0133 | >20%                    |                10 |              0.10133 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0244 |                         |                 5 |              0.20488 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0377 | >20%                    |                 5 |              0.20754 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0413 | >20%                    |                 2 |              0.52065 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0462 | 5-10%                   |                10 |              0.10462 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0593 | >20%                    |                10 |              0.10593 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0728 | >20%                    |                10 |              0.10728 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0764 | 10-15%                  |                 2 |              0.5382  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0924 | >20%                    |                10 |              0.10924 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0964 | >20%                    |                 5 |              0.21928 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1235 | 5-10%                   |                 2 |              0.56175 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1486 | 15-20%                  |                10 |              0.11486 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1517 | 15-20%                  |                10 |              0.11517 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2003 | >20%                    |                10 |              0.12003 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3102 | >20%                    |                10 |              0.13102 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3199 | >20%                    |                10 |              0.13199 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3639 | >20%                    |                 5 |              0.27278 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3971 | 15-20%                  |                 5 |              0.27942 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3981 | 10-15%                  |                10 |              0.13981 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4961 | 15-20%                  |                10 |              0.14961 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5946 | >20%                    |                 5 |              0.31892 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6825 |                         |                10 |              0.16825 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2323 | >20%                    |                10 |              0.22323 |