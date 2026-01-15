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

Data correct as of 2026-01-15 02:02:56.454284, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1239 | >20%                    |                 2 |              0.06195 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1416 | >20%                    |                 5 |              0.02832 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1478 | >20%                    |                 2 |              0.0739  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.153  | >20%                    |                 2 |              0.0765  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1766 | <5%                     |                 2 |              0.0883  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.1904 | <5%                     |                 5 |              0.03808 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.196  | >20%                    |                 2 |              0.098   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1964 | >20%                    |                 2 |              0.0982  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2264 | >20%                    |                 5 |              0.04528 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2361 | >20%                    |                 2 |              0.11805 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2512 | 15-20%                  |                 5 |              0.05024 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2519 | >20%                    |                 2 |              0.12595 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2747 | >20%                    |                 2 |              0.13735 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2754 | >20%                    |                 5 |              0.05508 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.279  | >20%                    |                 2 |              0.1395  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2802 | >20%                    |                 2 |              0.1401  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2857 | 15-20%                  |                 2 |              0.14285 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2868 | >20%                    |                 2 |              0.1434  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2896 | >20%                    |                 2 |              0.1448  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2921 | >20%                    |                 5 |              0.05842 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | 5-10%                   |                10 |              0.02938 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.295  | >20%                    |                10 |              0.0295  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2973 | >20%                    |                 2 |              0.14865 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3064 | >20%                    |                 5 |              0.06128 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3113 | >20%                    |                 2 |              0.15565 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3209 | >20%                    |                 2 |              0.16045 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3231 | >20%                    |                 5 |              0.06462 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3409 | 5-10%                   |                10 |              0.03409 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3448 | 5-10%                   |                 5 |              0.06896 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3474 | 5-10%                   |                 2 |              0.1737  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3555 | <5%                     |                 5 |              0.0711  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3575 | 10-15%                  |                 2 |              0.17875 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3627 | >20%                    |                 5 |              0.07254 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3667 | >20%                    |                 2 |              0.18335 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3762 | 15-20%                  |                10 |              0.03762 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3814 | >20%                    |                 2 |              0.1907  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3834 | >20%                    |                 5 |              0.07668 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3861 | <5%                     |                 2 |              0.19305 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3897 | 5-10%                   |                 2 |              0.19485 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3935 | >20%                    |                 5 |              0.0787  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3963 | >20%                    |                 2 |              0.19815 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3988 | >20%                    |                 2 |              0.1994  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4    | >20%                    |                 5 |              0.08    |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4014 | 10-15%                  |                 2 |              0.2007  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4015 | 15-20%                  |                10 |              0.04015 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4036 | >20%                    |                 2 |              0.2018  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4043 | >20%                    |                 5 |              0.08086 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4065 | >20%                    |                10 |              0.04065 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4068 | >20%                    |                 5 |              0.08136 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4071 | >20%                    |                 2 |              0.20355 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4085 | >20%                    |                 5 |              0.0817  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4108 | <5%                     |                 2 |              0.2054  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4151 | >20%                    |                 2 |              0.20755 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4159 | >20%                    |                 5 |              0.08318 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4167 | >20%                    |                 2 |              0.20835 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4171 | >20%                    |                 2 |              0.20855 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4176 | >20%                    |                10 |              0.04176 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.419  | >20%                    |                 5 |              0.0838  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4203 | >20%                    |                 5 |              0.08406 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.424  | >20%                    |                10 |              0.0424  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4256 | >20%                    |                10 |              0.04256 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4285 | <5%                     |                10 |              0.04285 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4368 | 10-15%                  |                 2 |              0.2184  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4406 | >20%                    |                 2 |              0.2203  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4411 | 15-20%                  |                 5 |              0.08822 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4445 | <5%                     |                10 |              0.04445 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4478 | >20%                    |                10 |              0.04478 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.449  | >20%                    |                 2 |              0.2245  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4515 | >20%                    |                 2 |              0.22575 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4523 | >20%                    |                 5 |              0.09046 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4538 | >20%                    |                 5 |              0.09076 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4545 | >20%                    |                10 |              0.04545 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4601 | <5%                     |                 2 |              0.23005 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4605 | >20%                    |                 2 |              0.23025 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.477  | >20%                    |                 5 |              0.0954  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4776 | >20%                    |                 5 |              0.09552 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4786 | >20%                    |                 2 |              0.2393  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4921 | <5%                     |                 5 |              0.09842 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.493  | >20%                    |                 2 |              0.2465  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4939 | >20%                    |                 5 |              0.09878 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4941 | 15-20%                  |                 2 |              0.24705 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5012 | >20%                    |                 5 |              0.10024 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5113 | >20%                    |                 5 |              0.10226 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5132 | 15-20%                  |                 2 |              0.2566  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5153 | >20%                    |                 2 |              0.25765 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5355 | >20%                    |                 5 |              0.1071  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5369 | >20%                    |                 2 |              0.26845 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5401 | 15-20%                  |                 5 |              0.10802 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5432 | >20%                    |                 2 |              0.2716  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5472 | >20%                    |                 2 |              0.2736  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5508 | >20%                    |                 5 |              0.11016 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5597 | 5-10%                   |                 5 |              0.11194 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5648 | >20%                    |                 2 |              0.2824  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5676 | 10-15%                  |                 5 |              0.11352 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5707 | 15-20%                  |                 5 |              0.11414 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5818 | 15-20%                  |                 5 |              0.11636 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5823 | >20%                    |                 5 |              0.11646 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5823 | 15-20%                  |                10 |              0.05823 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5828 | >20%                    |                 5 |              0.11656 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6004 | 5-10%                   |                 5 |              0.12008 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.6034 | >20%                    |                 2 |              0.3017  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6071 | >20%                    |                 5 |              0.12142 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6167 | >20%                    |                10 |              0.06167 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6248 | <5%                     |                 2 |              0.3124  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6346 | >20%                    |                10 |              0.06346 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6351 | 5-10%                   |                 5 |              0.12702 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6357 | 10-15%                  |                 2 |              0.31785 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6486 | 15-20%                  |                 5 |              0.12972 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6522 | >20%                    |                 5 |              0.13044 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6526 | 10-15%                  |                 5 |              0.13052 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6585 | 15-20%                  |                10 |              0.06585 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6631 | >20%                    |                 2 |              0.33155 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6812 | >20%                    |                10 |              0.06812 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6886 | >20%                    |                 5 |              0.13772 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6928 | >20%                    |                 2 |              0.3464  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6974 | >20%                    |                10 |              0.06974 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7026 | >20%                    |                10 |              0.07026 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7104 | >20%                    |                 2 |              0.3552  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7189 | <5%                     |                10 |              0.07189 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7206 | <5%                     |                 5 |              0.14412 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7313 | >20%                    |                10 |              0.07313 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7328 | 15-20%                  |                 2 |              0.3664  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7347 | >20%                    |                 5 |              0.14694 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7369 |                         |                 2 |              0.36845 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7513 | 15-20%                  |                10 |              0.07513 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7576 | >20%                    |                10 |              0.07576 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7586 | 15-20%                  |                10 |              0.07586 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7609 | 5-10%                   |                10 |              0.07609 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.761  | 10-15%                  |                 5 |              0.1522  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7685 | >20%                    |                10 |              0.07685 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7695 | >20%                    |                 5 |              0.1539  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7728 | <5%                     |                10 |              0.07728 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7759 | >20%                    |                 2 |              0.38795 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7776 | >20%                    |                 2 |              0.3888  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7778 | >20%                    |                10 |              0.07778 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7848 | >20%                    |                 5 |              0.15696 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7964 | 10-15%                  |                 5 |              0.15928 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7967 | 15-20%                  |                10 |              0.07967 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7995 | <5%                     |                10 |              0.07995 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8027 | >20%                    |                10 |              0.08027 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8159 | 15-20%                  |                 5 |              0.16318 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8187 | >20%                    |                10 |              0.08187 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8576 | 15-20%                  |                10 |              0.08576 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8617 | 10-15%                  |                 5 |              0.17234 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.8684 | 10-15%                  |                10 |              0.08684 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8853 | >20%                    |                10 |              0.08853 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8881 | >20%                    |                10 |              0.08881 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8926 | >20%                    |                10 |              0.08926 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9413 | >20%                    |                 5 |              0.18826 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9501 | >20%                    |                10 |              0.09501 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9694 | >20%                    |                10 |              0.09694 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.974  | >20%                    |                10 |              0.0974  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9909 | >20%                    |                10 |              0.09909 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9938 | 15-20%                  |                10 |              0.09938 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9991 | 15-20%                  |                10 |              0.09991 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0024 | >20%                    |                 2 |              0.5012  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0183 | >20%                    |                 2 |              0.50915 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0328 | >20%                    |                 5 |              0.20656 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0463 | >20%                    |                 5 |              0.20926 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0526 | >20%                    |                 2 |              0.5263  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0539 | 15-20%                  |                10 |              0.10539 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0746 | >20%                    |                10 |              0.10746 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1029 | 10-15%                  |                10 |              0.11029 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1056 | >20%                    |                 2 |              0.5528  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1066 | <5%                     |                10 |              0.11066 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1155 | >20%                    |                10 |              0.11155 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1598 | >20%                    |                 5 |              0.23196 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1753 | >20%                    |                10 |              0.11753 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1812 | >20%                    |                 5 |              0.23624 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2093 | >20%                    |                10 |              0.12093 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2106 | 15-20%                  |                10 |              0.12106 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2475 | >20%                    |                10 |              0.12475 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2487 | >20%                    |                 5 |              0.24974 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2729 | >20%                    |                 5 |              0.25458 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3024 | >20%                    |                10 |              0.13024 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.4004 | 10-15%                  |                10 |              0.14004 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4461 | 10-15%                  |                 5 |              0.28922 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4543 |                         |                10 |              0.14543 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4552 | >20%                    |                 2 |              0.7276  |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.5091 |                         |                 5 |              0.30182 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5234 | >20%                    |                10 |              0.15234 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5508 | >20%                    |                10 |              0.15508 |