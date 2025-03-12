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

Data correct as of 2025-03-12 01:41:59.174307, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1281 | 10-15%                  |                 2 |              0.06405 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1367 | 5-10%                   |                 5 |              0.02734 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1536 | >20%                    |                 2 |              0.0768  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1674 | >20%                    |                 5 |              0.03348 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1973 | 5-10%                   |                 2 |              0.09865 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2007 | 15-20%                  |                 5 |              0.04014 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2146 | 5-10%                   |                 5 |              0.04292 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2155 | 5-10%                   |                 2 |              0.10775 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2256 | 15-20%                  |                 2 |              0.1128  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2287 | 15-20%                  |                 2 |              0.11435 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2305 | 10-15%                  |                 2 |              0.11525 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.235  | >20%                    |                 2 |              0.1175  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2358 | >20%                    |                 5 |              0.04716 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2365 | 5-10%                   |                10 |              0.02365 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2389 | >20%                    |                 5 |              0.04778 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2394 | >20%                    |                 2 |              0.1197  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2403 | >20%                    |                 2 |              0.12015 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.243  | 5-10%                   |                 2 |              0.1215  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2492 | 10-15%                  |                 5 |              0.04984 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2613 | <5%                     |                 2 |              0.13065 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2629 | >20%                    |                 2 |              0.13145 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2677 | 5-10%                   |                10 |              0.02677 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2697 | 5-10%                   |                 2 |              0.13485 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.271  | 10-15%                  |                 2 |              0.1355  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.2757 |                         |                 2 |              0.13785 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2876 | 10-15%                  |                10 |              0.02876 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2979 | 5-10%                   |                 2 |              0.14895 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3031 | 5-10%                   |                 2 |              0.15155 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3039 | >20%                    |                 2 |              0.15195 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3095 | <5%                     |                 2 |              0.15475 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3122 | <5%                     |                 2 |              0.1561  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3147 | 10-15%                  |                 2 |              0.15735 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3201 | 5-10%                   |                 5 |              0.06402 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3273 | >20%                    |                 2 |              0.16365 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3304 | >20%                    |                 2 |              0.1652  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3464 | 10-15%                  |                10 |              0.03464 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3485 | >20%                    |                 2 |              0.17425 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3508 | 10-15%                  |                 5 |              0.07016 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.352  | >20%                    |                 2 |              0.176   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3544 | >20%                    |                 2 |              0.1772  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3632 | >20%                    |                 2 |              0.1816  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3638 | 5-10%                   |                 5 |              0.07276 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3638 | >20%                    |                 2 |              0.1819  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3657 | 10-15%                  |                10 |              0.03657 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3689 | >20%                    |                 5 |              0.07378 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.3694 |                         |                 5 |              0.07388 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3695 | 10-15%                  |                 5 |              0.0739  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3725 | >20%                    |                10 |              0.03725 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3782 | 5-10%                   |                10 |              0.03782 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.38   | 5-10%                   |                 5 |              0.076   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3809 | <5%                     |                 2 |              0.19045 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3817 | >20%                    |                 2 |              0.19085 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3851 | >20%                    |                 5 |              0.07702 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3851 | 5-10%                   |                 2 |              0.19255 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3858 | >20%                    |                 5 |              0.07716 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3897 | 15-20%                  |                10 |              0.03897 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3957 | <5%                     |                 5 |              0.07914 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4002 | <5%                     |                10 |              0.04002 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4039 | 5-10%                   |                 2 |              0.20195 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4095 | 5-10%                   |                 2 |              0.20475 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4133 | <5%                     |                 2 |              0.20665 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4163 | >20%                    |                10 |              0.04163 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4175 | >20%                    |                 5 |              0.0835  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.4184 | <5%                     |                 2 |              0.2092  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4194 | 5-10%                   |                 2 |              0.2097  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4214 | >20%                    |                 5 |              0.08428 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4313 | 5-10%                   |                 2 |              0.21565 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4364 | 15-20%                  |                 2 |              0.2182  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4399 | <5%                     |                 2 |              0.21995 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4471 | >20%                    |                 2 |              0.22355 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.45   | <5%                     |                 5 |              0.09    |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4557 | 5-10%                   |                 5 |              0.09114 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4574 | >20%                    |                 2 |              0.2287  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4628 | >20%                    |                 5 |              0.09256 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4657 | >20%                    |                 2 |              0.23285 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4695 | <5%                     |                 5 |              0.0939  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4758 | 10-15%                  |                10 |              0.04758 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4775 | 5-10%                   |                 5 |              0.0955  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4898 | <5%                     |                 5 |              0.09796 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4912 | 5-10%                   |                 5 |              0.09824 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4931 | >20%                    |                 5 |              0.09862 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5024 | >20%                    |                 2 |              0.2512  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5044 | 10-15%                  |                 5 |              0.10088 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5072 | 10-15%                  |                 2 |              0.2536  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5103 | >20%                    |                 2 |              0.25515 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5124 | >20%                    |                 2 |              0.2562  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5133 | >20%                    |                 5 |              0.10266 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5156 | >20%                    |                 5 |              0.10312 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5178 | >20%                    |                 5 |              0.10356 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5346 | 5-10%                   |                 5 |              0.10692 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5364 | 5-10%                   |                10 |              0.05364 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5378 | 15-20%                  |                 2 |              0.2689  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5402 | >20%                    |                 5 |              0.10804 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5524 | 15-20%                  |                 2 |              0.2762  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5565 | >20%                    |                 5 |              0.1113  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.5568 |                         |                10 |              0.05568 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5572 | >20%                    |                 2 |              0.2786  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5622 | >20%                    |                 5 |              0.11244 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5625 | 5-10%                   |                 5 |              0.1125  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5631 | <5%                     |                 5 |              0.11262 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5676 | 10-15%                  |                 5 |              0.11352 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5716 | 15-20%                  |                 5 |              0.11432 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5734 | >20%                    |                 2 |              0.2867  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.583  | 5-10%                   |                 5 |              0.1166  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.5885 | 5-10%                   |                10 |              0.05885 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5902 | 10-15%                  |                 5 |              0.11804 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5922 | >20%                    |                 2 |              0.2961  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5962 | >20%                    |                 2 |              0.2981  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.598  | <5%                     |                 5 |              0.1196  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6161 | 15-20%                  |                 5 |              0.12322 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6199 | >20%                    |                 5 |              0.12398 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6332 | >20%                    |                 2 |              0.3166  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6392 | <5%                     |                10 |              0.06392 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.647  | >20%                    |                10 |              0.0647  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6634 | >20%                    |                 5 |              0.13268 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6717 | 10-15%                  |                 5 |              0.13434 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.676  | >20%                    |                 5 |              0.1352  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6811 | >20%                    |                10 |              0.06811 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.69   | >20%                    |                 5 |              0.138   |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7049 | <5%                     |                10 |              0.07049 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7151 | >20%                    |                10 |              0.07151 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7176 | >20%                    |                 5 |              0.14352 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7188 | >20%                    |                10 |              0.07188 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7201 | >20%                    |                10 |              0.07201 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7263 | >20%                    |                10 |              0.07263 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7303 | >20%                    |                 2 |              0.36515 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7352 | 5-10%                   |                 5 |              0.14704 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7427 | >20%                    |                 5 |              0.14854 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7428 | 5-10%                   |                 2 |              0.3714  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7433 | >20%                    |                10 |              0.07433 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.756  | <5%                     |                 5 |              0.1512  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7653 | >20%                    |                 5 |              0.15306 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7654 | 5-10%                   |                10 |              0.07654 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.768  | 5-10%                   |                10 |              0.0768  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7947 | >20%                    |                 2 |              0.39735 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.795  | >20%                    |                10 |              0.0795  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8039 | 15-20%                  |                 5 |              0.16078 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.823  | <5%                     |                10 |              0.0823  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8328 | >20%                    |                10 |              0.08328 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8399 | <5%                     |                10 |              0.08399 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8466 | >20%                    |                 5 |              0.16932 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8483 | <5%                     |                10 |              0.08483 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8615 | 15-20%                  |                10 |              0.08615 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8662 | >20%                    |                10 |              0.08662 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8751 | <5%                     |                10 |              0.08751 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8819 | 5-10%                   |                10 |              0.08819 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8919 | >20%                    |                10 |              0.08919 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8926 | 5-10%                   |                10 |              0.08926 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8995 | >20%                    |                10 |              0.08995 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9103 | 15-20%                  |                 5 |              0.18206 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9159 | >20%                    |                10 |              0.09159 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9294 | >20%                    |                10 |              0.09294 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9548 | 15-20%                  |                10 |              0.09548 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9687 | 5-10%                   |                10 |              0.09687 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9937 | <5%                     |                10 |              0.09937 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0146 | 10-15%                  |                10 |              0.10146 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0214 | >20%                    |                 2 |              0.5107  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0285 | >20%                    |                10 |              0.10285 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0398 | 5-10%                   |                10 |              0.10398 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0644 | >20%                    |                10 |              0.10644 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0804 | >20%                    |                 5 |              0.21608 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1035 | 5-10%                   |                10 |              0.11035 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1173 | <5%                     |                10 |              0.11173 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1211 | >20%                    |                10 |              0.11211 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1309 | >20%                    |                10 |              0.11309 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.176  | 15-20%                  |                10 |              0.1176  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.177  | >20%                    |                 2 |              0.5885  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1832 | 15-20%                  |                10 |              0.11832 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2432 | 5-10%                   |                 2 |              0.6216  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.318  | 5-10%                   |                 5 |              0.2636  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3743 | >20%                    |                10 |              0.13743 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3849 | >20%                    |                10 |              0.13849 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4768 | 10-15%                  |                 5 |              0.29536 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5407 | >20%                    |                 5 |              0.30814 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.554  | >20%                    |                10 |              0.1554  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5637 | >20%                    |                10 |              0.15637 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5747 | >20%                    |                 5 |              0.31494 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6672 | >20%                    |                 2 |              0.8336  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7979 | >20%                    |                10 |              0.17979 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2346 | 5-10%                   |                10 |              0.22346 |