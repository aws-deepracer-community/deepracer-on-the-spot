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

from IPython import get_ipython

get_ipython().run_line_magic('store', '-r simulation_agg')
get_ipython().run_line_magic('store', '-r df')
get_ipython().run_line_magic('store', '-r track')
get_ipython().run_line_magic('store', '-r complete_ones')

# Ignore deprecation warnings we have no power over
import warnings

warnings.filterwarnings('ignore')
# -

# ## Data in tables

# ## Ten best rewarded episodes in the training

# +
simulation_agg.nlargest(10, 'reward')
# -

# ## Ten fastest complete laps in the training

# +
complete_ones.nsmallest(10, 'time')
# -

# ## Ten fastest complete laps from the start/finish line in training

# +
complete_ones_from_start = complete_ones[complete_ones['start_at'] == 1]
complete_ones_from_start.nsmallest(10, 'time')
# -

# ## Ten fastest incomplete laps in the training

# +
simulation_agg.nsmallest(10, 'time_if_complete')
# -

# ## Ten best rewarded complete laps in the training

# +
complete_ones.nlargest(10, 'reward')
# -

# ## Ten most progressed episodes in the training

# +
simulation_agg.nlargest(10, 'progress')
# -
