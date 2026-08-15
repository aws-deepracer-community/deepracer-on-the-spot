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

Data correct as of 2026-08-15 01:25:20.760468, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.175  | >20%                    |                 2 |              0.0875  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.179  | >20%                    |                 2 |              0.0895  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1949 | >20%                    |                 2 |              0.09745 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2017 | >20%                    |                 2 |              0.10085 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2057 | 15-20%                  |                 2 |              0.10285 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2167 | >20%                    |                 2 |              0.10835 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2308 | 10-15%                  |                 2 |              0.1154  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2585 | 15-20%                  |                 2 |              0.12925 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2592 | >20%                    |                 2 |              0.1296  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2638 | >20%                    |                 5 |              0.05276 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2685 | >20%                    |                 2 |              0.13425 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2734 | 15-20%                  |                 2 |              0.1367  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2881 | >20%                    |                 2 |              0.14405 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2899 | 10-15%                  |                 2 |              0.14495 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2904 | >20%                    |                 2 |              0.1452  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3062 | >20%                    |                 2 |              0.1531  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3146 | 15-20%                  |                 5 |              0.06292 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.322  | >20%                    |                 5 |              0.0644  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3342 | >20%                    |                 2 |              0.1671  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.339  | 5-10%                   |                10 |              0.0339  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.339  | 15-20%                  |                 2 |              0.1695  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3407 | 5-10%                   |                10 |              0.03407 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3524 | >20%                    |                 5 |              0.07048 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3562 | >20%                    |                 5 |              0.07124 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.362  | >20%                    |                 2 |              0.181   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3723 | <5%                     |                 2 |              0.18615 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3857 | >20%                    |                 5 |              0.07714 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3866 | >20%                    |                 5 |              0.07732 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3872 | 10-15%                  |                 2 |              0.1936  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4007 | <5%                     |                 2 |              0.20035 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4056 | 15-20%                  |                 2 |              0.2028  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4098 | >20%                    |                 5 |              0.08196 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4099 | >20%                    |                 5 |              0.08198 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4136 | >20%                    |                10 |              0.04136 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.414  | >20%                    |                10 |              0.0414  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4153 | >20%                    |                10 |              0.04153 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4197 | >20%                    |                 2 |              0.20985 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4235 | >20%                    |                 5 |              0.0847  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4333 | >20%                    |                 2 |              0.21665 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4391 | 15-20%                  |                 5 |              0.08782 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4465 | 10-15%                  |                 2 |              0.22325 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4534 | >20%                    |                 2 |              0.2267  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4543 | >20%                    |                 2 |              0.22715 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4549 | >20%                    |                 2 |              0.22745 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4552 | >20%                    |                 5 |              0.09104 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4557 | >20%                    |                10 |              0.04557 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4571 | >20%                    |                 2 |              0.22855 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4649 | >20%                    |                 5 |              0.09298 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4743 | >20%                    |                 2 |              0.23715 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4855 | >20%                    |                 2 |              0.24275 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4927 | 5-10%                   |                10 |              0.04927 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4937 | >20%                    |                 5 |              0.09874 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4973 | >20%                    |                 2 |              0.24865 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5123 | >20%                    |                 5 |              0.10246 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5202 | >20%                    |                 5 |              0.10404 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5224 | >20%                    |                 5 |              0.10448 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5229 | >20%                    |                10 |              0.05229 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5443 | >20%                    |                 5 |              0.10886 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5469 | 10-15%                  |                10 |              0.05469 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5493 | >20%                    |                 2 |              0.27465 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5508 | <5%                     |                 2 |              0.2754  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5521 | 5-10%                   |                 2 |              0.27605 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5552 | >20%                    |                 2 |              0.2776  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5705 | >20%                    |                 2 |              0.28525 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5706 | >20%                    |                10 |              0.05706 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5788 | 15-20%                  |                10 |              0.05788 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5831 | 10-15%                  |                 5 |              0.11662 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5904 | 15-20%                  |                 5 |              0.11808 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5921 | >20%                    |                 5 |              0.11842 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5989 | >20%                    |                 5 |              0.11978 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5998 | >20%                    |                10 |              0.05998 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6019 | <5%                     |                 5 |              0.12038 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.604  | >20%                    |                 5 |              0.1208  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6049 | >20%                    |                 5 |              0.12098 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6074 | >20%                    |                 5 |              0.12148 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6105 | >20%                    |                10 |              0.06105 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6129 | >20%                    |                 5 |              0.12258 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6171 | >20%                    |                 5 |              0.12342 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6385 | >20%                    |                 5 |              0.1277  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6418 | 5-10%                   |                 5 |              0.12836 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6673 | >20%                    |                 2 |              0.33365 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6827 | >20%                    |                 2 |              0.34135 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6875 | >20%                    |                10 |              0.06875 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6909 | >20%                    |                 5 |              0.13818 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7059 | >20%                    |                10 |              0.07059 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7162 | >20%                    |                10 |              0.07162 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7258 | >20%                    |                 5 |              0.14516 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7397 | >20%                    |                 2 |              0.36985 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.743  | >20%                    |                10 |              0.0743  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7456 | >20%                    |                 5 |              0.14912 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7582 | >20%                    |                 2 |              0.3791  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.78   | >20%                    |                10 |              0.078   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7995 | >20%                    |                 5 |              0.1599  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8013 | 15-20%                  |                10 |              0.08013 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8197 | >20%                    |                10 |              0.08197 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.8226 | >20%                    |                 5 |              0.16452 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.824  | >20%                    |                 5 |              0.1648  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8277 | 10-15%                  |                 2 |              0.41385 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8297 | <5%                     |                10 |              0.08297 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8317 | >20%                    |                10 |              0.08317 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8325 | 10-15%                  |                 2 |              0.41625 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8749 | >20%                    |                 5 |              0.17498 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8751 | >20%                    |                 5 |              0.17502 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8839 |                         |                 2 |              0.44195 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8863 |                         |                 2 |              0.44315 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8897 | 5-10%                   |                10 |              0.08897 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8919 | >20%                    |                10 |              0.08919 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.894  | 15-20%                  |                10 |              0.0894  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8959 | 15-20%                  |                10 |              0.08959 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9011 | >20%                    |                10 |              0.09011 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9045 | 5-10%                   |                10 |              0.09045 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9088 | >20%                    |                10 |              0.09088 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9126 | >20%                    |                 2 |              0.4563  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9209 | >20%                    |                10 |              0.09209 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9232 | >20%                    |                10 |              0.09232 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9316 | >20%                    |                10 |              0.09316 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.936  | 15-20%                  |                10 |              0.0936  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9434 | >20%                    |                 5 |              0.18868 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9536 | >20%                    |                10 |              0.09536 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.966  | >20%                    |                 5 |              0.1932  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9693 | >20%                    |                10 |              0.09693 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0256 |                         |                 5 |              0.20512 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0301 | >20%                    |                 5 |              0.20602 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0333 | 15-20%                  |                10 |              0.10333 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0406 | >20%                    |                10 |              0.10406 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0507 | 15-20%                  |                 2 |              0.52535 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0788 |                         |                10 |              0.10788 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0798 | >20%                    |                 5 |              0.21596 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0934 | >20%                    |                10 |              0.10934 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1192 | >20%                    |                 2 |              0.5596  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1842 | >20%                    |                 5 |              0.23684 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.243  | >20%                    |                10 |              0.1243  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2861 | >20%                    |                 5 |              0.25722 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.295  | >20%                    |                10 |              0.1295  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2996 | 15-20%                  |                10 |              0.12996 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3269 |                         |                 5 |              0.26538 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3339 | >20%                    |                 5 |              0.26678 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.349  | >20%                    |                 5 |              0.2698  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3971 | 10-15%                  |                10 |              0.13971 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4308 | 5-10%                   |                 2 |              0.7154  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4508 | 5-10%                   |                 5 |              0.29016 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.4539 | 5-10%                   |                 2 |              0.72695 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4586 | >20%                    |                10 |              0.14586 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4633 | 10-15%                  |                 2 |              0.73165 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5118 | >20%                    |                10 |              0.15118 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5158 | 5-10%                   |                10 |              0.15158 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5767 | 15-20%                  |                10 |              0.15767 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5848 | 15-20%                  |                 5 |              0.31696 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.5945 | >20%                    |                10 |              0.15945 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6124 | >20%                    |                10 |              0.16124 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6252 | >20%                    |                10 |              0.16252 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8556 |                         |                10 |              0.18556 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0274 | 5-10%                   |                 2 |              1.0137  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.7438 | >20%                    |                 5 |              0.54876 |