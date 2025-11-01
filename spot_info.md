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

Data correct as of 2025-11-01 01:54:21.482834, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1334 | >20%                    |                 2 |              0.0667  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1821 | >20%                    |                 2 |              0.09105 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1965 | 10-15%                  |                 5 |              0.0393  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2166 | >20%                    |                 2 |              0.1083  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2305 | >20%                    |                 5 |              0.0461  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2348 | 10-15%                  |                 2 |              0.1174  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2352 | >20%                    |                 5 |              0.04704 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2564 | >20%                    |                 2 |              0.1282  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2582 | >20%                    |                 2 |              0.1291  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2602 | 10-15%                  |                 2 |              0.1301  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.262  | >20%                    |                 2 |              0.131   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2674 | 5-10%                   |                 2 |              0.1337  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2717 | 10-15%                  |                 2 |              0.13585 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2723 | >20%                    |                 2 |              0.13615 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2783 | 5-10%                   |                 2 |              0.13915 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2825 | >20%                    |                 2 |              0.14125 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2898 | >20%                    |                 2 |              0.1449  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.295  | 15-20%                  |                 2 |              0.1475  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.314  | 15-20%                  |                 2 |              0.157   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3146 | >20%                    |                 2 |              0.1573  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3221 | >20%                    |                 2 |              0.16105 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3267 | >20%                    |                 2 |              0.16335 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3403 | >20%                    |                 2 |              0.17015 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3523 | >20%                    |                 2 |              0.17615 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3541 | >20%                    |                 5 |              0.07082 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3554 | >20%                    |                 5 |              0.07108 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.374  | <5%                     |                10 |              0.0374  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3766 | >20%                    |                10 |              0.03766 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.379  | 15-20%                  |                 2 |              0.1895  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3795 | >20%                    |                 2 |              0.18975 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3862 | >20%                    |                 2 |              0.1931  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3908 | >20%                    |                 5 |              0.07816 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3914 | 10-15%                  |                 2 |              0.1957  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3971 | >20%                    |                 2 |              0.19855 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4012 | >20%                    |                 2 |              0.2006  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4047 | >20%                    |                 2 |              0.20235 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4196 | 5-10%                   |                 5 |              0.08392 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.42   | >20%                    |                 2 |              0.21    |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4202 | >20%                    |                 2 |              0.2101  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.422  | >20%                    |                 2 |              0.211   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4224 | 15-20%                  |                 2 |              0.2112  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4245 | 5-10%                   |                 2 |              0.21225 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4305 | >20%                    |                 5 |              0.0861  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4378 | >20%                    |                 5 |              0.08756 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4378 | >20%                    |                 2 |              0.2189  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4395 | 5-10%                   |                 2 |              0.21975 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4399 | >20%                    |                 2 |              0.21995 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4412 | <5%                     |                 2 |              0.2206  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4509 | >20%                    |                10 |              0.04509 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4538 | >20%                    |                 5 |              0.09076 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4545 | >20%                    |                 5 |              0.0909  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4551 | >20%                    |                 5 |              0.09102 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4625 | >20%                    |                 5 |              0.0925  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4632 | >20%                    |                 5 |              0.09264 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4642 | >20%                    |                 2 |              0.2321  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4654 | >20%                    |                 5 |              0.09308 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.466  | >20%                    |                 2 |              0.233   |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4697 | 15-20%                  |                 5 |              0.09394 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4741 | 10-15%                  |                 2 |              0.23705 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4777 | >20%                    |                 5 |              0.09554 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4786 | 10-15%                  |                 2 |              0.2393  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4816 | >20%                    |                 5 |              0.09632 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.482  | >20%                    |                 2 |              0.241   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4868 | >20%                    |                 5 |              0.09736 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4891 | >20%                    |                 2 |              0.24455 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4915 | >20%                    |                10 |              0.04915 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5046 | 15-20%                  |                10 |              0.05046 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5109 | >20%                    |                 2 |              0.25545 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5126 | >20%                    |                 5 |              0.10252 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5169 | 5-10%                   |                 2 |              0.25845 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5175 | >20%                    |                 5 |              0.1035  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5199 | 15-20%                  |                 5 |              0.10398 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5216 | >20%                    |                 2 |              0.2608  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5375 | >20%                    |                 2 |              0.26875 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5427 | >20%                    |                 5 |              0.10854 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5479 | >20%                    |                 5 |              0.10958 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5528 | >20%                    |                 5 |              0.11056 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5568 | 5-10%                   |                10 |              0.05568 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5619 | >20%                    |                 5 |              0.11238 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5686 | >20%                    |                 5 |              0.11372 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5731 | 15-20%                  |                 2 |              0.28655 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5972 | >20%                    |                 5 |              0.11944 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6129 | >20%                    |                 5 |              0.12258 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6213 | 10-15%                  |                 5 |              0.12426 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6282 | >20%                    |                 5 |              0.12564 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6314 | 15-20%                  |                 2 |              0.3157  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6326 | >20%                    |                 5 |              0.12652 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6349 | 10-15%                  |                 5 |              0.12698 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6374 | >20%                    |                 5 |              0.12748 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6403 | >20%                    |                 5 |              0.12806 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6421 | >20%                    |                 2 |              0.32105 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6437 | 15-20%                  |                 5 |              0.12874 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6603 | >20%                    |                10 |              0.06603 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6637 | >20%                    |                 5 |              0.13274 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6693 | >20%                    |                 5 |              0.13386 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6707 | 15-20%                  |                10 |              0.06707 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6726 | 10-15%                  |                 5 |              0.13452 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.678  | >20%                    |                 2 |              0.339   |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6781 | 10-15%                  |                 2 |              0.33905 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6794 | >20%                    |                 5 |              0.13588 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6888 | >20%                    |                 5 |              0.13776 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6897 | >20%                    |                 5 |              0.13794 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6901 | 15-20%                  |                10 |              0.06901 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6917 | >20%                    |                 5 |              0.13834 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7014 | >20%                    |                10 |              0.07014 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7021 | >20%                    |                10 |              0.07021 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7026 | >20%                    |                 5 |              0.14052 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7261 | 15-20%                  |                10 |              0.07261 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7272 | 15-20%                  |                 5 |              0.14544 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7323 | >20%                    |                10 |              0.07323 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7358 | >20%                    |                 2 |              0.3679  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7382 | >20%                    |                 5 |              0.14764 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.742  | >20%                    |                10 |              0.0742  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7423 | >20%                    |                10 |              0.07423 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7467 | >20%                    |                10 |              0.07467 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7486 | <5%                     |                10 |              0.07486 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7497 | 15-20%                  |                10 |              0.07497 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7772 | 15-20%                  |                10 |              0.07772 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.778  | >20%                    |                10 |              0.0778  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.787  | 10-15%                  |                 5 |              0.1574  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.792  | >20%                    |                 5 |              0.1584  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7956 | >20%                    |                10 |              0.07956 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7966 | >20%                    |                 5 |              0.15932 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8069 | 10-15%                  |                 2 |              0.40345 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.807  | >20%                    |                10 |              0.0807  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8073 | 15-20%                  |                 5 |              0.16146 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8123 | <5%                     |                10 |              0.08123 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8326 | 15-20%                  |                10 |              0.08326 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8371 | 15-20%                  |                10 |              0.08371 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.838  | >20%                    |                 5 |              0.1676  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.854  | >20%                    |                 5 |              0.1708  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8549 | <5%                     |                10 |              0.08549 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.86   | >20%                    |                10 |              0.086   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8689 | >20%                    |                10 |              0.08689 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8715 | >20%                    |                 5 |              0.1743  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.886  | 15-20%                  |                10 |              0.0886  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.889  | >20%                    |                10 |              0.0889  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9014 | 10-15%                  |                10 |              0.09014 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9145 | 15-20%                  |                10 |              0.09145 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9149 | 5-10%                   |                10 |              0.09149 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9257 | 10-15%                  |                10 |              0.09257 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9272 | >20%                    |                 2 |              0.4636  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9378 | >20%                    |                10 |              0.09378 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9413 | 10-15%                  |                10 |              0.09413 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9487 | >20%                    |                 2 |              0.47435 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9935 | 10-15%                  |                 2 |              0.49675 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0017 | >20%                    |                10 |              0.10017 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      1.0189 | 5-10%                   |                10 |              0.10189 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0305 | >20%                    |                 2 |              0.51525 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0314 | >20%                    |                 5 |              0.20628 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0453 | >20%                    |                10 |              0.10453 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.0547 | >20%                    |                10 |              0.10547 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0876 | <5%                     |                10 |              0.10876 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0891 | >20%                    |                10 |              0.10891 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0988 | 15-20%                  |                10 |              0.10988 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0999 | 5-10%                   |                10 |              0.10999 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.108  | >20%                    |                10 |              0.1108  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1154 | 5-10%                   |                10 |              0.11154 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1272 | 15-20%                  |                10 |              0.11272 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1354 | >20%                    |                 5 |              0.22708 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1507 | 10-15%                  |                10 |              0.11507 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1685 | >20%                    |                 5 |              0.2337  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1926 | >20%                    |                 5 |              0.23852 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.281  | 10-15%                  |                10 |              0.1281  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3227 | >20%                    |                10 |              0.13227 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3287 | 10-15%                  |                 5 |              0.26574 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4238 | >20%                    |                10 |              0.14238 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4366 | 5-10%                   |                 2 |              0.7183  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5502 | >20%                    |                10 |              0.15502 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5822 | >20%                    |                10 |              0.15822 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6028 | >20%                    |                10 |              0.16028 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6627 | 10-15%                  |                 5 |              0.33254 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7231 | >20%                    |                10 |              0.17231 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.9691 | 10-15%                  |                10 |              0.19691 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4143 | 15-20%                  |                10 |              0.24143 |