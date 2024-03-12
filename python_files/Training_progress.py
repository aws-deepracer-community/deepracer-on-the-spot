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

# +
# Import block to bring in dependencies

# Ignore deprecation warnings we have no power over
import warnings

from deepracer.logs import \
    AnalysisUtils as au

warnings.filterwarnings('ignore')
from IPython import get_ipython

get_ipython().run_line_magic('store', '-r simulation_agg')
# -

# ## Training Progress Graphs

# +
try:
    au.analyze_training_progress(simulation_agg, title='Training progress')
    au.scatter_aggregates(simulation_agg, 'Stats for all laps')
    complete_ones = simulation_agg[simulation_agg['progress'] == 100]
    if complete_ones.shape[0] > 0:
        au.scatter_aggregates(complete_ones, 'Stats for complete laps')
    else:
        print('Stats for complete laps - No complete laps yet.')
    try:
        au.analyze_training_progress(complete_ones, title='Complete lap training progress')
    except Exception:
        print('Complete lap training progress - No complete laps yet.')
except Exception:
    print(
        "Logs are not yet available.  It typically takes 25 minutes from the start of training for them to be available.")
# -
