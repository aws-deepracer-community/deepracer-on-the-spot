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

Data correct as of 2026-07-03 03:39:51.145031, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1284 | >20%                    |                 2 |              0.0642  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2042 | 15-20%                  |                 2 |              0.1021  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.219  | >20%                    |                 2 |              0.1095  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2321 | >20%                    |                 2 |              0.11605 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2361 | >20%                    |                 2 |              0.11805 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2436 | >20%                    |                 2 |              0.1218  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2437 | >20%                    |                 2 |              0.12185 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.251  | >20%                    |                 2 |              0.1255  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2535 | 15-20%                  |                 5 |              0.0507  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2604 | >20%                    |                 2 |              0.1302  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2626 | 10-15%                  |                 2 |              0.1313  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2653 | >20%                    |                 2 |              0.13265 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2751 | 15-20%                  |                 2 |              0.13755 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2783 | 15-20%                  |                 2 |              0.13915 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2838 | 5-10%                   |                10 |              0.02838 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2861 | >20%                    |                 2 |              0.14305 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2953 | 15-20%                  |                 5 |              0.05906 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3319 | >20%                    |                 2 |              0.16595 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3323 | >20%                    |                 5 |              0.06646 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3329 | >20%                    |                 5 |              0.06658 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3425 | >20%                    |                 5 |              0.0685  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3483 | >20%                    |                 5 |              0.06966 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.35   | >20%                    |                 2 |              0.175   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3501 | <5%                     |                 2 |              0.17505 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3625 | 5-10%                   |                10 |              0.03625 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3692 | >20%                    |                10 |              0.03692 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3716 | >20%                    |                 5 |              0.07432 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3744 | >20%                    |                10 |              0.03744 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3751 | 5-10%                   |                10 |              0.03751 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3758 | >20%                    |                 5 |              0.07516 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3765 | 10-15%                  |                 2 |              0.18825 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.378  | >20%                    |                 5 |              0.0756  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3882 | >20%                    |                 2 |              0.1941  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3975 | >20%                    |                 2 |              0.19875 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3987 | 10-15%                  |                 2 |              0.19935 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4155 | >20%                    |                 5 |              0.0831  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4172 | >20%                    |                10 |              0.04172 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4176 | >20%                    |                 2 |              0.2088  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4223 | >20%                    |                 5 |              0.08446 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4277 | >20%                    |                 5 |              0.08554 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4366 | >20%                    |                 2 |              0.2183  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4367 | 10-15%                  |                 2 |              0.21835 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4372 | >20%                    |                10 |              0.04372 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4402 | >20%                    |                10 |              0.04402 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4415 | >20%                    |                 5 |              0.0883  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4435 | <5%                     |                 2 |              0.22175 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4439 | <5%                     |                 2 |              0.22195 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4485 | >20%                    |                 2 |              0.22425 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4599 | 15-20%                  |                 2 |              0.22995 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.471  | >20%                    |                 5 |              0.0942  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4733 | >20%                    |                 2 |              0.23665 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4756 | >20%                    |                 5 |              0.09512 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4774 | >20%                    |                 2 |              0.2387  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.478  | 15-20%                  |                 5 |              0.0956  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4923 | >20%                    |                 5 |              0.09846 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4944 | >20%                    |                 2 |              0.2472  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4996 | >20%                    |                 5 |              0.09992 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5068 | 15-20%                  |                 2 |              0.2534  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5101 | >20%                    |                10 |              0.05101 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5161 | >20%                    |                10 |              0.05161 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5173 | >20%                    |                 2 |              0.25865 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5203 | >20%                    |                 5 |              0.10406 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5258 | >20%                    |                 5 |              0.10516 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5375 | 5-10%                   |                 2 |              0.26875 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5403 | 5-10%                   |                 5 |              0.10806 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5431 | >20%                    |                 5 |              0.10862 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5438 | 15-20%                  |                 5 |              0.10876 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.549  | 10-15%                  |                 5 |              0.1098  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5492 | >20%                    |                 5 |              0.10984 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5568 | 15-20%                  |                 2 |              0.2784  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5715 | 10-15%                  |                10 |              0.05715 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5875 | >20%                    |                 5 |              0.1175  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.594  | >20%                    |                 5 |              0.1188  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6005 | >20%                    |                10 |              0.06005 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6033 | >20%                    |                10 |              0.06033 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6123 | >20%                    |                10 |              0.06123 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6206 | >20%                    |                 5 |              0.12412 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6216 | <5%                     |                 5 |              0.12432 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6286 | >20%                    |                 2 |              0.3143  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6315 | >20%                    |                 5 |              0.1263  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6347 | >20%                    |                 5 |              0.12694 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6392 | >20%                    |                 2 |              0.3196  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6498 |                         |                 2 |              0.3249  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.6507 |                         |                 2 |              0.32535 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6529 | >20%                    |                 2 |              0.32645 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6617 | >20%                    |                10 |              0.06617 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6649 | >20%                    |                 2 |              0.33245 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.675  | >20%                    |                 2 |              0.3375  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6764 | 5-10%                   |                 5 |              0.13528 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6787 | >20%                    |                10 |              0.06787 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6829 | >20%                    |                 5 |              0.13658 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.683  | >20%                    |                 5 |              0.1366  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6832 | >20%                    |                 5 |              0.13664 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.704  |                         |                10 |              0.0704  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7059 | >20%                    |                 2 |              0.35295 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7071 | >20%                    |                10 |              0.07071 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7072 | 5-10%                   |                 2 |              0.3536  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7136 | 10-15%                  |                 2 |              0.3568  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7323 | >20%                    |                 5 |              0.14646 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7413 | >20%                    |                10 |              0.07413 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7433 | 15-20%                  |                10 |              0.07433 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7573 | >20%                    |                10 |              0.07573 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7589 | 15-20%                  |                10 |              0.07589 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7647 | 5-10%                   |                10 |              0.07647 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7724 | >20%                    |                 5 |              0.15448 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7755 | <5%                     |                10 |              0.07755 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8003 | >20%                    |                10 |              0.08003 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8055 | >20%                    |                 5 |              0.1611  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.808  | >20%                    |                10 |              0.0808  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8104 | >20%                    |                 5 |              0.16208 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8121 | >20%                    |                 2 |              0.40605 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8332 | >20%                    |                 5 |              0.16664 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8422 | >20%                    |                10 |              0.08422 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8533 | 15-20%                  |                10 |              0.08533 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8567 | 5-10%                   |                10 |              0.08567 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8572 | 15-20%                  |                10 |              0.08572 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8676 | >20%                    |                10 |              0.08676 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8708 | >20%                    |                10 |              0.08708 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.8778 | >20%                    |                10 |              0.08778 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8888 | >20%                    |                 5 |              0.17776 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8943 | >20%                    |                10 |              0.08943 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9144 | 10-15%                  |                 2 |              0.4572  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9161 | 10-15%                  |                 2 |              0.45805 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9187 | 15-20%                  |                10 |              0.09187 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9304 | >20%                    |                10 |              0.09304 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9307 | >20%                    |                10 |              0.09307 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9453 | 5-10%                   |                10 |              0.09453 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9784 | >20%                    |                 5 |              0.19568 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9832 |                         |                 5 |              0.19664 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9834 | >20%                    |                 5 |              0.19668 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9995 | >20%                    |                10 |              0.09995 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0005 | >20%                    |                10 |              0.10005 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.008  | >20%                    |                10 |              0.1008  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0169 | 15-20%                  |                10 |              0.10169 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0211 | >20%                    |                 5 |              0.20422 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0273 | >20%                    |                10 |              0.10273 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0335 | >20%                    |                10 |              0.10335 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0536 | >20%                    |                 5 |              0.21072 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0723 | >20%                    |                 2 |              0.53615 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1352 | >20%                    |                 5 |              0.22704 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1353 |                         |                10 |              0.11353 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1622 | >20%                    |                10 |              0.11622 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2122 | >20%                    |                 5 |              0.24244 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2293 | 5-10%                   |                 2 |              0.61465 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2311 |                         |                 5 |              0.24622 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2939 | 15-20%                  |                10 |              0.12939 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3033 | >20%                    |                 5 |              0.26066 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4029 | 15-20%                  |                10 |              0.14029 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4266 | >20%                    |                10 |              0.14266 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4452 | 15-20%                  |                 5 |              0.28904 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5114 | >20%                    |                 5 |              0.30228 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.6395 | 10-15%                  |                10 |              0.16395 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.7716 | 5-10%                   |                 2 |              0.8858  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.1432 | >20%                    |                10 |              0.21432 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4292 | >20%                    |                10 |              0.24292 |