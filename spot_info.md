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

Data correct as of 2026-03-21 02:26:17.583930, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1104 | >20%                    |                 2 |              0.0552  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.115  | >20%                    |                 2 |              0.0575  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1367 | <5%                     |                 2 |              0.06835 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.166  | 10-15%                  |                 5 |              0.0332  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1908 | >20%                    |                 2 |              0.0954  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.1918 | >20%                    |                 2 |              0.0959  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2064 | 15-20%                  |                 2 |              0.1032  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2137 | 15-20%                  |                 2 |              0.10685 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2263 | <5%                     |                 2 |              0.11315 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2351 | >20%                    |                 2 |              0.11755 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2495 | >20%                    |                 2 |              0.12475 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2527 | >20%                    |                 2 |              0.12635 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2532 | 10-15%                  |                10 |              0.02532 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2575 | 10-15%                  |                 2 |              0.12875 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2657 | 5-10%                   |                10 |              0.02657 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2676 | 15-20%                  |                 5 |              0.05352 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2711 | >20%                    |                10 |              0.02711 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2745 | >20%                    |                 2 |              0.13725 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2816 | >20%                    |                 2 |              0.1408  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2851 | 15-20%                  |                 2 |              0.14255 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | >20%                    |                10 |              0.02887 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2889 | >20%                    |                 5 |              0.05778 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2907 | >20%                    |                 5 |              0.05814 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2947 | 5-10%                   |                 2 |              0.14735 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.2959 | 10-15%                  |                 2 |              0.14795 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2976 | >20%                    |                 2 |              0.1488  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2981 | >20%                    |                 5 |              0.05962 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3052 | 10-15%                  |                 2 |              0.1526  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3127 | >20%                    |                 2 |              0.15635 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3338 | 15-20%                  |                 5 |              0.06676 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3394 | 5-10%                   |                10 |              0.03394 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3429 | >20%                    |                10 |              0.03429 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3495 | >20%                    |                 5 |              0.0699  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3507 | >20%                    |                10 |              0.03507 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3512 | 15-20%                  |                 5 |              0.07024 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3519 | 10-15%                  |                 2 |              0.17595 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3542 | <5%                     |                 2 |              0.1771  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3549 | >20%                    |                 2 |              0.17745 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3557 | >20%                    |                 5 |              0.07114 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3592 | 15-20%                  |                10 |              0.03592 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3605 | 10-15%                  |                 5 |              0.0721  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3612 | <5%                     |                 5 |              0.07224 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3641 | >20%                    |                 5 |              0.07282 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3648 | <5%                     |                 2 |              0.1824  |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3685 | >20%                    |                 5 |              0.0737  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3715 | >20%                    |                 2 |              0.18575 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3724 | 15-20%                  |                 2 |              0.1862  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3798 | >20%                    |                10 |              0.03798 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3806 | >20%                    |                 2 |              0.1903  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3812 | >20%                    |                 2 |              0.1906  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3819 | >20%                    |                 5 |              0.07638 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3823 | <5%                     |                10 |              0.03823 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.3876 | <5%                     |                10 |              0.03876 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3901 | <5%                     |                 5 |              0.07802 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3905 | >20%                    |                 2 |              0.19525 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3954 | >20%                    |                 5 |              0.07908 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3961 | 10-15%                  |                 2 |              0.19805 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4026 | >20%                    |                 5 |              0.08052 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4037 | 15-20%                  |                 2 |              0.20185 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4129 | <5%                     |                 5 |              0.08258 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4198 | 10-15%                  |                 2 |              0.2099  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4231 | <5%                     |                10 |              0.04231 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4244 | >20%                    |                 5 |              0.08488 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4259 | >20%                    |                 2 |              0.21295 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4264 | 15-20%                  |                 2 |              0.2132  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4292 | >20%                    |                 2 |              0.2146  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4378 | <5%                     |                 2 |              0.2189  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4425 | >20%                    |                 2 |              0.22125 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4426 | >20%                    |                 5 |              0.08852 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4457 | >20%                    |                10 |              0.04457 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4605 | >20%                    |                 5 |              0.0921  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4696 | >20%                    |                 2 |              0.2348  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4713 | >20%                    |                 2 |              0.23565 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4787 | 15-20%                  |                 5 |              0.09574 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4812 | 15-20%                  |                10 |              0.04812 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4836 | >20%                    |                 5 |              0.09672 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4873 | >20%                    |                 5 |              0.09746 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4878 | >20%                    |                 5 |              0.09756 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4883 | >20%                    |                 5 |              0.09766 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4917 | >20%                    |                 2 |              0.24585 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4929 | >20%                    |                 2 |              0.24645 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.495  | >20%                    |                 5 |              0.099   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4972 | >20%                    |                 5 |              0.09944 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5053 | >20%                    |                 5 |              0.10106 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5058 | <5%                     |                10 |              0.05058 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5077 | >20%                    |                 5 |              0.10154 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5092 | >20%                    |                 2 |              0.2546  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5109 | 15-20%                  |                 2 |              0.25545 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.513  | >20%                    |                 5 |              0.1026  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5163 | >20%                    |                10 |              0.05163 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5168 | >20%                    |                 5 |              0.10336 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5246 | 5-10%                   |                 5 |              0.10492 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.527  | >20%                    |                 5 |              0.1054  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5544 | 5-10%                   |                10 |              0.05544 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5555 | >20%                    |                10 |              0.05555 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5581 | >20%                    |                 5 |              0.11162 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5605 | >20%                    |                 5 |              0.1121  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.565  | >20%                    |                10 |              0.0565  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5656 | >20%                    |                 2 |              0.2828  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.572  | <5%                     |                 2 |              0.286   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.581  | >20%                    |                10 |              0.0581  |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5844 | >20%                    |                 2 |              0.2922  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5847 | 10-15%                  |                10 |              0.05847 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5876 | 5-10%                   |                 2 |              0.2938  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5942 | >20%                    |                10 |              0.05942 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.595  | >20%                    |                 5 |              0.119   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6027 | 10-15%                  |                 5 |              0.12054 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6037 | >20%                    |                 2 |              0.30185 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6067 | 15-20%                  |                10 |              0.06067 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6072 | <5%                     |                10 |              0.06072 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6152 | >20%                    |                10 |              0.06152 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6202 | >20%                    |                 2 |              0.3101  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6357 | >20%                    |                 5 |              0.12714 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6362 | 10-15%                  |                 2 |              0.3181  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6388 | >20%                    |                 2 |              0.3194  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6408 | >20%                    |                10 |              0.06408 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6455 | >20%                    |                 5 |              0.1291  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6462 | >20%                    |                10 |              0.06462 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6498 | >20%                    |                 5 |              0.12996 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6529 | >20%                    |                10 |              0.06529 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6565 | 5-10%                   |                10 |              0.06565 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6646 | 5-10%                   |                 5 |              0.13292 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.665  | >20%                    |                 5 |              0.133   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6667 | >20%                    |                 5 |              0.13334 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6963 | 5-10%                   |                 2 |              0.34815 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.706  | >20%                    |                 5 |              0.1412  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7093 | >20%                    |                 2 |              0.35465 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7251 | >20%                    |                10 |              0.07251 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7298 | >20%                    |                10 |              0.07298 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7433 | >20%                    |                10 |              0.07433 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.744  | >20%                    |                 5 |              0.1488  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7651 | >20%                    |                10 |              0.07651 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7676 | >20%                    |                 5 |              0.15352 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7681 | >20%                    |                10 |              0.07681 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7682 | >20%                    |                 5 |              0.15364 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7708 | >20%                    |                10 |              0.07708 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7733 | >20%                    |                 5 |              0.15466 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7858 | >20%                    |                10 |              0.07858 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8097 | 5-10%                   |                 2 |              0.40485 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8168 | >20%                    |                 5 |              0.16336 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8176 | >20%                    |                 5 |              0.16352 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8296 | 5-10%                   |                10 |              0.08296 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8381 | >20%                    |                10 |              0.08381 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8385 | >20%                    |                 2 |              0.41925 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8534 | >20%                    |                10 |              0.08534 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.859  | 15-20%                  |                10 |              0.0859  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8613 | >20%                    |                 5 |              0.17226 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8881 | 15-20%                  |                10 |              0.08881 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8981 | >20%                    |                10 |              0.08981 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8994 | 10-15%                  |                10 |              0.08994 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9066 | >20%                    |                10 |              0.09066 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9066 | >20%                    |                 5 |              0.18132 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9141 | >20%                    |                10 |              0.09141 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9211 | >20%                    |                10 |              0.09211 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.927  | >20%                    |                 2 |              0.4635  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9277 | >20%                    |                10 |              0.09277 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9366 | >20%                    |                10 |              0.09366 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9444 | >20%                    |                 2 |              0.4722  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9614 | >20%                    |                 2 |              0.4807  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9635 | >20%                    |                10 |              0.09635 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9669 | >20%                    |                 5 |              0.19338 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9673 | 5-10%                   |                10 |              0.09673 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9848 | >20%                    |                10 |              0.09848 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0071 | >20%                    |                10 |              0.10071 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0123 | >20%                    |                10 |              0.10123 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0146 | 15-20%                  |                10 |              0.10146 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0465 | >20%                    |                 5 |              0.2093  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      1.0564 | >20%                    |                 5 |              0.21128 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0744 | <5%                     |                 5 |              0.21488 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.163  | >20%                    |                 5 |              0.2326  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1749 | 10-15%                  |                10 |              0.11749 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2205 | 5-10%                   |                 2 |              0.61025 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3173 | <5%                     |                 2 |              0.65865 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3237 | 10-15%                  |                 2 |              0.66185 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3317 | >20%                    |                10 |              0.13317 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.341  | >20%                    |                 5 |              0.2682  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3581 | 15-20%                  |                10 |              0.13581 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.37   | >20%                    |                10 |              0.137   |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4061 | >20%                    |                 2 |              0.70305 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4416 | <5%                     |                 5 |              0.28832 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5047 | 15-20%                  |                 5 |              0.30094 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5234 | 15-20%                  |                10 |              0.15234 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7739 | >20%                    |                10 |              0.17739 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3293 | >20%                    |                10 |              0.23293 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.6662 | <5%                     |                10 |              0.26662 |