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

Data correct as of 2025-09-04 01:41:59.025621, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0968 | 5-10%                   |                 2 |              0.0484  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1168 | >20%                    |                 2 |              0.0584  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1556 | >20%                    |                 2 |              0.0778  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1666 | >20%                    |                 2 |              0.0833  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1983 | >20%                    |                 5 |              0.03966 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2065 | >20%                    |                 2 |              0.10325 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2143 | 10-15%                  |                 2 |              0.10715 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2147 | >20%                    |                 2 |              0.10735 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.226  | 10-15%                  |                 5 |              0.0452  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2291 | >20%                    |                 5 |              0.04582 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2304 | >20%                    |                 5 |              0.04608 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2317 | >20%                    |                 2 |              0.11585 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2374 | >20%                    |                 2 |              0.1187  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2552 | 15-20%                  |                 5 |              0.05104 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2757 | >20%                    |                 2 |              0.13785 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2848 | >20%                    |                 2 |              0.1424  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2897 | 15-20%                  |                 2 |              0.14485 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3078 | 5-10%                   |                 2 |              0.1539  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3161 | >20%                    |                 2 |              0.15805 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3171 | 10-15%                  |                 2 |              0.15855 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3188 | 5-10%                   |                 2 |              0.1594  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.326  | >20%                    |                10 |              0.0326  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3334 | >20%                    |                 2 |              0.1667  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3347 | >20%                    |                 2 |              0.16735 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3366 | <5%                     |                10 |              0.03366 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3384 | 10-15%                  |                 5 |              0.06768 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3436 | >20%                    |                 2 |              0.1718  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3512 | >20%                    |                 2 |              0.1756  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3552 | >20%                    |                 5 |              0.07104 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3588 | >20%                    |                 2 |              0.1794  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3619 | >20%                    |                 5 |              0.07238 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.368  | >20%                    |                10 |              0.0368  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3684 | >20%                    |                 2 |              0.1842  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.369  | 15-20%                  |                10 |              0.0369  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3703 | 10-15%                  |                10 |              0.03703 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3739 | >20%                    |                 2 |              0.18695 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3762 | >20%                    |                 5 |              0.07524 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3785 | 15-20%                  |                 2 |              0.18925 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3813 | 10-15%                  |                 2 |              0.19065 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3839 | >20%                    |                 2 |              0.19195 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3951 | >20%                    |                 5 |              0.07902 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4052 | 15-20%                  |                10 |              0.04052 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.414  | 15-20%                  |                 2 |              0.207   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4207 | >20%                    |                 5 |              0.08414 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4218 | >20%                    |                 5 |              0.08436 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4233 | >20%                    |                 5 |              0.08466 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4283 | >20%                    |                 5 |              0.08566 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4357 | 10-15%                  |                 2 |              0.21785 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4494 | >20%                    |                 2 |              0.2247  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.452  | 15-20%                  |                 2 |              0.226   |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4541 | 15-20%                  |                 2 |              0.22705 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4542 | 5-10%                   |                 2 |              0.2271  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4547 | >20%                    |                 2 |              0.22735 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4562 | >20%                    |                 5 |              0.09124 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4603 | 10-15%                  |                 2 |              0.23015 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4685 | <5%                     |                 2 |              0.23425 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.472  | >20%                    |                 5 |              0.0944  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4764 | >20%                    |                 2 |              0.2382  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.478  | >20%                    |                 2 |              0.239   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4833 | >20%                    |                 5 |              0.09666 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4873 | >20%                    |                 5 |              0.09746 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4936 | >20%                    |                10 |              0.04936 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5039 | >20%                    |                 5 |              0.10078 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5055 | >20%                    |                 2 |              0.25275 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5078 | 5-10%                   |                 5 |              0.10156 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5132 | >20%                    |                 5 |              0.10264 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5197 | >20%                    |                 5 |              0.10394 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5198 | >20%                    |                 2 |              0.2599  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5219 | 10-15%                  |                 2 |              0.26095 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5224 | >20%                    |                 2 |              0.2612  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5275 | 10-15%                  |                 2 |              0.26375 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5343 | >20%                    |                 2 |              0.26715 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5463 | >20%                    |                 2 |              0.27315 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5581 | <5%                     |                 2 |              0.27905 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5587 | >20%                    |                 5 |              0.11174 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.56   | >20%                    |                 2 |              0.28    |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5624 | >20%                    |                 2 |              0.2812  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5625 | 5-10%                   |                 2 |              0.28125 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5693 | >20%                    |                 5 |              0.11386 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5716 | >20%                    |                 5 |              0.11432 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5753 | >20%                    |                 5 |              0.11506 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5794 | >20%                    |                 2 |              0.2897  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5843 | 15-20%                  |                 5 |              0.11686 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5844 | >20%                    |                 2 |              0.2922  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5941 | >20%                    |                 5 |              0.11882 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5948 | 10-15%                  |                 5 |              0.11896 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6072 | >20%                    |                 5 |              0.12144 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.614  | >20%                    |                 5 |              0.1228  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6144 | 15-20%                  |                 5 |              0.12288 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6209 | >20%                    |                 5 |              0.12418 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6254 | >20%                    |                 5 |              0.12508 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.627  | 15-20%                  |                 5 |              0.1254  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6323 | 10-15%                  |                 5 |              0.12646 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6487 | >20%                    |                 5 |              0.12974 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6499 | >20%                    |                 2 |              0.32495 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6512 | >20%                    |                 5 |              0.13024 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6578 | 15-20%                  |                 2 |              0.3289  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6633 | >20%                    |                 5 |              0.13266 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6657 | 15-20%                  |                 5 |              0.13314 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6743 | 5-10%                   |                10 |              0.06743 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6855 | 15-20%                  |                10 |              0.06855 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6863 | >20%                    |                 5 |              0.13726 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.704  | >20%                    |                 2 |              0.352   |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7053 | >20%                    |                 5 |              0.14106 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7188 | >20%                    |                 5 |              0.14376 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7359 | >20%                    |                 5 |              0.14718 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7363 | >20%                    |                 5 |              0.14726 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7382 | >20%                    |                 5 |              0.14764 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7412 | >20%                    |                10 |              0.07412 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7442 | >20%                    |                10 |              0.07442 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7461 | >20%                    |                 5 |              0.14922 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7536 | >20%                    |                10 |              0.07536 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7565 | >20%                    |                10 |              0.07565 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.757  | >20%                    |                10 |              0.0757  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7607 | >20%                    |                 5 |              0.15214 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7616 | >20%                    |                 5 |              0.15232 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7622 | >20%                    |                10 |              0.07622 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7689 | >20%                    |                10 |              0.07689 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8042 | 10-15%                  |                10 |              0.08042 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8044 | 15-20%                  |                10 |              0.08044 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8047 | 10-15%                  |                10 |              0.08047 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8215 | >20%                    |                 5 |              0.1643  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.854  | 15-20%                  |                10 |              0.0854  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8672 | 10-15%                  |                 2 |              0.4336  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8697 | <5%                     |                10 |              0.08697 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8739 | 10-15%                  |                10 |              0.08739 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8902 | >20%                    |                10 |              0.08902 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9057 | <5%                     |                10 |              0.09057 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9328 | 5-10%                   |                10 |              0.09328 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9334 | 5-10%                   |                10 |              0.09334 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9383 | 15-20%                  |                10 |              0.09383 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9401 | >20%                    |                10 |              0.09401 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9459 | <5%                     |                10 |              0.09459 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9467 | 15-20%                  |                10 |              0.09467 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.954  | >20%                    |                10 |              0.0954  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9637 | 10-15%                  |                10 |              0.09637 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9762 | >20%                    |                 2 |              0.4881  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9813 | >20%                    |                 5 |              0.19626 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9842 | >20%                    |                10 |              0.09842 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9983 | >20%                    |                10 |              0.09983 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0055 | 5-10%                   |                10 |              0.10055 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0093 | 15-20%                  |                10 |              0.10093 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0138 | >20%                    |                10 |              0.10138 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0273 | 15-20%                  |                10 |              0.10273 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0408 | 15-20%                  |                10 |              0.10408 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0424 | >20%                    |                10 |              0.10424 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0489 | <5%                     |                10 |              0.10489 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0628 | >20%                    |                 2 |              0.5314  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0647 | >20%                    |                 5 |              0.21294 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1022 | >20%                    |                10 |              0.11022 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1025 | >20%                    |                 5 |              0.2205  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1038 | 15-20%                  |                10 |              0.11038 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1281 | 10-15%                  |                 5 |              0.22562 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1362 | >20%                    |                 5 |              0.22724 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1459 | 15-20%                  |                10 |              0.11459 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1673 | 10-15%                  |                 2 |              0.58365 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1684 | 5-10%                   |                10 |              0.11684 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.17   | >20%                    |                10 |              0.117   |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1782 | >20%                    |                10 |              0.11782 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2162 | >20%                    |                 2 |              0.6081  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2835 | 5-10%                   |                 2 |              0.64175 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2968 | 10-15%                  |                 5 |              0.25936 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3337 | 10-15%                  |                10 |              0.13337 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3454 | >20%                    |                 5 |              0.26908 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4369 | >20%                    |                10 |              0.14369 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.464  | 10-15%                  |                 5 |              0.2928  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5292 | >20%                    |                10 |              0.15292 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5741 | >20%                    |                10 |              0.15741 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5753 | >20%                    |                10 |              0.15753 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5922 | >20%                    |                10 |              0.15922 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5989 | >20%                    |                10 |              0.15989 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.6018 | 15-20%                  |                10 |              0.16018 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.3055 | 10-15%                  |                10 |              0.23055 |