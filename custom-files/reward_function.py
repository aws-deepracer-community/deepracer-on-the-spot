import math

def set_optimized_waypoints(params):
    
    params['optimized_waypoints'] = [(5.04807749189602, 0.8622253903486338),
 (5.040856470758886, 1.1611202139313068),
 (5.027804184097695, 1.4575152302804746),
 (5.007605906580058, 1.7506782966374625),
 (4.9788660994105385, 2.0397704655490223),
 (4.940379272547068, 2.3239717154514823),
 (4.891371762051188, 2.6026234356515867),
 (4.83097287502183, 2.8749661987577024),
 (4.7585349092731635, 3.140320542721116),
 (4.671381117491334, 3.3966709048227983),
 (4.567222772959681, 3.641934923581493),
 (4.443326932945431, 3.8733350930372765),
 (4.2958937035692415, 4.086574269177591),
 (4.1207849040660705, 4.275494874593353),
 (3.9241631626610265, 4.442874666457197),
 (3.709553227459784, 4.590333566324507),
 (3.480456320107443, 4.7203074835136),
 (3.2390978726048134, 4.834335111435396),
 (2.986931248506041, 4.933263155124971),
 (2.725248632885082, 5.017885873078885),
 (2.4554016136074193, 5.0892423679389935),
 (2.178470582138953, 5.1479968843253605),
 (1.8956993499319146, 5.195034846277556),
 (1.608524370229948, 5.231492084505419),
 (1.3184476390502402, 5.2584437463781475),
 (1.0270094827499663, 5.27675412749813),
 (0.7357698116853766, 5.2870247076648536),
 (0.44623654773278576, 5.289581629786858),
 (0.159745292018247, 5.284480518481152),
 (-0.12265890639395516, 5.271519355484401),
 (-0.4002758511120906, 5.250256332610409),
 (-0.6727081537741657, 5.2200337641014425),
 (-0.9397363218682326, 5.1800109887121355),
 (-1.2011544789488173, 5.129208897968972),
 (-1.456611838251412, 5.0665676034848905),
 (-1.7054896988646981, 4.991018372649531),
 (-1.9468307616804634, 4.901572589624392),
 (-2.1793398165345224, 4.797435271650203),
 (-2.4014933045159763, 4.678158433167196),
 (-2.6118425519927033, 4.543881322839562),
 (-2.8097595945363754, 4.39585691438932),
 (-2.9937219215581243, 4.234450711373386),
 (-3.162031432658523, 4.060196635123687),
 (-3.3122589134136287, 3.873449210649973),
 (-3.441504302710382, 3.674799308517164),
 (-3.544604109000643, 3.4646137282125617),
 (-3.6137210103162074, 3.244253137665927),
 (-3.6403592285441277, 3.018382033933975),
 (-3.6356005993110223, 2.7928697398202647),
 (-3.5968065916306067, 2.5710757319134245),
 (-3.5154442401876587, 2.3590485694707137),
 (-3.3824685211373082, 2.168293486631729),
 (-3.2136249651672886, 1.9993442005076367),
 (-3.015887779067247, 1.852205935214943),
 (-2.795607636253391, 1.724936910554168),
 (-2.5573973285644653, 1.6154543554688057),
 (-2.3052382587189877, 1.5211861962098276),
 (-2.0428087375468933, 1.4389663797814918),
 (-1.7735943651260437, 1.3651190704606648),
 (-1.5005112309880269, 1.2961975195706812),
 (-1.2285263760069673, 1.2298708536538336),
 (-0.9601143427135665, 1.1594787437033307),
 (-0.697621537828602, 1.0824395527785997),
 (-0.4433835822079619, 0.9963468875468037),
 (-0.19967729725413624, 0.8991374429110025),
 (0.031291991336272244, 0.7891907116030978),
 (0.24605709431324171, 0.6642065986685018),
 (0.4409042583763575, 0.5225076600933789),
 (0.6099830951994907, 0.3619649495056979),
 (0.7458039792522757, 0.18178754131873087),
 (0.851679767678915, -0.012061139000808564),
 (0.9216276934093895, -0.21810428385315006),
 (0.9458178539269466, -0.43295462812318436),
 (0.9117039883523763, -0.6465895314065682),
 (0.8315178710879436, -0.8491661324753104),
 (0.713275034267044, -1.0364565757709556),
 (0.5630242678500407, -1.2065567284214125),
 (0.3855719580589215, -1.3587471186091764),
 (0.18421784167916894, -1.492428362615919),
 (-0.03798940268906921, -1.6075016087416278),
 (-0.2780569826050593, -1.7044514920794764),
 (-0.532994594531644, -1.7843917019691364),
 (-0.8001031150788159, -1.8487223428135922),
 (-1.0765797817467246, -1.8996788690951767),
 (-1.3607984909895636, -1.9383834786570695),
 (-1.6511662750626255, -1.9662797159607015),
 (-1.9468073668887593, -1.9836978307551894),
 (-2.2370078875359702, -2.012385236259692),
 (-2.520399307559172, -2.053152722425436),
 (-2.795412123554519, -2.10736798961344),
 (-3.0603640104400824, -2.1762480581255064),
 (-3.313346532921129, -2.26094525393299),
 (-3.552073799114252, -2.36260515231554),
 (-3.773742702252804, -2.4823281629161906),
 (-3.97515940925385, -2.6208359663762026),
 (-4.1509047219919175, -2.779509600935274),
 (-4.294085877997553, -2.958354361151404),
 (-4.406569556862298, -3.151590742060883),
 (-4.487592906439584, -3.3558118782466044),
 (-4.532239352719563, -3.56818575738291),
 (-4.534287071813706, -3.7836299765175343),
 (-4.500573141242887, -3.996517365791483),
 (-4.4311034554068085, -4.202494335718902),
 (-4.325174161900511, -4.396614122694707),
 (-4.180030165178906, -4.571680455088468),
 (-4.002974521273014, -4.725776909765431),
 (-3.799738477662893, -4.858750002540378),
 (-3.5747553497758897, -4.971158902381042),
 (-3.331532224870541, -5.063812568150722),
 (-3.073336930149689, -5.138119897099674),
 (-2.802902982379171, -5.195572695108962),
 (-2.5229792524500105, -5.238413665385606),
 (-2.2359224064811087, -5.269064971217132),
 (-1.9436575153970184, -5.289913771625219),
 (-1.6476871546530707, -5.303137009884269),
 (-1.3491630912611359, -5.310655475843471),
 (-1.0490039995158948, -5.314244135380885),
 (-0.7478359973532229, -5.315247427837608),
 (-0.44619889557361603, -5.314986944198608),
 (-0.14444755017757416, -5.3144145011901855),
 (0.1573037952184677, -5.313841104507446),
 (0.4589424537917334, -5.312952494889414),
 (0.7598568494951178, -5.310046815671386),
 (1.0593130751209625, -5.303314528579348),
 (1.3564751038211722, -5.290975702715764),
 (1.6503959363933545, -5.271275212214233),
 (1.9398560612444466, -5.242188115849804),
 (2.2240212565577417, -5.202744470999544),
 (2.5016441115762547, -5.1513504385571105),
 (2.7718693356357553, -5.08729626349743),
 (3.034042080710404, -5.010269665003834),
 (3.2868751854751013, -4.91907313292749),
 (3.528861773067094, -4.812425254372038),
 (3.757854351389161, -4.688484146126068),
 (3.9712201599045294, -4.545236907367826),
 (4.1639653817983415, -4.378699131388313),
 (4.328321759448055, -4.18397295950772),
 (4.468960085565538, -3.9685915675141508),
 (4.589077269431569, -3.7369254053400214),
 (4.690651598295409, -3.491629826031808),
 (4.775449630264985, -3.2348362891479914),
 (4.8451347856185, -2.968345270236868),
 (4.901301685594804, -2.693715821503907),
 (4.945530689672487, -2.412337471293346),
 (4.979473369029866, -2.1255005887008274),
 (5.004637656185331, -1.8342972456159743),
 (5.022650609577855, -1.5397619912256983),
 (5.034989942587896, -1.2427481808257093),
 (5.042973876572422, -0.9439453285904958),
 (5.047726153229744, -0.6438901267748738),
 (5.050201630875717, -0.34299873288792604),
 (5.051273474336966, -0.04161499363832653),
 (5.051552057266235, 0.26003704965114594),
 (5.051019207357612, 0.5615952895375969),
 (5.04807749189602, 0.8622253903486338)]

def dist(point1, point2):
    return ((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2) ** 0.5

# thanks to https://stackoverflow.com/questions/20924085/python-conversion-between-coordinates
def rect(r, theta):
    """
    theta in degrees

    returns tuple; (float, float); (x,y)
    """

    x = r * math.cos(math.radians(theta))
    y = r * math.sin(math.radians(theta))
    return x, y


# thanks to https://stackoverflow.com/questions/20924085/python-conversion-between-coordinates
def polar(x, y):
    """
    returns r, theta(degrees)
    """

    r = (x ** 2 + y ** 2) ** .5
    theta = math.degrees(math.atan2(y,x))
    return r, theta


def angle_mod_360(angle):
    """
    Maps an angle to the interval -180, +180.

    Examples:
    angle_mod_360(362) == 2
    angle_mod_360(270) == -90

    :param angle: angle in degree
    :return: angle in degree. Between -180 and +180
    """

    n = math.floor(angle/360.0)

    angle_between_0_and_360 = angle - n*360.0

    if angle_between_0_and_360 <= 180.0:
        return angle_between_0_and_360
    else:
        return angle_between_0_and_360 - 360


def get_waypoints_ordered_in_driving_direction(params):
    # waypoints are always provided in counter clock wise order
    if params['is_reversed']: # driving clock wise.
        return list(reversed(params['optimized_waypoints']))
    else: # driving counter clock wise.
        return params['optimized_waypoints']


def up_sample(waypoints, factor):
    """
    Adds extra waypoints in between provided waypoints

    :param waypoints:
    :param factor: integer. E.g. 3 means that the resulting list has 3 times as many points.
    :return:
    """
    p = waypoints
    n = len(p)

    return [[i / factor * p[(j+1) % n][0] + (1 - i / factor) * p[j][0],
             i / factor * p[(j+1) % n][1] + (1 - i / factor) * p[j][1]] for j in range(n) for i in range(factor)]


def get_target_point(params):
    waypoints = up_sample(get_waypoints_ordered_in_driving_direction(params), 10)

    car = [params['x'], params['y']]

    distances = [dist(p, car) for p in waypoints]
    min_dist = min(distances)
    i_closest = distances.index(min_dist)

    n = len(waypoints)

    waypoints_starting_with_closest = [waypoints[(i+i_closest) % n] for i in range(n)]

    r = params['track_width'] * 0.3

    is_inside = [dist(p, car) < r for p in waypoints_starting_with_closest]
    i_first_outside = is_inside.index(False)

    if i_first_outside < 0:  # this can only happen if we choose r as big as the entire track
        return waypoints[i_closest]

    return waypoints_starting_with_closest[i_first_outside]


def get_target_steering_degree(params):
    tx, ty = get_target_point(params)
    car_x = params['x']
    car_y = params['y']
    dx = tx-car_x
    dy = ty-car_y
    heading = params['heading']

    _, target_angle = polar(dx, dy)

    steering_angle = target_angle - heading

    return angle_mod_360(steering_angle)


def score_steer_to_point_ahead(params):
    best_steering_angle = get_target_steering_degree(params)
    steering_angle = params['steering_angle']

    error = (steering_angle - best_steering_angle) / 60.0  # 60 degree is already really bad

    score = 1.0 - abs(error)

    return max(score, 0.01)  # optimizer is rumored to struggle with negative numbers and numbers too close to zero

def calculate_speed_reward(params):
    progress = params['progress']
    steps = params['steps']

    best_steering_angle = get_target_steering_degree(params)
    steering_angle = params['steering_angle']

    steering_diff = (steering_angle - best_steering_angle)
    abs_steering_diff = abs(steering_diff)
    speed_multiplier = 0
    
    if abs_steering_diff <= 3:
        speed_multiplier = .1
    elif abs_steering_diff <= 2:
        speed_multiplier = .2
    elif abs_steering_diff <= 1:
        speed_multiplier = .3
    elif abs_steering_diff <= 0.5:
        speed_multiplier = .4
    elif abs_steering_diff <= 0.2:
        speed_multiplier = .6
    elif abs_steering_diff <= 0.1:
        speed_multiplier = .8
    elif abs_steering_diff <= 0.05:
        speed_multiplier = 1.0
    
    print(f'progress: {progress}')
    print(f'steps: {steps}')
    print(f'progress per step: {progress/steps}')
    
    # Define the optimal progress per step
    optimal_progress_per_step = .340  # Adjust this value based on your specific scenario

    # Calculate the actual progress per step
    actual_progress_per_step = progress / steps

    # Calculate the speed score
    speed_score = (actual_progress_per_step / optimal_progress_per_step) * speed_multiplier

    return speed_score

def reward_function(params):
    # Sets optimized waypoints to be equal to precalced list of waypoints from optimal racing line.
    set_optimized_waypoints(params)
    
    # If we are on step 1, log optimized_waypoints and regular waypoints for viewing/drawing later from log results.
    if params['steps'] == 2:
        print(params)
        
    # Speed reward depends upon how close to steering towards the optimal racing line the car is.
    speed_reward = float(calculate_speed_reward(params))
    print(f'speed_reward: {speed_reward}')
    
    directional_reward = float(score_steer_to_point_ahead(params))
    print(f'directional_reward: {directional_reward}')
    
    final_reward = directional_reward + speed_reward
    print(f'final_reward: {final_reward}')
    
    is_crashed = params['is_crashed']
    all_wheels_on_track = params['all_wheels_on_track']
    track_width = params['track_width']
    distance_from_center = params['distance_from_center']

    # Zeros out reward if the entire car is off the track. 
    # That means the distance from the center is greater than half the track width + car length of 0.1 meters.
    if is_crashed:
        final_reward = min(final_reward, 0.01)
    elif not all_wheels_on_track and distance_from_center > (track_width/2):
        final_reward = min(final_reward, 0.01)
    
    return final_reward