# REFERENCES

The purpose of this file is to keep track of the different versions of reward function (RF), action space (AS) and hyperparameters (HP)

The version code of each component is then used as the suffix of the model name.
So model name `team3-pablo-rf-C-as-B-hp-D` refers to a model trained with versions:
* C of the reward function
* B of the action space
* D of the hyperparameters

To know more about every component, use such versions to look up the details in the table below.

| ver | Reward Function      | Action Space        | Hyperparams |
|-----|----------------------|---------------------|-------------|
| A   | centerline (default) | 5 actions (default) | default |
| B   | circle (a.k.a. 15 min) original | 5 actions, increased speeds  | discount 0.5 |
| C   |   | capstone provided; 1.3 to 4.0 m/s |  |
| D   |   | capstone provided; 1.3 to 5.0 m/s |  |

