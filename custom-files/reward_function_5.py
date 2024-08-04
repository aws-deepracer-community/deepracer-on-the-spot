import math

def reward_function(params):
    # Read input parameters
    speed = params['speed']
    steering_angle = abs(params['steering_angle'])
    all_wheels_on_track = params['all_wheels_on_track']
    waypoints = params['waypoints']
    closest_waypoints = params['closest_waypoints']
    progress = params['progress']
    
    # Define rewards
    reward = 100.0  # Base reward
    
    # Check if all wheels are on track
    if not all_wheels_on_track:
        return 1e-3  # Minimum reward if off track

    # Calculate the direction of the centerline based on the closest waypoints
    next_point = waypoints[closest_waypoints[1]]
    prev_point = waypoints[closest_waypoints[0]]
    track_direction = math.atan2(next_point[1] - prev_point[1], next_point[0] - prev_point[0])
    track_direction = math.degrees(track_direction)
    
    # Calculate the difference between the track direction and the heading direction of the car
    direction_diff = abs(track_direction - params['heading'])
    if direction_diff > 180:
        direction_diff = 360 - direction_diff
    
    # Determine if the car is on a straight path or a curve
    is_straight = direction_diff < 10.0
    
    # Reward for speed on straight paths
    if is_straight:
        if speed > 3.5:
            reward *= 1.2  # Additional reward for maintaining high speed
      #  else:
         #   reward *= speed / 3.5  # Proportional reward based on speed
    else:
        # Encourage steering on curves
        if steering_angle > 15:
            reward *= 1.2  # Additional reward for appropriate steering on curves

    # Discourage unnecessary steering on straight paths
    if is_straight and steering_angle > 5:
        reward *= 0.8 # Penalize for unnecessary steering on straight paths

    # Reward based on progress
    reward += progress  # Reward proportional to the percentage of track completed

    return float(reward)

