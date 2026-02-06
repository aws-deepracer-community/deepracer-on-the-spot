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

Data correct as of 2026-02-06 02:32:14.993774, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1383 | >20%                    |                 2 |              0.06915 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1723 | 5-10%                   |                 2 |              0.08615 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1739 | >20%                    |                 2 |              0.08695 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1801 | >20%                    |                 5 |              0.03602 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1809 | >20%                    |                 2 |              0.09045 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1971 | >20%                    |                 5 |              0.03942 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2044 | >20%                    |                 2 |              0.1022  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2262 | >20%                    |                 2 |              0.1131  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2473 | >20%                    |                 5 |              0.04946 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2488 | 10-15%                  |                 2 |              0.1244  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2517 | >20%                    |                 2 |              0.12585 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2628 | 15-20%                  |                 2 |              0.1314  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2738 | 10-15%                  |                 2 |              0.1369  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2766 | >20%                    |                 2 |              0.1383  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2796 | >20%                    |                 2 |              0.1398  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2941 | 5-10%                   |                10 |              0.02941 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2952 | >20%                    |                 2 |              0.1476  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3041 | >20%                    |                 2 |              0.15205 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3055 | >20%                    |                 5 |              0.0611  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3137 | >20%                    |                 2 |              0.15685 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3165 | >20%                    |                 2 |              0.15825 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3248 | 5-10%                   |                 5 |              0.06496 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3303 | <5%                     |                 5 |              0.06606 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3403 | 10-15%                  |                 2 |              0.17015 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3411 | 15-20%                  |                 2 |              0.17055 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3508 | 15-20%                  |                 2 |              0.1754  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3531 | >20%                    |                 5 |              0.07062 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3578 | <5%                     |                 2 |              0.1789  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3636 | >20%                    |                 2 |              0.1818  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3664 | >20%                    |                 5 |              0.07328 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3697 | >20%                    |                 2 |              0.18485 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3728 | 15-20%                  |                 2 |              0.1864  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3765 | 5-10%                   |                 2 |              0.18825 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3785 | >20%                    |                 2 |              0.18925 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3794 | >20%                    |                 5 |              0.07588 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3795 | >20%                    |                 5 |              0.0759  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3831 | 5-10%                   |                 2 |              0.19155 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3888 | >20%                    |                 2 |              0.1944  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3926 | 5-10%                   |                10 |              0.03926 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3929 | >20%                    |                 2 |              0.19645 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3933 | >20%                    |                 5 |              0.07866 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3952 | <5%                     |                 5 |              0.07904 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3977 | >20%                    |                 5 |              0.07954 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3999 | 10-15%                  |                 5 |              0.07998 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4039 | >20%                    |                 5 |              0.08078 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4064 | >20%                    |                10 |              0.04064 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.4122 | <5%                     |                 5 |              0.08244 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4143 | >20%                    |                 5 |              0.08286 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4145 | >20%                    |                 2 |              0.20725 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4199 | 15-20%                  |                 2 |              0.20995 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4216 | >20%                    |                 2 |              0.2108  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4221 | 5-10%                   |                 2 |              0.21105 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4224 | 5-10%                   |                 2 |              0.2112  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4235 | >20%                    |                 5 |              0.0847  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4267 | 5-10%                   |                 2 |              0.21335 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4286 | >20%                    |                10 |              0.04286 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4303 | 5-10%                   |                 5 |              0.08606 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.431  | <5%                     |                 2 |              0.2155  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4323 | >20%                    |                10 |              0.04323 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4338 | <5%                     |                 5 |              0.08676 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4354 | >20%                    |                 5 |              0.08708 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4372 | <5%                     |                 2 |              0.2186  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4445 | 15-20%                  |                 2 |              0.22225 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4483 | <5%                     |                 2 |              0.22415 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4538 | 15-20%                  |                 5 |              0.09076 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4569 | >20%                    |                 2 |              0.22845 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4575 | >20%                    |                 2 |              0.22875 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4645 | 5-10%                   |                 2 |              0.23225 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4726 | 5-10%                   |                 5 |              0.09452 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4733 | >20%                    |                 2 |              0.23665 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4758 | >20%                    |                10 |              0.04758 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.4772 | 15-20%                  |                10 |              0.04772 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4781 | >20%                    |                 2 |              0.23905 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4799 | <5%                     |                 5 |              0.09598 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4824 | <5%                     |                10 |              0.04824 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4866 | 15-20%                  |                 5 |              0.09732 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4874 | <5%                     |                10 |              0.04874 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4875 | >20%                    |                 2 |              0.24375 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4898 | >20%                    |                 2 |              0.2449  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.493  | 15-20%                  |                10 |              0.0493  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5025 | >20%                    |                 5 |              0.1005  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5107 | >20%                    |                 5 |              0.10214 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5145 | >20%                    |                 2 |              0.25725 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5153 | >20%                    |                 2 |              0.25765 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5165 | >20%                    |                 5 |              0.1033  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5199 | >20%                    |                10 |              0.05199 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5264 | >20%                    |                 5 |              0.10528 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5298 | >20%                    |                 5 |              0.10596 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5385 | <5%                     |                 5 |              0.1077  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5408 | >20%                    |                10 |              0.05408 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5519 | >20%                    |                10 |              0.05519 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5536 | >20%                    |                 5 |              0.11072 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5584 | 15-20%                  |                 5 |              0.11168 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5612 | >20%                    |                 5 |              0.11224 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5693 | >20%                    |                 5 |              0.11386 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5774 | <5%                     |                 5 |              0.11548 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5782 | >20%                    |                 2 |              0.2891  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5842 | 15-20%                  |                 5 |              0.11684 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.588  | 15-20%                  |                10 |              0.0588  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5904 | 5-10%                   |                 5 |              0.11808 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5981 | <5%                     |                 2 |              0.29905 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5994 | 5-10%                   |                 2 |              0.2997  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6004 | >20%                    |                 5 |              0.12008 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6109 | >20%                    |                10 |              0.06109 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6177 | 10-15%                  |                 5 |              0.12354 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6223 | 10-15%                  |                10 |              0.06223 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6313 | >20%                    |                 5 |              0.12626 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6464 | 15-20%                  |                10 |              0.06464 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6515 | 15-20%                  |                 2 |              0.32575 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6541 | >20%                    |                 5 |              0.13082 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6645 | >20%                    |                 5 |              0.1329  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.673  | 5-10%                   |                 5 |              0.1346  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6743 | 5-10%                   |                 5 |              0.13486 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6751 | >20%                    |                 5 |              0.13502 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6826 | >20%                    |                10 |              0.06826 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7016 | <5%                     |                10 |              0.07016 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7171 | 10-15%                  |                10 |              0.07171 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7198 | >20%                    |                10 |              0.07198 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7247 | >20%                    |                 5 |              0.14494 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7257 | >20%                    |                10 |              0.07257 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7372 | >20%                    |                10 |              0.07372 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7388 | <5%                     |                 5 |              0.14776 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7457 | 5-10%                   |                 2 |              0.37285 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7559 | >20%                    |                10 |              0.07559 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7736 | >20%                    |                 5 |              0.15472 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.778  | >20%                    |                 5 |              0.1556  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7829 | >20%                    |                 2 |              0.39145 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7876 | >20%                    |                 5 |              0.15752 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7882 | >20%                    |                 5 |              0.15764 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.79   | >20%                    |                 2 |              0.395   |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7944 | <5%                     |                10 |              0.07944 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7952 | >20%                    |                10 |              0.07952 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7995 | 15-20%                  |                10 |              0.07995 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8013 | <5%                     |                10 |              0.08013 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8034 | <5%                     |                10 |              0.08034 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8123 | <5%                     |                10 |              0.08123 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8125 | 5-10%                   |                10 |              0.08125 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8221 | >20%                    |                10 |              0.08221 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8278 | <5%                     |                10 |              0.08278 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8291 | 5-10%                   |                10 |              0.08291 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8294 | >20%                    |                 5 |              0.16588 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8385 | >20%                    |                10 |              0.08385 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8404 | <5%                     |                10 |              0.08404 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8487 | >20%                    |                 2 |              0.42435 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8513 | >20%                    |                 5 |              0.17026 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8572 | >20%                    |                 2 |              0.4286  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8612 | >20%                    |                10 |              0.08612 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8644 | >20%                    |                10 |              0.08644 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8762 | 10-15%                  |                 2 |              0.4381  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8804 | >20%                    |                 2 |              0.4402  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8809 | >20%                    |                10 |              0.08809 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9106 | <5%                     |                10 |              0.09106 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.937  | >20%                    |                10 |              0.0937  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9509 | >20%                    |                 5 |              0.19018 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9544 | >20%                    |                 2 |              0.4772  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9751 | >20%                    |                10 |              0.09751 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9797 | 5-10%                   |                 5 |              0.19594 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9819 | 15-20%                  |                10 |              0.09819 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9936 | >20%                    |                 5 |              0.19872 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0142 | >20%                    |                10 |              0.10142 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0355 | >20%                    |                10 |              0.10355 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.038  | >20%                    |                10 |              0.1038  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0443 | >20%                    |                 2 |              0.52215 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.047  | 10-15%                  |                 5 |              0.2094  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0584 | 5-10%                   |                10 |              0.10584 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0794 | 15-20%                  |                10 |              0.10794 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0886 |                         |                 2 |              0.5443  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1061 | >20%                    |                10 |              0.11061 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1062 | >20%                    |                10 |              0.11062 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1086 | >20%                    |                10 |              0.11086 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1642 | >20%                    |                10 |              0.11642 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1928 | 10-15%                  |                10 |              0.11928 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2675 | <5%                     |                10 |              0.12675 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.295  | >20%                    |                10 |              0.1295  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3029 | >20%                    |                 5 |              0.26058 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3758 | 10-15%                  |                 5 |              0.27516 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3861 | >20%                    |                10 |              0.13861 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4587 |                         |                 5 |              0.29174 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4728 | >20%                    |                 2 |              0.7364  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7137 | 15-20%                  |                10 |              0.17137 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0091 | 10-15%                  |                10 |              0.20091 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.1988 |                         |                10 |              0.21988 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4342 | <5%                     |                 5 |              0.48684 |