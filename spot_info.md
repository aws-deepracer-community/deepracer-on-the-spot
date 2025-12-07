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

Data correct as of 2025-12-07 02:05:31.294752, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1268 | >20%                    |                 2 |              0.0634  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1462 | >20%                    |                 2 |              0.0731  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.178  | <5%                     |                 2 |              0.089   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1894 | >20%                    |                 2 |              0.0947  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1916 | <5%                     |                 2 |              0.0958  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1947 | 10-15%                  |                 2 |              0.09735 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2282 | >20%                    |                 2 |              0.1141  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | >20%                    |                10 |              0.02308 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2342 | >20%                    |                 2 |              0.1171  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2349 | >20%                    |                 2 |              0.11745 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2418 | >20%                    |                 5 |              0.04836 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2479 | >20%                    |                 5 |              0.04958 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.254  | >20%                    |                 2 |              0.127   |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2555 | 10-15%                  |                 5 |              0.0511  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2583 | >20%                    |                 5 |              0.05166 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2664 | 15-20%                  |                 2 |              0.1332  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2797 | >20%                    |                 2 |              0.13985 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2811 | 5-10%                   |                 5 |              0.05622 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2847 | 10-15%                  |                 2 |              0.14235 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2857 | >20%                    |                 2 |              0.14285 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2864 | <5%                     |                 2 |              0.1432  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2893 | >20%                    |                 2 |              0.14465 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3041 | 15-20%                  |                 2 |              0.15205 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3054 | 5-10%                   |                 2 |              0.1527  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.306  | >20%                    |                 2 |              0.153   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3126 | >20%                    |                 5 |              0.06252 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3211 | 5-10%                   |                 2 |              0.16055 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3231 | 10-15%                  |                10 |              0.03231 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3368 | >20%                    |                 2 |              0.1684  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3438 | 5-10%                   |                10 |              0.03438 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3513 | 10-15%                  |                 2 |              0.17565 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3531 | >20%                    |                 2 |              0.17655 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3543 | >20%                    |                10 |              0.03543 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3579 | 15-20%                  |                 2 |              0.17895 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3669 | >20%                    |                 2 |              0.18345 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3701 | 15-20%                  |                 2 |              0.18505 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3744 | >20%                    |                 5 |              0.07488 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3759 | >20%                    |                 2 |              0.18795 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3759 | <5%                     |                 2 |              0.18795 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3783 | >20%                    |                 5 |              0.07566 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3791 | >20%                    |                 5 |              0.07582 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3841 | >20%                    |                 2 |              0.19205 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3848 | 10-15%                  |                10 |              0.03848 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3859 | 15-20%                  |                 5 |              0.07718 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3902 | >20%                    |                 2 |              0.1951  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3925 | >20%                    |                 2 |              0.19625 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3948 | 10-15%                  |                10 |              0.03948 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3955 | >20%                    |                 2 |              0.19775 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3995 | >20%                    |                 2 |              0.19975 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.404  | <5%                     |                 5 |              0.0808  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4064 | 10-15%                  |                 5 |              0.08128 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4152 | 5-10%                   |                 2 |              0.2076  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4208 | >20%                    |                10 |              0.04208 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.426  | 15-20%                  |                 5 |              0.0852  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4271 | <5%                     |                 2 |              0.21355 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4272 | 15-20%                  |                 2 |              0.2136  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4298 | 15-20%                  |                10 |              0.04298 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4362 | <5%                     |                 2 |              0.2181  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4395 | 15-20%                  |                 5 |              0.0879  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.44   | >20%                    |                 5 |              0.088   |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4435 | >20%                    |                 5 |              0.0887  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.444  | 10-15%                  |                 5 |              0.0888  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4446 | >20%                    |                 2 |              0.2223  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.446  | >20%                    |                 5 |              0.0892  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4483 | >20%                    |                 2 |              0.22415 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4497 | <5%                     |                10 |              0.04497 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.451  | >20%                    |                 2 |              0.2255  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4531 | >20%                    |                 5 |              0.09062 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4569 | >20%                    |                 5 |              0.09138 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4596 | >20%                    |                10 |              0.04596 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4679 | >20%                    |                 2 |              0.23395 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4705 | >20%                    |                 5 |              0.0941  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4758 | 15-20%                  |                 5 |              0.09516 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4801 | 10-15%                  |                 2 |              0.24005 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4838 | >20%                    |                10 |              0.04838 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4839 | 15-20%                  |                10 |              0.04839 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4883 | 10-15%                  |                 2 |              0.24415 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4895 | >20%                    |                 5 |              0.0979  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.495  | >20%                    |                 5 |              0.099   |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4989 | 10-15%                  |                 5 |              0.09978 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5014 | >20%                    |                 5 |              0.10028 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5086 | >20%                    |                 5 |              0.10172 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5159 | 5-10%                   |                10 |              0.05159 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5165 | 15-20%                  |                 5 |              0.1033  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5179 | 10-15%                  |                 5 |              0.10358 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5304 | 10-15%                  |                 2 |              0.2652  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5393 | <5%                     |                10 |              0.05393 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5394 | >20%                    |                 5 |              0.10788 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5421 | >20%                    |                 5 |              0.10842 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5429 | 10-15%                  |                 2 |              0.27145 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5517 | >20%                    |                 2 |              0.27585 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5542 | 15-20%                  |                 5 |              0.11084 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5579 | <5%                     |                 5 |              0.11158 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5618 | >20%                    |                 5 |              0.11236 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5631 | >20%                    |                 2 |              0.28155 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5638 | 10-15%                  |                 5 |              0.11276 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5668 | >20%                    |                 5 |              0.11336 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5764 | 15-20%                  |                 5 |              0.11528 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5876 | 15-20%                  |                 5 |              0.11752 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5876 | 10-15%                  |                 5 |              0.11752 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5886 | >20%                    |                 5 |              0.11772 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5913 | >20%                    |                10 |              0.05913 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5956 | 15-20%                  |                 5 |              0.11912 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5994 | >20%                    |                 2 |              0.2997  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6    | >20%                    |                 2 |              0.3     |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6044 | >20%                    |                 5 |              0.12088 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6178 | >20%                    |                 2 |              0.3089  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6243 | >20%                    |                 2 |              0.31215 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6253 | 10-15%                  |                 5 |              0.12506 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6256 | 5-10%                   |                 2 |              0.3128  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6469 | >20%                    |                 5 |              0.12938 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6536 | >20%                    |                10 |              0.06536 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6592 | 15-20%                  |                10 |              0.06592 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6593 | >20%                    |                10 |              0.06593 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6639 | >20%                    |                 5 |              0.13278 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6683 | >20%                    |                10 |              0.06683 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6697 | 5-10%                   |                10 |              0.06697 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6813 | 10-15%                  |                 5 |              0.13626 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6934 | >20%                    |                10 |              0.06934 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6937 | 5-10%                   |                 5 |              0.13874 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6957 | >20%                    |                 2 |              0.34785 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7008 | >20%                    |                 5 |              0.14016 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7051 | >20%                    |                10 |              0.07051 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7097 | >20%                    |                 5 |              0.14194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7244 | >20%                    |                 2 |              0.3622  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7252 | 10-15%                  |                10 |              0.07252 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7303 | >20%                    |                10 |              0.07303 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7324 | >20%                    |                 5 |              0.14648 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7346 | 15-20%                  |                10 |              0.07346 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7426 | >20%                    |                 5 |              0.14852 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7531 | >20%                    |                10 |              0.07531 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7635 | >20%                    |                10 |              0.07635 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7643 | 10-15%                  |                10 |              0.07643 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7647 | >20%                    |                10 |              0.07647 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7747 | >20%                    |                10 |              0.07747 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7809 | >20%                    |                10 |              0.07809 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7842 | 15-20%                  |                10 |              0.07842 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7871 | <5%                     |                10 |              0.07871 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8111 | 15-20%                  |                 5 |              0.16222 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8137 | >20%                    |                 5 |              0.16274 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.822  | 10-15%                  |                 2 |              0.411   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8289 | >20%                    |                10 |              0.08289 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8306 | >20%                    |                10 |              0.08306 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8352 | 10-15%                  |                10 |              0.08352 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8384 | >20%                    |                 2 |              0.4192  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8668 | 5-10%                   |                10 |              0.08668 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8682 | >20%                    |                10 |              0.08682 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8686 | >20%                    |                10 |              0.08686 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8806 | >20%                    |                 5 |              0.17612 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8875 | >20%                    |                 2 |              0.44375 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8949 | 10-15%                  |                10 |              0.08949 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8964 | >20%                    |                10 |              0.08964 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.8972 | 15-20%                  |                10 |              0.08972 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8983 | >20%                    |                 5 |              0.17966 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9268 | >20%                    |                 5 |              0.18536 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9323 | >20%                    |                 2 |              0.46615 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9589 | >20%                    |                10 |              0.09589 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9747 | >20%                    |                10 |              0.09747 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9755 | >20%                    |                 2 |              0.48775 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.983  | >20%                    |                 5 |              0.1966  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9922 | >20%                    |                10 |              0.09922 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.0028 | <5%                     |                 2 |              0.5014  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0087 | 15-20%                  |                10 |              0.10087 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.026  | >20%                    |                10 |              0.1026  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0304 | <5%                     |                10 |              0.10304 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0491 | 10-15%                  |                10 |              0.10491 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1493 | <5%                     |                 5 |              0.22986 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1873 | >20%                    |                10 |              0.11873 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2178 | >20%                    |                 5 |              0.24356 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2238 | 15-20%                  |                10 |              0.12238 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2454 | >20%                    |                10 |              0.12454 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2518 | >20%                    |                10 |              0.12518 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2761 | >20%                    |                10 |              0.12761 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3926 | >20%                    |                 2 |              0.6963  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4712 | >20%                    |                 2 |              0.7356  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4733 | 10-15%                  |                10 |              0.14733 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.509  | >20%                    |                10 |              0.1509  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5318 | >20%                    |                 5 |              0.30636 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5816 | 5-10%                   |                 5 |              0.31632 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0398 | 15-20%                  |                10 |              0.20398 |