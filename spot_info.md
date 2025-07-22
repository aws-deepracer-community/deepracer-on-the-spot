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

Data correct as of 2025-07-22 02:04:43.115819, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1064 | >20%                    |                 2 |              0.0532  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.15   | <5%                     |                 5 |              0.03    |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1723 | 5-10%                   |                 2 |              0.08615 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1817 | >20%                    |                 2 |              0.09085 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1871 | 5-10%                   |                 2 |              0.09355 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1885 | >20%                    |                 2 |              0.09425 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2119 | 5-10%                   |                 5 |              0.04238 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2345 | 15-20%                  |                 2 |              0.11725 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.238  | >20%                    |                 2 |              0.119   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2403 | <5%                     |                 5 |              0.04806 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2477 | >20%                    |                 2 |              0.12385 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2483 | 5-10%                   |                 2 |              0.12415 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2514 | 15-20%                  |                 2 |              0.1257  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2525 | >20%                    |                 2 |              0.12625 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2551 | <5%                     |                 5 |              0.05102 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2556 | >20%                    |                 5 |              0.05112 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2576 | >20%                    |                 2 |              0.1288  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2589 | >20%                    |                 5 |              0.05178 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2722 | >20%                    |                 2 |              0.1361  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2918 | >20%                    |                10 |              0.02918 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3021 | <5%                     |                 2 |              0.15105 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3053 | >20%                    |                 2 |              0.15265 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3104 | >20%                    |                 5 |              0.06208 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3148 | >20%                    |                 5 |              0.06296 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3148 | >20%                    |                 2 |              0.1574  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3154 | 5-10%                   |                 2 |              0.1577  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3159 | 15-20%                  |                10 |              0.03159 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.324  | 5-10%                   |                 2 |              0.162   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3263 | 15-20%                  |                 2 |              0.16315 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3303 | >20%                    |                 2 |              0.16515 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3325 | 15-20%                  |                 2 |              0.16625 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3331 | <5%                     |                 2 |              0.16655 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3459 | 15-20%                  |                 2 |              0.17295 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3463 | >20%                    |                 2 |              0.17315 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3467 | <5%                     |                10 |              0.03467 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3505 | >20%                    |                 5 |              0.0701  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3541 | 15-20%                  |                 5 |              0.07082 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3637 | >20%                    |                 2 |              0.18185 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3696 | >20%                    |                 5 |              0.07392 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.378  | >20%                    |                 5 |              0.0756  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3837 | 15-20%                  |                10 |              0.03837 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3857 | >20%                    |                 2 |              0.19285 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3921 | >20%                    |                10 |              0.03921 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4007 | >20%                    |                 5 |              0.08014 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4145 | <5%                     |                 2 |              0.20725 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4156 | >20%                    |                 2 |              0.2078  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4201 | >20%                    |                 2 |              0.21005 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4229 | 10-15%                  |                 2 |              0.21145 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4253 | >20%                    |                 2 |              0.21265 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4291 | >20%                    |                 5 |              0.08582 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4358 | >20%                    |                 2 |              0.2179  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4404 | 15-20%                  |                 5 |              0.08808 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4455 | <5%                     |                 2 |              0.22275 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4464 | <5%                     |                10 |              0.04464 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4486 | 5-10%                   |                 2 |              0.2243  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4546 | >20%                    |                 2 |              0.2273  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4555 | >20%                    |                 5 |              0.0911  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4645 | >20%                    |                 5 |              0.0929  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4666 | >20%                    |                 5 |              0.09332 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4682 | >20%                    |                 5 |              0.09364 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4689 | >20%                    |                 2 |              0.23445 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4716 | 10-15%                  |                 2 |              0.2358  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4727 | 5-10%                   |                 2 |              0.23635 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4831 | >20%                    |                 5 |              0.09662 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4836 | >20%                    |                 2 |              0.2418  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4979 | >20%                    |                 2 |              0.24895 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5056 | 5-10%                   |                 5 |              0.10112 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5064 | >20%                    |                 2 |              0.2532  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5068 | 15-20%                  |                10 |              0.05068 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5125 | >20%                    |                 2 |              0.25625 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5131 | 10-15%                  |                 5 |              0.10262 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5167 | >20%                    |                10 |              0.05167 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.528  | 15-20%                  |                 2 |              0.264   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5302 | 10-15%                  |                 5 |              0.10604 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5361 | >20%                    |                 5 |              0.10722 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5395 | <5%                     |                 2 |              0.26975 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5408 | 10-15%                  |                 5 |              0.10816 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5416 | >20%                    |                 5 |              0.10832 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5485 | >20%                    |                 5 |              0.1097  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5594 | >20%                    |                 5 |              0.11188 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5615 | >20%                    |                 2 |              0.28075 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.563  | >20%                    |                 2 |              0.2815  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5637 | 5-10%                   |                 2 |              0.28185 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5664 | >20%                    |                 2 |              0.2832  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5699 | 5-10%                   |                 5 |              0.11398 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5764 | >20%                    |                 5 |              0.11528 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5799 | >20%                    |                 5 |              0.11598 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5833 | >20%                    |                 2 |              0.29165 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5868 | >20%                    |                 5 |              0.11736 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5885 | 15-20%                  |                10 |              0.05885 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5903 | 10-15%                  |                 2 |              0.29515 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.5961 | >20%                    |                10 |              0.05961 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6008 | >20%                    |                 2 |              0.3004  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6046 | <5%                     |                 5 |              0.12092 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6065 | >20%                    |                10 |              0.06065 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6089 | 5-10%                   |                 5 |              0.12178 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6139 | >20%                    |                 2 |              0.30695 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6238 | >20%                    |                 5 |              0.12476 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6239 | >20%                    |                10 |              0.06239 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6257 | 10-15%                  |                 5 |              0.12514 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6278 | >20%                    |                 5 |              0.12556 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6287 | >20%                    |                10 |              0.06287 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6399 | >20%                    |                 5 |              0.12798 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6419 | >20%                    |                 2 |              0.32095 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6423 | >20%                    |                 5 |              0.12846 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6804 | 15-20%                  |                 2 |              0.3402  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6836 | >20%                    |                 5 |              0.13672 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6949 | 5-10%                   |                 5 |              0.13898 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6961 | 15-20%                  |                 2 |              0.34805 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7021 | 15-20%                  |                 5 |              0.14042 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7106 | >20%                    |                 5 |              0.14212 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7117 | >20%                    |                 5 |              0.14234 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.716  | <5%                     |                10 |              0.0716  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7271 | >20%                    |                10 |              0.07271 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7274 | >20%                    |                 5 |              0.14548 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7285 | <5%                     |                 5 |              0.1457  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.731  | >20%                    |                10 |              0.0731  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7329 | 15-20%                  |                10 |              0.07329 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7615 | <5%                     |                 5 |              0.1523  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7647 | 15-20%                  |                10 |              0.07647 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7676 | <5%                     |                10 |              0.07676 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7928 | >20%                    |                 5 |              0.15856 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8114 | >20%                    |                 5 |              0.16228 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8152 | <5%                     |                10 |              0.08152 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8264 | 15-20%                  |                10 |              0.08264 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.828  | >20%                    |                 5 |              0.1656  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8286 | 5-10%                   |                10 |              0.08286 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8289 | >20%                    |                10 |              0.08289 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8297 | >20%                    |                10 |              0.08297 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8555 | 5-10%                   |                10 |              0.08555 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8725 | 5-10%                   |                10 |              0.08725 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8844 | 5-10%                   |                 5 |              0.17688 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8895 | >20%                    |                 5 |              0.1779  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8898 | >20%                    |                 2 |              0.4449  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9047 | <5%                     |                10 |              0.09047 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9076 | 15-20%                  |                 5 |              0.18152 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9149 | 5-10%                   |                10 |              0.09149 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9157 | >20%                    |                10 |              0.09157 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9163 | 15-20%                  |                10 |              0.09163 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9198 | 5-10%                   |                10 |              0.09198 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9235 | 15-20%                  |                10 |              0.09235 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9241 | 15-20%                  |                10 |              0.09241 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9314 | >20%                    |                10 |              0.09314 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9501 | >20%                    |                10 |              0.09501 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9607 | 15-20%                  |                10 |              0.09607 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9666 | 5-10%                   |                10 |              0.09666 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0026 | 15-20%                  |                10 |              0.10026 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.006  | 5-10%                   |                10 |              0.1006  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0268 | <5%                     |                10 |              0.10268 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0318 | >20%                    |                 2 |              0.5159  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0389 | <5%                     |                10 |              0.10389 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0639 | >20%                    |                 5 |              0.21278 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.064  | >20%                    |                10 |              0.1064  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0701 | 5-10%                   |                10 |              0.10701 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0704 | >20%                    |                10 |              0.10704 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.077  | >20%                    |                10 |              0.1077  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0832 | >20%                    |                10 |              0.10832 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1107 | >20%                    |                10 |              0.11107 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1138 | 15-20%                  |                10 |              0.11138 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1207 | >20%                    |                 5 |              0.22414 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1328 | >20%                    |                10 |              0.11328 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.145  | >20%                    |                10 |              0.1145  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.148  | <5%                     |                 2 |              0.574   |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2374 | >20%                    |                 5 |              0.24748 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2856 | >20%                    |                10 |              0.12856 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3024 | 15-20%                  |                 5 |              0.26048 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3066 | >20%                    |                 2 |              0.6533  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3389 | >20%                    |                10 |              0.13389 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3479 | >20%                    |                 5 |              0.26958 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.4055 | >20%                    |                 2 |              0.70275 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4341 | 5-10%                   |                10 |              0.14341 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4502 | >20%                    |                 5 |              0.29004 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5075 | <5%                     |                10 |              0.15075 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5946 | <5%                     |                 5 |              0.31892 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6731 | >20%                    |                10 |              0.16731 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.6822 | 5-10%                   |                 2 |              0.8411  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8165 | 10-15%                  |                10 |              0.18165 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.9012 | <5%                     |                10 |              0.19012 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9798 | 5-10%                   |                10 |              0.19798 |