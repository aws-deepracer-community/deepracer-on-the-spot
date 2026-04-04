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

Data correct as of 2026-04-04 02:35:50.924110, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1998 | >20%                    |                 2 |              0.0999  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2092 | 15-20%                  |                 2 |              0.1046  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2196 | >20%                    |                 2 |              0.1098  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2212 | >20%                    |                 2 |              0.1106  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2457 | >20%                    |                 2 |              0.12285 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2461 | >20%                    |                 2 |              0.12305 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.254  | 15-20%                  |                 5 |              0.0508  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2666 | >20%                    |                 2 |              0.1333  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2666 | 10-15%                  |                 2 |              0.1333  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2753 | 15-20%                  |                 2 |              0.13765 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2874 | 5-10%                   |                10 |              0.02874 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2912 | 15-20%                  |                 5 |              0.05824 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2937 | >20%                    |                 5 |              0.05874 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2978 | >20%                    |                10 |              0.02978 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3023 | 5-10%                   |                10 |              0.03023 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3139 | 10-15%                  |                 2 |              0.15695 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3152 | >20%                    |                 2 |              0.1576  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3177 | >20%                    |                 5 |              0.06354 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3186 | 15-20%                  |                 5 |              0.06372 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3195 | >20%                    |                 5 |              0.0639  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3233 | <5%                     |                 2 |              0.16165 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3307 | >20%                    |                 2 |              0.16535 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3358 | 10-15%                  |                 2 |              0.1679  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3401 | >20%                    |                10 |              0.03401 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3417 | >20%                    |                 2 |              0.17085 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3431 | >20%                    |                 5 |              0.06862 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3445 | <5%                     |                 2 |              0.17225 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3587 | 5-10%                   |                10 |              0.03587 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.363  | 10-15%                  |                 2 |              0.1815  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3656 | 15-20%                  |                 2 |              0.1828  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3818 | >20%                    |                 2 |              0.1909  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3868 | >20%                    |                 5 |              0.07736 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3881 | >20%                    |                 2 |              0.19405 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3903 | >20%                    |                 5 |              0.07806 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.394  | >20%                    |                 5 |              0.0788  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4021 | >20%                    |                 2 |              0.20105 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4061 | >20%                    |                 5 |              0.08122 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4122 | <5%                     |                 2 |              0.2061  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4171 | 10-15%                  |                 2 |              0.20855 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4231 | >20%                    |                 2 |              0.21155 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4266 | 15-20%                  |                 2 |              0.2133  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4297 | >20%                    |                 2 |              0.21485 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4341 | >20%                    |                 2 |              0.21705 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4343 | >20%                    |                 5 |              0.08686 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4409 | >20%                    |                 5 |              0.08818 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4437 | >20%                    |                 5 |              0.08874 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4477 | <5%                     |                 5 |              0.08954 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.448  | >20%                    |                 2 |              0.224   |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4583 | >20%                    |                 5 |              0.09166 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4625 | >20%                    |                 5 |              0.0925  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4641 | >20%                    |                 2 |              0.23205 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4684 | >20%                    |                 2 |              0.2342  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4687 | 15-20%                  |                 2 |              0.23435 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4736 | >20%                    |                 5 |              0.09472 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4799 | >20%                    |                 5 |              0.09598 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4808 | >20%                    |                 5 |              0.09616 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4845 | 15-20%                  |                 2 |              0.24225 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4852 | >20%                    |                 5 |              0.09704 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4984 | >20%                    |                 2 |              0.2492  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5042 | >20%                    |                10 |              0.05042 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5104 | >20%                    |                 5 |              0.10208 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5113 | >20%                    |                 2 |              0.25565 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5127 | >20%                    |                 5 |              0.10254 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5157 | >20%                    |                 2 |              0.25785 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5305 | 15-20%                  |                10 |              0.05305 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5347 | 5-10%                   |                10 |              0.05347 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5352 | 5-10%                   |                 5 |              0.10704 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5479 | >20%                    |                 5 |              0.10958 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5482 | >20%                    |                 5 |              0.10964 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5506 | 15-20%                  |                 5 |              0.11012 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5518 | >20%                    |                10 |              0.05518 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5603 | >20%                    |                 5 |              0.11206 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.564  | 5-10%                   |                 2 |              0.282   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.571  | >20%                    |                 5 |              0.1142  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5759 | >20%                    |                 2 |              0.28795 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5904 | 10-15%                  |                 5 |              0.11808 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5924 | >20%                    |                10 |              0.05924 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6021 | >20%                    |                10 |              0.06021 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6056 | >20%                    |                10 |              0.06056 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6057 | >20%                    |                 2 |              0.30285 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6108 | 5-10%                   |                 5 |              0.12216 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6147 | >20%                    |                 5 |              0.12294 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6285 | <5%                     |                10 |              0.06285 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6319 | >20%                    |                 5 |              0.12638 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6342 | >20%                    |                10 |              0.06342 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6379 | 15-20%                  |                10 |              0.06379 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6446 | 10-15%                  |                 2 |              0.3223  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6515 | 15-20%                  |                10 |              0.06515 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6616 | >20%                    |                10 |              0.06616 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6661 | >20%                    |                 5 |              0.13322 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6771 | >20%                    |                 5 |              0.13542 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6828 | >20%                    |                 2 |              0.3414  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6832 | >20%                    |                10 |              0.06832 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6976 | 5-10%                   |                 2 |              0.3488  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7212 | >20%                    |                 5 |              0.14424 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7289 | >20%                    |                 5 |              0.14578 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7355 | >20%                    |                 5 |              0.1471  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7559 | >20%                    |                 2 |              0.37795 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7618 | >20%                    |                 5 |              0.15236 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7625 | >20%                    |                10 |              0.07625 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7712 | >20%                    |                10 |              0.07712 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7731 | >20%                    |                 5 |              0.15462 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.781  | >20%                    |                10 |              0.0781  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7896 | >20%                    |                10 |              0.07896 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7911 | >20%                    |                10 |              0.07911 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7993 | >20%                    |                10 |              0.07993 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8062 | >20%                    |                10 |              0.08062 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8095 | >20%                    |                 5 |              0.1619  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8178 | >20%                    |                10 |              0.08178 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8224 | 5-10%                   |                 2 |              0.4112  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8225 | >20%                    |                 5 |              0.1645  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8253 | >20%                    |                10 |              0.08253 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8312 | >20%                    |                 5 |              0.16624 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8523 | >20%                    |                10 |              0.08523 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.854  | >20%                    |                 5 |              0.1708  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8561 | >20%                    |                10 |              0.08561 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8568 | >20%                    |                 2 |              0.4284  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8574 | >20%                    |                 2 |              0.4287  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8687 | >20%                    |                10 |              0.08687 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8709 | 5-10%                   |                10 |              0.08709 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8867 | 15-20%                  |                10 |              0.08867 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8938 | >20%                    |                 5 |              0.17876 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8954 | >20%                    |                 2 |              0.4477  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9054 | >20%                    |                10 |              0.09054 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9224 | >20%                    |                10 |              0.09224 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9353 | >20%                    |                10 |              0.09353 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9413 | 10-15%                  |                 2 |              0.47065 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9545 | >20%                    |                10 |              0.09545 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9647 | >20%                    |                 5 |              0.19294 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9739 | 10-15%                  |                10 |              0.09739 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9745 | 15-20%                  |                10 |              0.09745 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9827 | >20%                    |                10 |              0.09827 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0296 | 5-10%                   |                10 |              0.10296 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0297 | >20%                    |                10 |              0.10297 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0517 | 15-20%                  |                10 |              0.10517 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0664 | >20%                    |                 5 |              0.21328 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.072  | >20%                    |                10 |              0.1072  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1049 | >20%                    |                10 |              0.11049 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1114 | 10-15%                  |                10 |              0.11114 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1779 | >20%                    |                 5 |              0.23558 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2767 | 15-20%                  |                10 |              0.12767 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.294  | 15-20%                  |                10 |              0.1294  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3248 | >20%                    |                10 |              0.13248 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3852 | 5-10%                   |                 2 |              0.6926  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4395 | >20%                    |                 5 |              0.2879  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4439 | >20%                    |                 2 |              0.72195 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4451 | 15-20%                  |                 5 |              0.28902 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.7258 |                         |                 2 |              0.8629  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.9119 |                         |                 5 |              0.38238 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.0887 | >20%                    |                10 |              0.20887 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      2.6407 |                         |                10 |              0.26407 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.85   | >20%                    |                10 |              0.285   |