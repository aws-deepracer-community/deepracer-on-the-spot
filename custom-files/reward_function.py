def reward_function(params):
    '''
    Example of rewarding the agent to follow center line
    '''
    
    # Read input parameters
    track_width = params['track_width']
    distance_from_center = params['distance_from_center']
    all_wheels_on_track = params['all_wheels_on_track']
    abs_steering = abs(params['steering_angle'])
    
    # Calculate 3 markers that are at varying distances away from the center line
    marker_1 = 0.1 * track_width
    marker_2 = 0.25 * track_width
    marker_3 = 0.5 * track_width
    
    reward = 1e-3
    
    if all_wheels_on_track and (0.5*track_width - distance_from_center) > 0.05:
        reward += 0.5
    
    # Give higher reward if the car is closer to center line and vice versa
    if distance_from_center <= marker_1:
        reward = 0.4
    elif distance_from_center <= marker_2:
        reward = 0.2
    elif distance_from_center <= marker_3:
        reward = 0.1
    else:
        reward = 1e-3  # likely crashed/ close to off track
        
    # Steering penality threshold, change the number based on your action space setting
    ABS_STEERING_THRESHOLD = 15 
    
    # Penalize reward if the car is steering too much
    if abs_steering > ABS_STEERING_THRESHOLD:
        reward *= 0.8
        
    progress = params['progress']
    speed = params['speed']
    
    reward += speed / 80
    reward += progress/20
    
    if params['is_offtrack'] or params['is_reversed']: return 1e-3
    

    return float(reward)
