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
| B   | circle (a.k.a. 15 min) original | 5 actions, increased speeds  | df 0.5 |
| C   | minimalist (github.com/scottpletcher) | capstone provided; 1.3 to 4.0 m/s | df 0.9 |
| D   | self-motivator (github.com/scottpletcher)  | capstone provided; 1.3 to 5.0 m/s | df 0.5 en 0.03 |
| E   |   | medium size (angles 25, 12, 0) slow & fast per angle | df 0.9 en 0.02  |
| F   |   | grand size (angles 30, 20, 10, 0) slow & fast per angle | df 0.9 episodes 20 epochs 5  |
| G   |   | grand size (angles 30, 20, 10, 0) slow & fast per angle, +0.5 from F in 0 & Left actions |   |
 
## Discount Factor Formula & Values

Steps = 1 / (1 - DF )

| DF | Steps involved |
|----|----------------|
| 0.999 | 1000 |
| 0.99 | 100 |
| 0.95 | 20 |
| 0.9 | 10 |
| 0.8 | 5 |
| 0.5 | 2 |

## Candidate Models

| Shortcut | Name | Best eval time | Comments |
| --- | --- | --- |
| M001 | team3-pablo-rf-D-as-F-hp-C-it03 | 19.01 | 3rd iteration using RF self-motivator, grand action space, and df=0.9 |
