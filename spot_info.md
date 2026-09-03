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

Data correct as of 2026-09-03 03:44:27.929426, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1368 | >20%                    |                 2 |              0.0684  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1799 | 15-20%                  |                 2 |              0.08995 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1883 | >20%                    |                 2 |              0.09415 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1927 | 15-20%                  |                 2 |              0.09635 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2012 | >20%                    |                 2 |              0.1006  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2111 | >20%                    |                 2 |              0.10555 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2123 | 15-20%                  |                 5 |              0.04246 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2163 | >20%                    |                 2 |              0.10815 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2222 | 10-15%                  |                 2 |              0.1111  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2309 | >20%                    |                 5 |              0.04618 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2409 | >20%                    |                 2 |              0.12045 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2477 | 5-10%                   |                10 |              0.02477 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2609 | 15-20%                  |                 5 |              0.05218 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.261  | 5-10%                   |                10 |              0.0261  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2688 | >20%                    |                 2 |              0.1344  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2722 | 15-20%                  |                 2 |              0.1361  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2734 | 15-20%                  |                 5 |              0.05468 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2741 | >20%                    |                 2 |              0.13705 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.281  | <5%                     |                 2 |              0.1405  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2856 | >20%                    |                 5 |              0.05712 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2959 | >20%                    |                 2 |              0.14795 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2977 | 10-15%                  |                 2 |              0.14885 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3197 | >20%                    |                 2 |              0.15985 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.323  | >20%                    |                 2 |              0.1615  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3296 | >20%                    |                 2 |              0.1648  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3316 | >20%                    |                 5 |              0.06632 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3336 | >20%                    |                10 |              0.03336 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3534 | >20%                    |                 5 |              0.07068 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3577 | >20%                    |                10 |              0.03577 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3602 | >20%                    |                 5 |              0.07204 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3686 | 10-15%                  |                 2 |              0.1843  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3761 | >20%                    |                 5 |              0.07522 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3766 | >20%                    |                 2 |              0.1883  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3774 | <5%                     |                 2 |              0.1887  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3863 | <5%                     |                 5 |              0.07726 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3902 | >20%                    |                 5 |              0.07804 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3931 | >20%                    |                 5 |              0.07862 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.402  | >20%                    |                 5 |              0.0804  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.406  | 10-15%                  |                 2 |              0.203   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4077 | 15-20%                  |                 2 |              0.20385 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4095 | >20%                    |                 2 |              0.20475 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.414  | >20%                    |                 5 |              0.0828  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4292 | >20%                    |                 2 |              0.2146  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.435  | >20%                    |                 2 |              0.2175  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4396 | >20%                    |                 2 |              0.2198  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.445  | >20%                    |                 2 |              0.2225  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4463 | >20%                    |                10 |              0.04463 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.4517 |                         |                 5 |              0.09034 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4568 | >20%                    |                10 |              0.04568 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4591 | >20%                    |                10 |              0.04591 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4661 | >20%                    |                 5 |              0.09322 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.467  | >20%                    |                 5 |              0.0934  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4702 | 15-20%                  |                 2 |              0.2351  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4779 | 10-15%                  |                10 |              0.04779 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4892 | <5%                     |                 2 |              0.2446  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.491  | >20%                    |                 5 |              0.0982  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4946 | >20%                    |                 5 |              0.09892 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4976 | >20%                    |                 5 |              0.09952 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5074 | 15-20%                  |                 5 |              0.10148 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.5097 |                         |                 2 |              0.25485 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.515  | >20%                    |                10 |              0.0515  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5155 | >20%                    |                 5 |              0.1031  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.516  | 15-20%                  |                10 |              0.0516  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5293 | >20%                    |                 5 |              0.10586 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.53   | >20%                    |                10 |              0.053   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5326 | >20%                    |                 5 |              0.10652 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5353 | >20%                    |                 5 |              0.10706 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5366 | >20%                    |                 5 |              0.10732 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5406 | 5-10%                   |                 2 |              0.2703  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.55   | >20%                    |                 5 |              0.11    |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5546 | >20%                    |                 2 |              0.2773  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5557 | >20%                    |                10 |              0.05557 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5631 | >20%                    |                 2 |              0.28155 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5939 | >20%                    |                 5 |              0.11878 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6008 | >20%                    |                 2 |              0.3004  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6016 | >20%                    |                 2 |              0.3008  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6044 | 5-10%                   |                10 |              0.06044 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.605  | 10-15%                  |                 5 |              0.121   |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.61   | >20%                    |                10 |              0.061   |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6165 | >20%                    |                10 |              0.06165 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.626  | >20%                    |                 5 |              0.1252  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6265 | >20%                    |                 5 |              0.1253  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6293 | 5-10%                   |                 5 |              0.12586 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.637  | 15-20%                  |                10 |              0.0637  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6398 | 5-10%                   |                10 |              0.06398 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6415 | >20%                    |                 5 |              0.1283  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6436 | >20%                    |                 2 |              0.3218  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6496 | 15-20%                  |                10 |              0.06496 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6761 | >20%                    |                 5 |              0.13522 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6813 | >20%                    |                 2 |              0.34065 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6933 | >20%                    |                 5 |              0.13866 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7088 | >20%                    |                10 |              0.07088 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7186 | >20%                    |                10 |              0.07186 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7379 | >20%                    |                 5 |              0.14758 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7689 | >20%                    |                 2 |              0.38445 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7701 | >20%                    |                10 |              0.07701 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7729 | 5-10%                   |                 2 |              0.38645 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7899 | >20%                    |                10 |              0.07899 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.796  | >20%                    |                10 |              0.0796  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7995 | 15-20%                  |                 2 |              0.39975 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.805  | >20%                    |                 2 |              0.4025  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8152 | >20%                    |                10 |              0.08152 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8213 | >20%                    |                10 |              0.08213 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8235 | <5%                     |                10 |              0.08235 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8262 | >20%                    |                 5 |              0.16524 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8267 | 15-20%                  |                10 |              0.08267 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8274 | 10-15%                  |                 2 |              0.4137  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.859  | >20%                    |                 5 |              0.1718  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8667 | >20%                    |                 5 |              0.17334 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8725 | 5-10%                   |                10 |              0.08725 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.9058 | >20%                    |                 2 |              0.4529  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9153 |                         |                 2 |              0.45765 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9206 | >20%                    |                 2 |              0.4603  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9379 | 10-15%                  |                 2 |              0.46895 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9594 | >20%                    |                10 |              0.09594 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9632 | 5-10%                   |                 5 |              0.19264 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9638 | >20%                    |                10 |              0.09638 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9991 | 10-15%                  |                 2 |              0.49955 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0191 | >20%                    |                10 |              0.10191 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0251 | >20%                    |                10 |              0.10251 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0286 | 15-20%                  |                10 |              0.10286 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.054  | >20%                    |                10 |              0.1054  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0563 | >20%                    |                10 |              0.10563 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0584 | >20%                    |                 5 |              0.21168 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0589 | 5-10%                   |                10 |              0.10589 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0783 | >20%                    |                10 |              0.10783 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1033 |                         |                 2 |              0.55165 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.1089 | >20%                    |                 5 |              0.22178 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.119  | >20%                    |                10 |              0.1119  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1286 | 15-20%                  |                10 |              0.11286 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1359 | >20%                    |                10 |              0.11359 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1515 | >20%                    |                 5 |              0.2303  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1535 | >20%                    |                 5 |              0.2307  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1759 |                         |                 5 |              0.23518 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2091 |                         |                10 |              0.12091 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2233 | >20%                    |                 5 |              0.24466 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2306 | >20%                    |                 2 |              0.6153  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.24   |                         |                 5 |              0.248   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2702 | >20%                    |                10 |              0.12702 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2767 | 10-15%                  |                10 |              0.12767 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2948 | >20%                    |                 5 |              0.25896 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.3298 | >20%                    |                 5 |              0.26596 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4206 | 15-20%                  |                10 |              0.14206 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.5016 | >20%                    |                 5 |              0.30032 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.5813 |                         |                10 |              0.15813 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6028 | 15-20%                  |                 5 |              0.32056 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.616  | >20%                    |                10 |              0.1616  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.6465 | >20%                    |                10 |              0.16465 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.6591 | >20%                    |                10 |              0.16591 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6944 |                         |                10 |              0.16944 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7341 | 15-20%                  |                10 |              0.17341 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.8817 | >20%                    |                10 |              0.18817 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.9371 | 5-10%                   |                 2 |              0.96855 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0014 | 5-10%                   |                 2 |              1.0007  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.0853 | >20%                    |                 5 |              0.41706 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.3373 | >20%                    |                10 |              0.23373 |