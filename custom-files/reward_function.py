def reward_function(params):
    '''
    Example of rewarding the agent to follow center line
    '''
    
    # Read input parameters
    is_offtrack = params['is_offtrack']
    all_wheels_on_track = params['all_wheels_on_track']
    speed = params['speed']
    is_reversed = params['is_reversed']
    steering_angle = params['steering_angle']
    progress = params['progress']
    steps = params['steps']
    
    if is_reversed:
        reward += 1e-500000
    else:
        reward += 2
        
    if all_wheels_on_track:
        reward += 2
    else:
        reward += 1e-500000
        
    if is_offtrack: # off the track
        reward += 1e-500000
    else: # on the track
        reward += 2
        
    reward = reward * 0.1
    
    reward += 31 - abs(steering_angle)
    
    reward += (speed + 1)

    progressInt = progress * 100
    progressOverSteps = progress / steps

    reward += progressOverSteps

    return float(reward)