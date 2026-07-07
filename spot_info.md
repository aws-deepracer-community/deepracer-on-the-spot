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

Data correct as of 2026-07-07 03:49:25.076241, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1235 | >20%                    |                 2 |              0.06175 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1283 | >20%                    |                 2 |              0.06415 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1838 | >20%                    |                 2 |              0.0919  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2133 | 15-20%                  |                 2 |              0.10665 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.233  | >20%                    |                 2 |              0.1165  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2458 | >20%                    |                 2 |              0.1229  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2482 | >20%                    |                 2 |              0.1241  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.251  | >20%                    |                 2 |              0.1255  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2566 | >20%                    |                 2 |              0.1283  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2577 | >20%                    |                 2 |              0.12885 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2685 | >20%                    |                 2 |              0.13425 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2736 | 15-20%                  |                 2 |              0.1368  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2767 | 15-20%                  |                 5 |              0.05534 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2795 | 10-15%                  |                 2 |              0.13975 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2838 | >20%                    |                 2 |              0.1419  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2896 | 5-10%                   |                10 |              0.02896 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2993 | 15-20%                  |                 2 |              0.14965 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3048 | 15-20%                  |                 5 |              0.06096 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3316 | >20%                    |                 5 |              0.06632 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3316 | >20%                    |                 2 |              0.1658  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3319 | >20%                    |                 5 |              0.06638 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3334 | >20%                    |                 2 |              0.1667  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3496 | >20%                    |                 5 |              0.06992 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3568 | <5%                     |                 2 |              0.1784  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.36   | >20%                    |                 5 |              0.072   |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3629 | 5-10%                   |                10 |              0.03629 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3634 | >20%                    |                 5 |              0.07268 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3693 | >20%                    |                10 |              0.03693 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3702 | >20%                    |                 5 |              0.07404 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.375  | 5-10%                   |                10 |              0.0375  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3806 | >20%                    |                 2 |              0.1903  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3821 | >20%                    |                 5 |              0.07642 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3951 | 10-15%                  |                 2 |              0.19755 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4074 | >20%                    |                10 |              0.04074 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4163 | >20%                    |                 2 |              0.20815 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4168 | >20%                    |                 2 |              0.2084  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4177 | 10-15%                  |                 2 |              0.20885 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.421  | 10-15%                  |                 2 |              0.2105  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4222 | >20%                    |                 5 |              0.08444 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4253 | >20%                    |                10 |              0.04253 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4259 | 15-20%                  |                 5 |              0.08518 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.426  | >20%                    |                10 |              0.0426  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4272 | >20%                    |                 2 |              0.2136  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4346 | <5%                     |                 2 |              0.2173  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4467 | <5%                     |                 2 |              0.22335 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4478 | >20%                    |                 5 |              0.08956 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.448  | >20%                    |                 5 |              0.0896  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.453  | >20%                    |                 2 |              0.2265  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4569 | >20%                    |                10 |              0.04569 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4577 | >20%                    |                 2 |              0.22885 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4698 | 15-20%                  |                 2 |              0.2349  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4717 | >20%                    |                 5 |              0.09434 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4718 | >20%                    |                 2 |              0.2359  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.474  | >20%                    |                 2 |              0.237   |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4762 | >20%                    |                 5 |              0.09524 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4857 | >20%                    |                10 |              0.04857 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5007 | >20%                    |                 5 |              0.10014 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5021 | >20%                    |                 5 |              0.10042 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5079 | >20%                    |                 5 |              0.10158 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.508  | 15-20%                  |                 2 |              0.254   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5124 | >20%                    |                 2 |              0.2562  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5129 | >20%                    |                 5 |              0.10258 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.52   | >20%                    |                 5 |              0.104   |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5229 | >20%                    |                 5 |              0.10458 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.529  | 5-10%                   |                 2 |              0.2645  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5352 | >20%                    |                10 |              0.05352 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.549  | 15-20%                  |                 2 |              0.2745  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5502 | 5-10%                   |                 5 |              0.11004 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5521 | >20%                    |                 5 |              0.11042 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5624 | 10-15%                  |                 5 |              0.11248 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5697 | 15-20%                  |                 5 |              0.11394 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5714 | >20%                    |                 5 |              0.11428 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5917 | <5%                     |                 5 |              0.11834 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6035 | >20%                    |                 2 |              0.30175 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.6131 |                         |                 2 |              0.30655 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.615  | >20%                    |                 5 |              0.123   |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.62   | >20%                    |                10 |              0.062   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6242 | >20%                    |                 2 |              0.3121  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.625  | >20%                    |                 5 |              0.125   |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6255 | >20%                    |                10 |              0.06255 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6286 | >20%                    |                 5 |              0.12572 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6329 | >20%                    |                 5 |              0.12658 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6439 | >20%                    |                10 |              0.06439 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6509 | >20%                    |                 5 |              0.13018 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.6568 |                         |                10 |              0.06568 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6624 | >20%                    |                10 |              0.06624 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6798 | >20%                    |                 2 |              0.3399  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6848 | >20%                    |                 2 |              0.3424  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6909 | 10-15%                  |                10 |              0.06909 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6919 | >20%                    |                 5 |              0.13838 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7003 | >20%                    |                10 |              0.07003 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7066 | >20%                    |                 2 |              0.3533  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7103 | >20%                    |                 5 |              0.14206 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7108 | 10-15%                  |                 2 |              0.3554  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7145 | >20%                    |                 5 |              0.1429  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.719  | >20%                    |                 5 |              0.1438  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.724  | >20%                    |                 2 |              0.362   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7277 | >20%                    |                10 |              0.07277 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7359 | >20%                    |                 5 |              0.14718 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7401 | 5-10%                   |                 2 |              0.37005 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7499 | >20%                    |                10 |              0.07499 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7536 |                         |                 2 |              0.3768  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7568 | >20%                    |                10 |              0.07568 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7747 | <5%                     |                10 |              0.07747 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7757 | 5-10%                   |                 5 |              0.15514 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7846 | 5-10%                   |                10 |              0.07846 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.789  | 15-20%                  |                10 |              0.0789  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.795  | >20%                    |                 2 |              0.3975  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8092 | 15-20%                  |                10 |              0.08092 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8142 | >20%                    |                10 |              0.08142 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8218 | >20%                    |                10 |              0.08218 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8363 | 5-10%                   |                10 |              0.08363 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8437 | >20%                    |                10 |              0.08437 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8505 | >20%                    |                10 |              0.08505 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8508 | >20%                    |                10 |              0.08508 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8524 | >20%                    |                 5 |              0.17048 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8572 | 15-20%                  |                10 |              0.08572 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8651 | >20%                    |                10 |              0.08651 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8735 | >20%                    |                 5 |              0.1747  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8778 | 10-15%                  |                 2 |              0.4389  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8783 | 15-20%                  |                10 |              0.08783 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8802 | >20%                    |                 5 |              0.17604 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8825 | >20%                    |                10 |              0.08825 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8825 |                         |                 5 |              0.1765  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9007 | 15-20%                  |                10 |              0.09007 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9021 | >20%                    |                 5 |              0.18042 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9144 | >20%                    |                10 |              0.09144 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9513 | 10-15%                  |                 2 |              0.47565 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9628 | >20%                    |                10 |              0.09628 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9651 | >20%                    |                10 |              0.09651 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9773 | >20%                    |                 5 |              0.19546 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.994  | >20%                    |                 5 |              0.1988  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0261 | >20%                    |                 5 |              0.20522 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0332 | 15-20%                  |                10 |              0.10332 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0405 | >20%                    |                10 |              0.10405 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0478 | >20%                    |                 5 |              0.20956 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0543 | >20%                    |                10 |              0.10543 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0681 | >20%                    |                 2 |              0.53405 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0928 | >20%                    |                10 |              0.10928 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1211 | 5-10%                   |                10 |              0.11211 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1247 | >20%                    |                 5 |              0.22494 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1707 |                         |                10 |              0.11707 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1955 | >20%                    |                10 |              0.11955 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2142 |                         |                 5 |              0.24284 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.24   | >20%                    |                10 |              0.124   |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3188 | 15-20%                  |                10 |              0.13188 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4101 | >20%                    |                 5 |              0.28202 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4288 | >20%                    |                10 |              0.14288 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4414 | 15-20%                  |                10 |              0.14414 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4455 | 15-20%                  |                 5 |              0.2891  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.5438 | 5-10%                   |                 2 |              0.7719  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5925 | >20%                    |                 5 |              0.3185  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.631  | 10-15%                  |                10 |              0.1631  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.816  | 5-10%                   |                 2 |              0.908   |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8583 | >20%                    |                10 |              0.18583 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3482 | >20%                    |                10 |              0.23482 |