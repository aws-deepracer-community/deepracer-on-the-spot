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

Data correct as of 2026-10-17 03:42:32.956625, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0935 | >20%                    |                 2 |              0.04675 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1461 | >20%                    |                 2 |              0.07305 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1492 | 15-20%                  |                 2 |              0.0746  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1613 | 15-20%                  |                 5 |              0.03226 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1968 | >20%                    |                 5 |              0.03936 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2137 | 10-15%                  |                 2 |              0.10685 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.22   | >20%                    |                 2 |              0.11    |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2459 | >20%                    |                 2 |              0.12295 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2493 | 5-10%                   |                10 |              0.02493 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2639 | >20%                    |                 2 |              0.13195 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2893 | >20%                    |                 2 |              0.14465 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2908 | >20%                    |                 2 |              0.1454  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2914 | >20%                    |                 2 |              0.1457  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.292  | >20%                    |                 5 |              0.0584  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3071 | >20%                    |                 2 |              0.15355 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3115 | >20%                    |                 2 |              0.15575 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3148 | 15-20%                  |                 2 |              0.1574  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3251 | >20%                    |                 5 |              0.06502 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3575 | >20%                    |                 2 |              0.17875 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3646 | 10-15%                  |                 2 |              0.1823  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3659 | >20%                    |                10 |              0.03659 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3713 | >20%                    |                 2 |              0.18565 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3747 | 15-20%                  |                 2 |              0.18735 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3754 | >20%                    |                 5 |              0.07508 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3768 | 15-20%                  |                 2 |              0.1884  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3797 | >20%                    |                10 |              0.03797 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3823 | >20%                    |                10 |              0.03823 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3927 | <5%                     |                 2 |              0.19635 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3975 | >20%                    |                 5 |              0.0795  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4025 | >20%                    |                 5 |              0.0805  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4105 | >20%                    |                 5 |              0.0821  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4122 | >20%                    |                 5 |              0.08244 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4168 | >20%                    |                 5 |              0.08336 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4279 | >20%                    |                 2 |              0.21395 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4365 | >20%                    |                 2 |              0.21825 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4389 | <5%                     |                10 |              0.04389 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4435 | 5-10%                   |                10 |              0.04435 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4505 | >20%                    |                 2 |              0.22525 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4597 | >20%                    |                 5 |              0.09194 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4647 | >20%                    |                 5 |              0.09294 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4684 | >20%                    |                 5 |              0.09368 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4707 | >20%                    |                 2 |              0.23535 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4737 | 10-15%                  |                 2 |              0.23685 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.482  | 5-10%                   |                10 |              0.0482  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.491  | >20%                    |                 2 |              0.2455  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4912 | >20%                    |                 5 |              0.09824 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4959 | >20%                    |                 2 |              0.24795 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4981 |                         |                 2 |              0.24905 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5012 | >20%                    |                 5 |              0.10024 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.5197 |                         |                10 |              0.05197 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5226 | >20%                    |                 5 |              0.10452 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5292 | >20%                    |                 2 |              0.2646  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5369 | >20%                    |                 2 |              0.26845 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5481 | >20%                    |                 2 |              0.27405 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5519 | 15-20%                  |                 2 |              0.27595 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.583  | 10-15%                  |                 5 |              0.1166  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.584  | >20%                    |                 2 |              0.292   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5842 | >20%                    |                 5 |              0.11684 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.587  | >20%                    |                 5 |              0.1174  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6057 | <5%                     |                 2 |              0.30285 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6218 | >20%                    |                 5 |              0.12436 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6251 | 10-15%                  |                 2 |              0.31255 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.626  | >20%                    |                 5 |              0.1252  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6475 | >20%                    |                 5 |              0.1295  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6507 | >20%                    |                 2 |              0.32535 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6517 | >20%                    |                10 |              0.06517 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6563 | >20%                    |                10 |              0.06563 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6631 | >20%                    |                10 |              0.06631 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6649 | >20%                    |                 2 |              0.33245 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6673 | 5-10%                   |                 2 |              0.33365 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6821 | >20%                    |                 5 |              0.13642 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6823 | <5%                     |                 2 |              0.34115 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6872 | >20%                    |                 5 |              0.13744 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6933 | >20%                    |                 5 |              0.13866 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7301 | >20%                    |                 5 |              0.14602 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7302 | >20%                    |                 5 |              0.14604 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.731  | 15-20%                  |                 2 |              0.3655  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7312 | >20%                    |                 5 |              0.14624 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.735  | 15-20%                  |                 5 |              0.147   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7375 | >20%                    |                 5 |              0.1475  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.746  | >20%                    |                 5 |              0.1492  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7509 | 15-20%                  |                10 |              0.07509 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7599 | >20%                    |                 5 |              0.15198 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7619 | >20%                    |                10 |              0.07619 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7892 | >20%                    |                 5 |              0.15784 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7924 | 15-20%                  |                10 |              0.07924 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8063 | >20%                    |                10 |              0.08063 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.809  | 15-20%                  |                10 |              0.0809  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8291 | 10-15%                  |                10 |              0.08291 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8311 | >20%                    |                10 |              0.08311 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8382 | >20%                    |                 5 |              0.16764 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8445 | >20%                    |                 2 |              0.42225 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8481 | 15-20%                  |                 5 |              0.16962 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8517 | 5-10%                   |                10 |              0.08517 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.8563 | 5-10%                   |                 5 |              0.17126 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8591 | 10-15%                  |                 2 |              0.42955 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.8672 |                         |                 5 |              0.17344 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8715 | >20%                    |                10 |              0.08715 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8774 | 10-15%                  |                 2 |              0.4387  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.895  | >20%                    |                10 |              0.0895  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8964 | >20%                    |                 2 |              0.4482  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.903  | >20%                    |                10 |              0.0903  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9044 | >20%                    |                 5 |              0.18088 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9071 | >20%                    |                 5 |              0.18142 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9072 | <5%                     |                 5 |              0.18144 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9081 | >20%                    |                10 |              0.09081 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9448 | >20%                    |                10 |              0.09448 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9737 | >20%                    |                10 |              0.09737 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9744 | >20%                    |                 5 |              0.19488 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9764 | >20%                    |                10 |              0.09764 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9796 | >20%                    |                10 |              0.09796 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9802 | 15-20%                  |                10 |              0.09802 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9857 | 15-20%                  |                10 |              0.09857 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9868 | >20%                    |                10 |              0.09868 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.996  | >20%                    |                 5 |              0.1992  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9983 | >20%                    |                10 |              0.09983 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0167 | 15-20%                  |                10 |              0.10167 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0308 | >20%                    |                10 |              0.10308 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0612 | >20%                    |                10 |              0.10612 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1157 | >20%                    |                 5 |              0.22314 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1178 | 5-10%                   |                10 |              0.11178 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1887 | >20%                    |                10 |              0.11887 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2056 | >20%                    |                10 |              0.12056 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2617 | 10-15%                  |                 2 |              0.63085 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      1.2821 | >20%                    |                 2 |              0.64105 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3257 | 10-15%                  |                10 |              0.13257 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3457 | >20%                    |                 2 |              0.67285 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3612 | 15-20%                  |                10 |              0.13612 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3684 | >20%                    |                10 |              0.13684 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3739 | >20%                    |                10 |              0.13739 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3857 | >20%                    |                 2 |              0.69285 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.4139 |                         |                 2 |              0.70695 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4347 | >20%                    |                10 |              0.14347 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.5171 |                         |                 5 |              0.30342 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5197 | 5-10%                   |                 5 |              0.30394 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5221 | >20%                    |                 5 |              0.30442 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.5248 | >20%                    |                10 |              0.15248 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5278 | 5-10%                   |                 2 |              0.7639  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.5365 |                         |                 2 |              0.76825 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.55   | 15-20%                  |                10 |              0.155   |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5787 | >20%                    |                 2 |              0.78935 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6086 | >20%                    |                10 |              0.16086 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6137 | >20%                    |                10 |              0.16137 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6569 | >20%                    |                10 |              0.16569 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6607 |                         |                10 |              0.16607 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.6787 | 5-10%                   |                 2 |              0.83935 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7423 | >20%                    |                 5 |              0.34846 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.9605 |                         |                 5 |              0.3921  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.9998 | >20%                    |                 5 |              0.39996 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0905 | 15-20%                  |                 5 |              0.4181  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2104 | 5-10%                   |                 2 |              1.1052  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2904 | 5-10%                   |                10 |              0.22904 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.4445 |                         |                10 |              0.24445 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5764 | >20%                    |                10 |              0.25764 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0774 | >20%                    |                10 |              0.30774 |