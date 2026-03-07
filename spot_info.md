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

Data correct as of 2026-03-07 02:23:30.288778, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1402 | >20%                    |                 2 |              0.0701  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1651 | >20%                    |                 5 |              0.03302 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1681 | >20%                    |                 2 |              0.08405 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.1984 | <5%                     |                 2 |              0.0992  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2286 | 10-15%                  |                 2 |              0.1143  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2359 | >20%                    |                 2 |              0.11795 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2364 | >20%                    |                 2 |              0.1182  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.245  | >20%                    |                 2 |              0.1225  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2458 | >20%                    |                 2 |              0.1229  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2557 | >20%                    |                 2 |              0.12785 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2592 | 15-20%                  |                 2 |              0.1296  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.268  | >20%                    |                 5 |              0.0536  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.276  | >20%                    |                 5 |              0.0552  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3001 | >20%                    |                 5 |              0.06002 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3038 | 10-15%                  |                 2 |              0.1519  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3056 | >20%                    |                 2 |              0.1528  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3069 | >20%                    |                 2 |              0.15345 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3074 | >20%                    |                 2 |              0.1537  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3078 | 5-10%                   |                 2 |              0.1539  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3096 | >20%                    |                 2 |              0.1548  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3135 | >20%                    |                 2 |              0.15675 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3159 | <5%                     |                 5 |              0.06318 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3254 | 15-20%                  |                 2 |              0.1627  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3288 | >20%                    |                 5 |              0.06576 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3311 | >20%                    |                 2 |              0.16555 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.335  | 5-10%                   |                10 |              0.0335  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3425 | >20%                    |                 5 |              0.0685  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3507 | >20%                    |                 5 |              0.07014 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3507 | 10-15%                  |                 2 |              0.17535 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3546 | 5-10%                   |                 2 |              0.1773  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3555 | 15-20%                  |                 2 |              0.17775 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3571 | >20%                    |                 5 |              0.07142 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3583 | >20%                    |                 5 |              0.07166 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3626 | <5%                     |                 5 |              0.07252 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3657 | <5%                     |                 2 |              0.18285 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3719 | <5%                     |                 2 |              0.18595 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3761 | >20%                    |                 5 |              0.07522 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3768 | <5%                     |                 5 |              0.07536 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3788 | >20%                    |                10 |              0.03788 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3802 | 5-10%                   |                 2 |              0.1901  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3802 | >20%                    |                10 |              0.03802 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3835 | 5-10%                   |                 2 |              0.19175 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.394  | >20%                    |                 2 |              0.197   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3982 | 15-20%                  |                 5 |              0.07964 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3984 | <5%                     |                 5 |              0.07968 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4022 | 5-10%                   |                 2 |              0.2011  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4057 | >20%                    |                 2 |              0.20285 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4095 | 5-10%                   |                 5 |              0.0819  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4126 | 10-15%                  |                 5 |              0.08252 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4164 | >20%                    |                 2 |              0.2082  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4165 | 15-20%                  |                 5 |              0.0833  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4167 | >20%                    |                 2 |              0.20835 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4179 | 5-10%                   |                 5 |              0.08358 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4186 | 15-20%                  |                 2 |              0.2093  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4197 | >20%                    |                 2 |              0.20985 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.425  | >20%                    |                 2 |              0.2125  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4275 | >20%                    |                10 |              0.04275 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4285 | >20%                    |                 5 |              0.0857  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4297 | 5-10%                   |                 5 |              0.08594 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4338 | >20%                    |                 5 |              0.08676 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4343 | 15-20%                  |                10 |              0.04343 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4384 | 5-10%                   |                 2 |              0.2192  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4401 | <5%                     |                 2 |              0.22005 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4401 | 15-20%                  |                 5 |              0.08802 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4404 | <5%                     |                10 |              0.04404 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4448 | 15-20%                  |                 2 |              0.2224  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4467 | 15-20%                  |                 2 |              0.22335 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.454  | >20%                    |                 2 |              0.227   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4596 | >20%                    |                 5 |              0.09192 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.469  | 5-10%                   |                 2 |              0.2345  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.4718 | <5%                     |                 5 |              0.09436 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.4761 | >20%                    |                10 |              0.04761 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.4772 | 15-20%                  |                10 |              0.04772 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4785 | >20%                    |                 5 |              0.0957  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4841 | >20%                    |                 5 |              0.09682 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4855 | >20%                    |                10 |              0.04855 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.497  | >20%                    |                 5 |              0.0994  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5055 | >20%                    |                 2 |              0.25275 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5108 | >20%                    |                 2 |              0.2554  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5186 | >20%                    |                 5 |              0.10372 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5209 | 15-20%                  |                 5 |              0.10418 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5261 | >20%                    |                 5 |              0.10522 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5284 | >20%                    |                 5 |              0.10568 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5324 | >20%                    |                 2 |              0.2662  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5392 | >20%                    |                10 |              0.05392 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5398 | >20%                    |                10 |              0.05398 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5486 |                         |                 2 |              0.2743  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.553  | <5%                     |                 5 |              0.1106  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5571 | >20%                    |                 2 |              0.27855 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5579 | >20%                    |                 2 |              0.27895 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5601 | 15-20%                  |                10 |              0.05601 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5604 | 15-20%                  |                10 |              0.05604 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5692 | >20%                    |                 5 |              0.11384 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5717 | <5%                     |                10 |              0.05717 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5743 | >20%                    |                 2 |              0.28715 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5768 | 5-10%                   |                 2 |              0.2884  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5865 | >20%                    |                 5 |              0.1173  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5978 | 5-10%                   |                 5 |              0.11956 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.599  | 5-10%                   |                 5 |              0.1198  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6112 | >20%                    |                10 |              0.06112 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6126 | >20%                    |                10 |              0.06126 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6152 | 5-10%                   |                 2 |              0.3076  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6152 | <5%                     |                10 |              0.06152 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.617  | 5-10%                   |                 5 |              0.1234  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6173 | >20%                    |                 5 |              0.12346 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6176 | >20%                    |                10 |              0.06176 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.618  | >20%                    |                 5 |              0.1236  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6261 | >20%                    |                 2 |              0.31305 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6314 | <5%                     |                10 |              0.06314 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6359 | >20%                    |                 5 |              0.12718 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6378 | >20%                    |                 5 |              0.12756 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6449 | >20%                    |                10 |              0.06449 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.649  | 15-20%                  |                 2 |              0.3245  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6536 | 10-15%                  |                 5 |              0.13072 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6666 | >20%                    |                 2 |              0.3333  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6769 | >20%                    |                 5 |              0.13538 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6777 | >20%                    |                10 |              0.06777 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6946 |                         |                 5 |              0.13892 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6995 | <5%                     |                10 |              0.06995 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.704  | >20%                    |                10 |              0.0704  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7051 | >20%                    |                 5 |              0.14102 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7184 | >20%                    |                 5 |              0.14368 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7226 | >20%                    |                 5 |              0.14452 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7429 | >20%                    |                10 |              0.07429 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7493 | 10-15%                  |                10 |              0.07493 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7644 | <5%                     |                10 |              0.07644 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7649 | >20%                    |                10 |              0.07649 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7747 | >20%                    |                10 |              0.07747 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7797 | >20%                    |                 2 |              0.38985 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.7862 | <5%                     |                10 |              0.07862 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7864 | >20%                    |                10 |              0.07864 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7915 | <5%                     |                10 |              0.07915 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8001 | <5%                     |                 5 |              0.16002 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8003 | >20%                    |                10 |              0.08003 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8027 | >20%                    |                 5 |              0.16054 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8033 | >20%                    |                 5 |              0.16066 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8069 | >20%                    |                 5 |              0.16138 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8203 | 15-20%                  |                10 |              0.08203 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8419 | >20%                    |                10 |              0.08419 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.846  | <5%                     |                 5 |              0.1692  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8495 | >20%                    |                 5 |              0.1699  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.866  | >20%                    |                10 |              0.0866  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8677 | >20%                    |                10 |              0.08677 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8719 | >20%                    |                 5 |              0.17438 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8778 | 10-15%                  |                 2 |              0.4389  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.896  | 15-20%                  |                10 |              0.0896  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9034 | 5-10%                   |                10 |              0.09034 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9168 | >20%                    |                 5 |              0.18336 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9298 | 10-15%                  |                10 |              0.09298 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9362 | >20%                    |                 5 |              0.18724 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9394 | <5%                     |                10 |              0.09394 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9421 | >20%                    |                10 |              0.09421 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9466 | >20%                    |                 2 |              0.4733  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9505 | >20%                    |                 2 |              0.47525 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9511 | 5-10%                   |                10 |              0.09511 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9629 | >20%                    |                 2 |              0.48145 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9728 | >20%                    |                10 |              0.09728 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.978  | >20%                    |                10 |              0.0978  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9917 | 5-10%                   |                 5 |              0.19834 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0101 | 5-10%                   |                10 |              0.10101 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0232 | >20%                    |                10 |              0.10232 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0454 | >20%                    |                10 |              0.10454 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0557 | 10-15%                  |                10 |              0.10557 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.057  |                         |                10 |              0.1057  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1093 | 15-20%                  |                10 |              0.11093 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.13   | >20%                    |                10 |              0.113   |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1873 | 10-15%                  |                 5 |              0.23746 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2606 | >20%                    |                10 |              0.12606 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2673 | <5%                     |                10 |              0.12673 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3268 | 15-20%                  |                10 |              0.13268 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3875 | >20%                    |                 2 |              0.69375 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4048 | 10-15%                  |                 5 |              0.28096 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4057 | >20%                    |                 5 |              0.28114 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4172 | >20%                    |                 2 |              0.7086  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4678 | >20%                    |                 2 |              0.7339  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6009 | >20%                    |                10 |              0.16009 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7835 | >20%                    |                10 |              0.17835 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.0018 | <5%                     |                 5 |              0.40036 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2402 | 10-15%                  |                10 |              0.22402 |