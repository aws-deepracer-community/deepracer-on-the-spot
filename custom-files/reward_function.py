import math

def is_off_track(params):
    return not params['all_wheels_on_track']

def calculate_track_direction(params):
    waypoints = params['waypoints']
    closest_waypoints = params['closest_waypoints']
    next_point = waypoints[closest_waypoints[1]]
    prev_point = waypoints[closest_waypoints[0]]
    track_direction = math.atan2(next_point[1] - prev_point[1], next_point[0] - prev_point[0])
    return math.degrees(track_direction)

def is_straight_path(track_direction, heading):
    direction_diff = abs(track_direction - heading)
    if direction_diff > 180:
        direction_diff = 360 - direction_diff
    return direction_diff < 10.0

def is_u_turn(waypoints, closest_waypoints, lookahead=10):
    if len(waypoints) < lookahead:
        return False
    
    start_index = closest_waypoints[0]
    end_index = (start_index + lookahead) % len(waypoints)
    
    start_point = waypoints[start_index]
    end_point = waypoints[end_index]
    
    overall_direction = math.degrees(math.atan2(end_point[1] - start_point[1], end_point[0] - start_point[0]))
    
    total_angle_change = 0
    for i in range(lookahead - 1):
        point1 = waypoints[(start_index + i) % len(waypoints)]
        point2 = waypoints[(start_index + i + 1) % len(waypoints)]
        segment_direction = math.degrees(math.atan2(point2[1] - point1[1], point2[0] - point1[0]))
        total_angle_change += abs(segment_direction - overall_direction)
    
    # Check if the total angle change indicates a U-turn
    return total_angle_change > 100  # Adjust the threshold as needed

def reward_speed_on_straight(speed, is_straight):
    if is_straight:
        if speed > 3.5:
            return 1.4  # Higher reward for maintaining high speed
        # else:
        #     return (speed / 3.5) * 10.0  # Proportional reward based on speed
    return 1.0

def reward_steering_on_curves(steering_angle, is_straight):
    if not is_straight and steering_angle >= 15:
        return 1.2 # Higher reward for appropriate steering on curves
    return 1.0

def reward_handling_u_turns(speed, steering_angle, is_u_turn):
    if is_u_turn:
        if speed < 2.6 and steering_angle >= 20:
            return 1.3  # Higher reward for handling U-turns correctly
        return 1.1  # Some reward for being in a U-turn section
    return 1.0

def penalize_steering_on_straight(steering_angle, is_straight):
    if is_straight and steering_angle > 5:
        return 0.7  # Penalize for unnecessary steering on straight paths
    return 1.0

def reward_progress(progress):
    return 1 + (progress / 100)  # Reward proportional to the percentage of track completed

# def reward_on_track(all_wheels_on_track):
#     return 1.0 if all_wheels_on_track else 1e-3  # Reward for staying on track

def penalize_off_track(all_wheels_on_track):
    return 1e-5 if not all_wheels_on_track else 1.0  # Penalize for going off track

def reward_function(params):
    # Base reward
    reward = 100.0
    
    # Apply off-track penalty
    reward *= penalize_off_track(params['all_wheels_on_track'])

    # # Apply reward for staying on track
    # reward *= reward_on_track(params['all_wheels_on_track'])

    # Calculate track direction and determine if the path is straight
    track_direction = calculate_track_direction(params)
    is_straight = is_straight_path(track_direction, params['heading'])
    
    # Determine if the car is in a U-turn
    is_u_turn_section = is_u_turn(params['waypoints'], params['closest_waypoints'])

    # Apply reward components
    reward *= reward_speed_on_straight(params['speed'], is_straight)
    reward *= reward_steering_on_curves(abs(params['steering_angle']), is_straight)
    reward *= reward_handling_u_turns(params['speed'], abs(params['steering_angle']), is_u_turn_section)
    reward *= penalize_steering_on_straight(abs(params['steering_angle']), is_straight)
    reward *= reward_progress(params['progress'])

    # Normalize reward to be between 1e-3 and 100
    reward = max(1e-3, min(100, reward))
    
    return float(reward)

