#!/bin/bash

# Default values for the arguments
SORT_ORDER="PricePerWorkerHour"
INTERRUPTION_FILTER="N/A"

# Parse command-line arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --sort_order) SORT_ORDER="$2"; shift ;;
        --interruption_filter) INTERRUPTION_FILTER="$2"; shift ;;
        -h|--help) echo "Usage: $0 [--sort_order SORT_ORDER (default: 'PricePerWorkerHour') (supported values - 'SpotPrice', 'PricePerWorkerHour', 'NumberOfWorkers', 'InterruptionFrequency', 'Region', 'InstanceType')] [--interruption_filter INTERRUPTION_FILTER (default: 'N/A') (Supported values - 'N/A', '<5%', '5-10%', '10-15%', '15-20%', '>20%')]"; exit 0 ;;
        *) echo "Unknown parameter passed: $1"; exit 1 ;;
    esac
    shift
done

# Run the Python script with the provided arguments
python3 get-spot-prices.py --sort_order "$SORT_ORDER" --interruption_filter "$INTERRUPTION_FILTER"