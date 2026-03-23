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

Data correct as of 2026-03-23 02:41:41.343207, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1112 | >20%                    |                 2 |              0.0556  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.119  | >20%                    |                 2 |              0.0595  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1336 | <5%                     |                 2 |              0.0668  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1588 | 10-15%                  |                 5 |              0.03176 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1919 | >20%                    |                 2 |              0.09595 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1932 | 10-15%                  |                 5 |              0.03864 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1986 | <5%                     |                 2 |              0.0993  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2011 | 15-20%                  |                 2 |              0.10055 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2028 | 15-20%                  |                 2 |              0.1014  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2107 | >20%                    |                 2 |              0.10535 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2296 | >20%                    |                 2 |              0.1148  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.242  | 10-15%                  |                10 |              0.0242  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2488 | >20%                    |                 2 |              0.1244  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2499 | >20%                    |                 2 |              0.12495 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2568 | 10-15%                  |                 2 |              0.1284  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2639 | 5-10%                   |                10 |              0.02639 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2642 | 15-20%                  |                 5 |              0.05284 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2668 | >20%                    |                 2 |              0.1334  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2714 | >20%                    |                 2 |              0.1357  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2814 | 15-20%                  |                 2 |              0.1407  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | >20%                    |                10 |              0.02887 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2893 | >20%                    |                 5 |              0.05786 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2901 | >20%                    |                10 |              0.02901 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2927 | 5-10%                   |                 2 |              0.14635 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2943 | >20%                    |                 5 |              0.05886 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.297  | >20%                    |                 5 |              0.0594  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.2975 | 10-15%                  |                 2 |              0.14875 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3008 | 10-15%                  |                 2 |              0.1504  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3022 | >20%                    |                 2 |              0.1511  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3026 | >20%                    |                10 |              0.03026 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3103 | >20%                    |                 2 |              0.15515 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3306 | 5-10%                   |                10 |              0.03306 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3306 | <5%                     |                 5 |              0.06612 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.331  | >20%                    |                10 |              0.0331  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3311 | <5%                     |                 2 |              0.16555 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3507 | 15-20%                  |                 5 |              0.07014 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3525 | 10-15%                  |                 2 |              0.17625 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3533 | >20%                    |                 5 |              0.07066 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3542 | >20%                    |                 2 |              0.1771  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3551 | >20%                    |                 5 |              0.07102 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3576 | >20%                    |                 5 |              0.07152 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3617 | >20%                    |                10 |              0.03617 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3623 | <5%                     |                 2 |              0.18115 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3628 | 15-20%                  |                10 |              0.03628 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3673 | 10-15%                  |                 5 |              0.07346 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3685 | >20%                    |                 5 |              0.0737  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3685 | 15-20%                  |                 5 |              0.0737  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3708 | >20%                    |                 2 |              0.1854  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3728 | 15-20%                  |                 2 |              0.1864  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3751 | >20%                    |                 5 |              0.07502 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3783 | >20%                    |                 2 |              0.18915 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3937 | >20%                    |                 2 |              0.19685 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.397  | <5%                     |                10 |              0.0397  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3981 | <5%                     |                 5 |              0.07962 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3981 | <5%                     |                 5 |              0.07962 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.401  | >20%                    |                 5 |              0.0802  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4022 | 10-15%                  |                 2 |              0.2011  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4065 | 15-20%                  |                 2 |              0.20325 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4079 | 10-15%                  |                 2 |              0.20395 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4122 | >20%                    |                 5 |              0.08244 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4136 | <5%                     |                10 |              0.04136 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.4176 | <5%                     |                10 |              0.04176 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4236 | >20%                    |                10 |              0.04236 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4238 | >20%                    |                 2 |              0.2119  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4246 | >20%                    |                 2 |              0.2123  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4323 | >20%                    |                 2 |              0.21615 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4349 | >20%                    |                 5 |              0.08698 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4352 | <5%                     |                 2 |              0.2176  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.437  | 15-20%                  |                 2 |              0.2185  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4417 | >20%                    |                 2 |              0.22085 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4427 | >20%                    |                 5 |              0.08854 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4553 | >20%                    |                 2 |              0.22765 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4579 | >20%                    |                 5 |              0.09158 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4609 | >20%                    |                 5 |              0.09218 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4631 | >20%                    |                 2 |              0.23155 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4738 | >20%                    |                 5 |              0.09476 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4745 | >20%                    |                 2 |              0.23725 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4777 | >20%                    |                 2 |              0.23885 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4798 | >20%                    |                 5 |              0.09596 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4828 | 15-20%                  |                10 |              0.04828 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4841 | >20%                    |                 5 |              0.09682 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4856 | >20%                    |                 5 |              0.09712 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4866 | >20%                    |                 5 |              0.09732 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4875 | <5%                     |                10 |              0.04875 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4986 | >20%                    |                 5 |              0.09972 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.503  | >20%                    |                 2 |              0.2515  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5041 | 15-20%                  |                 5 |              0.10082 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5054 | >20%                    |                 5 |              0.10108 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5104 | >20%                    |                 5 |              0.10208 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5149 | >20%                    |                 2 |              0.25745 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5159 | 15-20%                  |                 2 |              0.25795 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5165 | 5-10%                   |                10 |              0.05165 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5336 | >20%                    |                 5 |              0.10672 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5422 | 5-10%                   |                 5 |              0.10844 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5423 | >20%                    |                 5 |              0.10846 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5555 | >20%                    |                10 |              0.05555 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5558 | >20%                    |                10 |              0.05558 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5564 | >20%                    |                10 |              0.05564 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5627 | >20%                    |                 5 |              0.11254 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5647 | >20%                    |                 5 |              0.11294 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5723 | >20%                    |                 5 |              0.11446 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5724 | >20%                    |                10 |              0.05724 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5732 | >20%                    |                 2 |              0.2866  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5769 | >20%                    |                 2 |              0.28845 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5859 | >20%                    |                10 |              0.05859 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5868 | >20%                    |                 5 |              0.11736 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5876 | 10-15%                  |                10 |              0.05876 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.591  | 5-10%                   |                 2 |              0.2955  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5961 | 10-15%                  |                 5 |              0.11922 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5985 | <5%                     |                10 |              0.05985 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6067 | >20%                    |                10 |              0.06067 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6209 | >20%                    |                 2 |              0.31045 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6239 | 15-20%                  |                10 |              0.06239 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6309 | >20%                    |                 5 |              0.12618 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6317 | >20%                    |                 2 |              0.31585 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6348 | 10-15%                  |                 2 |              0.3174  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6362 | >20%                    |                 5 |              0.12724 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.64   | >20%                    |                10 |              0.064   |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.649  | <5%                     |                 2 |              0.3245  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6496 | >20%                    |                10 |              0.06496 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.651  | >20%                    |                 5 |              0.1302  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6581 | >20%                    |                10 |              0.06581 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6624 | >20%                    |                 5 |              0.13248 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6651 | 5-10%                   |                10 |              0.06651 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6675 | >20%                    |                 5 |              0.1335  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6697 | 5-10%                   |                 5 |              0.13394 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7014 | 5-10%                   |                 2 |              0.3507  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.71   | >20%                    |                 2 |              0.355   |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.736  | >20%                    |                10 |              0.0736  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7425 | >20%                    |                 5 |              0.1485  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7435 | >20%                    |                 5 |              0.1487  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7468 | >20%                    |                10 |              0.07468 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7486 | >20%                    |                 5 |              0.14972 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.755  | >20%                    |                10 |              0.0755  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7574 | >20%                    |                10 |              0.07574 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7746 | >20%                    |                 5 |              0.15492 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7794 | >20%                    |                10 |              0.07794 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7857 | >20%                    |                10 |              0.07857 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8141 | >20%                    |                 5 |              0.16282 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8205 | >20%                    |                 5 |              0.1641  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8225 | >20%                    |                10 |              0.08225 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8256 | >20%                    |                10 |              0.08256 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8286 | 5-10%                   |                 2 |              0.4143  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.838  | >20%                    |                10 |              0.0838  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8387 | >20%                    |                 5 |              0.16774 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8426 | >20%                    |                 2 |              0.4213  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.853  | 5-10%                   |                10 |              0.0853  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8769 | 15-20%                  |                10 |              0.08769 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8838 | >20%                    |                 5 |              0.17676 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.896  | >20%                    |                10 |              0.0896  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9045 | >20%                    |                10 |              0.09045 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9132 | >20%                    |                10 |              0.09132 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9148 | 15-20%                  |                10 |              0.09148 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9172 | >20%                    |                 2 |              0.4586  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9179 | >20%                    |                10 |              0.09179 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9271 | 10-15%                  |                10 |              0.09271 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9357 | >20%                    |                10 |              0.09357 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9358 | >20%                    |                 2 |              0.4679  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9418 | >20%                    |                10 |              0.09418 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9568 | >20%                    |                 2 |              0.4784  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9644 | >20%                    |                10 |              0.09644 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9825 | 5-10%                   |                10 |              0.09825 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0019 | >20%                    |                10 |              0.10019 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0072 | >20%                    |                 5 |              0.20144 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0121 | <5%                     |                 5 |              0.20242 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0135 | 15-20%                  |                10 |              0.10135 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0211 | >20%                    |                10 |              0.10211 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      1.0456 | >20%                    |                 5 |              0.20912 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0457 | >20%                    |                10 |              0.10457 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1449 | >20%                    |                 5 |              0.22898 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1646 | >20%                    |                 5 |              0.23292 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.189  | 10-15%                  |                 2 |              0.5945  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1901 | 10-15%                  |                10 |              0.11901 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.2354 | <5%                     |                 2 |              0.6177  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2668 | 5-10%                   |                 2 |              0.6334  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2714 | >20%                    |                 5 |              0.25428 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3109 | 15-20%                  |                10 |              0.13109 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3184 | >20%                    |                10 |              0.13184 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3371 | >20%                    |                 2 |              0.66855 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.3521 | <5%                     |                 5 |              0.27042 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3559 | >20%                    |                10 |              0.13559 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4872 | 15-20%                  |                 5 |              0.29744 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5011 | 15-20%                  |                10 |              0.15011 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8715 | >20%                    |                10 |              0.18715 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.4648 | <5%                     |                10 |              0.24648 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4944 | >20%                    |                10 |              0.24944 |