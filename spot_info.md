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

Data correct as of 2026-07-25 02:56:51.142811, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1356 | >20%                    |                 2 |              0.0678  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1649 | >20%                    |                 2 |              0.08245 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2033 | >20%                    |                 2 |              0.10165 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2047 | 15-20%                  |                 2 |              0.10235 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.219  | >20%                    |                 2 |              0.1095  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.241  | >20%                    |                 2 |              0.1205  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2539 | >20%                    |                 2 |              0.12695 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2614 | 15-20%                  |                 5 |              0.05228 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2683 | >20%                    |                 2 |              0.13415 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2691 | >20%                    |                 2 |              0.13455 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.272  | >20%                    |                 2 |              0.136   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2825 | 5-10%                   |                10 |              0.02825 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.284  | 10-15%                  |                 2 |              0.142   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2862 | >20%                    |                 2 |              0.1431  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2896 | 15-20%                  |                 2 |              0.1448  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2954 | >20%                    |                 2 |              0.1477  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.299  | 15-20%                  |                 2 |              0.1495  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3227 | >20%                    |                 2 |              0.16135 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.323  | >20%                    |                 5 |              0.0646  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3256 | 15-20%                  |                 5 |              0.06512 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3359 | >20%                    |                 5 |              0.06718 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3553 | 5-10%                   |                10 |              0.03553 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3564 | >20%                    |                10 |              0.03564 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3606 | >20%                    |                 5 |              0.07212 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3611 | >20%                    |                 2 |              0.18055 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.3669 | >20%                    |                10 |              0.03669 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3675 | <5%                     |                 2 |              0.18375 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3867 | >20%                    |                 5 |              0.07734 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3882 | >20%                    |                 5 |              0.07764 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3906 | 10-15%                  |                 2 |              0.1953  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3955 | 15-20%                  |                 2 |              0.19775 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3991 | >20%                    |                 2 |              0.19955 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4011 | >20%                    |                 5 |              0.08022 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4071 | >20%                    |                 2 |              0.20355 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4101 | 5-10%                   |                10 |              0.04101 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4145 | >20%                    |                10 |              0.04145 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4212 | >20%                    |                 5 |              0.08424 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.422  | 10-15%                  |                 2 |              0.211   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4258 | 10-15%                  |                 2 |              0.2129  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4323 | >20%                    |                10 |              0.04323 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4337 | >20%                    |                 5 |              0.08674 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.447  | >20%                    |                 5 |              0.0894  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4527 | >20%                    |                 2 |              0.22635 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4565 | >20%                    |                 2 |              0.22825 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4615 | >20%                    |                 5 |              0.0923  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.463  | >20%                    |                 2 |              0.2315  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4648 | >20%                    |                 2 |              0.2324  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4748 | >20%                    |                 2 |              0.2374  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4762 | 10-15%                  |                10 |              0.04762 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4806 | <5%                     |                 2 |              0.2403  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4831 | >20%                    |                 5 |              0.09662 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4893 | 15-20%                  |                 5 |              0.09786 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4922 | >20%                    |                 5 |              0.09844 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4942 | >20%                    |                10 |              0.04942 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4994 | <5%                     |                 2 |              0.2497  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5042 | >20%                    |                 5 |              0.10084 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5067 | >20%                    |                10 |              0.05067 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5099 | >20%                    |                 5 |              0.10198 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.521  | >20%                    |                 2 |              0.2605  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.53   | >20%                    |                 5 |              0.106   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5315 | >20%                    |                 5 |              0.1063  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5406 | 15-20%                  |                 2 |              0.2703  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5575 | >20%                    |                 2 |              0.27875 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5577 | >20%                    |                 5 |              0.11154 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5581 | 10-15%                  |                 5 |              0.11162 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5676 | >20%                    |                 5 |              0.11352 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5752 | 5-10%                   |                 2 |              0.2876  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5889 | >20%                    |                 5 |              0.11778 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5934 | >20%                    |                 5 |              0.11868 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6285 | >20%                    |                 5 |              0.1257  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6322 | 15-20%                  |                 5 |              0.12644 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6469 | 5-10%                   |                 5 |              0.12938 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6539 | >20%                    |                10 |              0.06539 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6559 | >20%                    |                 2 |              0.32795 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6577 | >20%                    |                 2 |              0.32885 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6592 | >20%                    |                 5 |              0.13184 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6615 | >20%                    |                 5 |              0.1323  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6621 | >20%                    |                 5 |              0.13242 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6717 | >20%                    |                10 |              0.06717 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6943 | >20%                    |                 5 |              0.13886 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6982 | >20%                    |                10 |              0.06982 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7079 | >20%                    |                10 |              0.07079 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.709  | >20%                    |                 2 |              0.3545  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7138 | >20%                    |                 5 |              0.14276 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.714  | <5%                     |                 5 |              0.1428  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7162 | 15-20%                  |                10 |              0.07162 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7253 | >20%                    |                10 |              0.07253 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7289 | >20%                    |                10 |              0.07289 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7387 |                         |                 2 |              0.36935 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.7437 |                         |                 2 |              0.37185 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7569 | >20%                    |                 5 |              0.15138 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7721 | >20%                    |                10 |              0.07721 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7819 | 5-10%                   |                10 |              0.07819 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7875 | >20%                    |                 5 |              0.1575  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7918 | >20%                    |                10 |              0.07918 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7981 | <5%                     |                10 |              0.07981 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8025 | >20%                    |                 5 |              0.1605  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8133 | >20%                    |                 2 |              0.40665 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8209 | >20%                    |                10 |              0.08209 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8239 |                         |                 5 |              0.16478 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8443 | 15-20%                  |                 2 |              0.42215 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8544 | >20%                    |                 5 |              0.17088 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8598 | 15-20%                  |                10 |              0.08598 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8618 | 10-15%                  |                 2 |              0.4309  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8654 | >20%                    |                 2 |              0.4327  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8667 | >20%                    |                 5 |              0.17334 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8711 | 10-15%                  |                 2 |              0.43555 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8744 | >20%                    |                 2 |              0.4372  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8797 | 15-20%                  |                10 |              0.08797 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8909 | 15-20%                  |                10 |              0.08909 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.896  | >20%                    |                10 |              0.0896  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9189 | 5-10%                   |                 2 |              0.45945 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9278 | >20%                    |                 5 |              0.18556 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9289 | 5-10%                   |                10 |              0.09289 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9365 | >20%                    |                10 |              0.09365 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9461 | >20%                    |                10 |              0.09461 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9563 | >20%                    |                 5 |              0.19126 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.964  | >20%                    |                10 |              0.0964  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9718 | >20%                    |                10 |              0.09718 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9902 | 15-20%                  |                10 |              0.09902 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9926 | >20%                    |                10 |              0.09926 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9952 | >20%                    |                 5 |              0.19904 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0038 | >20%                    |                 5 |              0.20076 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0066 | >20%                    |                 2 |              0.5033  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0091 | >20%                    |                 5 |              0.20182 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0218 | >20%                    |                10 |              0.10218 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0664 | 5-10%                   |                 5 |              0.21328 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0675 |                         |                10 |              0.10675 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0861 | >20%                    |                10 |              0.10861 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0867 | >20%                    |                 2 |              0.54335 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1503 | >20%                    |                10 |              0.11503 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1576 | >20%                    |                 5 |              0.23152 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1878 | >20%                    |                10 |              0.11878 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1922 | 10-15%                  |                 2 |              0.5961  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.235  | 15-20%                  |                10 |              0.1235  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2611 | >20%                    |                10 |              0.12611 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.298  | 5-10%                   |                 2 |              0.649   |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3155 | 15-20%                  |                10 |              0.13155 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3297 | >20%                    |                10 |              0.13297 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3462 |                         |                 5 |              0.26924 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4172 | >20%                    |                 5 |              0.28344 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4436 | >20%                    |                10 |              0.14436 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.491  | 5-10%                   |                10 |              0.1491  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.5161 | >20%                    |                 5 |              0.30322 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.5442 |                         |                10 |              0.15442 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5637 | 10-15%                  |                10 |              0.15637 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5675 | 15-20%                  |                 5 |              0.3135  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5805 | 15-20%                  |                10 |              0.15805 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6039 | >20%                    |                10 |              0.16039 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6978 | >20%                    |                10 |              0.16978 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9362 | >20%                    |                10 |              0.19362 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.1641 | 5-10%                   |                 2 |              1.08205 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.2597 | >20%                    |                 5 |              0.45194 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.656  | >20%                    |                 5 |              0.5312  |