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

Data correct as of 2024-10-23 01:37:26.125176, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1322 | 5-10%                   |                 2 |              0.0661  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1439 | <5%                     |                 2 |              0.07195 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.16   | <5%                     |                 2 |              0.08    |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1628 | <5%                     |                 2 |              0.0814  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1704 | 5-10%                   |                 2 |              0.0852  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.172  | <5%                     |                 5 |              0.0344  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.178  | 10-15%                  |                 2 |              0.089   |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1809 | <5%                     |                 2 |              0.09045 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.209  | >20%                    |                 2 |              0.1045  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2093 | 5-10%                   |                 5 |              0.04186 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.214  | >20%                    |                 2 |              0.107   |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2163 | <5%                     |                 5 |              0.04326 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2168 | 15-20%                  |                 2 |              0.1084  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2338 | <5%                     |                 2 |              0.1169  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.237  | 5-10%                   |                 2 |              0.1185  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2461 | <5%                     |                 2 |              0.12305 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2554 | >20%                    |                 2 |              0.1277  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2616 | <5%                     |                 2 |              0.1308  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2709 | <5%                     |                 2 |              0.13545 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2784 | 10-15%                  |                 2 |              0.1392  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2803 | 10-15%                  |                 5 |              0.05606 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2827 | 15-20%                  |                 2 |              0.14135 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2834 | >20%                    |                 5 |              0.05668 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2864 | <5%                     |                 2 |              0.1432  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2883 | 5-10%                   |                 5 |              0.05766 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2884 | <5%                     |                10 |              0.02884 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.305  | 10-15%                  |                 5 |              0.061   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3109 | >20%                    |                 2 |              0.15545 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3159 | <5%                     |                 5 |              0.06318 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3167 | 15-20%                  |                 2 |              0.15835 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3233 | 5-10%                   |                10 |              0.03233 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3245 | >20%                    |                 5 |              0.0649  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3269 | 10-15%                  |                 5 |              0.06538 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3405 | <5%                     |                10 |              0.03405 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3408 | <5%                     |                 2 |              0.1704  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.341  | >20%                    |                 5 |              0.0682  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3439 | <5%                     |                 2 |              0.17195 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3531 | >20%                    |                 2 |              0.17655 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3555 | 5-10%                   |                 2 |              0.17775 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3696 | 5-10%                   |                 5 |              0.07392 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3793 | <5%                     |                 5 |              0.07586 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3803 | 10-15%                  |                 2 |              0.19015 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3883 | >20%                    |                10 |              0.03883 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3904 | >20%                    |                 2 |              0.1952  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3916 | 15-20%                  |                 2 |              0.1958  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3924 | 5-10%                   |                 2 |              0.1962  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3975 | >20%                    |                10 |              0.03975 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3982 | 5-10%                   |                 5 |              0.07964 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4021 | >20%                    |                 2 |              0.20105 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4122 | <5%                     |                10 |              0.04122 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4136 | 15-20%                  |                 2 |              0.2068  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.414  | <5%                     |                 5 |              0.0828  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4158 | <5%                     |                 5 |              0.08316 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4217 | <5%                     |                 5 |              0.08434 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4288 | 15-20%                  |                 5 |              0.08576 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4293 | 5-10%                   |                 2 |              0.21465 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4313 | 5-10%                   |                10 |              0.04313 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4337 | >20%                    |                 2 |              0.21685 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4376 | >20%                    |                 2 |              0.2188  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4451 | 5-10%                   |                10 |              0.04451 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4452 | 15-20%                  |                 2 |              0.2226  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.447  | >20%                    |                 2 |              0.2235  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4504 | <5%                     |                10 |              0.04504 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4508 | <5%                     |                10 |              0.04508 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4508 | >20%                    |                 5 |              0.09016 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4545 | <5%                     |                 2 |              0.22725 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4549 | 5-10%                   |                 2 |              0.22745 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4618 | >20%                    |                10 |              0.04618 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.4685 | 15-20%                  |                 2 |              0.23425 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4709 | 5-10%                   |                 5 |              0.09418 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4733 | >20%                    |                 5 |              0.09466 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4744 | 15-20%                  |                 5 |              0.09488 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4878 | 5-10%                   |                 2 |              0.2439  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4944 | 10-15%                  |                 5 |              0.09888 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4993 | 5-10%                   |                 5 |              0.09986 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4997 | 10-15%                  |                 5 |              0.09994 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5044 | 10-15%                  |                10 |              0.05044 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5097 | >20%                    |                 2 |              0.25485 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5162 | >20%                    |                 5 |              0.10324 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.521  | 5-10%                   |                10 |              0.0521  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5262 | <5%                     |                 5 |              0.10524 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.527  | 5-10%                   |                 5 |              0.1054  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5298 | 15-20%                  |                 2 |              0.2649  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5331 | 5-10%                   |                 5 |              0.10662 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5343 | 5-10%                   |                 5 |              0.10686 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5375 | <5%                     |                 5 |              0.1075  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5379 | <5%                     |                 5 |              0.10758 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5431 | >20%                    |                 5 |              0.10862 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5653 | >20%                    |                 5 |              0.11306 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5754 | 5-10%                   |                 5 |              0.11508 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5881 | >20%                    |                 5 |              0.11762 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5937 | 15-20%                  |                 5 |              0.11874 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5993 | >20%                    |                 2 |              0.29965 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5997 | >20%                    |                 5 |              0.11994 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6021 | <5%                     |                10 |              0.06021 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6071 | >20%                    |                 5 |              0.12142 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6179 | 15-20%                  |                10 |              0.06179 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6472 | 5-10%                   |                10 |              0.06472 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6707 | >20%                    |                10 |              0.06707 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6747 | >20%                    |                10 |              0.06747 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6756 | 5-10%                   |                 5 |              0.13512 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6772 | >20%                    |                10 |              0.06772 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6867 | <5%                     |                10 |              0.06867 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6912 | >20%                    |                 2 |              0.3456  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7039 | 5-10%                   |                10 |              0.07039 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7056 | <5%                     |                10 |              0.07056 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7096 | 5-10%                   |                10 |              0.07096 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7103 | 10-15%                  |                10 |              0.07103 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7149 | >20%                    |                10 |              0.07149 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.73   | <5%                     |                10 |              0.073   |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7536 | 10-15%                  |                 5 |              0.15072 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7545 | >20%                    |                 5 |              0.1509  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7836 | 15-20%                  |                10 |              0.07836 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.7842 | 5-10%                   |                10 |              0.07842 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7857 | 10-15%                  |                 5 |              0.15714 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7956 | <5%                     |                10 |              0.07956 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8219 | >20%                    |                10 |              0.08219 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.869  | 5-10%                   |                10 |              0.0869  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8727 | >20%                    |                10 |              0.08727 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8799 | >20%                    |                 5 |              0.17598 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8803 | >20%                    |                10 |              0.08803 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8806 | <5%                     |                10 |              0.08806 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8848 | 5-10%                   |                10 |              0.08848 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8993 | >20%                    |                 2 |              0.44965 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9064 | 15-20%                  |                10 |              0.09064 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9107 | >20%                    |                10 |              0.09107 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9652 | 10-15%                  |                10 |              0.09652 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9697 | <5%                     |                 2 |              0.48485 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9809 | 10-15%                  |                10 |              0.09809 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.986  | 15-20%                  |                 5 |              0.1972  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.015  | 10-15%                  |                10 |              0.1015  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0363 | 10-15%                  |                 5 |              0.20726 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0601 | >20%                    |                10 |              0.10601 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1438 | >20%                    |                10 |              0.11438 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1797 | >20%                    |                10 |              0.11797 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3211 | <5%                     |                10 |              0.13211 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4427 | >20%                    |                10 |              0.14427 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5292 | 5-10%                   |                10 |              0.15292 |