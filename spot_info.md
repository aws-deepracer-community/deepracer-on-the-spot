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

Data correct as of 2026-09-04 03:45:34.881779, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1348 | >20%                    |                 2 |              0.0674  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1778 | 15-20%                  |                 2 |              0.0889  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1885 | >20%                    |                 2 |              0.09425 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1913 | 15-20%                  |                 2 |              0.09565 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1949 | >20%                    |                 2 |              0.09745 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.203  | >20%                    |                 2 |              0.1015  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2134 | >20%                    |                 2 |              0.1067  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2188 | 15-20%                  |                 5 |              0.04376 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2218 | 10-15%                  |                 2 |              0.1109  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2248 | >20%                    |                 5 |              0.04496 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2422 | >20%                    |                 2 |              0.1211  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2477 | 5-10%                   |                10 |              0.02477 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2489 | 5-10%                   |                10 |              0.02489 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2572 | 15-20%                  |                 5 |              0.05144 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2603 | 15-20%                  |                 5 |              0.05206 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2677 | 15-20%                  |                 2 |              0.13385 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2684 | >20%                    |                 5 |              0.05368 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.2706 | <5%                     |                 2 |              0.1353  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2787 | >20%                    |                 2 |              0.13935 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2859 | >20%                    |                 2 |              0.14295 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.295  | >20%                    |                 2 |              0.1475  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3069 | 10-15%                  |                 2 |              0.15345 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3164 | >20%                    |                 2 |              0.1582  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3188 | >20%                    |                10 |              0.03188 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3202 | >20%                    |                 2 |              0.1601  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.329  | >20%                    |                 2 |              0.1645  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3308 | >20%                    |                 5 |              0.06616 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3426 | >20%                    |                 5 |              0.06852 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3494 | >20%                    |                10 |              0.03494 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3666 | >20%                    |                 2 |              0.1833  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3666 | >20%                    |                 5 |              0.07332 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3686 | 10-15%                  |                 2 |              0.1843  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3762 | <5%                     |                 5 |              0.07524 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3783 | <5%                     |                 2 |              0.18915 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.38   | >20%                    |                 5 |              0.076   |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3847 | >20%                    |                 5 |              0.07694 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4001 | >20%                    |                 5 |              0.08002 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4037 | 10-15%                  |                 2 |              0.20185 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4038 | >20%                    |                 5 |              0.08076 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.406  | >20%                    |                 2 |              0.203   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4074 | 15-20%                  |                 2 |              0.2037  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4137 | >20%                    |                 5 |              0.08274 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4155 | >20%                    |                 2 |              0.20775 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4319 | >20%                    |                 2 |              0.21595 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.4336 |                         |                 5 |              0.08672 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4456 | >20%                    |                 2 |              0.2228  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4464 | >20%                    |                 2 |              0.2232  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4528 | >20%                    |                10 |              0.04528 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4538 | 10-15%                  |                10 |              0.04538 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.462  | >20%                    |                10 |              0.0462  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4626 | >20%                    |                 5 |              0.09252 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.467  | >20%                    |                 5 |              0.0934  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4696 | 15-20%                  |                 2 |              0.2348  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4744 | >20%                    |                10 |              0.04744 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4884 | >20%                    |                 5 |              0.09768 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4908 | <5%                     |                 2 |              0.2454  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4919 | >20%                    |                 5 |              0.09838 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4961 | >20%                    |                 5 |              0.09922 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4972 | >20%                    |                 5 |              0.09944 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.5071 |                         |                 2 |              0.25355 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5106 | >20%                    |                10 |              0.05106 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5139 | 15-20%                  |                 5 |              0.10278 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5165 | >20%                    |                 5 |              0.1033  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5209 | >20%                    |                10 |              0.05209 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5239 | 15-20%                  |                10 |              0.05239 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5243 | >20%                    |                 5 |              0.10486 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5332 | >20%                    |                 5 |              0.10664 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5345 | >20%                    |                 5 |              0.1069  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5401 | 5-10%                   |                 2 |              0.27005 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5501 | >20%                    |                 5 |              0.11002 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5542 | >20%                    |                 2 |              0.2771  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5608 | >20%                    |                10 |              0.05608 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5654 | >20%                    |                 2 |              0.2827  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5832 | >20%                    |                 2 |              0.2916  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5913 | >20%                    |                 5 |              0.11826 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5971 | >20%                    |                 2 |              0.29855 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5977 | >20%                    |                10 |              0.05977 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6055 | >20%                    |                10 |              0.06055 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6056 | 10-15%                  |                 5 |              0.12112 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6066 | >20%                    |                 5 |              0.12132 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6104 | 5-10%                   |                10 |              0.06104 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6191 | 5-10%                   |                10 |              0.06191 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6195 | 15-20%                  |                10 |              0.06195 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6273 | >20%                    |                 5 |              0.12546 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6338 | 5-10%                   |                 5 |              0.12676 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6408 | >20%                    |                 2 |              0.3204  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6458 | 15-20%                  |                10 |              0.06458 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6484 | >20%                    |                 5 |              0.12968 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6761 | >20%                    |                 5 |              0.13522 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6763 | >20%                    |                 5 |              0.13526 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6806 | >20%                    |                 2 |              0.3403  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7048 | >20%                    |                10 |              0.07048 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7364 | >20%                    |                 5 |              0.14728 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7415 | >20%                    |                 2 |              0.37075 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7568 | 5-10%                   |                 2 |              0.3784  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7589 | >20%                    |                10 |              0.07589 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7591 | >20%                    |                10 |              0.07591 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7645 | >20%                    |                10 |              0.07645 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8008 | >20%                    |                10 |              0.08008 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8034 | 15-20%                  |                 2 |              0.4017  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8074 | >20%                    |                 5 |              0.16148 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8152 | >20%                    |                10 |              0.08152 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8198 | 15-20%                  |                10 |              0.08198 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8202 | >20%                    |                10 |              0.08202 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8274 | <5%                     |                10 |              0.08274 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.85   | 10-15%                  |                 2 |              0.425   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8565 | >20%                    |                 5 |              0.1713  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8617 | >20%                    |                 2 |              0.43085 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8662 | >20%                    |                 5 |              0.17324 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8746 | 5-10%                   |                10 |              0.08746 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9128 | >20%                    |                 2 |              0.4564  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9153 |                         |                 2 |              0.45765 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.9345 | >20%                    |                 2 |              0.46725 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9373 | 10-15%                  |                 2 |              0.46865 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9564 | 5-10%                   |                 5 |              0.19128 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9599 | >20%                    |                10 |              0.09599 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9835 | >20%                    |                10 |              0.09835 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9993 | 10-15%                  |                 2 |              0.49965 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0065 | >20%                    |                10 |              0.10065 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0186 | >20%                    |                10 |              0.10186 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.026  | 15-20%                  |                10 |              0.1026  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0263 | 5-10%                   |                10 |              0.10263 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0629 | >20%                    |                 5 |              0.21258 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0758 | >20%                    |                10 |              0.10758 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0946 | >20%                    |                 5 |              0.21892 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1033 |                         |                 2 |              0.55165 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1259 | 15-20%                  |                10 |              0.11259 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1265 | >20%                    |                10 |              0.11265 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1364 | >20%                    |                10 |              0.11364 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1449 | >20%                    |                 5 |              0.22898 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1513 | >20%                    |                 5 |              0.23026 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1715 | >20%                    |                10 |              0.11715 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1766 | >20%                    |                10 |              0.11766 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1801 |                         |                 5 |              0.23602 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1996 |                         |                 5 |              0.23992 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2233 | >20%                    |                 5 |              0.24466 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2463 | >20%                    |                 2 |              0.62315 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2555 | >20%                    |                10 |              0.12555 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2666 | 10-15%                  |                10 |              0.12666 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2812 | >20%                    |                 5 |              0.25624 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2881 |                         |                10 |              0.12881 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.4165 | >20%                    |                 5 |              0.2833  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.458  | 15-20%                  |                10 |              0.1458  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.5487 |                         |                10 |              0.15487 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.5606 | >20%                    |                 5 |              0.31212 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.577  | 15-20%                  |                 5 |              0.3154  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.6019 | >20%                    |                10 |              0.16019 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6162 | >20%                    |                10 |              0.16162 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.6953 | >20%                    |                10 |              0.16953 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7882 | 15-20%                  |                10 |              0.17882 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.8081 | >20%                    |                10 |              0.18081 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8332 |                         |                10 |              0.18332 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.9601 | 5-10%                   |                 2 |              0.98005 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9987 | 5-10%                   |                 2 |              0.99935 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.0122 | >20%                    |                 5 |              0.40244 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.482  | >20%                    |                10 |              0.2482  |