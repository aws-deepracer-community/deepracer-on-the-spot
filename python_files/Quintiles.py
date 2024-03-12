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
    AnalysisUtils as au

get_ipython().run_line_magic('store', '-r simulation_agg')

# Ignore deprecation warnings we have no power over
import warnings

warnings.filterwarnings('ignore')
# -

# ## Training Progress Graphs

# +
try:
    complete_ones = simulation_agg[simulation_agg['progress'] == 100]
    au.scatter_by_groups(simulation_agg, title='Quintiles')
    au.scatter_by_groups(complete_ones, title='Complete Lap Quintiles')
except Exception:
    print(
        "Logs are not yet available.  It typically takes 25 minutes from the start of training for them to be available.")

# -
