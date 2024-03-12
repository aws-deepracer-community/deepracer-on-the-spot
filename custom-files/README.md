# Hyperparameter Values

* `batch_size`: `34`, `64`, `128`, `256` or `512`. Default is `64`.
* `beta_entropy`: Real number between `0` and `1` (inclusive). Default is `0.01`.
* `discount_factor`: Real number between `0` and `1` (inclusive). Default is `0.999`.
* `e_greedy_value`: Default is `0.05`.
* `epsilon_steps`: Default is `10000`.
* `exploration_type`: `categorical` (for clipped_ppo training algorithm) or `additive_noise` (for sac training
  algorithm)
* `loss_type`: `huber` or `mean squared error`. Default is `huber`.
* `lr`: Values between `0.00000001` and `0.001` (inclusive). Default is `0.0003`.
* `num_episodes_between_training`: Integer between `1` and `100` (inclusive). To avoid issues with the position from
  which evaluations are run ensure that ( num_episodes_between_training / DR_WORKERS) *
  DR_TRAIN_ROUND_ROBIN_ADVANCE_DIST = 1.0. As default DR_WORKERS is 2 and DR_TRAIN_ROUND_ROBIN_ADVANCE_DIST is 0.05 the
  default value is `40`.
* `num_epochs`: Values between `3` and `10` (inclusive). Default is `3`.
* `stack_size`: Default is `1`.
* `term_cond_avg_score`: Values between `35000.0` and `100000.0`.
* `term_cond_max_episodes`: Default is `100000`.

# Model Metadata Values

* `action_space_type`: `continuous` or `discrete`.
* `action_space`: See model_metadata_sac.json for a `continuous` example or model_metadata.json for a discrete example.
* `version`: `5`
* `training_algorithm`: `sac` (for additive_noise exploration_type) or `clipped_ppo` (for categorical exploration_type)
* `neural_network`: `DEEP_CONVOLUTIONAL_NETWORK_SHALLOW` or `DEEP_CONVOLUTIONAL_NETWORK`
* `sensor`:  a list containing `FRONT_FACING_CAMERA` or `STEREO_CAMERAS` and optionally `LIDAR`

# reward function

* Populate this file with your code examples can be found online,
  e.g. [AWS examples](https://docs.aws.amazon.com/deepracer/latest/developerguide/deepracer-reward-function-examples.html)

# run.env values

* [Consult DeepRacer for Cloud Documentation](https://aws-deepracer-community.github.io/deepracer-for-cloud/reference.html)

# system.env values

* [Consult DeepRacer for Cloud Documentation](https://aws-deepracer-community.github.io/deepracer-for-cloud/reference.html)

The following should be changed to enable OpenGL training with GPUs, to reduce CPU load: -

* Set `DR_GUI_ENABLE=True`
* Set `DR_DOCKER_STYLE=compose`'
* Set `DR_HOST_X=True`
* Ensure Robomaker and Sagemaker are running on gpu containers, e.g. `DR_ROBOMAKER_IMAGE=5.1.1-gpu`
  and `DR_SAGEMAKER_IMAGE=5.1.1-gpu` or newer
* Uncomment out `DR_SAGEMAKER_CUDA_DEVICES=0`
* Uncomment out `DR_ROBOMAKER_CUDA_DEVICES=0`
* Uncomment out `DR_DISPLAY=:0`

The following should be changed for SAC training_algorithm as it cannot use multiple workers: -

* set `DR_WORKERS=1`