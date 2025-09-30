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

Data correct as of 2025-09-30 01:42:06.261741, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.193  | >20%                    |                 2 |              0.0965  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2003 | >20%                    |                 2 |              0.10015 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2081 | 10-15%                  |                 2 |              0.10405 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2261 | 5-10%                   |                 2 |              0.11305 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2329 | >20%                    |                 2 |              0.11645 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2416 | >20%                    |                 2 |              0.1208  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2457 | >20%                    |                 5 |              0.04914 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2479 | 10-15%                  |                 5 |              0.04958 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2557 | >20%                    |                 2 |              0.12785 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2657 | >20%                    |                 2 |              0.13285 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2715 | >20%                    |                 5 |              0.0543  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2932 | >20%                    |                 2 |              0.1466  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2956 | >20%                    |                 2 |              0.1478  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2966 | 10-15%                  |                 2 |              0.1483  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3058 | 5-10%                   |                 2 |              0.1529  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.322  | >20%                    |                 2 |              0.161   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3275 | 15-20%                  |                 2 |              0.16375 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3283 | 10-15%                  |                 2 |              0.16415 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3323 | >20%                    |                 2 |              0.16615 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3551 | 15-20%                  |                 2 |              0.17755 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3585 | >20%                    |                 2 |              0.17925 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3596 | 5-10%                   |                 2 |              0.1798  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3599 | >20%                    |                 2 |              0.17995 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.365  | >20%                    |                 5 |              0.073   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3704 | >20%                    |                 2 |              0.1852  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3741 | >20%                    |                 2 |              0.18705 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3787 | >20%                    |                 5 |              0.07574 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.384  | >20%                    |                10 |              0.0384  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3896 | >20%                    |                 2 |              0.1948  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3914 | 15-20%                  |                 2 |              0.1957  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3954 | >20%                    |                10 |              0.03954 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3958 | >20%                    |                 5 |              0.07916 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4014 | >20%                    |                 2 |              0.2007  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4074 | >20%                    |                 2 |              0.2037  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4099 | >20%                    |                 5 |              0.08198 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4173 | >20%                    |                 5 |              0.08346 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4179 | >20%                    |                10 |              0.04179 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4217 | >20%                    |                 5 |              0.08434 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4265 | 5-10%                   |                 2 |              0.21325 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4276 | >20%                    |                 2 |              0.2138  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4324 | >20%                    |                 2 |              0.2162  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4344 | 15-20%                  |                 2 |              0.2172  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4376 | 10-15%                  |                 5 |              0.08752 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4378 | >20%                    |                 2 |              0.2189  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4399 | <5%                     |                 2 |              0.21995 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4403 | >20%                    |                 5 |              0.08806 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4426 | >20%                    |                 2 |              0.2213  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4427 | >20%                    |                 5 |              0.08854 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4478 | 15-20%                  |                 5 |              0.08956 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4511 | 10-15%                  |                 2 |              0.22555 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4572 | >20%                    |                 2 |              0.2286  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4604 | >20%                    |                 5 |              0.09208 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4706 | <5%                     |                10 |              0.04706 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4768 | >20%                    |                 5 |              0.09536 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4841 | 10-15%                  |                 2 |              0.24205 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4863 | >20%                    |                 5 |              0.09726 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4981 | >20%                    |                 2 |              0.24905 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4998 | >20%                    |                 5 |              0.09996 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5019 | 5-10%                   |                 5 |              0.10038 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5043 | >20%                    |                 2 |              0.25215 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5096 | >20%                    |                 2 |              0.2548  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5123 | >20%                    |                 5 |              0.10246 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5255 | >20%                    |                 5 |              0.1051  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5361 | >20%                    |                 2 |              0.26805 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5457 | >20%                    |                 2 |              0.27285 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5463 | 10-15%                  |                 2 |              0.27315 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5483 | >20%                    |                10 |              0.05483 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5504 | 5-10%                   |                 2 |              0.2752  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5583 | >20%                    |                 5 |              0.11166 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5607 | >20%                    |                 5 |              0.11214 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5639 | >20%                    |                 5 |              0.11278 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5864 | >20%                    |                 2 |              0.2932  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5888 | >20%                    |                 2 |              0.2944  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5922 | 15-20%                  |                10 |              0.05922 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5936 | >20%                    |                 5 |              0.11872 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5951 | 15-20%                  |                 2 |              0.29755 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5986 | >20%                    |                 5 |              0.11972 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6    | >20%                    |                 5 |              0.12    |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6145 | >20%                    |                 5 |              0.1229  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6181 | >20%                    |                 2 |              0.30905 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6225 | >20%                    |                 5 |              0.1245  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6295 | 10-15%                  |                 5 |              0.1259  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6326 | 15-20%                  |                 5 |              0.12652 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6349 | >20%                    |                 5 |              0.12698 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6362 | >20%                    |                 5 |              0.12724 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6379 | >20%                    |                 5 |              0.12758 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6385 | 15-20%                  |                 2 |              0.31925 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.64   | 10-15%                  |                 5 |              0.128   |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6624 | >20%                    |                 5 |              0.13248 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6699 | 5-10%                   |                10 |              0.06699 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6703 | >20%                    |                 5 |              0.13406 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6732 | >20%                    |                 5 |              0.13464 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6791 | >20%                    |                 2 |              0.33955 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6837 | >20%                    |                 5 |              0.13674 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6848 | >20%                    |                 5 |              0.13696 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6854 | >20%                    |                 5 |              0.13708 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6918 | 15-20%                  |                10 |              0.06918 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6932 | >20%                    |                 5 |              0.13864 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.699  | >20%                    |                10 |              0.0699  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7011 | >20%                    |                 2 |              0.35055 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7023 | 15-20%                  |                10 |              0.07023 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7068 | >20%                    |                 5 |              0.14136 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7225 | 15-20%                  |                 5 |              0.1445  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7235 | 15-20%                  |                 5 |              0.1447  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7261 | >20%                    |                 5 |              0.14522 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7312 | >20%                    |                10 |              0.07312 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7422 | >20%                    |                 5 |              0.14844 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7435 | >20%                    |                10 |              0.07435 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7545 | 10-15%                  |                 2 |              0.37725 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7669 | 15-20%                  |                10 |              0.07669 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7771 | 15-20%                  |                10 |              0.07771 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7786 | >20%                    |                10 |              0.07786 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7887 | >20%                    |                10 |              0.07887 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7983 | >20%                    |                10 |              0.07983 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8013 | >20%                    |                 5 |              0.16026 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8139 | >20%                    |                10 |              0.08139 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8198 | >20%                    |                 5 |              0.16396 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8227 | 15-20%                  |                 5 |              0.16454 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8427 | <5%                     |                10 |              0.08427 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8484 | >20%                    |                10 |              0.08484 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8539 | 15-20%                  |                10 |              0.08539 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8637 | >20%                    |                 5 |              0.17274 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8771 | 10-15%                  |                 2 |              0.43855 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8777 | >20%                    |                10 |              0.08777 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8813 | >20%                    |                10 |              0.08813 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8836 | 15-20%                  |                10 |              0.08836 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8843 | >20%                    |                10 |              0.08843 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8876 | 10-15%                  |                10 |              0.08876 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8928 | <5%                     |                10 |              0.08928 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9081 | 10-15%                  |                10 |              0.09081 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9214 | <5%                     |                10 |              0.09214 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9312 | 15-20%                  |                10 |              0.09312 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9342 | 5-10%                   |                10 |              0.09342 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9672 | 10-15%                  |                 5 |              0.19344 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.968  | >20%                    |                 5 |              0.1936  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.978  | 15-20%                  |                10 |              0.0978  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9882 | 15-20%                  |                10 |              0.09882 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9992 | >20%                    |                 2 |              0.4996  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0013 | 10-15%                  |                10 |              0.10013 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.01   | >20%                    |                10 |              0.101   |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0246 | 5-10%                   |                10 |              0.10246 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.052  | >20%                    |                 2 |              0.526   |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0585 | >20%                    |                 2 |              0.52925 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0647 | >20%                    |                10 |              0.10647 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0653 | >20%                    |                 5 |              0.21306 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0715 | >20%                    |                 5 |              0.2143  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0878 | 15-20%                  |                10 |              0.10878 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0884 | >20%                    |                10 |              0.10884 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0921 | 10-15%                  |                 2 |              0.54605 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1191 | 5-10%                   |                10 |              0.11191 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1331 | <5%                     |                10 |              0.11331 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1359 | >20%                    |                10 |              0.11359 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1403 | >20%                    |                 5 |              0.22806 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1471 | 5-10%                   |                10 |              0.11471 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1624 | >20%                    |                10 |              0.11624 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1696 | >20%                    |                 5 |              0.23392 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1855 | 10-15%                  |                10 |              0.11855 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2149 | 15-20%                  |                10 |              0.12149 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2326 | 5-10%                   |                 2 |              0.6163  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2947 | 10-15%                  |                10 |              0.12947 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3041 | >20%                    |                10 |              0.13041 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3354 | 10-15%                  |                 5 |              0.26708 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3679 | >20%                    |                10 |              0.13679 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6086 | >20%                    |                10 |              0.16086 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6204 | >20%                    |                10 |              0.16204 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6247 | >20%                    |                10 |              0.16247 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6535 | 10-15%                  |                 5 |              0.3307  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.706  | >20%                    |                10 |              0.1706  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.008  | 10-15%                  |                10 |              0.2008  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2504 | 15-20%                  |                10 |              0.22504 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      3.0028 | >20%                    |                10 |              0.30028 |