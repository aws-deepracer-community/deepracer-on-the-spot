import math

def reward_function(params):
    
    MAX_REWARD = 1e5
    MIN_REWARD = 1e-3
    DIRECTION_THRESHOLD = 10.0
    ABS_STEERING_THRESHOLD = 15.0
    MAX_SPEED = 4.0
    MIN_SPEED = 1.0
    SPEED_THRESHOLD = 2.0
    PROGRESS_FACTOR = 100.0
    DISTANCE_THRESHOLD = 0.05 * params['track_width']
    
    all_wheels_on_track = params['all_wheels_on_track']
    steps = params['steps']
    track_width = params['track_width']
    distance_from_center = params['distance_from_center']
    progress = params['progress']
    waypoints = params['waypoints']
    closest_waypoints = params['closest_waypoints']
    steering = abs(params['steering_angle'])
    speed = params['speed']
    
    reward = 1.0
    
    if not all_wheels_on_track:
        reward = MIN_REWARD
        return float(reward)
    
    next_point = waypoints[closest_waypoints[1]]
    prev_point = waypoints[closest_waypoints[0]]
    
    track_direction = math.atan2(next_point[1] - prev_point[1], next_point[0] - prev_point[0])
    track_direction = math.degrees(track_direction)
    
    direction_diff = abs(track_direction - params['heading'])
    
    if direction_diff > DIRECTION_THRESHOLD:
        reward *= 0.5
        
    if steering > ABS_STEERING_THRESHOLD:
        reward *= 0.8
    
    if distance_from_center <= DISTANCE_THRESHOLD:
        reward += 1.0
    else:
        reward *= 0.8
    
    if MIN_SPEED <= speed <= MAX_SPEED:
        reward += 1.0
    elif speed < MIN_SPEED:
        reward *= 0.8
    else:
        reward *= 0.3
    
    reward += progress * PROGRESS_FACTOR
    
    reward = max(reward, MIN_REWARD)
    reward = min(reward, MAX_REWARD)
    
    return float(reward)
