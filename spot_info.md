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

Data correct as of 2026-01-19 02:09:49.640920, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.152  | >20%                    |                 2 |              0.076   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1559 | >20%                    |                 2 |              0.07795 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1685 | >20%                    |                 2 |              0.08425 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1776 | >20%                    |                 2 |              0.0888  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1868 | >20%                    |                 2 |              0.0934  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1885 | 15-20%                  |                 5 |              0.0377  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1898 | <5%                     |                 2 |              0.0949  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.1904 | <5%                     |                 5 |              0.03808 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2067 | >20%                    |                 5 |              0.04134 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2395 | >20%                    |                 2 |              0.11975 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2554 | >20%                    |                 2 |              0.1277  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2687 | >20%                    |                 5 |              0.05374 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2716 | >20%                    |                 2 |              0.1358  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2792 | 15-20%                  |                 2 |              0.1396  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2834 | >20%                    |                 2 |              0.1417  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2851 | >20%                    |                 2 |              0.14255 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2916 | >20%                    |                 2 |              0.1458  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2918 | >20%                    |                 2 |              0.1459  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3075 | >20%                    |                 5 |              0.0615  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3082 | >20%                    |                10 |              0.03082 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3157 | >20%                    |                 2 |              0.15785 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3171 | 15-20%                  |                10 |              0.03171 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3277 | >20%                    |                 2 |              0.16385 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3286 | 5-10%                   |                 5 |              0.06572 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3295 | <5%                     |                 2 |              0.16475 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3326 | >20%                    |                 5 |              0.06652 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3352 | >20%                    |                 5 |              0.06704 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3364 | 5-10%                   |                10 |              0.03364 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3557 | 5-10%                   |                 2 |              0.17785 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3566 | >20%                    |                 2 |              0.1783  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3592 | 10-15%                  |                 2 |              0.1796  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.361  | >20%                    |                 2 |              0.1805  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3611 | 5-10%                   |                10 |              0.03611 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3643 | >20%                    |                 5 |              0.07286 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3757 | <5%                     |                 5 |              0.07514 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3787 | >20%                    |                 5 |              0.07574 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3791 | >20%                    |                 2 |              0.18955 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3823 | >20%                    |                10 |              0.03823 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3835 | 5-10%                   |                 2 |              0.19175 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3837 | >20%                    |                10 |              0.03837 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3945 | 15-20%                  |                 5 |              0.0789  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3965 | >20%                    |                 5 |              0.0793  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3981 | 10-15%                  |                 2 |              0.19905 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3998 | >20%                    |                 2 |              0.1999  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4011 | >20%                    |                 2 |              0.20055 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4021 | >20%                    |                 2 |              0.20105 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4035 | >20%                    |                 2 |              0.20175 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4035 | >20%                    |                 2 |              0.20175 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4046 | >20%                    |                10 |              0.04046 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4073 | <5%                     |                10 |              0.04073 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4074 | >20%                    |                 5 |              0.08148 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4075 | >20%                    |                 5 |              0.0815  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4098 | >20%                    |                 5 |              0.08196 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4126 | >20%                    |                 5 |              0.08252 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4144 | >20%                    |                 2 |              0.2072  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4166 | <5%                     |                 2 |              0.2083  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4171 | >20%                    |                 5 |              0.08342 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4202 | >20%                    |                 5 |              0.08404 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.423  | >20%                    |                 5 |              0.0846  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.425  | >20%                    |                 2 |              0.2125  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4272 | >20%                    |                10 |              0.04272 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4353 | 10-15%                  |                 2 |              0.21765 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4395 | >20%                    |                 2 |              0.21975 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4424 | 15-20%                  |                10 |              0.04424 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4435 | >20%                    |                 5 |              0.0887  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4444 | >20%                    |                 2 |              0.2222  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4474 | <5%                     |                 2 |              0.2237  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4484 | >20%                    |                 2 |              0.2242  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4534 | >20%                    |                 5 |              0.09068 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4537 | >20%                    |                 2 |              0.22685 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4611 | >20%                    |                 2 |              0.23055 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4677 | >20%                    |                 5 |              0.09354 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4719 | 15-20%                  |                 2 |              0.23595 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4753 | >20%                    |                 2 |              0.23765 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4759 | 15-20%                  |                 2 |              0.23795 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4784 | >20%                    |                10 |              0.04784 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4883 | <5%                     |                 5 |              0.09766 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4924 | <5%                     |                10 |              0.04924 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4942 | >20%                    |                 5 |              0.09884 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5008 | >20%                    |                 2 |              0.2504  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.501  | >20%                    |                 5 |              0.1002  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5075 | >20%                    |                 5 |              0.1015  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5082 | >20%                    |                 5 |              0.10164 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5223 | >20%                    |                10 |              0.05223 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.535  | >20%                    |                 5 |              0.107   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5359 | 15-20%                  |                 5 |              0.10718 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5366 | >20%                    |                 5 |              0.10732 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5375 | >20%                    |                 2 |              0.26875 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5438 | >20%                    |                 2 |              0.2719  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5452 | >20%                    |                 5 |              0.10904 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5474 | 5-10%                   |                 5 |              0.10948 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5596 | >20%                    |                10 |              0.05596 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5618 | <5%                     |                 2 |              0.2809  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5657 | >20%                    |                 2 |              0.28285 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5704 | 10-15%                  |                 5 |              0.11408 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5768 | 15-20%                  |                 5 |              0.11536 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5769 | >20%                    |                 5 |              0.11538 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5827 | 5-10%                   |                 5 |              0.11654 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5915 | 15-20%                  |                10 |              0.05915 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5973 | >20%                    |                 5 |              0.11946 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6028 | >20%                    |                 2 |              0.3014  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6045 | 15-20%                  |                 5 |              0.1209  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6236 | 10-15%                  |                 2 |              0.3118  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6312 | 5-10%                   |                 5 |              0.12624 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6417 | >20%                    |                10 |              0.06417 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6452 | >20%                    |                 5 |              0.12904 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6466 | >20%                    |                 2 |              0.3233  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6486 | 15-20%                  |                 5 |              0.12972 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6491 | >20%                    |                10 |              0.06491 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6498 |                         |                 2 |              0.3249  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6522 | >20%                    |                 2 |              0.3261  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.653  | 10-15%                  |                 5 |              0.1306  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6585 | 15-20%                  |                10 |              0.06585 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6638 | 10-15%                  |                 5 |              0.13276 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6755 | >20%                    |                 2 |              0.33775 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6797 | >20%                    |                 5 |              0.13594 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6955 | 10-15%                  |                10 |              0.06955 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6966 | >20%                    |                10 |              0.06966 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.7108 | >20%                    |                 2 |              0.3554  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7143 | >20%                    |                10 |              0.07143 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7151 | <5%                     |                10 |              0.07151 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7219 | 15-20%                  |                10 |              0.07219 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7238 | <5%                     |                 5 |              0.14476 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7238 | >20%                    |                10 |              0.07238 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7386 | >20%                    |                 2 |              0.3693  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7425 | >20%                    |                10 |              0.07425 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7466 | 5-10%                   |                10 |              0.07466 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7471 | >20%                    |                10 |              0.07471 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7495 | 15-20%                  |                 2 |              0.37475 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7508 | >20%                    |                 5 |              0.15016 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7524 | >20%                    |                 5 |              0.15048 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7528 | 15-20%                  |                10 |              0.07528 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7775 | >20%                    |                 5 |              0.1555  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7808 | >20%                    |                10 |              0.07808 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7905 | <5%                     |                10 |              0.07905 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8018 | 15-20%                  |                10 |              0.08018 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8043 | 15-20%                  |                 5 |              0.16086 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8102 | >20%                    |                 2 |              0.4051  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8152 | <5%                     |                10 |              0.08152 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8187 | >20%                    |                10 |              0.08187 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8282 | >20%                    |                10 |              0.08282 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8337 | >20%                    |                10 |              0.08337 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.862  | 10-15%                  |                 5 |              0.1724  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8734 | 15-20%                  |                10 |              0.08734 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8886 | >20%                    |                10 |              0.08886 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.912  | >20%                    |                10 |              0.0912  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9135 | >20%                    |                10 |              0.09135 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9251 | 10-15%                  |                 5 |              0.18502 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9542 | >20%                    |                 2 |              0.4771  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9549 | >20%                    |                 5 |              0.19098 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9578 | >20%                    |                 2 |              0.4789  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9596 | >20%                    |                 5 |              0.19192 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9612 | >20%                    |                10 |              0.09612 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9702 | >20%                    |                10 |              0.09702 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9703 | >20%                    |                10 |              0.09703 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0295 | 15-20%                  |                10 |              0.10295 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0349 | >20%                    |                 5 |              0.20698 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0379 | >20%                    |                 5 |              0.20758 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0395 | 15-20%                  |                10 |              0.10395 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.0436 | <5%                     |                10 |              0.10436 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0648 | >20%                    |                 5 |              0.21296 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1031 | 10-15%                  |                10 |              0.11031 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1116 | >20%                    |                 2 |              0.5558  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1117 | >20%                    |                10 |              0.11117 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1175 | >20%                    |                 2 |              0.55875 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1236 | >20%                    |                10 |              0.11236 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1608 | 15-20%                  |                10 |              0.11608 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1972 | >20%                    |                10 |              0.11972 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2026 | >20%                    |                 5 |              0.24052 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2371 | >20%                    |                10 |              0.12371 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2695 | 15-20%                  |                10 |              0.12695 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2733 | >20%                    |                10 |              0.12733 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2753 | >20%                    |                 5 |              0.25506 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.302  | >20%                    |                10 |              0.1302  |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3496 |                         |                10 |              0.13496 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4634 | >20%                    |                10 |              0.14634 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4641 | >20%                    |                 2 |              0.73205 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4856 | 10-15%                  |                 5 |              0.29712 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5398 | >20%                    |                10 |              0.15398 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.555  | 10-15%                  |                10 |              0.1555  |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.8393 |                         |                 5 |              0.36786 |