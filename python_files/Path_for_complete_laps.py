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
from deepracer.logs import \
    PlottingUtils as pu

get_ipython().run_line_magic('store', '-r df')
get_ipython().run_line_magic('store', '-r track')
get_ipython().run_line_magic('store', '-r complete_ones')

# Ignore deprecation warnings we have no power over
import warnings

warnings.filterwarnings('ignore')
print("Number of completed laps so far:", len(complete_ones))
# -

# ## Path taken for quickest complete laps

# +
episodes_to_plot = complete_ones.nsmallest(5, 'time')
pu.plot_selected_laps(episodes_to_plot, df, track, section_to_plot="unique_episode")
# -

# ## Path taken for highest rewarded complete laps

# +
episodes_to_plot = complete_ones.nlargest(5, 'reward')
pu.plot_selected_laps(episodes_to_plot, df, track, section_to_plot="unique_episode")
# -
