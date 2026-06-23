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

Data correct as of 2026-06-23 03:56:45.333246, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1604 | >20%                    |                 2 |              0.0802  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1834 | 15-20%                  |                 2 |              0.0917  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1993 | >20%                    |                 2 |              0.09965 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2088 | >20%                    |                 2 |              0.1044  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2137 | >20%                    |                 2 |              0.10685 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2178 | 15-20%                  |                 5 |              0.04356 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2495 | >20%                    |                 2 |              0.12475 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2551 | >20%                    |                 2 |              0.12755 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2572 | >20%                    |                 2 |              0.1286  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2572 | 10-15%                  |                 2 |              0.1286  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2637 | >20%                    |                 2 |              0.13185 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2662 | >20%                    |                 2 |              0.1331  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2676 | 15-20%                  |                 2 |              0.1338  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2714 | >20%                    |                 2 |              0.1357  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2759 | >20%                    |                 5 |              0.05518 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2804 | 15-20%                  |                 2 |              0.1402  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3014 | 15-20%                  |                 5 |              0.06028 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3016 | >20%                    |                 5 |              0.06032 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3205 | >20%                    |                 2 |              0.16025 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3269 | 10-15%                  |                 2 |              0.16345 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3271 | >20%                    |                 5 |              0.06542 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3271 | >20%                    |                 5 |              0.06542 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3278 | >20%                    |                 2 |              0.1639  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3297 | 5-10%                   |                10 |              0.03297 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3497 | <5%                     |                 2 |              0.17485 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3518 | >20%                    |                10 |              0.03518 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3615 | 10-15%                  |                 2 |              0.18075 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3671 | >20%                    |                 5 |              0.07342 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3699 | 15-20%                  |                 5 |              0.07398 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3722 | 5-10%                   |                10 |              0.03722 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3747 | 5-10%                   |                10 |              0.03747 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.377  | >20%                    |                 5 |              0.0754  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3847 | >20%                    |                 2 |              0.19235 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3848 | >20%                    |                 2 |              0.1924  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3877 | >20%                    |                10 |              0.03877 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4056 | >20%                    |                10 |              0.04056 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4067 | >20%                    |                 5 |              0.08134 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4085 | >20%                    |                 5 |              0.0817  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4114 | >20%                    |                 2 |              0.2057  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4122 | >20%                    |                 5 |              0.08244 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4156 | >20%                    |                 5 |              0.08312 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.433  | >20%                    |                 2 |              0.2165  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4382 | <5%                     |                 2 |              0.2191  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4404 | >20%                    |                 5 |              0.08808 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4421 | >20%                    |                10 |              0.04421 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4424 | 10-15%                  |                 2 |              0.2212  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4429 | >20%                    |                 5 |              0.08858 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.443  | >20%                    |                 2 |              0.2215  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4442 | >20%                    |                 5 |              0.08884 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4475 | <5%                     |                 2 |              0.22375 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4487 | >20%                    |                 2 |              0.22435 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4504 | >20%                    |                10 |              0.04504 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4517 | 10-15%                  |                10 |              0.04517 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4708 | 15-20%                  |                 2 |              0.2354  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4742 | >20%                    |                 5 |              0.09484 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4837 | 15-20%                  |                 5 |              0.09674 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4875 | >20%                    |                 5 |              0.0975  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4891 | >20%                    |                 2 |              0.24455 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5033 | 15-20%                  |                 2 |              0.25165 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5237 | 15-20%                  |                 2 |              0.26185 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5287 | >20%                    |                 2 |              0.26435 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5349 | 5-10%                   |                 5 |              0.10698 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5381 | 5-10%                   |                 2 |              0.26905 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.5385 | >20%                    |                 5 |              0.1077  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5388 | >20%                    |                 5 |              0.10776 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5482 | >20%                    |                 5 |              0.10964 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5495 | 5-10%                   |                 2 |              0.27475 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5503 | 10-15%                  |                 5 |              0.11006 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5537 | >20%                    |                 5 |              0.11074 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5648 | >20%                    |                 5 |              0.11296 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.565  | >20%                    |                 2 |              0.2825  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5701 | >20%                    |                10 |              0.05701 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.58   | >20%                    |                10 |              0.058   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5816 | >20%                    |                 5 |              0.11632 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.584  | 10-15%                  |                 2 |              0.292   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5915 | >20%                    |                 2 |              0.29575 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6046 |                         |                 2 |              0.3023  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6069 | >20%                    |                10 |              0.06069 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6109 | >20%                    |                 5 |              0.12218 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6111 | >20%                    |                 5 |              0.12222 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6236 | >20%                    |                 2 |              0.3118  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6274 | <5%                     |                 5 |              0.12548 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6398 | >20%                    |                10 |              0.06398 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6416 | >20%                    |                10 |              0.06416 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6445 | >20%                    |                 5 |              0.1289  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6468 | >20%                    |                 2 |              0.3234  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6599 | >20%                    |                 5 |              0.13198 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.677  | >20%                    |                 2 |              0.3385  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6771 | >20%                    |                 2 |              0.33855 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6862 | >20%                    |                10 |              0.06862 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6902 | 15-20%                  |                10 |              0.06902 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6905 | >20%                    |                 5 |              0.1381  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6984 | >20%                    |                 5 |              0.13968 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7006 | 15-20%                  |                10 |              0.07006 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7011 | >20%                    |                 2 |              0.35055 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7131 | >20%                    |                 5 |              0.14262 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7189 | >20%                    |                10 |              0.07189 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7193 | >20%                    |                 5 |              0.14386 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7293 | 5-10%                   |                10 |              0.07293 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7315 | 5-10%                   |                 5 |              0.1463  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.7345 |                         |                 2 |              0.36725 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7523 | >20%                    |                10 |              0.07523 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7534 | >20%                    |                 2 |              0.3767  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7538 | <5%                     |                10 |              0.07538 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7683 | >20%                    |                 5 |              0.15366 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.782  | >20%                    |                 5 |              0.1564  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7839 | >20%                    |                10 |              0.07839 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8149 | >20%                    |                 5 |              0.16298 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8382 | 5-10%                   |                10 |              0.08382 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8392 | 15-20%                  |                10 |              0.08392 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8524 | >20%                    |                 5 |              0.17048 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8759 | 15-20%                  |                10 |              0.08759 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8798 | >20%                    |                10 |              0.08798 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8807 |                         |                 5 |              0.17614 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.883  |                         |                10 |              0.0883  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8845 | >20%                    |                10 |              0.08845 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9012 | >20%                    |                10 |              0.09012 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9104 | >20%                    |                10 |              0.09104 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9234 | 10-15%                  |                 2 |              0.4617  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.931  | 5-10%                   |                 2 |              0.4655  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9557 | >20%                    |                10 |              0.09557 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9573 | >20%                    |                10 |              0.09573 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9581 | 5-10%                   |                10 |              0.09581 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9655 | >20%                    |                10 |              0.09655 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9669 | >20%                    |                 5 |              0.19338 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9677 | 15-20%                  |                10 |              0.09677 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9719 | >20%                    |                10 |              0.09719 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9728 | >20%                    |                 5 |              0.19456 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.98   | >20%                    |                10 |              0.098   |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9814 | >20%                    |                10 |              0.09814 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9973 | >20%                    |                 5 |              0.19946 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.012  | >20%                    |                 2 |              0.506   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0431 | >20%                    |                10 |              0.10431 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0529 | >20%                    |                 5 |              0.21058 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0568 | 15-20%                  |                10 |              0.10568 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0884 | 10-15%                  |                 2 |              0.5442  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1078 | >20%                    |                10 |              0.11078 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1092 | >20%                    |                 5 |              0.22184 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1132 | >20%                    |                 5 |              0.22264 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1141 |                         |                 5 |              0.22282 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1378 | >20%                    |                10 |              0.11378 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1705 | >20%                    |                10 |              0.11705 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.2    | >20%                    |                10 |              0.12    |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3855 | 15-20%                  |                10 |              0.13855 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3947 | >20%                    |                 5 |              0.27894 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3969 | >20%                    |                 5 |              0.27938 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4409 | 10-15%                  |                10 |              0.14409 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4443 |                         |                10 |              0.14443 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.4739 | 5-10%                   |                 2 |              0.73695 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4867 | 15-20%                  |                 5 |              0.29734 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5489 | >20%                    |                10 |              0.15489 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.688  | 15-20%                  |                10 |              0.1688  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.1707 | >20%                    |                10 |              0.21707 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4406 | >20%                    |                10 |              0.24406 |