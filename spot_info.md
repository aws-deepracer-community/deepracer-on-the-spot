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

Data correct as of 2025-09-28 01:53:23.107560, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1915 | 10-15%                  |                 2 |              0.09575 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1916 | >20%                    |                 2 |              0.0958  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1993 | >20%                    |                 2 |              0.09965 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2156 | 5-10%                   |                 2 |              0.1078  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2292 | >20%                    |                 5 |              0.04584 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2343 | >20%                    |                 2 |              0.11715 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2416 | >20%                    |                 2 |              0.1208  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2451 | >20%                    |                 2 |              0.12255 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.262  | >20%                    |                 2 |              0.131   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2623 | 10-15%                  |                 5 |              0.05246 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2717 | >20%                    |                 5 |              0.05434 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2946 | 10-15%                  |                 2 |              0.1473  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2996 | >20%                    |                 2 |              0.1498  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3037 | >20%                    |                 2 |              0.15185 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3103 | 5-10%                   |                 2 |              0.15515 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3204 | 15-20%                  |                 2 |              0.1602  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3258 | >20%                    |                 2 |              0.1629  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3334 | >20%                    |                 2 |              0.1667  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3354 | <5%                     |                10 |              0.03354 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3356 | 10-15%                  |                 2 |              0.1678  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3415 | >20%                    |                10 |              0.03415 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3491 | 5-10%                   |                 2 |              0.17455 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.351  | 15-20%                  |                 2 |              0.1755  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3574 | >20%                    |                 2 |              0.1787  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3579 | >20%                    |                 2 |              0.17895 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3602 | >20%                    |                 2 |              0.1801  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3721 | >20%                    |                 5 |              0.07442 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3749 | >20%                    |                 2 |              0.18745 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.381  | >20%                    |                 5 |              0.0762  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3941 | >20%                    |                 2 |              0.19705 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3976 | >20%                    |                 2 |              0.1988  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4029 | >20%                    |                 2 |              0.20145 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4061 | 15-20%                  |                 2 |              0.20305 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4124 | >20%                    |                 5 |              0.08248 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4146 | >20%                    |                 5 |              0.08292 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4173 | >20%                    |                 2 |              0.20865 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4183 | >20%                    |                 5 |              0.08366 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4199 | >20%                    |                10 |              0.04199 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4244 | >20%                    |                 2 |              0.2122  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4252 | >20%                    |                 5 |              0.08504 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4277 | <5%                     |                10 |              0.04277 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4286 | 5-10%                   |                 2 |              0.2143  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4337 | >20%                    |                 5 |              0.08674 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.438  | >20%                    |                 5 |              0.0876  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4389 | >20%                    |                 2 |              0.21945 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4415 | >20%                    |                 2 |              0.22075 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4433 | 10-15%                  |                 5 |              0.08866 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4436 | 15-20%                  |                 2 |              0.2218  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4447 | 15-20%                  |                 5 |              0.08894 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4514 | >20%                    |                10 |              0.04514 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4528 | 10-15%                  |                 2 |              0.2264  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4594 | <5%                     |                 2 |              0.2297  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4627 | >20%                    |                 2 |              0.23135 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4735 | >20%                    |                 5 |              0.0947  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.482  | >20%                    |                 5 |              0.0964  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4844 | >20%                    |                 5 |              0.09688 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4869 | 10-15%                  |                 2 |              0.24345 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5042 | >20%                    |                10 |              0.05042 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5047 | >20%                    |                 5 |              0.10094 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5064 | >20%                    |                 2 |              0.2532  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5067 | 5-10%                   |                 5 |              0.10134 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5069 | >20%                    |                 2 |              0.25345 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5125 | >20%                    |                 2 |              0.25625 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5149 | >20%                    |                 5 |              0.10298 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5227 | >20%                    |                 5 |              0.10454 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5361 | 10-15%                  |                 2 |              0.26805 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5454 | 5-10%                   |                 2 |              0.2727  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5454 | >20%                    |                 2 |              0.2727  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5489 | >20%                    |                 2 |              0.27445 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5571 | 15-20%                  |                10 |              0.05571 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5572 | >20%                    |                 5 |              0.11144 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5669 | >20%                    |                 5 |              0.11338 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5702 | >20%                    |                 5 |              0.11404 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5781 | >20%                    |                 2 |              0.28905 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5894 | >20%                    |                 5 |              0.11788 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5952 | 15-20%                  |                 2 |              0.2976  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5997 | >20%                    |                 5 |              0.11994 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6002 | >20%                    |                 5 |              0.12004 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6006 | >20%                    |                 5 |              0.12012 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6008 | >20%                    |                 2 |              0.3004  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6035 | >20%                    |                 2 |              0.30175 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.617  | >20%                    |                 5 |              0.1234  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6178 | >20%                    |                 5 |              0.12356 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.627  | 10-15%                  |                 5 |              0.1254  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6354 | 10-15%                  |                 5 |              0.12708 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.643  | >20%                    |                 5 |              0.1286  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6444 | >20%                    |                 5 |              0.12888 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6447 | 15-20%                  |                 5 |              0.12894 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6499 | 15-20%                  |                 2 |              0.32495 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6575 | >20%                    |                 5 |              0.1315  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.658  | 5-10%                   |                10 |              0.0658  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6713 | >20%                    |                 5 |              0.13426 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6725 | >20%                    |                 5 |              0.1345  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6753 | >20%                    |                 5 |              0.13506 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6853 | >20%                    |                 5 |              0.13706 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6855 | >20%                    |                 2 |              0.34275 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.688  | >20%                    |                 5 |              0.1376  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6958 | >20%                    |                 5 |              0.13916 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.699  | >20%                    |                 5 |              0.1398  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7048 | 15-20%                  |                 5 |              0.14096 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7067 | >20%                    |                10 |              0.07067 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7074 | 15-20%                  |                10 |              0.07074 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7249 | >20%                    |                 5 |              0.14498 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7253 | >20%                    |                 2 |              0.36265 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7317 | 15-20%                  |                 5 |              0.14634 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7318 | >20%                    |                10 |              0.07318 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7465 | 15-20%                  |                10 |              0.07465 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7555 | >20%                    |                 5 |              0.1511  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7568 | >20%                    |                10 |              0.07568 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7614 | >20%                    |                10 |              0.07614 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7673 | 10-15%                  |                 2 |              0.38365 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7757 | >20%                    |                10 |              0.07757 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7846 | 15-20%                  |                10 |              0.07846 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8003 | 10-15%                  |                 2 |              0.40015 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8074 | >20%                    |                 5 |              0.16148 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.813  | >20%                    |                10 |              0.0813  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8184 | >20%                    |                 5 |              0.16368 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8286 | >20%                    |                10 |              0.08286 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8312 | 15-20%                  |                 5 |              0.16624 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8487 | 15-20%                  |                10 |              0.08487 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8491 | 15-20%                  |                10 |              0.08491 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8494 | <5%                     |                10 |              0.08494 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8508 | >20%                    |                10 |              0.08508 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8581 | >20%                    |                 5 |              0.17162 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8638 | 15-20%                  |                10 |              0.08638 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8639 | 10-15%                  |                10 |              0.08639 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8949 | >20%                    |                10 |              0.08949 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8971 | <5%                     |                10 |              0.08971 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9058 | 10-15%                  |                10 |              0.09058 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9133 | >20%                    |                10 |              0.09133 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.919  | 15-20%                  |                10 |              0.0919  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9282 | >20%                    |                10 |              0.09282 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9476 | <5%                     |                10 |              0.09476 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9522 | 5-10%                   |                10 |              0.09522 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9544 | >20%                    |                 5 |              0.19088 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.98   | 15-20%                  |                10 |              0.098   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.984  | 15-20%                  |                10 |              0.0984  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.999  | 10-15%                  |                10 |              0.0999  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0117 | 10-15%                  |                 5 |              0.20234 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0326 | >20%                    |                10 |              0.10326 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0511 | >20%                    |                 2 |              0.52555 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0589 | 5-10%                   |                10 |              0.10589 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0617 | >20%                    |                10 |              0.10617 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.072  | >20%                    |                 5 |              0.2144  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0728 | >20%                    |                 2 |              0.5364  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0774 | 10-15%                  |                 2 |              0.5387  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0826 | 15-20%                  |                10 |              0.10826 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0828 | >20%                    |                 2 |              0.5414  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0999 | >20%                    |                10 |              0.10999 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1107 | 5-10%                   |                10 |              0.11107 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.125  | 5-10%                   |                10 |              0.1125  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1346 | <5%                     |                10 |              0.11346 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1422 | >20%                    |                10 |              0.11422 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1429 | >20%                    |                 5 |              0.22858 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1619 | >20%                    |                 5 |              0.23238 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1824 | >20%                    |                 5 |              0.23648 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1849 | 10-15%                  |                10 |              0.11849 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2127 | 5-10%                   |                 2 |              0.60635 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2224 | 15-20%                  |                10 |              0.12224 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.2466 | >20%                    |                10 |              0.12466 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3168 | >20%                    |                10 |              0.13168 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3187 | 10-15%                  |                10 |              0.13187 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3501 | 10-15%                  |                 5 |              0.27002 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4361 | >20%                    |                10 |              0.14361 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4431 | <5%                     |                 2 |              0.72155 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6199 | >20%                    |                10 |              0.16199 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6258 | >20%                    |                10 |              0.16258 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6464 | 10-15%                  |                 5 |              0.32928 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6982 | >20%                    |                10 |              0.16982 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.726  | >20%                    |                10 |              0.1726  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0295 | 10-15%                  |                10 |              0.20295 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1934 | 15-20%                  |                10 |              0.21934 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.9604 | >20%                    |                10 |              0.29604 |