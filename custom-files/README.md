# Hyperparameter Values

* `batch_size`: `34`, `64`, `128`, `256` or `512`. Default is `64`.
* `beta_entropy`: Real number between `0` and `1` (inclusive). Default is `0.01`.
* `discount_factor`: Real number between `0` and `1` (inclusive). Default is `0.999`.
* `e_greedy_value`: Default is `0.05`.
* `epsilon_steps`: Default is `10000`.
* `exploration_type`: `categorical` or `additive_noise`.
* `loss_type`: `huber` or `mean squared error`. Default is `huber`.
* `lr`: Values between `0.00000001` and `0.001` (inclusive). Default is `0.0003`.
* `num_episodes_between_training`: Integer between `5` and `100` (inclusive). To avoid issues with the position from which evaluations are run ensure that ( num_episodes_between_training / DR_WORKERS) * DR_TRAIN_ROUND_ROBIN_ADVANCE_DIST = 1.0.  As default DR_WORKERS is 2 and DR_TRAIN_ROUND_ROBIN_ADVANCE_DIST is 0.05 the default value is `40`.
* `num_epochs`: Values between `3` and `10` (inclusive). Default is `3`.
* `stack_size`: Default is `1`.
* `term_cond_avg_score`: Values between `35000.0` and `100000.0`.
* `term_cond_max_episodes`: Default is `100000`.