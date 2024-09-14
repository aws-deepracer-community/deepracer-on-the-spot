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

Data correct as of 2024-09-14 01:24:52.622932, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0892 | <5%                     |                 2 |              0.0446  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1286 | 5-10%                   |                 2 |              0.0643  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2071 | >20%                    |                 5 |              0.04142 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2173 | 15-20%                  |                 5 |              0.04346 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2204 | 5-10%                   |                 2 |              0.1102  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2311 | 15-20%                  |                 2 |              0.11555 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2335 | <5%                     |                 2 |              0.11675 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2459 | 10-15%                  |                 2 |              0.12295 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2519 | 10-15%                  |                 2 |              0.12595 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2609 | <5%                     |                 2 |              0.13045 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | >20%                    |                10 |              0.02669 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2734 | <5%                     |                 2 |              0.1367  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2757 | <5%                     |                 2 |              0.13785 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2958 | 10-15%                  |                 2 |              0.1479  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3107 | <5%                     |                 2 |              0.15535 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.311  | <5%                     |                 2 |              0.1555  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3132 | <5%                     |                 5 |              0.06264 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3153 | <5%                     |                10 |              0.03153 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3241 | <5%                     |                 2 |              0.16205 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3431 | <5%                     |                 5 |              0.06862 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3591 | 15-20%                  |                 5 |              0.07182 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3596 | <5%                     |                 2 |              0.1798  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3672 | <5%                     |                 2 |              0.1836  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3679 | 5-10%                   |                 2 |              0.18395 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3693 | 5-10%                   |                 5 |              0.07386 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3699 | >20%                    |                 5 |              0.07398 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3725 | <5%                     |                 2 |              0.18625 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.382  | 5-10%                   |                10 |              0.0382  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3822 | 15-20%                  |                10 |              0.03822 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3827 | <5%                     |                 5 |              0.07654 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3837 | <5%                     |                 2 |              0.19185 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3904 | 10-15%                  |                 2 |              0.1952  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4076 | >20%                    |                 2 |              0.2038  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.413  | >20%                    |                 2 |              0.2065  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4154 | 15-20%                  |                 5 |              0.08308 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4236 | 5-10%                   |                 2 |              0.2118  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4237 | >20%                    |                10 |              0.04237 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4249 | 5-10%                   |                 2 |              0.21245 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.4369 | <5%                     |                 2 |              0.21845 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4466 | <5%                     |                 2 |              0.2233  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.454  | 15-20%                  |                 5 |              0.0908  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4587 | 10-15%                  |                 5 |              0.09174 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4609 | <5%                     |                 5 |              0.09218 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4635 | >20%                    |                 2 |              0.23175 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4666 | <5%                     |                 5 |              0.09332 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4698 | 5-10%                   |                 5 |              0.09396 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4706 | <5%                     |                 5 |              0.09412 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4745 | 10-15%                  |                 2 |              0.23725 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4782 | <5%                     |                10 |              0.04782 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4808 | >20%                    |                 2 |              0.2404  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4907 | >20%                    |                 2 |              0.24535 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.491  | 10-15%                  |                 5 |              0.0982  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4966 | 5-10%                   |                 5 |              0.09932 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.499  | <5%                     |                 5 |              0.0998  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5141 | >20%                    |                 5 |              0.10282 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5147 | <5%                     |                 5 |              0.10294 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5186 | <5%                     |                 5 |              0.10372 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5209 | >20%                    |                 2 |              0.26045 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5232 | >20%                    |                 5 |              0.10464 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5348 | >20%                    |                 5 |              0.10696 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5398 | <5%                     |                 5 |              0.10796 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5874 | <5%                     |                 5 |              0.11748 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5887 | >20%                    |                 5 |              0.11774 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5891 | 15-20%                  |                 2 |              0.29455 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5915 | <5%                     |                 5 |              0.1183  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5935 | >20%                    |                 2 |              0.29675 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6008 | >20%                    |                 5 |              0.12016 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6027 | >20%                    |                 5 |              0.12054 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6051 | 5-10%                   |                 5 |              0.12102 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6114 | >20%                    |                 5 |              0.12228 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.62   | 15-20%                  |                 2 |              0.31    |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.6204 | <5%                     |                10 |              0.06204 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6404 | 5-10%                   |                10 |              0.06404 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6596 | 10-15%                  |                10 |              0.06596 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6783 | 5-10%                   |                 2 |              0.33915 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6912 | <5%                     |                10 |              0.06912 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7027 | >20%                    |                 2 |              0.35135 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7057 | <5%                     |                10 |              0.07057 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7061 | >20%                    |                10 |              0.07061 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7505 | 15-20%                  |                10 |              0.07505 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7557 | <5%                     |                 2 |              0.37785 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7693 | >20%                    |                 5 |              0.15386 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.779  | 10-15%                  |                10 |              0.0779  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7821 | 15-20%                  |                10 |              0.07821 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8064 | >20%                    |                 5 |              0.16128 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.808  | >20%                    |                10 |              0.0808  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8097 | >20%                    |                10 |              0.08097 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8257 | <5%                     |                 5 |              0.16514 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8298 | 10-15%                  |                10 |              0.08298 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8347 | 15-20%                  |                10 |              0.08347 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8475 | <5%                     |                10 |              0.08475 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8486 | 5-10%                   |                 5 |              0.16972 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8491 | <5%                     |                 2 |              0.42455 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8727 | >20%                    |                10 |              0.08727 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8743 | >20%                    |                10 |              0.08743 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9026 | <5%                     |                10 |              0.09026 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9089 | >20%                    |                10 |              0.09089 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9252 | >20%                    |                 5 |              0.18504 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9263 | >20%                    |                 5 |              0.18526 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9335 | >20%                    |                10 |              0.09335 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9356 | 5-10%                   |                10 |              0.09356 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.957  | >20%                    |                10 |              0.0957  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9934 | <5%                     |                10 |              0.09934 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0255 | 5-10%                   |                10 |              0.10255 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0317 | >20%                    |                10 |              0.10317 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0374 | 10-15%                  |                10 |              0.10374 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1228 | 5-10%                   |                 5 |              0.22456 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1325 | 15-20%                  |                10 |              0.11325 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1401 | >20%                    |                10 |              0.11401 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1618 | >20%                    |                10 |              0.11618 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2132 | >20%                    |                10 |              0.12132 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3184 | <5%                     |                10 |              0.13184 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4315 | >20%                    |                10 |              0.14315 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5259 | 5-10%                   |                10 |              0.15259 |