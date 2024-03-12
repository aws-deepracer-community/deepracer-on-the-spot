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

# Ignore deprecation warnings we have no power over
import warnings

warnings.filterwarnings('ignore')
# -

# ## Training Heatmap

# +
try:
    pu.plot_track(df, track)
except Exception:
    print(
        "Logs are not yet available.  It typically takes 25 minutes from the start of training for them to be available.")
# -

# ## Waypoint Map

# +
try:
    pu.plot_trackpoints(track)
except Exception:
    print(
        "Logs are not yet available.  It typically takes 25 minutes from the start of training for them to be available.")
# -
