# ---
# jupyter:
#   jupytext:
#     formats: ipynb,py:light
#     text_representation:
#       extension: .py
#       format_name: light
#       format_version: '1.5'
#       jupytext_version: 1.14.1
#   kernelspec:
#     display_name: Python 3 (ipykernel)
#     language: python
#     name: python3
# ---

# Ignore deprecation warnings we have no power over
import warnings

import matplotlib.pyplot as plt
import pandas as pd
# +
# Import block to bring in dependencies
from deepracer.logs import metrics

warnings.filterwarnings('ignore')
# -

# ## Completion of Training and Evaluation per Iteration

# +
try:
    tm = metrics.TrainingMetrics("DEEPRACER_S3_URI")
    tm.addRound("DR_LOCAL_S3_MODEL_PREFIX", training_round=1, workers=DEEPRACER_WORKERS)
    results = tm.plotProgress(method=['median', 'mean'], rolling_average=1, figsize=(20, 5))
except Exception:
    print(
        "Logs are not yet available.  It typically takes 25 minutes from the start of training for them to be available.")
# -

# ## Best Lap Progression - is your model getting faster?

# +
try:
    train = tm.getTraining()
    ev = tm.getEvaluation()
    train_complete_lr = train[(train['round'] > (0)) & (train['complete'] == 1)]
    eval_complete_lr = ev[(ev['round'] > (0)) & (ev['complete'] == 1)]
    series = []
    if not train_complete_lr.empty:
        series.append(('train_time', 'Training', 'blue'))
    if not eval_complete_lr.empty:
        series.append(('eval_time', 'Evaluation', 'orange'))
    rolling_lap = tm.plotProgress(method=['min', 'mean'], rolling_average=15, figsize=(20, 5),
                                  series=series,
                                  title="Laptime for completed laps over last 15 episodes ({}).", ylabel="Laptime",
                                  completedLapsOnly=True, grid=True)
    plt.figure(figsize=(15, 5))
    plt.title('Best lap progression')
    plt.scatter(train_complete_lr['master_iteration'], train_complete_lr['time'], alpha=0.4)
    plt.scatter(eval_complete_lr['master_iteration'], eval_complete_lr['time'], alpha=0.4)
    plt.show()
except Exception:
    print(
        "Logs are not yet available.  It typically takes 25 minutes from the start of training for them to be available.")
# -

# ## Complete Lap Training and Evaluation Percentiles - All

# +
eval_percentiles = ["Evaluation", eval_complete_lr['time'].quantile(0.01), eval_complete_lr['time'].quantile(0.1),
                    eval_complete_lr['time'].quantile(0.25), eval_complete_lr['time'].quantile(0.5),
                    eval_complete_lr['time'].quantile(0.75)]
train_percentiles = ["Training", train_complete_lr['time'].quantile(0.01), train_complete_lr['time'].quantile(0.1),
                     train_complete_lr['time'].quantile(0.25), train_complete_lr['time'].quantile(0.5),
                     train_complete_lr['time'].quantile(0.75)]
percentile = pd.DataFrame(
    columns=['Description', '1st Percentile', '10th Percentile', '25th Percentile', '50th Percentile',
             '75th Percentile'])
percentile.loc[0] = eval_percentiles
percentile.loc[1] = train_percentiles
percentile.style \
    .format(precision=3)
# -

# ## Complete Lap Training and Evaluation Percentiles - Last 20 Evaluations, Last 40 Training Episodes

# +
train_complete_lr2 = train_complete_lr.nlargest(40, ['start_time'])
eval_complete_lr2 = eval_complete_lr.nlargest(20, ['start_time'])
eval_percentiles2 = ["Evaluation", eval_complete_lr2['time'].quantile(0.01), eval_complete_lr2['time'].quantile(0.1),
                     eval_complete_lr2['time'].quantile(0.25), eval_complete_lr2['time'].quantile(0.5),
                     eval_complete_lr2['time'].quantile(0.75)]
train_percentiles2 = ["Training", train_complete_lr2['time'].quantile(0.01), train_complete_lr2['time'].quantile(0.1),
                      train_complete_lr2['time'].quantile(0.25), train_complete_lr2['time'].quantile(0.5),
                      train_complete_lr2['time'].quantile(0.75)]
percentile2 = pd.DataFrame(
    columns=['Description', '1st Percentile', '10th Percentile', '25th Percentile', '50th Percentile',
             '75th Percentile'])
percentile2.loc[0] = eval_percentiles2
percentile2.loc[1] = train_percentiles2
percentile2.style \
    .format(precision=3)
# -
