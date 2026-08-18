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

Data correct as of 2026-08-18 01:24:50.903053, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.165  | >20%                    |                 2 |              0.0825  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1756 | >20%                    |                 2 |              0.0878  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2077 | 15-20%                  |                 2 |              0.10385 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2092 | >20%                    |                 2 |              0.1046  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2094 | >20%                    |                 2 |              0.1047  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2128 | >20%                    |                 2 |              0.1064  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.232  | 10-15%                  |                 2 |              0.116   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2333 | 15-20%                  |                 2 |              0.11665 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2445 | >20%                    |                 2 |              0.12225 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2589 | 15-20%                  |                 2 |              0.12945 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2676 | >20%                    |                 2 |              0.1338  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2782 | 10-15%                  |                 2 |              0.1391  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2849 | >20%                    |                 2 |              0.14245 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2861 | >20%                    |                 2 |              0.14305 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2911 | >20%                    |                 5 |              0.05822 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3088 | >20%                    |                 2 |              0.1544  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3139 | >20%                    |                 5 |              0.06278 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3257 | >20%                    |                 2 |              0.16285 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3306 | 15-20%                  |                 5 |              0.06612 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3368 | >20%                    |                 2 |              0.1684  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3525 | >20%                    |                10 |              0.03525 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3575 | >20%                    |                 5 |              0.0715  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3614 | 5-10%                   |                10 |              0.03614 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3683 | 15-20%                  |                 2 |              0.18415 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3729 | <5%                     |                 2 |              0.18645 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3742 | 5-10%                   |                10 |              0.03742 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.38   | 10-15%                  |                 2 |              0.19    |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3806 | 15-20%                  |                 5 |              0.07612 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3806 | >20%                    |                 5 |              0.07612 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3866 | >20%                    |                 5 |              0.07732 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.393  | <5%                     |                 2 |              0.1965  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3943 | >20%                    |                 5 |              0.07886 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4027 | >20%                    |                 5 |              0.08054 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4047 | 15-20%                  |                 2 |              0.20235 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4086 | >20%                    |                 5 |              0.08172 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4133 | >20%                    |                 2 |              0.20665 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4155 | >20%                    |                10 |              0.04155 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4219 | >20%                    |                 2 |              0.21095 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4249 | >20%                    |                10 |              0.04249 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4257 | >20%                    |                 5 |              0.08514 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4313 | >20%                    |                 5 |              0.08626 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4488 | >20%                    |                 2 |              0.2244  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4493 | >20%                    |                 2 |              0.22465 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4524 | 10-15%                  |                 2 |              0.2262  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4553 | >20%                    |                 2 |              0.22765 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4716 | >20%                    |                 5 |              0.09432 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4735 | >20%                    |                10 |              0.04735 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4937 | >20%                    |                 2 |              0.24685 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4953 | >20%                    |                 5 |              0.09906 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4987 | >20%                    |                 5 |              0.09974 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5047 | >20%                    |                 2 |              0.25235 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5074 | >20%                    |                 5 |              0.10148 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5084 | >20%                    |                 5 |              0.10168 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.511  | >20%                    |                 2 |              0.2555  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5152 | >20%                    |                 2 |              0.2576  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5173 | >20%                    |                10 |              0.05173 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5196 | >20%                    |                10 |              0.05196 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5198 | >20%                    |                 2 |              0.2599  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5266 | >20%                    |                 2 |              0.2633  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.527  | >20%                    |                 5 |              0.1054  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5288 | 5-10%                   |                10 |              0.05288 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.536  | 5-10%                   |                 2 |              0.268   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5422 | <5%                     |                 2 |              0.2711  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5491 | 15-20%                  |                 5 |              0.10982 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5492 | >20%                    |                 2 |              0.2746  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5573 | >20%                    |                 5 |              0.11146 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5631 | >20%                    |                 5 |              0.11262 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5669 | >20%                    |                 5 |              0.11338 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5697 | >20%                    |                10 |              0.05697 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5764 | <5%                     |                 5 |              0.11528 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5813 | 10-15%                  |                10 |              0.05813 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5842 | 10-15%                  |                 5 |              0.11684 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5954 | >20%                    |                 5 |              0.11908 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5989 | >20%                    |                 5 |              0.11978 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6106 | >20%                    |                 5 |              0.12212 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.62   | >20%                    |                 5 |              0.124   |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6253 | >20%                    |                10 |              0.06253 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6361 | 15-20%                  |                10 |              0.06361 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6433 | >20%                    |                 2 |              0.32165 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6485 | >20%                    |                 5 |              0.1297  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6505 | >20%                    |                10 |              0.06505 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6508 | 5-10%                   |                 5 |              0.13016 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6595 | >20%                    |                 2 |              0.32975 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6716 | >20%                    |                 5 |              0.13432 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6783 | >20%                    |                 5 |              0.13566 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6856 | >20%                    |                 2 |              0.3428  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6881 | >20%                    |                 5 |              0.13762 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6937 | >20%                    |                10 |              0.06937 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7056 | 15-20%                  |                10 |              0.07056 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7151 | >20%                    |                10 |              0.07151 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7174 | >20%                    |                10 |              0.07174 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7195 | >20%                    |                 2 |              0.35975 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7334 | >20%                    |                10 |              0.07334 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7656 | >20%                    |                10 |              0.07656 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7975 | >20%                    |                 5 |              0.1595  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8007 | >20%                    |                10 |              0.08007 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8192 | >20%                    |                 5 |              0.16384 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8345 | 10-15%                  |                 2 |              0.41725 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8383 | <5%                     |                10 |              0.08383 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8465 | 10-15%                  |                 2 |              0.42325 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.848  | 15-20%                  |                10 |              0.0848  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8482 | >20%                    |                10 |              0.08482 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8522 | >20%                    |                 5 |              0.17044 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8533 | 5-10%                   |                10 |              0.08533 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8588 | >20%                    |                 5 |              0.17176 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8686 | >20%                    |                 5 |              0.17372 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.876  | >20%                    |                10 |              0.0876  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8774 | >20%                    |                10 |              0.08774 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8842 | 5-10%                   |                10 |              0.08842 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8949 | >20%                    |                 2 |              0.44745 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8958 | >20%                    |                10 |              0.08958 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9037 | 15-20%                  |                10 |              0.09037 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9127 | >20%                    |                10 |              0.09127 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9305 |                         |                 2 |              0.46525 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9355 | >20%                    |                10 |              0.09355 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9362 | >20%                    |                10 |              0.09362 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9562 | >20%                    |                 5 |              0.19124 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9599 | >20%                    |                10 |              0.09599 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.971  | >20%                    |                10 |              0.0971  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.9758 | >20%                    |                 5 |              0.19516 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9762 | 15-20%                  |                10 |              0.09762 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.997  |                         |                 2 |              0.4985  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9973 | 15-20%                  |                 2 |              0.49865 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0517 | 15-20%                  |                10 |              0.10517 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.058  | >20%                    |                 5 |              0.2116  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0591 | >20%                    |                10 |              0.10591 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0747 |                         |                10 |              0.10747 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.078  | >20%                    |                 5 |              0.2156  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1184 |                         |                 5 |              0.22368 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1367 | >20%                    |                10 |              0.11367 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1496 | >20%                    |                 5 |              0.22992 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1603 | >20%                    |                 2 |              0.58015 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1874 | >20%                    |                 5 |              0.23748 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1956 | >20%                    |                 5 |              0.23912 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2386 | >20%                    |                10 |              0.12386 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.2454 | >20%                    |                10 |              0.12454 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2537 | 5-10%                   |                 2 |              0.62685 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2712 |                         |                 5 |              0.25424 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2817 | >20%                    |                 5 |              0.25634 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.297  | 15-20%                  |                10 |              0.1297  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2994 | 5-10%                   |                 5 |              0.25988 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3796 | 10-15%                  |                 2 |              0.6898  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3885 | 10-15%                  |                10 |              0.13885 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4011 | 5-10%                   |                10 |              0.14011 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5519 | 15-20%                  |                 5 |              0.31038 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5843 | >20%                    |                10 |              0.15843 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6115 | 15-20%                  |                10 |              0.16115 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.6473 | 5-10%                   |                 2 |              0.82365 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.7065 | >20%                    |                10 |              0.17065 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.7682 | >20%                    |                10 |              0.17682 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8046 | >20%                    |                10 |              0.18046 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8743 |                         |                10 |              0.18743 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9567 | 5-10%                   |                 2 |              0.97835 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.5514 | >20%                    |                 5 |              0.51028 |