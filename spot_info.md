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

Data correct as of 2026-07-31 03:22:51.302707, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1378 | >20%                    |                 2 |              0.0689  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.193  | >20%                    |                 2 |              0.0965  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2257 | 15-20%                  |                 5 |              0.04514 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2305 | >20%                    |                 2 |              0.11525 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2309 | 15-20%                  |                 2 |              0.11545 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2313 | 5-10%                   |                10 |              0.02313 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2347 | >20%                    |                 2 |              0.11735 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2408 | >20%                    |                 2 |              0.1204  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2598 | >20%                    |                 2 |              0.1299  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2789 | >20%                    |                 2 |              0.13945 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2797 | >20%                    |                 2 |              0.13985 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2798 | 15-20%                  |                 2 |              0.1399  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2814 | >20%                    |                 2 |              0.1407  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3058 | >20%                    |                 2 |              0.1529  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3144 | >20%                    |                 2 |              0.1572  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3156 | >20%                    |                 5 |              0.06312 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3178 | >20%                    |                 2 |              0.1589  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.3183 | >20%                    |                10 |              0.03183 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3237 | 15-20%                  |                 2 |              0.16185 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3349 | 10-15%                  |                 2 |              0.16745 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3383 | 15-20%                  |                 5 |              0.06766 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3405 | 10-15%                  |                 2 |              0.17025 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3487 | 5-10%                   |                10 |              0.03487 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3599 | >20%                    |                10 |              0.03599 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3702 | <5%                     |                 2 |              0.1851  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3705 | >20%                    |                 2 |              0.18525 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3794 | >20%                    |                 5 |              0.07588 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3825 | >20%                    |                 2 |              0.19125 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3844 | >20%                    |                 5 |              0.07688 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3851 | >20%                    |                 5 |              0.07702 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3857 | >20%                    |                 5 |              0.07714 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3909 | >20%                    |                 5 |              0.07818 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4012 | 15-20%                  |                 2 |              0.2006  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4029 | 5-10%                   |                10 |              0.04029 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.415  | >20%                    |                10 |              0.0415  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4155 | 10-15%                  |                 2 |              0.20775 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4295 | >20%                    |                 5 |              0.0859  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.434  | >20%                    |                 2 |              0.217   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4366 | >20%                    |                 5 |              0.08732 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4391 | >20%                    |                10 |              0.04391 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4434 | <5%                     |                 2 |              0.2217  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4466 | >20%                    |                 2 |              0.2233  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4734 | 10-15%                  |                 2 |              0.2367  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4769 | 15-20%                  |                 5 |              0.09538 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4799 | >20%                    |                 2 |              0.23995 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4849 | >20%                    |                 2 |              0.24245 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4858 | >20%                    |                 5 |              0.09716 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4899 | >20%                    |                 5 |              0.09798 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5113 | >20%                    |                 5 |              0.10226 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.513  | 10-15%                  |                10 |              0.0513  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5131 | >20%                    |                 5 |              0.10262 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5146 | >20%                    |                 2 |              0.2573  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5149 | >20%                    |                 2 |              0.25745 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5391 | 15-20%                  |                 2 |              0.26955 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5396 | >20%                    |                 5 |              0.10792 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5421 | <5%                     |                 2 |              0.27105 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5501 | >20%                    |                 5 |              0.11002 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5527 | >20%                    |                10 |              0.05527 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5572 | >20%                    |                 5 |              0.11144 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5585 | >20%                    |                 2 |              0.27925 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5626 | >20%                    |                 5 |              0.11252 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5646 | >20%                    |                 5 |              0.11292 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5652 | 10-15%                  |                 5 |              0.11304 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.567  | 5-10%                   |                 2 |              0.2835  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5689 | >20%                    |                 5 |              0.11378 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5774 | >20%                    |                 5 |              0.11548 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5894 | >20%                    |                 5 |              0.11788 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5914 | >20%                    |                 5 |              0.11828 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5919 | >20%                    |                 2 |              0.29595 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6057 | >20%                    |                 2 |              0.30285 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6072 | >20%                    |                 5 |              0.12144 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6158 | >20%                    |                 5 |              0.12316 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6274 | >20%                    |                10 |              0.06274 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6319 | >20%                    |                 2 |              0.31595 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6335 | >20%                    |                10 |              0.06335 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6418 | >20%                    |                 2 |              0.3209  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.647  | <5%                     |                 5 |              0.1294  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6615 | >20%                    |                 5 |              0.1323  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6728 | >20%                    |                10 |              0.06728 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6781 | 5-10%                   |                 5 |              0.13562 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6874 | 15-20%                  |                 5 |              0.13748 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6951 | >20%                    |                 5 |              0.13902 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7014 | >20%                    |                 5 |              0.14028 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7023 | >20%                    |                 5 |              0.14046 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7033 | 15-20%                  |                10 |              0.07033 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7088 | <5%                     |                10 |              0.07088 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7147 | >20%                    |                10 |              0.07147 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7232 | >20%                    |                10 |              0.07232 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7326 |                         |                 2 |              0.3663  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7353 | >20%                    |                 5 |              0.14706 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7846 | >20%                    |                 5 |              0.15692 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7982 | >20%                    |                 5 |              0.15964 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8034 | >20%                    |                10 |              0.08034 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.805  | >20%                    |                 2 |              0.4025  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8191 |                         |                 2 |              0.40955 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8223 | 5-10%                   |                10 |              0.08223 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8284 | >20%                    |                10 |              0.08284 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8291 | >20%                    |                10 |              0.08291 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8318 |                         |                 5 |              0.16636 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8349 | >20%                    |                10 |              0.08349 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8382 | 10-15%                  |                 2 |              0.4191  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.846  | >20%                    |                 2 |              0.423   |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8618 | 15-20%                  |                10 |              0.08618 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8705 | >20%                    |                 2 |              0.43525 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8798 | >20%                    |                 5 |              0.17596 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8825 | >20%                    |                 5 |              0.1765  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8941 | >20%                    |                10 |              0.08941 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8965 | 10-15%                  |                 2 |              0.44825 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8993 | 15-20%                  |                10 |              0.08993 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9044 | >20%                    |                 5 |              0.18088 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.915  | >20%                    |                10 |              0.0915  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9216 | >20%                    |                10 |              0.09216 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9225 | >20%                    |                10 |              0.09225 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.93   | >20%                    |                 2 |              0.465   |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9703 | >20%                    |                10 |              0.09703 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9813 | >20%                    |                10 |              0.09813 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9977 | 5-10%                   |                10 |              0.09977 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.016  | >20%                    |                 5 |              0.2032  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0164 | >20%                    |                 5 |              0.20328 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.019  | 15-20%                  |                10 |              0.1019  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.021  | 15-20%                  |                10 |              0.1021  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0321 | >20%                    |                10 |              0.10321 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0346 | >20%                    |                10 |              0.10346 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0396 | >20%                    |                10 |              0.10396 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.041  | >20%                    |                 5 |              0.2082  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0488 | 5-10%                   |                 2 |              0.5244  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0521 | >20%                    |                10 |              0.10521 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0603 | 15-20%                  |                 2 |              0.53015 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0932 | >20%                    |                 5 |              0.21864 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1375 | >20%                    |                 2 |              0.56875 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1612 | >20%                    |                10 |              0.11612 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.165  | 5-10%                   |                 2 |              0.5825  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.2126 | 15-20%                  |                10 |              0.12126 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.2166 | >20%                    |                10 |              0.12166 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2414 | 5-10%                   |                 5 |              0.24828 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2598 | >20%                    |                 5 |              0.25196 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2624 | >20%                    |                10 |              0.12624 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2774 | 10-15%                  |                 2 |              0.6387  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3144 | 15-20%                  |                10 |              0.13144 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3424 | >20%                    |                 5 |              0.26848 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3749 |                         |                10 |              0.13749 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3758 |                         |                 5 |              0.27516 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4843 | >20%                    |                10 |              0.14843 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5911 | 15-20%                  |                 5 |              0.31822 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.6021 | 10-15%                  |                10 |              0.16021 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6316 | 5-10%                   |                10 |              0.16316 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7787 | >20%                    |                10 |              0.17787 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8577 |                         |                10 |              0.18577 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8907 | 15-20%                  |                10 |              0.18907 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0339 | 5-10%                   |                 2 |              1.01695 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0707 | >20%                    |                10 |              0.20707 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.0939 | >20%                    |                10 |              0.20939 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.2752 | >20%                    |                 5 |              0.45504 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.4902 | >20%                    |                 5 |              0.49804 |