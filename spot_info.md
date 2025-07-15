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

Data correct as of 2025-07-15 02:06:30.256280, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.127  | >20%                    |                 2 |              0.0635  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1434 | <5%                     |                 2 |              0.0717  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1725 | 10-15%                  |                 5 |              0.0345  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1764 | >20%                    |                 5 |              0.03528 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1834 | 5-10%                   |                 2 |              0.0917  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.192  | >20%                    |                 2 |              0.096   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2026 | >20%                    |                 5 |              0.04052 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2077 | >20%                    |                10 |              0.02077 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2095 | >20%                    |                 5 |              0.0419  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2202 | >20%                    |                 2 |              0.1101  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2292 | >20%                    |                 2 |              0.1146  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2384 | 10-15%                  |                 5 |              0.04768 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2389 | 5-10%                   |                 2 |              0.11945 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2395 | 15-20%                  |                 2 |              0.11975 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2401 | >20%                    |                 2 |              0.12005 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2433 | 15-20%                  |                 2 |              0.12165 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2434 | >20%                    |                 2 |              0.1217  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2517 | >20%                    |                10 |              0.02517 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2521 | >20%                    |                 2 |              0.12605 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2849 | >20%                    |                 2 |              0.14245 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | >20%                    |                10 |              0.02887 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2898 | 5-10%                   |                10 |              0.02898 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2957 | <5%                     |                 2 |              0.14785 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3052 | >20%                    |                 5 |              0.06104 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.307  | >20%                    |                 2 |              0.1535  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3071 | >20%                    |                10 |              0.03071 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3083 | 5-10%                   |                 2 |              0.15415 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3148 | >20%                    |                 2 |              0.1574  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.315  | 10-15%                  |                 2 |              0.1575  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3234 | 15-20%                  |                 2 |              0.1617  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.331  | <5%                     |                 2 |              0.1655  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3394 | >20%                    |                 2 |              0.1697  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3427 | >20%                    |                 2 |              0.17135 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3569 | 10-15%                  |                 5 |              0.07138 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3575 | >20%                    |                 2 |              0.17875 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3588 | >20%                    |                 2 |              0.1794  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3657 | 15-20%                  |                 5 |              0.07314 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3674 | >20%                    |                 2 |              0.1837  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3801 | <5%                     |                 5 |              0.07602 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3846 | 5-10%                   |                 2 |              0.1923  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3857 | >20%                    |                 2 |              0.19285 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3871 | >20%                    |                 5 |              0.07742 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3896 | >20%                    |                 2 |              0.1948  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3911 | >20%                    |                 5 |              0.07822 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3933 | >20%                    |                 5 |              0.07866 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4013 | >20%                    |                 2 |              0.20065 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4026 | >20%                    |                 2 |              0.2013  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4117 | >20%                    |                 2 |              0.20585 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4222 | 5-10%                   |                 2 |              0.2111  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4278 | 15-20%                  |                 5 |              0.08556 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4335 | <5%                     |                 2 |              0.21675 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4372 | >20%                    |                 5 |              0.08744 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4382 | 10-15%                  |                 2 |              0.2191  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4453 | >20%                    |                 5 |              0.08906 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4502 | >20%                    |                 5 |              0.09004 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4574 | >20%                    |                 5 |              0.09148 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4606 | >20%                    |                 2 |              0.2303  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4617 | >20%                    |                 5 |              0.09234 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4634 | 5-10%                   |                 2 |              0.2317  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4722 | >20%                    |                 2 |              0.2361  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4722 | >20%                    |                 2 |              0.2361  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4804 | >20%                    |                 2 |              0.2402  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4876 | >20%                    |                 2 |              0.2438  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4908 | >20%                    |                 2 |              0.2454  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4949 | >20%                    |                 5 |              0.09898 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4959 | <5%                     |                 5 |              0.09918 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4974 | >20%                    |                 2 |              0.2487  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4997 | <5%                     |                 2 |              0.24985 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5017 | 15-20%                  |                 5 |              0.10034 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5037 | 15-20%                  |                 2 |              0.25185 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5145 | 15-20%                  |                 5 |              0.1029  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5154 | >20%                    |                 5 |              0.10308 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5155 | >20%                    |                10 |              0.05155 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5159 | 10-15%                  |                 5 |              0.10318 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.5173 | >20%                    |                10 |              0.05173 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5213 | >20%                    |                 5 |              0.10426 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5242 | >20%                    |                 5 |              0.10484 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5302 | >20%                    |                 2 |              0.2651  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5355 | >20%                    |                 5 |              0.1071  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5365 | <5%                     |                 5 |              0.1073  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5366 | >20%                    |                 2 |              0.2683  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5442 | >20%                    |                 5 |              0.10884 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5549 | >20%                    |                 2 |              0.27745 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5574 | >20%                    |                 5 |              0.11148 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5589 | >20%                    |                10 |              0.05589 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5621 | >20%                    |                 2 |              0.28105 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5659 | >20%                    |                 5 |              0.11318 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5683 | >20%                    |                10 |              0.05683 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5721 | >20%                    |                 2 |              0.28605 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5804 | <5%                     |                 5 |              0.11608 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.588  | >20%                    |                 2 |              0.294   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5893 | >20%                    |                10 |              0.05893 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5939 | >20%                    |                10 |              0.05939 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5953 | 10-15%                  |                 5 |              0.11906 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6065 | 10-15%                  |                 5 |              0.1213  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6097 | 15-20%                  |                10 |              0.06097 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6119 | >20%                    |                 5 |              0.12238 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6124 | 15-20%                  |                10 |              0.06124 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6191 | >20%                    |                 2 |              0.30955 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6202 | <5%                     |                10 |              0.06202 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6232 | >20%                    |                 5 |              0.12464 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6254 | 5-10%                   |                 2 |              0.3127  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.63   | >20%                    |                 5 |              0.126   |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6339 | 10-15%                  |                 2 |              0.31695 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6448 | >20%                    |                 5 |              0.12896 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6454 | >20%                    |                 5 |              0.12908 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6471 | >20%                    |                 2 |              0.32355 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6479 | >20%                    |                10 |              0.06479 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6752 | 5-10%                   |                 5 |              0.13504 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.686  | >20%                    |                 5 |              0.1372  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6862 | >20%                    |                 5 |              0.13724 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6874 | >20%                    |                10 |              0.06874 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6882 | 5-10%                   |                 5 |              0.13764 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.6981 | >20%                    |                 5 |              0.13962 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7042 | 15-20%                  |                 5 |              0.14084 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7056 | >20%                    |                 5 |              0.14112 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7237 | >20%                    |                 2 |              0.36185 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7283 | <5%                     |                 5 |              0.14566 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7288 | 10-15%                  |                10 |              0.07288 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7507 | 10-15%                  |                10 |              0.07507 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7755 | 15-20%                  |                10 |              0.07755 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.777  | >20%                    |                10 |              0.0777  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7866 | >20%                    |                10 |              0.07866 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7894 | 5-10%                   |                10 |              0.07894 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7899 | >20%                    |                 5 |              0.15798 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8011 | 10-15%                  |                10 |              0.08011 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8015 | 10-15%                  |                 5 |              0.1603  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8042 | <5%                     |                10 |              0.08042 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8069 | >20%                    |                 5 |              0.16138 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8138 | 5-10%                   |                10 |              0.08138 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8219 | >20%                    |                10 |              0.08219 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8225 | 5-10%                   |                10 |              0.08225 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8342 | >20%                    |                 5 |              0.16684 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8568 | <5%                     |                 5 |              0.17136 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8577 | 10-15%                  |                10 |              0.08577 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8608 | <5%                     |                10 |              0.08608 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8654 | >20%                    |                10 |              0.08654 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8699 | >20%                    |                 5 |              0.17398 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8819 | >20%                    |                10 |              0.08819 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9001 | 5-10%                   |                10 |              0.09001 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9035 | 15-20%                  |                10 |              0.09035 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9198 | >20%                    |                10 |              0.09198 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9246 | >20%                    |                10 |              0.09246 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9359 | 15-20%                  |                10 |              0.09359 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9443 | >20%                    |                10 |              0.09443 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9528 | 15-20%                  |                10 |              0.09528 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9644 | >20%                    |                10 |              0.09644 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9678 | 5-10%                   |                10 |              0.09678 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9809 | >20%                    |                10 |              0.09809 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0017 | >20%                    |                 5 |              0.20034 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0262 | >20%                    |                10 |              0.10262 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0398 | <5%                     |                10 |              0.10398 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.041  | <5%                     |                10 |              0.1041  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.051  | <5%                     |                10 |              0.1051  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0552 | >20%                    |                 5 |              0.21104 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.078  | >20%                    |                10 |              0.1078  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0826 | >20%                    |                 2 |              0.5413  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0862 | 15-20%                  |                10 |              0.10862 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0891 | >20%                    |                10 |              0.10891 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0894 | >20%                    |                 2 |              0.5447  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1375 | <5%                     |                 2 |              0.56875 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1578 | >20%                    |                10 |              0.11578 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1681 | >20%                    |                10 |              0.11681 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2368 | 15-20%                  |                10 |              0.12368 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2532 | >20%                    |                10 |              0.12532 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2601 | >20%                    |                 5 |              0.25202 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2689 | <5%                     |                 5 |              0.25378 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2703 | >20%                    |                 5 |              0.25406 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3072 | >20%                    |                 2 |              0.6536  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3213 | >20%                    |                 2 |              0.66065 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3709 | >20%                    |                 5 |              0.27418 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3855 | <5%                     |                10 |              0.13855 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.408  | >20%                    |                10 |              0.1408  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4162 | 10-15%                  |                10 |              0.14162 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4657 | <5%                     |                 5 |              0.29314 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5593 | 15-20%                  |                10 |              0.15593 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.82   | <5%                     |                 2 |              0.91    |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8411 | <5%                     |                10 |              0.18411 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.9082 | >20%                    |                10 |              0.19082 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9916 | 5-10%                   |                10 |              0.19916 |