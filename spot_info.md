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

Data correct as of 2026-06-22 04:53:52.472514, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1683 | >20%                    |                 2 |              0.08415 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1834 | 15-20%                  |                 2 |              0.0917  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1964 | >20%                    |                 2 |              0.0982  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2007 | >20%                    |                 2 |              0.10035 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2126 | 15-20%                  |                 5 |              0.04252 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2195 | >20%                    |                 2 |              0.10975 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2471 | >20%                    |                 2 |              0.12355 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2504 | >20%                    |                 2 |              0.1252  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2555 | >20%                    |                 5 |              0.0511  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2567 | >20%                    |                 2 |              0.12835 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2569 | >20%                    |                 2 |              0.12845 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2572 | 10-15%                  |                 2 |              0.1286  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2633 | >20%                    |                 2 |              0.13165 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2679 | 15-20%                  |                 2 |              0.13395 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2706 | >20%                    |                 2 |              0.1353  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2804 | 15-20%                  |                 2 |              0.1402  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.299  | >20%                    |                 5 |              0.0598  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3011 | 15-20%                  |                 5 |              0.06022 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3104 | >20%                    |                 2 |              0.1552  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3176 | 10-15%                  |                 2 |              0.1588  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3255 | >20%                    |                 5 |              0.0651  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3268 | 5-10%                   |                10 |              0.03268 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3347 | >20%                    |                 2 |              0.16735 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3372 | >20%                    |                 5 |              0.06744 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3504 | >20%                    |                10 |              0.03504 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3505 | <5%                     |                 2 |              0.17525 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.351  | 15-20%                  |                 5 |              0.0702  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3613 | >20%                    |                 5 |              0.07226 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3708 | >20%                    |                 2 |              0.1854  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3742 | 10-15%                  |                 2 |              0.1871  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3743 | 5-10%                   |                10 |              0.03743 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.375  | >20%                    |                 5 |              0.075   |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3787 | 5-10%                   |                10 |              0.03787 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3822 | >20%                    |                 2 |              0.1911  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3867 | >20%                    |                10 |              0.03867 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4048 | >20%                    |                 5 |              0.08096 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4049 | >20%                    |                 2 |              0.20245 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4051 | >20%                    |                 5 |              0.08102 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4056 | >20%                    |                10 |              0.04056 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4152 | >20%                    |                 5 |              0.08304 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4171 | >20%                    |                 5 |              0.08342 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4203 | >20%                    |                 2 |              0.21015 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4352 | >20%                    |                 5 |              0.08704 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4366 | >20%                    |                10 |              0.04366 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4371 | <5%                     |                 2 |              0.21855 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4373 | <5%                     |                 2 |              0.21865 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4381 | >20%                    |                10 |              0.04381 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4392 | >20%                    |                 2 |              0.2196  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4394 | >20%                    |                 5 |              0.08788 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4406 | >20%                    |                 2 |              0.2203  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4466 | >20%                    |                 5 |              0.08932 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4478 | 10-15%                  |                 2 |              0.2239  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4626 | 15-20%                  |                 5 |              0.09252 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4687 | 10-15%                  |                10 |              0.04687 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4743 | >20%                    |                 5 |              0.09486 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4745 | 15-20%                  |                 2 |              0.23725 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.48   | >20%                    |                 5 |              0.096   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4891 | >20%                    |                 2 |              0.24455 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.517  | 15-20%                  |                 2 |              0.2585  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5237 | 15-20%                  |                 2 |              0.26185 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5267 | >20%                    |                 2 |              0.26335 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5274 | 5-10%                   |                 5 |              0.10548 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.5385 | >20%                    |                 5 |              0.1077  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5393 | 5-10%                   |                 2 |              0.26965 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5395 | 5-10%                   |                 2 |              0.26975 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5536 | 10-15%                  |                 5 |              0.11072 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.555  | >20%                    |                 5 |              0.111   |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5552 | >20%                    |                 5 |              0.11104 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5573 | >20%                    |                 2 |              0.27865 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5608 | >20%                    |                 5 |              0.11216 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5668 | 10-15%                  |                 2 |              0.2834  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5759 | >20%                    |                 5 |              0.11518 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.58   | >20%                    |                10 |              0.058   |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5833 |                         |                 2 |              0.29165 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5841 | >20%                    |                 5 |              0.11682 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5906 | >20%                    |                 5 |              0.11812 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5913 | >20%                    |                10 |              0.05913 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5928 | >20%                    |                 2 |              0.2964  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5956 | >20%                    |                10 |              0.05956 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6061 | >20%                    |                 5 |              0.12122 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6072 | <5%                     |                 5 |              0.12144 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6218 | >20%                    |                 2 |              0.3109  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6236 | >20%                    |                 5 |              0.12472 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6251 | >20%                    |                 2 |              0.31255 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6328 | >20%                    |                 5 |              0.12656 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6398 | >20%                    |                10 |              0.06398 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.643  | >20%                    |                10 |              0.0643  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6649 | >20%                    |                 2 |              0.33245 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6874 | 15-20%                  |                10 |              0.06874 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6905 | >20%                    |                 5 |              0.1381  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6927 | >20%                    |                10 |              0.06927 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6984 | >20%                    |                 5 |              0.13968 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7022 | >20%                    |                 2 |              0.3511  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7037 | >20%                    |                 2 |              0.35185 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7083 | >20%                    |                 5 |              0.14166 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7085 | 15-20%                  |                10 |              0.07085 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7181 | >20%                    |                10 |              0.07181 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7191 | >20%                    |                 5 |              0.14382 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7246 | 5-10%                   |                10 |              0.07246 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.731  | <5%                     |                10 |              0.0731  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.74   | >20%                    |                10 |              0.074   |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.7447 |                         |                 2 |              0.37235 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.746  | 5-10%                   |                 5 |              0.1492  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7566 | >20%                    |                 2 |              0.3783  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7682 | >20%                    |                 5 |              0.15364 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7776 | >20%                    |                10 |              0.07776 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7811 | 5-10%                   |                10 |              0.07811 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7846 | >20%                    |                 5 |              0.15692 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8056 | >20%                    |                 5 |              0.16112 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8297 | >20%                    |                 5 |              0.16594 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8392 | 15-20%                  |                10 |              0.08392 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8501 |                         |                 5 |              0.17002 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8632 | >20%                    |                10 |              0.08632 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8767 | 15-20%                  |                10 |              0.08767 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8798 | >20%                    |                10 |              0.08798 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.911  |                         |                10 |              0.0911  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9195 | >20%                    |                10 |              0.09195 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.921  | >20%                    |                10 |              0.0921  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9299 | 5-10%                   |                 2 |              0.46495 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9407 | 15-20%                  |                10 |              0.09407 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9422 | >20%                    |                10 |              0.09422 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9444 | >20%                    |                10 |              0.09444 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9537 | >20%                    |                 5 |              0.19074 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9609 | 10-15%                  |                 2 |              0.48045 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9732 | 5-10%                   |                10 |              0.09732 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9737 | >20%                    |                10 |              0.09737 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9759 | >20%                    |                10 |              0.09759 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9794 | >20%                    |                 5 |              0.19588 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9817 | >20%                    |                10 |              0.09817 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9942 | >20%                    |                 2 |              0.4971  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0049 | >20%                    |                10 |              0.10049 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0269 | >20%                    |                 5 |              0.20538 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0386 | 15-20%                  |                10 |              0.10386 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0529 | >20%                    |                 5 |              0.21058 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.056  | >20%                    |                10 |              0.1056  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0664 | >20%                    |                 5 |              0.21328 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1066 |                         |                 5 |              0.22132 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1092 | >20%                    |                 5 |              0.22184 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.1126 | 10-15%                  |                 2 |              0.5563  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1538 | >20%                    |                10 |              0.11538 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1796 | >20%                    |                10 |              0.11796 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1852 | >20%                    |                10 |              0.11852 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1923 | >20%                    |                10 |              0.11923 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3857 | >20%                    |                 5 |              0.27714 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4187 | 15-20%                  |                 5 |              0.28374 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.438  | 10-15%                  |                10 |              0.1438  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.4444 | 5-10%                   |                 2 |              0.7222  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.445  | >20%                    |                 5 |              0.289   |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4503 | 15-20%                  |                10 |              0.14503 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4904 |                         |                10 |              0.14904 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5882 | >20%                    |                10 |              0.15882 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6781 | 15-20%                  |                10 |              0.16781 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.0403 | >20%                    |                10 |              0.20403 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4486 | >20%                    |                10 |              0.24486 |