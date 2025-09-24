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

Data correct as of 2025-09-24 01:44:16.009049, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1775 | 10-15%                  |                 2 |              0.08875 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1785 | >20%                    |                 2 |              0.08925 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1848 | >20%                    |                 2 |              0.0924  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1896 | >20%                    |                 2 |              0.0948  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.19   | 5-10%                   |                 2 |              0.095   |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1931 | >20%                    |                 5 |              0.03862 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2364 | >20%                    |                 2 |              0.1182  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2371 | 10-15%                  |                 5 |              0.04742 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2505 | >20%                    |                 5 |              0.0501  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.251  | >20%                    |                 2 |              0.1255  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2658 | >20%                    |                 2 |              0.1329  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3005 | >20%                    |                 2 |              0.15025 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3027 | 10-15%                  |                 2 |              0.15135 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3041 | >20%                    |                10 |              0.03041 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3056 | 5-10%                   |                 2 |              0.1528  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3067 | >20%                    |                 2 |              0.15335 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3149 | 15-20%                  |                 2 |              0.15745 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3273 | >20%                    |                 2 |              0.16365 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3291 | 5-10%                   |                 2 |              0.16455 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3325 | >20%                    |                 2 |              0.16625 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3342 | 15-20%                  |                 2 |              0.1671  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3354 | <5%                     |                10 |              0.03354 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3419 | 10-15%                  |                 2 |              0.17095 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3611 | >20%                    |                 2 |              0.18055 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3613 | >20%                    |                 2 |              0.18065 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3675 | >20%                    |                 2 |              0.18375 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3686 | >20%                    |                 5 |              0.07372 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3693 | <5%                     |                10 |              0.03693 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3789 | >20%                    |                 5 |              0.07578 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3797 | >20%                    |                 2 |              0.18985 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3798 | >20%                    |                 5 |              0.07596 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.38   | >20%                    |                 5 |              0.076   |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3843 | >20%                    |                10 |              0.03843 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3902 | >20%                    |                 2 |              0.1951  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.394  | >20%                    |                 2 |              0.197   |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4065 | >20%                    |                 2 |              0.20325 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4142 | 10-15%                  |                 5 |              0.08284 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4143 | >20%                    |                 5 |              0.08286 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4177 | >20%                    |                 5 |              0.08354 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4185 | 15-20%                  |                 2 |              0.20925 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4202 | >20%                    |                 2 |              0.2101  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4204 | >20%                    |                 5 |              0.08408 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4298 | >20%                    |                 5 |              0.08596 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4324 | 15-20%                  |                 2 |              0.2162  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4362 | >20%                    |                10 |              0.04362 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4382 | >20%                    |                 2 |              0.2191  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4386 | >20%                    |                 2 |              0.2193  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4424 | 15-20%                  |                 5 |              0.08848 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4435 | 5-10%                   |                 2 |              0.22175 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4483 | >20%                    |                 5 |              0.08966 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4505 | >20%                    |                 2 |              0.22525 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4644 | >20%                    |                 2 |              0.2322  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4652 | 10-15%                  |                 2 |              0.2326  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4735 | <5%                     |                 2 |              0.23675 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.475  | 10-15%                  |                 2 |              0.2375  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4758 | 15-20%                  |                10 |              0.04758 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.48   | >20%                    |                 5 |              0.096   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.495  | >20%                    |                 5 |              0.099   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4951 | >20%                    |                 5 |              0.09902 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4981 | >20%                    |                 2 |              0.24905 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5032 | 5-10%                   |                 5 |              0.10064 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5186 | >20%                    |                 5 |              0.10372 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5197 | >20%                    |                 2 |              0.25985 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5205 | >20%                    |                 2 |              0.26025 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.522  | >20%                    |                 5 |              0.1044  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5223 | >20%                    |                 5 |              0.10446 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5301 | 5-10%                   |                 2 |              0.26505 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5362 | 10-15%                  |                 2 |              0.2681  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.539  | >20%                    |                 5 |              0.1078  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5481 | >20%                    |                 2 |              0.27405 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5482 | >20%                    |                10 |              0.05482 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5496 | >20%                    |                 5 |              0.10992 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5515 | >20%                    |                 2 |              0.27575 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5665 | >20%                    |                 5 |              0.1133  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5711 | >20%                    |                 5 |              0.11422 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5756 | >20%                    |                 5 |              0.11512 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5759 | >20%                    |                 2 |              0.28795 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5856 | >20%                    |                 5 |              0.11712 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5862 | 5-10%                   |                10 |              0.05862 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5912 | 15-20%                  |                 2 |              0.2956  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.594  | >20%                    |                 2 |              0.297   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6034 | >20%                    |                 5 |              0.12068 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6072 | >20%                    |                 2 |              0.3036  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6182 | >20%                    |                 5 |              0.12364 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6188 | 10-15%                  |                 5 |              0.12376 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6205 | 10-15%                  |                 5 |              0.1241  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6256 | 15-20%                  |                 5 |              0.12512 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6408 | >20%                    |                 5 |              0.12816 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6448 | 15-20%                  |                 2 |              0.3224  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6567 | >20%                    |                 5 |              0.13134 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6659 | 15-20%                  |                10 |              0.06659 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6712 | >20%                    |                 5 |              0.13424 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6799 | 15-20%                  |                 5 |              0.13598 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6813 | >20%                    |                 5 |              0.13626 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6825 | >20%                    |                 2 |              0.34125 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6829 | >20%                    |                 5 |              0.13658 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6852 | >20%                    |                 5 |              0.13704 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6889 | >20%                    |                 5 |              0.13778 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7024 | >20%                    |                 5 |              0.14048 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7038 | >20%                    |                 5 |              0.14076 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7082 | >20%                    |                 5 |              0.14164 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7122 | 15-20%                  |                10 |              0.07122 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7131 | >20%                    |                 5 |              0.14262 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7146 | >20%                    |                10 |              0.07146 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7149 | >20%                    |                10 |              0.07149 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7241 | >20%                    |                 2 |              0.36205 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7324 | 15-20%                  |                10 |              0.07324 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7483 | >20%                    |                10 |              0.07483 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7618 | >20%                    |                10 |              0.07618 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7722 | 15-20%                  |                 5 |              0.15444 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7751 | >20%                    |                10 |              0.07751 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7805 | 10-15%                  |                 2 |              0.39025 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8044 | >20%                    |                 5 |              0.16088 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8068 | >20%                    |                10 |              0.08068 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8098 | 15-20%                  |                 5 |              0.16196 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8134 | 10-15%                  |                 2 |              0.4067  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8165 | >20%                    |                 5 |              0.1633  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8273 | >20%                    |                 5 |              0.16546 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8468 | <5%                     |                10 |              0.08468 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.853  | >20%                    |                 5 |              0.1706  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8541 | 10-15%                  |                10 |              0.08541 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8606 | >20%                    |                10 |              0.08606 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8642 | >20%                    |                10 |              0.08642 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8705 | 15-20%                  |                10 |              0.08705 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8893 | 15-20%                  |                10 |              0.08893 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8909 | 15-20%                  |                10 |              0.08909 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9035 | 10-15%                  |                10 |              0.09035 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9038 | <5%                     |                10 |              0.09038 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9106 | 15-20%                  |                10 |              0.09106 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9122 | 5-10%                   |                10 |              0.09122 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9122 | >20%                    |                10 |              0.09122 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9173 | >20%                    |                 5 |              0.18346 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9248 | >20%                    |                10 |              0.09248 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9586 | <5%                     |                10 |              0.09586 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9635 | 10-15%                  |                10 |              0.09635 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9727 | 15-20%                  |                10 |              0.09727 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9824 | 10-15%                  |                 5 |              0.19648 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9925 | 15-20%                  |                10 |              0.09925 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0183 | >20%                    |                10 |              0.10183 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0293 | >20%                    |                 2 |              0.51465 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0441 | >20%                    |                10 |              0.10441 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0459 | >20%                    |                 2 |              0.52295 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.049  | 5-10%                   |                10 |              0.1049  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0681 | >20%                    |                 5 |              0.21362 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0821 | >20%                    |                 2 |              0.54105 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0825 | 5-10%                   |                10 |              0.10825 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0859 | >20%                    |                10 |              0.10859 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0979 | <5%                     |                10 |              0.10979 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1033 | 15-20%                  |                10 |              0.11033 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1062 | 10-15%                  |                 2 |              0.5531  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1065 | >20%                    |                10 |              0.11065 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1235 | 5-10%                   |                10 |              0.11235 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1239 | >20%                    |                 5 |              0.22478 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1346 | >20%                    |                10 |              0.11346 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.162  | 10-15%                  |                10 |              0.1162  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.1656 | <5%                     |                 2 |              0.5828  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1728 | >20%                    |                 5 |              0.23456 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2057 | >20%                    |                 5 |              0.24114 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2288 | 15-20%                  |                10 |              0.12288 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2335 | 5-10%                   |                 2 |              0.61675 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.2479 | >20%                    |                10 |              0.12479 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2957 | >20%                    |                10 |              0.12957 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3216 | 10-15%                  |                10 |              0.13216 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3264 | 10-15%                  |                 5 |              0.26528 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4037 | >20%                    |                10 |              0.14037 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5882 | >20%                    |                10 |              0.15882 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5942 | >20%                    |                10 |              0.15942 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6302 | 10-15%                  |                 5 |              0.32604 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7178 | >20%                    |                10 |              0.17178 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7964 | >20%                    |                10 |              0.17964 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1007 | 10-15%                  |                10 |              0.21007 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1172 | 15-20%                  |                10 |              0.21172 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.3662 | >20%                    |                10 |              0.23662 |