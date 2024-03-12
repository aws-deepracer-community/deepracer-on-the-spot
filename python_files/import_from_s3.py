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

from IPython import get_ipython
from deepracer.logs import \
    AnalysisUtils as au, \
    DeepRacerLog, \
    S3FileHandler
from deepracer.tracks import TrackIO, Track

warnings.filterwarnings('ignore')
# -

# +
# Get logs from S3
fh = S3FileHandler(bucket="DEEPRACER_S3_URI",
                   prefix="DR_LOCAL_S3_MODEL_PREFIX")

# Attempt to load logs but catch error if training not yet far enough advanced
try:
    log = DeepRacerLog(filehandler=fh)
    log.load_training_trace()
    df = log.dataframe()
    simulation_agg = au.simulation_agg(df, secondgroup="unique_episode")
    complete_ones = simulation_agg[simulation_agg['progress'] == 100]
except Exception:
    print(
        "Logs are not yet available.  It typically takes 25 minutes from the start of training for them to be available.")
tu = TrackIO()
try:
    track: Track = tu.load_track("DEEPRACER_TRACK")
    get_ipython().run_line_magic('store', 'track')
except Exception:
    print(
        "Track not currently included in the solution.  Copy track into the tracks folder or check you're using the latest deepracer-analysis image.")
# -
