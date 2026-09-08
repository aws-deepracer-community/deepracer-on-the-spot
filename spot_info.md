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

Data correct as of 2026-09-08 03:51:18.508070, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1276 | >20%                    |                 2 |              0.0638  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.169  | 15-20%                  |                 2 |              0.0845  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2047 | >20%                    |                 2 |              0.10235 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2079 | 15-20%                  |                 5 |              0.04158 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2109 | >20%                    |                 2 |              0.10545 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2128 | >20%                    |                 5 |              0.04256 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2371 | >20%                    |                 5 |              0.04742 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2543 | 15-20%                  |                 5 |              0.05086 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2603 | >20%                    |                 2 |              0.13015 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2636 | >20%                    |                 2 |              0.1318  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2774 | 15-20%                  |                 2 |              0.1387  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2844 | >20%                    |                 2 |              0.1422  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.292  | >20%                    |                 2 |              0.146   |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3041 | >20%                    |                 2 |              0.15205 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3052 | >20%                    |                 2 |              0.1526  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.306  | 10-15%                  |                 2 |              0.153   |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3373 | >20%                    |                 5 |              0.06746 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3567 | >20%                    |                 2 |              0.17835 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3647 | >20%                    |                10 |              0.03647 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3694 | >20%                    |                 5 |              0.07388 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3705 | 15-20%                  |                 2 |              0.18525 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3805 | <5%                     |                 2 |              0.19025 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3845 | 10-15%                  |                10 |              0.03845 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3884 | >20%                    |                 2 |              0.1942  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.391  | 10-15%                  |                 2 |              0.1955  |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.3974 |                         |                 5 |              0.07948 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3985 | >20%                    |                 2 |              0.19925 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3987 | >20%                    |                 5 |              0.07974 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4113 | 15-20%                  |                 2 |              0.20565 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4153 | >20%                    |                 5 |              0.08306 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4166 | >20%                    |                 2 |              0.2083  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4204 | >20%                    |                 5 |              0.08408 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.422  | >20%                    |                 5 |              0.0844  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4257 | >20%                    |                 2 |              0.21285 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4346 | >20%                    |                 2 |              0.2173  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4684 | >20%                    |                 5 |              0.09368 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4722 | >20%                    |                 5 |              0.09444 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4725 | >20%                    |                 2 |              0.23625 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4754 | >20%                    |                10 |              0.04754 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4759 | 10-15%                  |                 2 |              0.23795 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4836 | >20%                    |                 5 |              0.09672 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4891 | >20%                    |                 5 |              0.09782 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.494  |                         |                 2 |              0.247   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5086 | <5%                     |                 2 |              0.2543  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5104 | >20%                    |                 2 |              0.2552  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5139 | 15-20%                  |                 2 |              0.25695 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5145 | >20%                    |                 5 |              0.1029  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5161 | >20%                    |                10 |              0.05161 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5179 | >20%                    |                 5 |              0.10358 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5218 | >20%                    |                 5 |              0.10436 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5219 | >20%                    |                 5 |              0.10438 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5278 | >20%                    |                 5 |              0.10556 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5323 | >20%                    |                10 |              0.05323 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5404 | >20%                    |                 2 |              0.2702  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.546  | >20%                    |                 2 |              0.273   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5469 | >20%                    |                 2 |              0.27345 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5486 | 5-10%                   |                10 |              0.05486 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5495 | >20%                    |                 2 |              0.27475 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5715 | >20%                    |                 5 |              0.1143  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5778 | >20%                    |                 5 |              0.11556 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5835 | 5-10%                   |                10 |              0.05835 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5881 | >20%                    |                 5 |              0.11762 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5935 | >20%                    |                 2 |              0.29675 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6014 | 10-15%                  |                 2 |              0.3007  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.607  | >20%                    |                10 |              0.0607  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6078 | 10-15%                  |                 5 |              0.12156 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6155 | >20%                    |                 5 |              0.1231  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6293 | >20%                    |                 2 |              0.31465 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6299 | >20%                    |                10 |              0.06299 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6453 | 5-10%                   |                 5 |              0.12906 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6536 | 15-20%                  |                10 |              0.06536 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6581 | >20%                    |                 5 |              0.13162 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6772 | 15-20%                  |                10 |              0.06772 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6783 | >20%                    |                 5 |              0.13566 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6807 | <5%                     |                 2 |              0.34035 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6828 | 5-10%                   |                 2 |              0.3414  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6989 | >20%                    |                 5 |              0.13978 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7088 | >20%                    |                10 |              0.07088 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7176 | >20%                    |                 5 |              0.14352 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7199 | >20%                    |                 5 |              0.14398 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.73   | >20%                    |                 5 |              0.146   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7367 | 15-20%                  |                 5 |              0.14734 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7445 | >20%                    |                 5 |              0.1489  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7476 | >20%                    |                 2 |              0.3738  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7737 | >20%                    |                10 |              0.07737 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.808  | 15-20%                  |                10 |              0.0808  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.814  | >20%                    |                10 |              0.0814  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8164 | 15-20%                  |                 5 |              0.16328 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8178 | >20%                    |                10 |              0.08178 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.828  | 15-20%                  |                 2 |              0.414   |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8319 | <5%                     |                10 |              0.08319 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8469 | >20%                    |                 5 |              0.16938 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8605 | 10-15%                  |                 2 |              0.43025 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8633 | >20%                    |                 2 |              0.43165 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8833 | 5-10%                   |                10 |              0.08833 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.8945 | >20%                    |                 5 |              0.1789  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.9078 | >20%                    |                 2 |              0.4539  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9212 | <5%                     |                 5 |              0.18424 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9378 |                         |                 2 |              0.4689  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9451 | 10-15%                  |                 2 |              0.47255 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9618 | >20%                    |                10 |              0.09618 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.976  | >20%                    |                10 |              0.0976  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9771 | >20%                    |                10 |              0.09771 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9791 | >20%                    |                10 |              0.09791 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9929 | >20%                    |                10 |              0.09929 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0229 | 10-15%                  |                 2 |              0.51145 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0342 | 15-20%                  |                10 |              0.10342 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0364 | >20%                    |                10 |              0.10364 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0398 | >20%                    |                10 |              0.10398 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0474 | >20%                    |                 5 |              0.20948 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0685 | >20%                    |                 5 |              0.2137  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0847 | >20%                    |                10 |              0.10847 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0947 | >20%                    |                 2 |              0.54735 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1034 | 15-20%                  |                10 |              0.11034 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1169 | 5-10%                   |                10 |              0.11169 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1265 | >20%                    |                10 |              0.11265 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1291 | 5-10%                   |                 2 |              0.56455 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1337 | >20%                    |                10 |              0.11337 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1383 | >20%                    |                 5 |              0.22766 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1602 | >20%                    |                 5 |              0.23204 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1983 |                         |                 2 |              0.59915 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2089 | >20%                    |                10 |              0.12089 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2121 | >20%                    |                10 |              0.12121 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2162 |                         |                 5 |              0.24324 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.2437 | >20%                    |                10 |              0.12437 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.2482 | >20%                    |                 5 |              0.24964 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2625 | >20%                    |                 5 |              0.2525  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2715 |                         |                 5 |              0.2543  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3319 | >20%                    |                10 |              0.13319 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3322 | 10-15%                  |                10 |              0.13322 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3518 | >20%                    |                10 |              0.13518 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3522 | >20%                    |                 2 |              0.6761  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3677 | >20%                    |                10 |              0.13677 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3978 | 15-20%                  |                10 |              0.13978 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.4002 |                         |                10 |              0.14002 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.511  | 5-10%                   |                 5 |              0.3022  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5341 |                         |                10 |              0.15341 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5382 | >20%                    |                10 |              0.15382 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5641 | >20%                    |                 2 |              0.78205 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5753 | 15-20%                  |                10 |              0.15753 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5942 | >20%                    |                10 |              0.15942 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6569 | >20%                    |                10 |              0.16569 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.7528 | >20%                    |                 5 |              0.35056 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.7855 | >20%                    |                 5 |              0.3571  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.8373 | >20%                    |                 5 |              0.36746 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.9798 |                         |                10 |              0.19798 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9974 | 5-10%                   |                 2 |              0.9987  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      2.0173 | 15-20%                  |                10 |              0.20173 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1054 | 15-20%                  |                 5 |              0.42108 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.1958 | 5-10%                   |                10 |              0.21958 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      2.2109 | 5-10%                   |                 2 |              1.10545 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6665 | >20%                    |                10 |              0.26665 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.8133 | >20%                    |                10 |              0.28133 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0103 | >20%                    |                10 |              0.30103 |