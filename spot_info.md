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

Data correct as of 2025-09-21 01:52:11.773657, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1537 | >20%                    |                 2 |              0.07685 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.159  | >20%                    |                 2 |              0.0795  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1621 | 5-10%                   |                 2 |              0.08105 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1746 | >20%                    |                 5 |              0.03492 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1751 | >20%                    |                 2 |              0.08755 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1874 | 10-15%                  |                 2 |              0.0937  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2138 | 10-15%                  |                 5 |              0.04276 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2374 | >20%                    |                 2 |              0.1187  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2502 | >20%                    |                 5 |              0.05004 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2505 | >20%                    |                 2 |              0.12525 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2614 | >20%                    |                 2 |              0.1307  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2943 | >20%                    |                 2 |              0.14715 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2996 | <5%                     |                10 |              0.02996 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3031 | >20%                    |                 2 |              0.15155 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.304  | 10-15%                  |                 2 |              0.152   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3082 | 5-10%                   |                 2 |              0.1541  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3142 | 15-20%                  |                 2 |              0.1571  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.317  | >20%                    |                10 |              0.0317  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3208 | >20%                    |                 2 |              0.1604  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3261 | 15-20%                  |                 2 |              0.16305 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.331  | >20%                    |                 2 |              0.1655  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3354 | 5-10%                   |                 2 |              0.1677  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.338  | 10-15%                  |                 2 |              0.169   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.35   | >20%                    |                 2 |              0.175   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3539 | >20%                    |                 5 |              0.07078 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3545 | >20%                    |                 2 |              0.17725 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3616 | >20%                    |                 2 |              0.1808  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3698 | >20%                    |                 2 |              0.1849  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3758 | >20%                    |                10 |              0.03758 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3793 | >20%                    |                 5 |              0.07586 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3826 | 10-15%                  |                 5 |              0.07652 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3829 | >20%                    |                 5 |              0.07658 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3831 | >20%                    |                 2 |              0.19155 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3864 | >20%                    |                 5 |              0.07728 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3909 | >20%                    |                 2 |              0.19545 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.392  | >20%                    |                 2 |              0.196   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3983 | >20%                    |                 2 |              0.19915 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4155 | 15-20%                  |                 5 |              0.0831  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4164 | >20%                    |                 5 |              0.08328 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4206 | >20%                    |                 5 |              0.08412 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.424  | 15-20%                  |                10 |              0.0424  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.426  | >20%                    |                 5 |              0.0852  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.43   | >20%                    |                 5 |              0.086   |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4321 | >20%                    |                10 |              0.04321 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4344 | 15-20%                  |                 2 |              0.2172  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4376 | 15-20%                  |                 2 |              0.2188  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.44   | >20%                    |                 2 |              0.22    |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4461 | 5-10%                   |                 2 |              0.22305 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4488 | >20%                    |                 2 |              0.2244  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4674 | >20%                    |                 2 |              0.2337  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4696 | >20%                    |                 5 |              0.09392 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4698 | 10-15%                  |                 2 |              0.2349  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4739 | >20%                    |                 2 |              0.23695 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4778 | <5%                     |                 2 |              0.2389  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4784 | 10-15%                  |                 2 |              0.2392  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4842 | >20%                    |                 5 |              0.09684 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4895 | >20%                    |                 5 |              0.0979  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5019 | >20%                    |                 5 |              0.10038 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5058 | >20%                    |                 5 |              0.10116 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5127 | >20%                    |                 5 |              0.10254 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5131 | >20%                    |                 5 |              0.10262 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5149 | >20%                    |                 2 |              0.25745 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5181 | >20%                    |                 2 |              0.25905 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5187 | >20%                    |                 2 |              0.25935 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5193 | 5-10%                   |                 5 |              0.10386 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5214 | 10-15%                  |                 2 |              0.2607  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5249 | >20%                    |                 2 |              0.26245 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5326 | 5-10%                   |                 2 |              0.2663  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5375 | >20%                    |                 5 |              0.1075  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5477 | >20%                    |                 5 |              0.10954 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5495 | >20%                    |                 2 |              0.27475 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.551  | >20%                    |                 5 |              0.1102  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5543 | >20%                    |                 2 |              0.27715 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5703 | >20%                    |                 5 |              0.11406 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5752 | 15-20%                  |                 2 |              0.2876  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5791 | >20%                    |                 5 |              0.11582 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5876 | 5-10%                   |                10 |              0.05876 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5894 | >20%                    |                 2 |              0.2947  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5897 | >20%                    |                 5 |              0.11794 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6003 | >20%                    |                 5 |              0.12006 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6016 | >20%                    |                 2 |              0.3008  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6058 | >20%                    |                 5 |              0.12116 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6141 | 10-15%                  |                 5 |              0.12282 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6185 | 10-15%                  |                 5 |              0.1237  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6297 | >20%                    |                10 |              0.06297 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6405 | >20%                    |                 5 |              0.1281  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6451 | 15-20%                  |                 5 |              0.12902 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6529 | 15-20%                  |                10 |              0.06529 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6553 | >20%                    |                 5 |              0.13106 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6587 | 15-20%                  |                 2 |              0.32935 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6711 | >20%                    |                 5 |              0.13422 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6734 | >20%                    |                 5 |              0.13468 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6735 | 15-20%                  |                 5 |              0.1347  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6844 | >20%                    |                 2 |              0.3422  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6845 | 15-20%                  |                10 |              0.06845 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6848 | >20%                    |                 5 |              0.13696 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6859 | >20%                    |                10 |              0.06859 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6886 | >20%                    |                 5 |              0.13772 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6998 | >20%                    |                 5 |              0.13996 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7007 | >20%                    |                 5 |              0.14014 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7051 | >20%                    |                 5 |              0.14102 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.707  | >20%                    |                10 |              0.0707  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7072 | >20%                    |                 2 |              0.3536  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.709  | >20%                    |                 5 |              0.1418  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.722  | >20%                    |                 5 |              0.1444  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7332 | 15-20%                  |                10 |              0.07332 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7345 | 10-15%                  |                 2 |              0.36725 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7379 | >20%                    |                10 |              0.07379 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7437 | >20%                    |                10 |              0.07437 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7444 | 15-20%                  |                 5 |              0.14888 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7599 | >20%                    |                10 |              0.07599 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7669 | >20%                    |                10 |              0.07669 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7865 | 15-20%                  |                 5 |              0.1573  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8021 | >20%                    |                 5 |              0.16042 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.804  | >20%                    |                 5 |              0.1608  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8105 | 10-15%                  |                 2 |              0.40525 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8397 | >20%                    |                 5 |              0.16794 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8419 | 15-20%                  |                10 |              0.08419 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8563 | <5%                     |                10 |              0.08563 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8767 | 10-15%                  |                10 |              0.08767 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.877  | >20%                    |                 5 |              0.1754  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8891 | 15-20%                  |                10 |              0.08891 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.895  | >20%                    |                10 |              0.0895  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8991 | >20%                    |                 5 |              0.17982 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9036 | <5%                     |                10 |              0.09036 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9044 | 15-20%                  |                10 |              0.09044 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9139 | 5-10%                   |                10 |              0.09139 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9207 | 10-15%                  |                10 |              0.09207 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9366 | >20%                    |                10 |              0.09366 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.941  | >20%                    |                10 |              0.0941  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9422 | 15-20%                  |                10 |              0.09422 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9496 | >20%                    |                10 |              0.09496 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.962  | 10-15%                  |                10 |              0.0962  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9631 | 15-20%                  |                10 |              0.09631 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9699 | <5%                     |                10 |              0.09699 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9811 | >20%                    |                10 |              0.09811 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.9837 | <5%                     |                 2 |              0.49185 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9917 | 10-15%                  |                 5 |              0.19834 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.992  | >20%                    |                10 |              0.0992  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0021 | 15-20%                  |                10 |              0.10021 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.015  | >20%                    |                 2 |              0.5075  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0388 | >20%                    |                 5 |              0.20776 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0753 | >20%                    |                 2 |              0.53765 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0836 | 10-15%                  |                10 |              0.10836 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0846 | 5-10%                   |                10 |              0.10846 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0865 | 5-10%                   |                10 |              0.10865 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0896 | >20%                    |                 2 |              0.5448  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1018 | 15-20%                  |                10 |              0.11018 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.109  | >20%                    |                 5 |              0.2218  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1199 | <5%                     |                10 |              0.11199 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1222 | 10-15%                  |                 2 |              0.5611  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1277 | 5-10%                   |                10 |              0.11277 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1297 | >20%                    |                10 |              0.11297 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1424 | >20%                    |                10 |              0.11424 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1616 | >20%                    |                10 |              0.11616 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1649 | >20%                    |                10 |              0.11649 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1689 | >20%                    |                 5 |              0.23378 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2229 | 15-20%                  |                10 |              0.12229 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2247 | >20%                    |                 5 |              0.24494 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2435 | 5-10%                   |                 2 |              0.62175 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2946 | >20%                    |                10 |              0.12946 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3369 | 10-15%                  |                 5 |              0.26738 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3449 | 10-15%                  |                10 |              0.13449 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4075 | >20%                    |                10 |              0.14075 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4984 | >20%                    |                10 |              0.14984 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6051 | 10-15%                  |                 5 |              0.32102 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6121 | >20%                    |                10 |              0.16121 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.766  | >20%                    |                10 |              0.1766  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8725 | >20%                    |                10 |              0.18725 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.9083 | >20%                    |                10 |              0.19083 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0751 | 15-20%                  |                10 |              0.20751 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1455 | 10-15%                  |                10 |              0.21455 |