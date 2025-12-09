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

Data correct as of 2025-12-09 01:56:47.949026, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1242 | >20%                    |                 2 |              0.0621  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1489 | >20%                    |                 2 |              0.07445 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1712 | <5%                     |                 2 |              0.0856  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1797 | 10-15%                  |                 2 |              0.08985 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1858 | >20%                    |                 2 |              0.0929  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1906 | <5%                     |                 2 |              0.0953  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2158 | >20%                    |                 2 |              0.1079  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | >20%                    |                10 |              0.02308 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2332 | >20%                    |                 2 |              0.1166  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2353 | >20%                    |                 5 |              0.04706 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2393 | >20%                    |                 5 |              0.04786 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2417 | >20%                    |                 2 |              0.12085 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2463 | >20%                    |                 2 |              0.12315 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2562 | 10-15%                  |                 5 |              0.05124 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2695 | 15-20%                  |                 2 |              0.13475 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.274  | 5-10%                   |                 5 |              0.0548  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2799 | >20%                    |                 2 |              0.13995 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2807 | >20%                    |                 5 |              0.05614 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2839 | <5%                     |                 2 |              0.14195 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2851 | >20%                    |                 2 |              0.14255 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.291  | 15-20%                  |                 2 |              0.1455  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.295  | >20%                    |                 2 |              0.1475  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2973 | 10-15%                  |                 2 |              0.14865 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2989 | 5-10%                   |                 2 |              0.14945 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3075 | >20%                    |                 2 |              0.15375 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3116 | >20%                    |                 5 |              0.06232 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3252 | 10-15%                  |                10 |              0.03252 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3299 | >20%                    |                 2 |              0.16495 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.343  | 5-10%                   |                10 |              0.0343  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3473 | >20%                    |                 2 |              0.17365 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3483 | 5-10%                   |                 2 |              0.17415 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3496 | >20%                    |                10 |              0.03496 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3525 | 10-15%                  |                 2 |              0.17625 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3662 | >20%                    |                 2 |              0.1831  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3728 | >20%                    |                 5 |              0.07456 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3778 | >20%                    |                 5 |              0.07556 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3792 | 15-20%                  |                 2 |              0.1896  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3803 | >20%                    |                 2 |              0.19015 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3839 | >20%                    |                 2 |              0.19195 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.384  | >20%                    |                 5 |              0.0768  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3843 | 10-15%                  |                10 |              0.03843 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3888 | 15-20%                  |                 5 |              0.07776 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3891 | <5%                     |                 2 |              0.19455 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3951 | >20%                    |                 2 |              0.19755 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3964 | 15-20%                  |                 2 |              0.1982  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3983 | 10-15%                  |                10 |              0.03983 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3985 | >20%                    |                 2 |              0.19925 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4    | 15-20%                  |                 5 |              0.08    |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4033 | 10-15%                  |                 5 |              0.08066 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4035 | <5%                     |                 5 |              0.0807  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4058 | 15-20%                  |                10 |              0.04058 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4072 | >20%                    |                 2 |              0.2036  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4089 | <5%                     |                 2 |              0.20445 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4109 | >20%                    |                10 |              0.04109 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4184 | >20%                    |                 5 |              0.08368 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4185 | >20%                    |                 2 |              0.20925 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4211 | 5-10%                   |                 2 |              0.21055 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4221 | 15-20%                  |                 5 |              0.08442 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4291 | 15-20%                  |                 2 |              0.21455 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4312 | >20%                    |                 5 |              0.08624 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.432  | 10-15%                  |                 5 |              0.0864  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4323 | <5%                     |                10 |              0.04323 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4394 | >20%                    |                 2 |              0.2197  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.442  | >20%                    |                10 |              0.0442  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4421 | >20%                    |                 5 |              0.08842 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4468 | >20%                    |                 5 |              0.08936 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4489 | >20%                    |                 5 |              0.08978 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4545 | >20%                    |                 2 |              0.22725 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4605 | >20%                    |                 5 |              0.0921  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4616 | <5%                     |                 2 |              0.2308  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4624 | >20%                    |                 2 |              0.2312  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4662 | 15-20%                  |                10 |              0.04662 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4742 | >20%                    |                 2 |              0.2371  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4828 | 5-10%                   |                10 |              0.04828 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4865 | 10-15%                  |                 2 |              0.24325 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4911 | 15-20%                  |                 5 |              0.09822 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4919 | >20%                    |                 5 |              0.09838 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4972 | 10-15%                  |                 5 |              0.09944 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4978 | 10-15%                  |                 5 |              0.09956 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5008 | >20%                    |                 5 |              0.10016 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5063 | 10-15%                  |                 2 |              0.25315 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5078 | >20%                    |                 5 |              0.10156 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5176 | >20%                    |                 5 |              0.10352 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5193 | 15-20%                  |                 5 |              0.10386 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5235 | >20%                    |                10 |              0.05235 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5301 | <5%                     |                10 |              0.05301 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5317 | 10-15%                  |                 2 |              0.26585 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5343 | >20%                    |                 5 |              0.10686 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5479 | >20%                    |                 2 |              0.27395 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5493 | 15-20%                  |                 5 |              0.10986 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5614 | >20%                    |                 5 |              0.11228 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5625 | >20%                    |                 5 |              0.1125  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5645 | <5%                     |                 5 |              0.1129  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5685 | >20%                    |                 5 |              0.1137  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5732 | 10-15%                  |                 5 |              0.11464 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.577  | >20%                    |                 5 |              0.1154  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5783 | >20%                    |                 2 |              0.28915 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.582  | 10-15%                  |                 2 |              0.291   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5871 | 15-20%                  |                 5 |              0.11742 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5874 | >20%                    |                 5 |              0.11748 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5906 | 15-20%                  |                 5 |              0.11812 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5919 | 10-15%                  |                 5 |              0.11838 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5922 | >20%                    |                10 |              0.05922 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5943 | >20%                    |                 5 |              0.11886 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6115 | >20%                    |                 2 |              0.30575 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6116 | 15-20%                  |                 5 |              0.12232 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6221 | >20%                    |                 2 |              0.31105 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6248 | >20%                    |                 2 |              0.3124  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.628  | >20%                    |                 2 |              0.314   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6407 | 10-15%                  |                 5 |              0.12814 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6517 | 15-20%                  |                10 |              0.06517 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6518 | 5-10%                   |                 2 |              0.3259  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6615 | >20%                    |                10 |              0.06615 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.662  | >20%                    |                 5 |              0.1324  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6653 | >20%                    |                 2 |              0.33265 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6736 | 5-10%                   |                 5 |              0.13472 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6794 | >20%                    |                10 |              0.06794 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6845 | 5-10%                   |                10 |              0.06845 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6907 | 10-15%                  |                 5 |              0.13814 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6972 | 10-15%                  |                10 |              0.06972 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6973 | >20%                    |                10 |              0.06973 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7067 | >20%                    |                10 |              0.07067 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7114 | >20%                    |                 5 |              0.14228 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7239 | >20%                    |                10 |              0.07239 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7305 | 15-20%                  |                10 |              0.07305 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7319 | >20%                    |                 5 |              0.14638 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7322 | >20%                    |                10 |              0.07322 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7339 | >20%                    |                10 |              0.07339 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7363 | >20%                    |                 5 |              0.14726 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7433 | >20%                    |                 2 |              0.37165 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7625 | 10-15%                  |                10 |              0.07625 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7631 | >20%                    |                10 |              0.07631 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7718 | >20%                    |                10 |              0.07718 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7763 | >20%                    |                 5 |              0.15526 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7771 | <5%                     |                10 |              0.07771 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7777 | >20%                    |                 5 |              0.15554 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7844 | >20%                    |                10 |              0.07844 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8074 | >20%                    |                 2 |              0.4037  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8122 | 15-20%                  |                10 |              0.08122 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.813  | >20%                    |                10 |              0.0813  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8139 | 15-20%                  |                 5 |              0.16278 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8159 | 5-10%                   |                10 |              0.08159 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8362 | >20%                    |                10 |              0.08362 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8409 | >20%                    |                10 |              0.08409 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8449 | 10-15%                  |                10 |              0.08449 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8453 | 10-15%                  |                 2 |              0.42265 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8744 | >20%                    |                10 |              0.08744 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8781 | >20%                    |                 5 |              0.17562 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8853 | >20%                    |                 5 |              0.17706 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8895 | >20%                    |                10 |              0.08895 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8906 | >20%                    |                10 |              0.08906 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8965 | 10-15%                  |                10 |              0.08965 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9013 | 15-20%                  |                10 |              0.09013 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9321 | >20%                    |                10 |              0.09321 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9504 | >20%                    |                 5 |              0.19008 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9518 | 15-20%                  |                10 |              0.09518 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9526 | >20%                    |                 5 |              0.19052 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9701 | >20%                    |                10 |              0.09701 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9817 | >20%                    |                 2 |              0.49085 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.9883 | <5%                     |                 2 |              0.49415 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9995 | >20%                    |                 2 |              0.49975 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.019  | >20%                    |                10 |              0.1019  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0194 | >20%                    |                10 |              0.10194 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0392 | >20%                    |                 2 |              0.5196  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0425 | 10-15%                  |                10 |              0.10425 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0468 | <5%                     |                10 |              0.10468 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1629 | 15-20%                  |                10 |              0.11629 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1724 | <5%                     |                 5 |              0.23448 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2106 | >20%                    |                10 |              0.12106 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2189 | >20%                    |                10 |              0.12189 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2676 | >20%                    |                 5 |              0.25352 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2718 | >20%                    |                10 |              0.12718 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.366  | >20%                    |                10 |              0.1366  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4374 | >20%                    |                 2 |              0.7187  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4527 | >20%                    |                 2 |              0.72635 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.5083 | >20%                    |                10 |              0.15083 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5118 | >20%                    |                 5 |              0.30236 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5148 | 10-15%                  |                10 |              0.15148 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5943 | 5-10%                   |                 5 |              0.31886 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0536 | 15-20%                  |                10 |              0.20536 |