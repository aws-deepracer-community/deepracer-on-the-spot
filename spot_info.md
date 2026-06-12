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

Data correct as of 2026-06-12 04:23:15.843801, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1202 | >20%                    |                 2 |              0.0601  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1567 | >20%                    |                 2 |              0.07835 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1731 | 15-20%                  |                 2 |              0.08655 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1916 | >20%                    |                 2 |              0.0958  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2073 | 15-20%                  |                 5 |              0.04146 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2259 | >20%                    |                 2 |              0.11295 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2281 | 15-20%                  |                 2 |              0.11405 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2364 | >20%                    |                 2 |              0.1182  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2365 | >20%                    |                 2 |              0.11825 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2382 | >20%                    |                 2 |              0.1191  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2385 | >20%                    |                 5 |              0.0477  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2429 | 10-15%                  |                 2 |              0.12145 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2461 | >20%                    |                 5 |              0.04922 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2502 | >20%                    |                 2 |              0.1251  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2559 | >20%                    |                 2 |              0.12795 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2572 | 5-10%                   |                10 |              0.02572 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2713 | >20%                    |                 2 |              0.13565 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2858 | 15-20%                  |                 2 |              0.1429  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2882 | 10-15%                  |                 2 |              0.1441  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3018 | >20%                    |                 2 |              0.1509  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3149 | 15-20%                  |                 5 |              0.06298 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3158 | 5-10%                   |                10 |              0.03158 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3168 | >20%                    |                10 |              0.03168 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3256 | >20%                    |                 5 |              0.06512 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3278 | 15-20%                  |                 5 |              0.06556 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3283 | >20%                    |                10 |              0.03283 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3292 | >20%                    |                 2 |              0.1646  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3331 | <5%                     |                 2 |              0.16655 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3336 | 10-15%                  |                 2 |              0.1668  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3394 | >20%                    |                 5 |              0.06788 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3424 | >20%                    |                 5 |              0.06848 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3443 | >20%                    |                 5 |              0.06886 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3457 | >20%                    |                 2 |              0.17285 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3626 | >20%                    |                 2 |              0.1813  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3667 | 5-10%                   |                10 |              0.03667 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3727 | >20%                    |                 5 |              0.07454 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3772 | >20%                    |                 5 |              0.07544 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3781 | >20%                    |                 2 |              0.18905 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.38   | >20%                    |                10 |              0.038   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3817 | >20%                    |                 5 |              0.07634 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.383  | >20%                    |                 5 |              0.0766  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3834 | >20%                    |                 5 |              0.07668 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3841 | >20%                    |                 5 |              0.07682 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3993 | >20%                    |                 2 |              0.19965 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4081 | 15-20%                  |                 2 |              0.20405 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4137 | >20%                    |                 2 |              0.20685 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4154 | >20%                    |                 2 |              0.2077  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4291 | >20%                    |                10 |              0.04291 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4292 | <5%                     |                 2 |              0.2146  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.4356 |                         |                 2 |              0.2178  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4378 | >20%                    |                 5 |              0.08756 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.438  | >20%                    |                 5 |              0.0876  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4432 | >20%                    |                 5 |              0.08864 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.446  | <5%                     |                10 |              0.0446  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4578 | 10-15%                  |                 2 |              0.2289  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4596 | >20%                    |                 2 |              0.2298  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4661 | <5%                     |                 2 |              0.23305 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4702 | 5-10%                   |                 2 |              0.2351  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4733 | >20%                    |                10 |              0.04733 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4835 | 15-20%                  |                 5 |              0.0967  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4874 | >20%                    |                 5 |              0.09748 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4919 | 5-10%                   |                 2 |              0.24595 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5082 | >20%                    |                 5 |              0.10164 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5108 | 15-20%                  |                 2 |              0.2554  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5168 | >20%                    |                 2 |              0.2584  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5196 | 5-10%                   |                 5 |              0.10392 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5206 | >20%                    |                 5 |              0.10412 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5215 | >20%                    |                10 |              0.05215 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5239 | 10-15%                  |                 2 |              0.26195 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5268 | >20%                    |                10 |              0.05268 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5299 | >20%                    |                 2 |              0.26495 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5313 | 15-20%                  |                 2 |              0.26565 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5428 | >20%                    |                 5 |              0.10856 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5429 | <5%                     |                 5 |              0.10858 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5449 | 10-15%                  |                 5 |              0.10898 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5502 | >20%                    |                 5 |              0.11004 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5547 | >20%                    |                 2 |              0.27735 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5727 | >20%                    |                 2 |              0.28635 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5769 | >20%                    |                 5 |              0.11538 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.577  | 10-15%                  |                10 |              0.0577  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5835 | >20%                    |                 2 |              0.29175 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5939 | >20%                    |                 5 |              0.11878 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6057 | >20%                    |                 5 |              0.12114 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6174 | >20%                    |                 5 |              0.12348 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6216 | >20%                    |                 5 |              0.12432 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6427 | 15-20%                  |                10 |              0.06427 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6456 |                         |                 5 |              0.12912 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6578 | >20%                    |                10 |              0.06578 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6751 | 5-10%                   |                10 |              0.06751 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6753 | >20%                    |                10 |              0.06753 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6864 | 15-20%                  |                10 |              0.06864 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6885 | >20%                    |                 2 |              0.34425 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6905 | >20%                    |                 5 |              0.1381  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6914 | 5-10%                   |                10 |              0.06914 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6945 | >20%                    |                 5 |              0.1389  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7012 | >20%                    |                 5 |              0.14024 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7065 | >20%                    |                10 |              0.07065 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7069 | >20%                    |                 2 |              0.35345 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7245 | >20%                    |                 5 |              0.1449  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7288 | >20%                    |                 5 |              0.14576 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7396 | >20%                    |                 5 |              0.14792 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7513 | >20%                    |                 2 |              0.37565 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7556 | >20%                    |                10 |              0.07556 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7562 | >20%                    |                 5 |              0.15124 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7576 | >20%                    |                 2 |              0.3788  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7616 | >20%                    |                10 |              0.07616 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7665 | >20%                    |                10 |              0.07665 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7666 | >20%                    |                10 |              0.07666 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.7799 |                         |                10 |              0.07799 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7834 | >20%                    |                 5 |              0.15668 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7906 | 15-20%                  |                10 |              0.07906 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7963 | >20%                    |                10 |              0.07963 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8093 | >20%                    |                10 |              0.08093 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.815  | 5-10%                   |                 5 |              0.163   |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8267 | >20%                    |                10 |              0.08267 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8299 | >20%                    |                10 |              0.08299 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8373 | >20%                    |                 5 |              0.16746 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8381 |                         |                 2 |              0.41905 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8422 | 15-20%                  |                10 |              0.08422 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8442 | >20%                    |                10 |              0.08442 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8482 | 15-20%                  |                10 |              0.08482 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8509 | >20%                    |                 5 |              0.17018 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9094 | 5-10%                   |                 2 |              0.4547  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9182 | >20%                    |                10 |              0.09182 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9328 | >20%                    |                10 |              0.09328 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9397 | >20%                    |                 5 |              0.18794 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9443 | 10-15%                  |                 2 |              0.47215 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9486 | >20%                    |                10 |              0.09486 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9547 | >20%                    |                10 |              0.09547 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9877 | >20%                    |                 5 |              0.19754 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0021 | >20%                    |                10 |              0.10021 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0278 | >20%                    |                 2 |              0.5139  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0348 |                         |                 5 |              0.20696 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0365 | >20%                    |                 5 |              0.2073  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0424 | >20%                    |                10 |              0.10424 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0432 | >20%                    |                 5 |              0.20864 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0587 | 10-15%                  |                 2 |              0.52935 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0968 | 5-10%                   |                10 |              0.10968 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1157 | >20%                    |                10 |              0.11157 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1183 | 15-20%                  |                10 |              0.11183 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1502 | >20%                    |                10 |              0.11502 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1951 | >20%                    |                10 |              0.11951 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2108 | 5-10%                   |                 2 |              0.6054  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2756 | >20%                    |                10 |              0.12756 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3381 | 15-20%                  |                10 |              0.13381 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3389 | >20%                    |                10 |              0.13389 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3418 | >20%                    |                10 |              0.13418 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3761 | 15-20%                  |                 5 |              0.27522 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4079 | 10-15%                  |                10 |              0.14079 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4162 | >20%                    |                 5 |              0.28324 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5198 | 15-20%                  |                10 |              0.15198 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5676 | >20%                    |                 5 |              0.31352 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7655 |                         |                10 |              0.17655 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1939 | >20%                    |                10 |              0.21939 |