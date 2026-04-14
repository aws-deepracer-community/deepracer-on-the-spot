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

Data correct as of 2026-04-14 02:57:05.802882, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1769 | >20%                    |                 2 |              0.08845 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1984 | 15-20%                  |                 2 |              0.0992  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2028 | >20%                    |                 2 |              0.1014  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2299 | >20%                    |                 2 |              0.11495 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2356 | >20%                    |                 2 |              0.1178  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2433 | 15-20%                  |                 5 |              0.04866 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2446 | >20%                    |                 2 |              0.1223  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2606 | >20%                    |                 2 |              0.1303  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2685 | 5-10%                   |                10 |              0.02685 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.275  | 15-20%                  |                 5 |              0.055   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2785 | 15-20%                  |                 2 |              0.13925 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3073 | >20%                    |                 2 |              0.15365 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3087 | 10-15%                  |                 2 |              0.15435 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3139 | >20%                    |                 5 |              0.06278 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3157 | >20%                    |                 2 |              0.15785 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3206 | >20%                    |                 5 |              0.06412 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3278 | >20%                    |                10 |              0.03278 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3302 | >20%                    |                 5 |              0.06604 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3306 | 5-10%                   |                10 |              0.03306 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3315 | 15-20%                  |                 2 |              0.16575 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3345 | <5%                     |                 2 |              0.16725 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3363 | 15-20%                  |                 5 |              0.06726 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3385 | 10-15%                  |                 2 |              0.16925 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3388 | 10-15%                  |                 2 |              0.1694  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3533 | 10-15%                  |                 2 |              0.17665 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3554 | >20%                    |                10 |              0.03554 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3577 | >20%                    |                 2 |              0.17885 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3674 | >20%                    |                 2 |              0.1837  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3699 | >20%                    |                 5 |              0.07398 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3707 | >20%                    |                 5 |              0.07414 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3737 | 5-10%                   |                10 |              0.03737 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3772 | >20%                    |                 2 |              0.1886  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.397  | >20%                    |                 2 |              0.1985  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4017 | >20%                    |                 5 |              0.08034 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4075 | 15-20%                  |                 2 |              0.20375 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4085 | >20%                    |                 5 |              0.0817  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.411  | >20%                    |                 2 |              0.2055  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4132 | <5%                     |                 2 |              0.2066  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4157 | <5%                     |                 2 |              0.20785 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4214 | >20%                    |                 5 |              0.08428 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4225 | >20%                    |                 2 |              0.21125 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4232 | >20%                    |                 5 |              0.08464 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4267 | >20%                    |                 5 |              0.08534 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4358 | >20%                    |                 5 |              0.08716 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4365 | >20%                    |                 2 |              0.21825 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4381 | >20%                    |                 2 |              0.21905 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4382 | 10-15%                  |                 2 |              0.2191  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.442  | >20%                    |                 2 |              0.221   |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.447  | >20%                    |                 5 |              0.0894  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.449  | 15-20%                  |                 2 |              0.2245  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4539 | 15-20%                  |                 2 |              0.22695 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4542 | >20%                    |                 5 |              0.09084 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4563 | <5%                     |                10 |              0.04563 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4612 | >20%                    |                 5 |              0.09224 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4614 | >20%                    |                 2 |              0.2307  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.473  | >20%                    |                 2 |              0.2365  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4818 | >20%                    |                 5 |              0.09636 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4835 | >20%                    |                 5 |              0.0967  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4846 | >20%                    |                 5 |              0.09692 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4996 | >20%                    |                 5 |              0.09992 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5055 | >20%                    |                 2 |              0.25275 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5172 | >20%                    |                 2 |              0.2586  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5183 | >20%                    |                 2 |              0.25915 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5186 | >20%                    |                10 |              0.05186 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5273 | 5-10%                   |                 5 |              0.10546 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5327 | >20%                    |                 5 |              0.10654 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5412 | >20%                    |                10 |              0.05412 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5484 | 15-20%                  |                 5 |              0.10968 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5489 | >20%                    |                 5 |              0.10978 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5593 | >20%                    |                 5 |              0.11186 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5631 | >20%                    |                 5 |              0.11262 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5669 | 5-10%                   |                 5 |              0.11338 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5708 | >20%                    |                10 |              0.05708 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5714 | <5%                     |                 5 |              0.11428 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5775 | 5-10%                   |                 2 |              0.28875 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5832 | 10-15%                  |                 5 |              0.11664 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5835 | >20%                    |                 2 |              0.29175 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5852 | 5-10%                   |                 2 |              0.2926  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5928 | >20%                    |                 5 |              0.11856 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5962 | >20%                    |                10 |              0.05962 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6187 | >20%                    |                10 |              0.06187 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6224 | >20%                    |                 5 |              0.12448 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6266 | 10-15%                  |                 2 |              0.3133  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6314 | >20%                    |                 5 |              0.12628 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6359 | >20%                    |                 5 |              0.12718 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6386 | >20%                    |                10 |              0.06386 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.649  | >20%                    |                10 |              0.0649  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6604 | >20%                    |                10 |              0.06604 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.663  | >20%                    |                 5 |              0.1326  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6707 | >20%                    |                 2 |              0.33535 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6756 | >20%                    |                 2 |              0.3378  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6785 | >20%                    |                10 |              0.06785 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6995 | >20%                    |                 2 |              0.34975 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7206 | >20%                    |                 5 |              0.14412 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7253 | >20%                    |                10 |              0.07253 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7283 | >20%                    |                10 |              0.07283 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7446 | >20%                    |                 5 |              0.14892 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7502 | >20%                    |                 5 |              0.15004 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7524 | 5-10%                   |                10 |              0.07524 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7564 | >20%                    |                10 |              0.07564 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7606 | >20%                    |                10 |              0.07606 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7614 | >20%                    |                 2 |              0.3807  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7749 | 15-20%                  |                10 |              0.07749 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7896 | >20%                    |                 5 |              0.15792 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7928 | 5-10%                   |                10 |              0.07928 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8029 | >20%                    |                 5 |              0.16058 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8034 | 15-20%                  |                10 |              0.08034 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8052 | >20%                    |                10 |              0.08052 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8165 | >20%                    |                 5 |              0.1633  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8205 | >20%                    |                 5 |              0.1641  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8207 | >20%                    |                10 |              0.08207 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8218 | >20%                    |                10 |              0.08218 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8364 | >20%                    |                 2 |              0.4182  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8418 | >20%                    |                 5 |              0.16836 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8419 | >20%                    |                10 |              0.08419 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8443 | 5-10%                   |                 2 |              0.42215 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.878  | >20%                    |                10 |              0.0878  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8812 | 15-20%                  |                10 |              0.08812 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.888  | 15-20%                  |                10 |              0.0888  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8934 | >20%                    |                10 |              0.08934 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9013 | >20%                    |                 5 |              0.18026 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9046 | >20%                    |                10 |              0.09046 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9122 | >20%                    |                10 |              0.09122 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9168 | >20%                    |                10 |              0.09168 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9328 | 10-15%                  |                10 |              0.09328 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9366 | >20%                    |                 5 |              0.18732 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9403 | >20%                    |                10 |              0.09403 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9493 | 15-20%                  |                10 |              0.09493 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9558 | 5-10%                   |                10 |              0.09558 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9666 | >20%                    |                10 |              0.09666 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.005  | >20%                    |                 5 |              0.201   |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0092 | 10-15%                  |                 2 |              0.5046  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0714 | 15-20%                  |                10 |              0.10714 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0867 | >20%                    |                10 |              0.10867 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1148 | >20%                    |                10 |              0.11148 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1183 | 10-15%                  |                10 |              0.11183 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1271 | >20%                    |                10 |              0.11271 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1953 | >20%                    |                 5 |              0.23906 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2445 | >20%                    |                10 |              0.12445 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2659 | >20%                    |                 5 |              0.25318 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2814 | >20%                    |                 2 |              0.6407  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3158 | 15-20%                  |                10 |              0.13158 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.346  | >20%                    |                 5 |              0.2692  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3952 |                         |                 5 |              0.27904 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4609 | 15-20%                  |                10 |              0.14609 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5501 | >20%                    |                10 |              0.15501 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5867 | 15-20%                  |                 5 |              0.31734 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.6349 |                         |                 2 |              0.81745 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.6995 | 5-10%                   |                 2 |              0.84975 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8041 | >20%                    |                10 |              0.18041 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8739 |                         |                10 |              0.18739 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.2474 | >20%                    |                10 |              0.32474 |