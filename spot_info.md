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

Data correct as of 2025-08-03 02:22:13.406729, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1037 | 5-10%                   |                 2 |              0.05185 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1063 | >20%                    |                 2 |              0.05315 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1503 | <5%                     |                 5 |              0.03006 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1899 | <5%                     |                 5 |              0.03798 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2077 | >20%                    |                 2 |              0.10385 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2306 | 15-20%                  |                 5 |              0.04612 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2405 | >20%                    |                 5 |              0.0481  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2443 | 15-20%                  |                 2 |              0.12215 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2456 | 15-20%                  |                 2 |              0.1228  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.257  | >20%                    |                 2 |              0.1285  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2621 | >20%                    |                 2 |              0.13105 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2741 | >20%                    |                 2 |              0.13705 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2746 | 5-10%                   |                 2 |              0.1373  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2749 | >20%                    |                 2 |              0.13745 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2781 | >20%                    |                 2 |              0.13905 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.312  | <5%                     |                 2 |              0.156   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3143 | 15-20%                  |                 2 |              0.15715 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3232 | 5-10%                   |                 2 |              0.1616  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3324 | 5-10%                   |                 5 |              0.06648 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3401 | >20%                    |                 2 |              0.17005 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3437 | 15-20%                  |                 2 |              0.17185 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3447 | >20%                    |                 2 |              0.17235 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3465 | 5-10%                   |                 2 |              0.17325 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3497 | <5%                     |                 2 |              0.17485 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3601 | >20%                    |                 5 |              0.07202 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3608 | >20%                    |                 5 |              0.07216 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3628 | >20%                    |                 5 |              0.07256 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3631 | 15-20%                  |                 2 |              0.18155 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3701 | 15-20%                  |                10 |              0.03701 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3766 | >20%                    |                 5 |              0.07532 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3818 | >20%                    |                 2 |              0.1909  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3834 | >20%                    |                 2 |              0.1917  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3941 | >20%                    |                 2 |              0.19705 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3987 | <5%                     |                 2 |              0.19935 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4057 | 10-15%                  |                 2 |              0.20285 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4069 | >20%                    |                 5 |              0.08138 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4301 | >20%                    |                 5 |              0.08602 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4329 | >20%                    |                 5 |              0.08658 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4467 | >20%                    |                 2 |              0.22335 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4472 | <5%                     |                 2 |              0.2236  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4503 | 15-20%                  |                 5 |              0.09006 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.454  | >20%                    |                 2 |              0.227   |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4595 | 5-10%                   |                 2 |              0.22975 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4633 | 15-20%                  |                10 |              0.04633 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4637 | >20%                    |                 5 |              0.09274 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4675 | >20%                    |                 2 |              0.23375 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4686 | 5-10%                   |                 2 |              0.2343  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4693 | >20%                    |                 5 |              0.09386 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.478  | >20%                    |                 5 |              0.0956  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4847 | 10-15%                  |                 2 |              0.24235 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4898 | <5%                     |                10 |              0.04898 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4899 | >20%                    |                 2 |              0.24495 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4926 | >20%                    |                 5 |              0.09852 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4938 | 10-15%                  |                 5 |              0.09876 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4941 | >20%                    |                 2 |              0.24705 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4971 | >20%                    |                 2 |              0.24855 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4985 | >20%                    |                 2 |              0.24925 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5002 | >20%                    |                 2 |              0.2501  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5018 | >20%                    |                 2 |              0.2509  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5124 | >20%                    |                 2 |              0.2562  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5176 | 5-10%                   |                 5 |              0.10352 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5238 | >20%                    |                10 |              0.05238 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.528  | >20%                    |                 5 |              0.1056  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5305 | >20%                    |                 5 |              0.1061  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5308 | <5%                     |                 2 |              0.2654  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5312 | 15-20%                  |                10 |              0.05312 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5363 | >20%                    |                 2 |              0.26815 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5378 | >20%                    |                 5 |              0.10756 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5379 | >20%                    |                 5 |              0.10758 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5395 | >20%                    |                 5 |              0.1079  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5416 | 15-20%                  |                 2 |              0.2708  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5466 | <5%                     |                10 |              0.05466 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5571 | 10-15%                  |                 5 |              0.11142 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5694 | >20%                    |                 5 |              0.11388 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5735 | >20%                    |                 2 |              0.28675 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5769 | >20%                    |                 2 |              0.28845 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.582  | 10-15%                  |                 5 |              0.1164  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5902 | >20%                    |                 5 |              0.11804 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5963 | >20%                    |                 2 |              0.29815 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.613  | >20%                    |                 2 |              0.3065  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6131 | 5-10%                   |                 5 |              0.12262 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6199 | >20%                    |                 5 |              0.12398 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6226 | 5-10%                   |                 2 |              0.3113  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6265 | >20%                    |                 5 |              0.1253  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6302 | 5-10%                   |                 5 |              0.12604 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6332 | <5%                     |                 5 |              0.12664 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6402 | >20%                    |                 2 |              0.3201  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.642  | 10-15%                  |                 5 |              0.1284  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6536 | 10-15%                  |                 2 |              0.3268  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6615 | >20%                    |                 5 |              0.1323  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6644 | >20%                    |                10 |              0.06644 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6682 | >20%                    |                 5 |              0.13364 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6772 | <5%                     |                 5 |              0.13544 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.68   | 15-20%                  |                10 |              0.068   |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6821 | >20%                    |                 5 |              0.13642 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6942 | >20%                    |                10 |              0.06942 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6974 | 15-20%                  |                 2 |              0.3487  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7004 | >20%                    |                 2 |              0.3502  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7089 | >20%                    |                 5 |              0.14178 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7216 | >20%                    |                10 |              0.07216 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7219 | 5-10%                   |                 5 |              0.14438 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7279 | 15-20%                  |                10 |              0.07279 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.737  | 15-20%                  |                 2 |              0.3685  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7408 | >20%                    |                 5 |              0.14816 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.757  | >20%                    |                 5 |              0.1514  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7571 | 15-20%                  |                10 |              0.07571 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7603 | >20%                    |                10 |              0.07603 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7618 | <5%                     |                10 |              0.07618 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7652 | >20%                    |                 5 |              0.15304 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7676 | 15-20%                  |                 5 |              0.15352 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7678 | >20%                    |                 5 |              0.15356 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8092 | >20%                    |                 2 |              0.4046  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8119 | >20%                    |                10 |              0.08119 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8128 | <5%                     |                 5 |              0.16256 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8142 | >20%                    |                 5 |              0.16284 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8265 | >20%                    |                 5 |              0.1653  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8468 | >20%                    |                10 |              0.08468 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8482 | 15-20%                  |                10 |              0.08482 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8499 | 5-10%                   |                10 |              0.08499 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8773 | >20%                    |                10 |              0.08773 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8825 | 15-20%                  |                10 |              0.08825 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.887  | 5-10%                   |                10 |              0.0887  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8988 | 5-10%                   |                 5 |              0.17976 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9154 | <5%                     |                10 |              0.09154 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.922  | >20%                    |                 5 |              0.1844  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9263 | 5-10%                   |                10 |              0.09263 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9301 | 5-10%                   |                10 |              0.09301 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9433 | 15-20%                  |                10 |              0.09433 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9434 | 5-10%                   |                10 |              0.09434 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9505 | >20%                    |                10 |              0.09505 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9597 | 5-10%                   |                10 |              0.09597 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9644 | >20%                    |                10 |              0.09644 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9687 | 15-20%                  |                 5 |              0.19374 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9714 | >20%                    |                 2 |              0.4857  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9799 | <5%                     |                10 |              0.09799 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.987  | <5%                     |                10 |              0.0987  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9908 | 15-20%                  |                10 |              0.09908 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9959 | 15-20%                  |                10 |              0.09959 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.015  | >20%                    |                10 |              0.1015  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0295 | >20%                    |                10 |              0.10295 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0401 | 5-10%                   |                10 |              0.10401 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0455 | 15-20%                  |                10 |              0.10455 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0604 | <5%                     |                10 |              0.10604 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0746 | 15-20%                  |                10 |              0.10746 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0929 | >20%                    |                 2 |              0.54645 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0936 | >20%                    |                10 |              0.10936 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0987 | 5-10%                   |                10 |              0.10987 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1177 | >20%                    |                 5 |              0.22354 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1314 | >20%                    |                10 |              0.11314 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1365 | >20%                    |                10 |              0.11365 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1426 | >20%                    |                10 |              0.11426 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1432 | >20%                    |                10 |              0.11432 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1449 | >20%                    |                10 |              0.11449 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1874 | >20%                    |                 5 |              0.23748 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2148 | >20%                    |                10 |              0.12148 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.2149 | >20%                    |                 5 |              0.24298 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2492 | <5%                     |                 2 |              0.6246  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3124 | >20%                    |                 5 |              0.26248 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3253 | 15-20%                  |                 5 |              0.26506 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3508 | >20%                    |                 2 |              0.6754  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4067 | 5-10%                   |                10 |              0.14067 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4281 | >20%                    |                10 |              0.14281 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4306 | >20%                    |                10 |              0.14306 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4441 | >20%                    |                 5 |              0.28882 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4443 | <5%                     |                10 |              0.14443 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.5083 | 5-10%                   |                 2 |              0.75415 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5445 | <5%                     |                 5 |              0.3089  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6769 | >20%                    |                10 |              0.16769 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8428 | 10-15%                  |                10 |              0.18428 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0781 | <5%                     |                10 |              0.20781 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1542 | 5-10%                   |                10 |              0.21542 |