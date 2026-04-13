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

Data correct as of 2026-04-13 03:25:20.735183, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1695 | >20%                    |                 2 |              0.08475 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1977 | 15-20%                  |                 2 |              0.09885 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2071 | >20%                    |                 2 |              0.10355 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2286 | >20%                    |                 2 |              0.1143  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2361 | >20%                    |                 2 |              0.11805 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2419 | >20%                    |                 2 |              0.12095 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2505 | 15-20%                  |                 5 |              0.0501  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2616 | >20%                    |                 2 |              0.1308  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2742 | 15-20%                  |                 5 |              0.05484 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2763 | 5-10%                   |                10 |              0.02763 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2784 | 15-20%                  |                 2 |              0.1392  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3067 | >20%                    |                 2 |              0.15335 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.31   | >20%                    |                 5 |              0.062   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.317  | >20%                    |                 2 |              0.1585  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3192 | 10-15%                  |                 2 |              0.1596  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3203 | >20%                    |                 5 |              0.06406 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3205 | >20%                    |                 5 |              0.0641  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.321  | >20%                    |                10 |              0.0321  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3266 | 10-15%                  |                 2 |              0.1633  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.331  | 10-15%                  |                 2 |              0.1655  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3334 | 5-10%                   |                10 |              0.03334 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3342 | <5%                     |                 2 |              0.1671  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3374 | 15-20%                  |                 2 |              0.1687  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3377 | 15-20%                  |                 5 |              0.06754 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3571 | 10-15%                  |                 2 |              0.17855 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3579 | >20%                    |                 2 |              0.17895 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3634 | >20%                    |                 5 |              0.07268 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3699 | >20%                    |                10 |              0.03699 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3707 | >20%                    |                 2 |              0.18535 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3751 | 5-10%                   |                10 |              0.03751 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3777 | >20%                    |                 2 |              0.18885 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3812 | <5%                     |                 2 |              0.1906  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3853 | >20%                    |                 5 |              0.07706 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4027 | >20%                    |                 5 |              0.08054 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4049 | >20%                    |                 5 |              0.08098 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4075 | 15-20%                  |                 2 |              0.20375 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4076 | >20%                    |                 2 |              0.2038  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4119 | >20%                    |                 2 |              0.20595 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4143 | <5%                     |                 2 |              0.20715 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4236 | >20%                    |                 5 |              0.08472 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4261 | 10-15%                  |                 2 |              0.21305 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4268 | >20%                    |                 5 |              0.08536 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4326 | >20%                    |                 2 |              0.2163  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4349 | >20%                    |                 2 |              0.21745 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4352 | >20%                    |                 5 |              0.08704 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4358 | >20%                    |                 5 |              0.08716 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4395 | >20%                    |                 5 |              0.0879  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4456 | >20%                    |                 2 |              0.2228  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4523 | >20%                    |                 5 |              0.09046 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4527 | 15-20%                  |                 2 |              0.22635 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4539 | >20%                    |                 2 |              0.22695 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4561 | 15-20%                  |                 2 |              0.22805 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4652 | >20%                    |                 5 |              0.09304 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4704 | >20%                    |                 2 |              0.2352  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4707 | >20%                    |                 5 |              0.09414 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4715 | <5%                     |                10 |              0.04715 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4724 | >20%                    |                 2 |              0.2362  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4825 | >20%                    |                 5 |              0.0965  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4846 | >20%                    |                 5 |              0.09692 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4852 | >20%                    |                 5 |              0.09704 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4928 | >20%                    |                 2 |              0.2464  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5077 | >20%                    |                 2 |              0.25385 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5188 | >20%                    |                 5 |              0.10376 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5246 | >20%                    |                 2 |              0.2623  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5281 | 5-10%                   |                 5 |              0.10562 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5314 | >20%                    |                10 |              0.05314 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5461 | >20%                    |                 5 |              0.10922 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5497 | 15-20%                  |                 5 |              0.10994 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.551  | >20%                    |                10 |              0.0551  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5667 | >20%                    |                 5 |              0.11334 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5701 | >20%                    |                10 |              0.05701 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5707 | >20%                    |                 5 |              0.11414 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5748 | <5%                     |                 5 |              0.11496 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5757 | 5-10%                   |                 5 |              0.11514 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5779 | 5-10%                   |                 2 |              0.28895 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5837 | 10-15%                  |                 5 |              0.11674 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5918 | >20%                    |                 2 |              0.2959  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5953 | >20%                    |                10 |              0.05953 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6003 | 5-10%                   |                 2 |              0.30015 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6004 | >20%                    |                 5 |              0.12008 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6081 | >20%                    |                10 |              0.06081 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6244 | >20%                    |                 5 |              0.12488 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6299 | 10-15%                  |                 2 |              0.31495 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6367 | >20%                    |                 5 |              0.12734 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6374 | >20%                    |                10 |              0.06374 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6536 | >20%                    |                10 |              0.06536 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6594 | >20%                    |                 2 |              0.3297  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6609 | >20%                    |                 5 |              0.13218 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6648 | >20%                    |                10 |              0.06648 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6747 | >20%                    |                 5 |              0.13494 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6789 | >20%                    |                10 |              0.06789 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6973 | >20%                    |                 2 |              0.34865 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7154 | 5-10%                   |                10 |              0.07154 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7217 | >20%                    |                10 |              0.07217 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7225 | >20%                    |                 5 |              0.1445  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7277 | >20%                    |                 2 |              0.36385 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7431 | >20%                    |                 5 |              0.14862 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7472 | >20%                    |                 5 |              0.14944 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7504 | >20%                    |                10 |              0.07504 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7614 | >20%                    |                 2 |              0.3807  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.763  | >20%                    |                10 |              0.0763  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7649 | >20%                    |                10 |              0.07649 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7696 | 15-20%                  |                10 |              0.07696 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7828 | 15-20%                  |                10 |              0.07828 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7875 | >20%                    |                 5 |              0.1575  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7877 | >20%                    |                 5 |              0.15754 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.79   | >20%                    |                 5 |              0.158   |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7952 | 5-10%                   |                10 |              0.07952 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8085 | >20%                    |                 5 |              0.1617  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8112 | >20%                    |                10 |              0.08112 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8212 | >20%                    |                10 |              0.08212 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8217 | >20%                    |                10 |              0.08217 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8324 | 5-10%                   |                 2 |              0.4162  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8393 | >20%                    |                 5 |              0.16786 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.845  | >20%                    |                10 |              0.0845  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8722 | >20%                    |                10 |              0.08722 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8777 | >20%                    |                10 |              0.08777 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8833 | >20%                    |                 2 |              0.44165 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8834 | 15-20%                  |                10 |              0.08834 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8933 | >20%                    |                 5 |              0.17866 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.896  | 15-20%                  |                10 |              0.0896  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8998 | >20%                    |                10 |              0.08998 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9111 | >20%                    |                10 |              0.09111 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9115 | >20%                    |                 5 |              0.1823  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9258 | 10-15%                  |                10 |              0.09258 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9428 | 15-20%                  |                10 |              0.09428 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.943  | >20%                    |                10 |              0.0943  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9586 | >20%                    |                10 |              0.09586 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9603 | 5-10%                   |                10 |              0.09603 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9879 | >20%                    |                 5 |              0.19758 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9905 | 10-15%                  |                 2 |              0.49525 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.993  | >20%                    |                10 |              0.0993  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0351 | >20%                    |                10 |              0.10351 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0662 | 15-20%                  |                10 |              0.10662 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1188 | >20%                    |                10 |              0.11188 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.124  | >20%                    |                10 |              0.1124  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1493 | 10-15%                  |                10 |              0.11493 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1715 | >20%                    |                 5 |              0.2343  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1862 | >20%                    |                10 |              0.11862 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2343 | >20%                    |                 5 |              0.24686 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2635 | 15-20%                  |                10 |              0.12635 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2917 | >20%                    |                 2 |              0.64585 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4114 | >20%                    |                 5 |              0.28228 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.4528 |                         |                 5 |              0.29056 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4726 | 15-20%                  |                10 |              0.14726 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5433 | >20%                    |                10 |              0.15433 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5806 | 15-20%                  |                 5 |              0.31612 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.6358 | 5-10%                   |                 2 |              0.8179  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.6521 |                         |                 2 |              0.82605 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8746 | >20%                    |                10 |              0.18746 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.9754 |                         |                10 |              0.19754 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.2464 | >20%                    |                10 |              0.32464 |