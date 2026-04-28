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

Data correct as of 2026-04-28 03:37:38.481577, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1654 | 15-20%                  |                 2 |              0.0827  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1675 | >20%                    |                 2 |              0.08375 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1831 | >20%                    |                 2 |              0.09155 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2274 | >20%                    |                 2 |              0.1137  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2348 | 15-20%                  |                 5 |              0.04696 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2438 | >20%                    |                 2 |              0.1219  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2477 | 5-10%                   |                10 |              0.02477 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2563 | >20%                    |                 2 |              0.12815 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2684 | 15-20%                  |                 2 |              0.1342  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2754 | 15-20%                  |                 5 |              0.05508 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2792 | >20%                    |                 2 |              0.1396  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2819 | 10-15%                  |                 2 |              0.14095 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2841 | >20%                    |                 5 |              0.05682 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2964 | >20%                    |                 2 |              0.1482  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2996 | 15-20%                  |                 2 |              0.1498  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3031 | 15-20%                  |                 5 |              0.06062 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.314  | >20%                    |                 2 |              0.157   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.321  | 10-15%                  |                 2 |              0.1605  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3227 | 10-15%                  |                 2 |              0.16135 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3251 | >20%                    |                 2 |              0.16255 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3267 | >20%                    |                10 |              0.03267 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3343 | <5%                     |                 2 |              0.16715 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3424 | >20%                    |                 5 |              0.06848 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3427 | >20%                    |                 5 |              0.06854 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.348  | >20%                    |                 5 |              0.0696  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3552 | >20%                    |                 5 |              0.07104 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3577 | >20%                    |                 2 |              0.17885 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3633 | >20%                    |                 5 |              0.07266 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3684 | >20%                    |                 2 |              0.1842  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3685 | >20%                    |                 5 |              0.0737  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3728 | >20%                    |                10 |              0.03728 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3841 | 10-15%                  |                 2 |              0.19205 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3853 | >20%                    |                 2 |              0.19265 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3911 | 5-10%                   |                10 |              0.03911 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3928 | >20%                    |                 5 |              0.07856 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3946 | >20%                    |                 5 |              0.07892 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.396  | >20%                    |                 5 |              0.0792  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4034 | 5-10%                   |                10 |              0.04034 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4035 | >20%                    |                 2 |              0.20175 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4091 | >20%                    |                 5 |              0.08182 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4101 | <5%                     |                 2 |              0.20505 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4162 | >20%                    |                 5 |              0.08324 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4253 | >20%                    |                 2 |              0.21265 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4298 | >20%                    |                 5 |              0.08596 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4305 | >20%                    |                 5 |              0.0861  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4326 | >20%                    |                 5 |              0.08652 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4356 | >20%                    |                 2 |              0.2178  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4439 | <5%                     |                 2 |              0.22195 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4487 | 5-10%                   |                 2 |              0.22435 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4515 | >20%                    |                 2 |              0.22575 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4532 | >20%                    |                10 |              0.04532 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4565 | >20%                    |                 5 |              0.0913  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4582 | >20%                    |                 5 |              0.09164 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4596 | 15-20%                  |                 2 |              0.2298  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4614 | >20%                    |                 5 |              0.09228 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4661 | >20%                    |                 2 |              0.23305 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4708 | >20%                    |                 2 |              0.2354  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4768 | >20%                    |                 2 |              0.2384  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4826 | >20%                    |                 5 |              0.09652 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4851 | 10-15%                  |                 2 |              0.24255 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4855 | 15-20%                  |                 2 |              0.24275 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4861 | >20%                    |                 5 |              0.09722 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4877 | >20%                    |                 5 |              0.09754 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5027 | >20%                    |                10 |              0.05027 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5174 | 15-20%                  |                 5 |              0.10348 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5243 | >20%                    |                 2 |              0.26215 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5268 | <5%                     |                 5 |              0.10536 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5352 | 5-10%                   |                 5 |              0.10704 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5364 | >20%                    |                 2 |              0.2682  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5429 | 5-10%                   |                 5 |              0.10858 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5594 | 10-15%                  |                 5 |              0.11188 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5606 | >20%                    |                 2 |              0.2803  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5914 | >20%                    |                 5 |              0.11828 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6062 | >20%                    |                 5 |              0.12124 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.6075 | 15-20%                  |                 2 |              0.30375 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6082 | >20%                    |                10 |              0.06082 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6161 | >20%                    |                 2 |              0.30805 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6165 | 5-10%                   |                 2 |              0.30825 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6188 | >20%                    |                 5 |              0.12376 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6214 | >20%                    |                10 |              0.06214 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6297 | >20%                    |                10 |              0.06297 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6311 | >20%                    |                 2 |              0.31555 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6444 | >20%                    |                10 |              0.06444 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6573 | >20%                    |                 2 |              0.32865 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6586 | >20%                    |                 5 |              0.13172 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6604 | 10-15%                  |                 2 |              0.3302  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6604 | >20%                    |                10 |              0.06604 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6672 | 5-10%                   |                10 |              0.06672 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6733 | >20%                    |                 5 |              0.13466 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.681  | >20%                    |                10 |              0.0681  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.702  | >20%                    |                 5 |              0.1404  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7059 | >20%                    |                10 |              0.07059 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7078 | >20%                    |                 5 |              0.14156 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7095 | >20%                    |                 2 |              0.35475 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7133 | >20%                    |                10 |              0.07133 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7177 | >20%                    |                10 |              0.07177 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7185 | >20%                    |                 5 |              0.1437  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7316 | >20%                    |                 5 |              0.14632 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7407 | 15-20%                  |                10 |              0.07407 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.744  | >20%                    |                 2 |              0.372   |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7465 | >20%                    |                10 |              0.07465 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.751  | 15-20%                  |                10 |              0.0751  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7549 | >20%                    |                 5 |              0.15098 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7708 | >20%                    |                 5 |              0.15416 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7725 | >20%                    |                 2 |              0.38625 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7859 | >20%                    |                 5 |              0.15718 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7874 | >20%                    |                 5 |              0.15748 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7907 | 5-10%                   |                10 |              0.07907 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8003 | 15-20%                  |                10 |              0.08003 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8141 | >20%                    |                10 |              0.08141 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.826  | >20%                    |                10 |              0.0826  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8387 | >20%                    |                10 |              0.08387 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8409 | >20%                    |                10 |              0.08409 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8856 | 10-15%                  |                10 |              0.08856 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.907  | >20%                    |                10 |              0.0907  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9109 | >20%                    |                10 |              0.09109 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9191 | >20%                    |                 5 |              0.18382 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9221 | >20%                    |                10 |              0.09221 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9281 | >20%                    |                 5 |              0.18562 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9389 |                         |                 2 |              0.46945 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9431 | >20%                    |                 5 |              0.18862 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9472 | 15-20%                  |                10 |              0.09472 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9603 | >20%                    |                10 |              0.09603 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9727 | >20%                    |                10 |              0.09727 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9766 | 5-10%                   |                10 |              0.09766 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0167 | 15-20%                  |                10 |              0.10167 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0535 | 15-20%                  |                10 |              0.10535 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0569 | >20%                    |                 5 |              0.21138 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0777 | >20%                    |                10 |              0.10777 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0846 | >20%                    |                10 |              0.10846 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1101 | 10-15%                  |                10 |              0.11101 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1406 | >20%                    |                 2 |              0.5703  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1686 | >20%                    |                10 |              0.11686 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1767 | >20%                    |                10 |              0.11767 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1918 | >20%                    |                 5 |              0.23836 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1945 |                         |                 5 |              0.2389  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.2286 |                         |                 2 |              0.6143  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2501 | 10-15%                  |                 2 |              0.62505 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2708 | >20%                    |                10 |              0.12708 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2949 | 5-10%                   |                 2 |              0.64745 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.3138 | 5-10%                   |                 2 |              0.6569  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3197 | 15-20%                  |                10 |              0.13197 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3499 | >20%                    |                10 |              0.13499 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4632 | >20%                    |                 5 |              0.29264 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4985 | 15-20%                  |                10 |              0.14985 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5058 | >20%                    |                10 |              0.15058 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5068 | >20%                    |                 5 |              0.30136 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5284 | 15-20%                  |                 5 |              0.30568 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.5316 | >20%                    |                10 |              0.15316 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.6462 |                         |                 5 |              0.32924 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6774 |                         |                10 |              0.16774 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.4815 |                         |                10 |              0.24815 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4966 | >20%                    |                10 |              0.24966 |