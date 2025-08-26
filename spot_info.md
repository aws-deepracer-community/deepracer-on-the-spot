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

Data correct as of 2025-08-26 01:51:20.562705, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.098  | 5-10%                   |                 2 |              0.049   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1058 | >20%                    |                 2 |              0.0529  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.12   |                         |                 2 |              0.06    |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1625 |                         |                 5 |              0.0325  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1699 | >20%                    |                 5 |              0.03398 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1825 | >20%                    |                 2 |              0.09125 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1993 | >20%                    |                 2 |              0.09965 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2021 | 10-15%                  |                 5 |              0.04042 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2072 | 10-15%                  |                 2 |              0.1036  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2104 | >20%                    |                 2 |              0.1052  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2352 | >20%                    |                 5 |              0.04704 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2433 | >20%                    |                 5 |              0.04866 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2433 | >20%                    |                 2 |              0.12165 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2474 |                         |                10 |              0.02474 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2668 | >20%                    |                 2 |              0.1334  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2734 | >20%                    |                 2 |              0.1367  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2877 | 10-15%                  |                 2 |              0.14385 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2909 | >20%                    |                 2 |              0.14545 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3163 | 10-15%                  |                 2 |              0.15815 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3184 | 10-15%                  |                 2 |              0.1592  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3249 | 5-10%                   |                 2 |              0.16245 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3279 | >20%                    |                 2 |              0.16395 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3302 | >20%                    |                 2 |              0.1651  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3345 | >20%                    |                 2 |              0.16725 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3417 | >20%                    |                 2 |              0.17085 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.355  | >20%                    |                 2 |              0.1775  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3563 | >20%                    |                 2 |              0.17815 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3569 | >20%                    |                10 |              0.03569 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3615 | >20%                    |                 5 |              0.0723  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3648 | >20%                    |                 2 |              0.1824  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3684 | 10-15%                  |                10 |              0.03684 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3694 | >20%                    |                 2 |              0.1847  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3704 | >20%                    |                 5 |              0.07408 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3728 | >20%                    |                 5 |              0.07456 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3788 | >20%                    |                 2 |              0.1894  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3814 | 10-15%                  |                 2 |              0.1907  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3886 | >20%                    |                 5 |              0.07772 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.393  | >20%                    |                 2 |              0.1965  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4062 | >20%                    |                 2 |              0.2031  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4085 | >20%                    |                 5 |              0.0817  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4111 | >20%                    |                 5 |              0.08222 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4117 | >20%                    |                 2 |              0.20585 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4165 | 10-15%                  |                 2 |              0.20825 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.424  | >20%                    |                 5 |              0.0848  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4244 | >20%                    |                 5 |              0.08488 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4409 | 15-20%                  |                 2 |              0.22045 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4417 | 10-15%                  |                 2 |              0.22085 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4519 | >20%                    |                10 |              0.04519 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4532 | 15-20%                  |                 5 |              0.09064 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4547 | 15-20%                  |                 5 |              0.09094 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.455  | 5-10%                   |                 2 |              0.2275  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4597 | >20%                    |                 5 |              0.09194 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.467  | >20%                    |                 2 |              0.2335  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.468  | >20%                    |                 5 |              0.0936  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4726 | <5%                     |                 2 |              0.2363  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4755 | >20%                    |                 2 |              0.23775 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4894 | >20%                    |                 2 |              0.2447  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4911 | >20%                    |                 2 |              0.24555 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4931 | 15-20%                  |                 2 |              0.24655 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4942 | >20%                    |                 2 |              0.2471  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4978 | >20%                    |                 5 |              0.09956 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5039 | >20%                    |                 5 |              0.10078 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5051 | 5-10%                   |                 5 |              0.10102 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5059 | 15-20%                  |                 5 |              0.10118 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5063 | 15-20%                  |                 2 |              0.25315 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5126 | >20%                    |                 2 |              0.2563  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5156 | 15-20%                  |                 5 |              0.10312 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5262 | >20%                    |                 2 |              0.2631  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5285 | >20%                    |                 2 |              0.26425 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.533  | 10-15%                  |                10 |              0.0533  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5366 | >20%                    |                 5 |              0.10732 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5435 | >20%                    |                 2 |              0.27175 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5443 | >20%                    |                 2 |              0.27215 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5474 | 10-15%                  |                10 |              0.05474 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5484 | 10-15%                  |                 2 |              0.2742  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5538 | 15-20%                  |                 5 |              0.11076 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5687 | >20%                    |                 5 |              0.11374 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.572  | >20%                    |                 2 |              0.286   |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5771 | >20%                    |                 5 |              0.11542 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5786 | >20%                    |                 5 |              0.11572 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5819 | >20%                    |                 5 |              0.11638 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5846 | >20%                    |                 2 |              0.2923  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5896 | >20%                    |                 5 |              0.11792 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5912 | >20%                    |                 5 |              0.11824 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5916 | >20%                    |                 5 |              0.11832 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5996 | 10-15%                  |                 2 |              0.2998  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6108 | 10-15%                  |                 5 |              0.12216 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6198 | >20%                    |                 5 |              0.12396 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6206 | 10-15%                  |                 5 |              0.12412 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6291 | 15-20%                  |                 5 |              0.12582 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6354 | >20%                    |                 5 |              0.12708 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6383 | 15-20%                  |                 5 |              0.12766 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.644  | 15-20%                  |                 5 |              0.1288  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6447 | >20%                    |                 2 |              0.32235 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.648  | 15-20%                  |                10 |              0.0648  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6486 | <5%                     |                 2 |              0.3243  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6487 | 5-10%                   |                10 |              0.06487 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6668 | >20%                    |                 5 |              0.13336 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6736 | 15-20%                  |                 5 |              0.13472 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6776 | 15-20%                  |                 5 |              0.13552 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.68   | 15-20%                  |                 5 |              0.136   |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6909 | 15-20%                  |                 2 |              0.34545 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6927 | 15-20%                  |                10 |              0.06927 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6941 | >20%                    |                10 |              0.06941 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7121 | >20%                    |                 5 |              0.14242 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7296 | >20%                    |                 5 |              0.14592 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7333 | >20%                    |                10 |              0.07333 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7409 | >20%                    |                10 |              0.07409 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7426 | >20%                    |                 5 |              0.14852 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7555 | >20%                    |                10 |              0.07555 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7581 | >20%                    |                10 |              0.07581 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7584 | >20%                    |                10 |              0.07584 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7653 | >20%                    |                 5 |              0.15306 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7654 | >20%                    |                10 |              0.07654 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7782 | >20%                    |                 5 |              0.15564 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7793 | 5-10%                   |                 5 |              0.15586 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7807 | >20%                    |                10 |              0.07807 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7854 | 5-10%                   |                10 |              0.07854 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8104 | >20%                    |                 5 |              0.16208 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8267 | >20%                    |                10 |              0.08267 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.838  | >20%                    |                 5 |              0.1676  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8494 | 5-10%                   |                10 |              0.08494 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.8586 | >20%                    |                10 |              0.08586 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8622 | >20%                    |                10 |              0.08622 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8705 | >20%                    |                 5 |              0.1741  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8725 | 5-10%                   |                10 |              0.08725 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8726 | >20%                    |                10 |              0.08726 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8743 | 5-10%                   |                 2 |              0.43715 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8787 | >20%                    |                 2 |              0.43935 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8874 | 5-10%                   |                10 |              0.08874 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9149 | 5-10%                   |                10 |              0.09149 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.917  | <5%                     |                10 |              0.0917  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.918  | <5%                     |                10 |              0.0918  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9192 | >20%                    |                 2 |              0.4596  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9213 | 10-15%                  |                10 |              0.09213 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9239 | 10-15%                  |                10 |              0.09239 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9473 | <5%                     |                10 |              0.09473 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9491 | >20%                    |                10 |              0.09491 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9806 | >20%                    |                 2 |              0.4903  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9856 | 15-20%                  |                10 |              0.09856 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9923 | 10-15%                  |                10 |              0.09923 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9972 | 10-15%                  |                10 |              0.09972 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0041 | 15-20%                  |                10 |              0.10041 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0183 | >20%                    |                10 |              0.10183 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0508 | <5%                     |                10 |              0.10508 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0531 | >20%                    |                10 |              0.10531 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0616 | >20%                    |                10 |              0.10616 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0669 | >20%                    |                10 |              0.10669 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0862 | >20%                    |                10 |              0.10862 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0869 | <5%                     |                 2 |              0.54345 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1068 | >20%                    |                10 |              0.11068 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1283 | >20%                    |                10 |              0.11283 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1356 | >20%                    |                 5 |              0.22712 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1457 | >20%                    |                10 |              0.11457 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1471 | >20%                    |                 2 |              0.57355 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.1529 | 5-10%                   |                 5 |              0.23058 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.158  | 5-10%                   |                 5 |              0.2316  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1682 | >20%                    |                 5 |              0.23364 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2161 | >20%                    |                 5 |              0.24322 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.23   | 15-20%                  |                10 |              0.123   |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3116 | 15-20%                  |                 2 |              0.6558  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3548 | >20%                    |                10 |              0.13548 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4033 | >20%                    |                 5 |              0.28066 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4784 | 10-15%                  |                10 |              0.14784 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.4949 | 10-15%                  |                10 |              0.14949 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.5036 | 15-20%                  |                 5 |              0.30072 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5107 | >20%                    |                10 |              0.15107 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5123 | >20%                    |                10 |              0.15123 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5148 | >20%                    |                10 |              0.15148 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5767 | >20%                    |                10 |              0.15767 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6506 | >20%                    |                10 |              0.16506 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2923 | 10-15%                  |                10 |              0.22923 |