const terms = [

    'motorcycle', 'motorbike', 'bike',

    // Basic Anatomy
    'wheel', 'tire', 'seat', 'handlebar', 'tank', 'throttle', 'brake', 'clutch',
    'fork', 'suspension', 'panniers', 'four piston brake calipers', 'oversized rotors', 'remote reservoir shocks',
    'fender', 'gas cap', 'crash bars', 'sidestand', 'skid plate', '17 inch wheels', '50/50 tires',

    // Measures
    'wet weight', 'wheelbase', 'rake', 'trail', 'ground clearance', 'seat height', 'displacement',
    '0 - 60', 'suspension-travel', 'wheel diameter', 
    
    // Onomatopoeia
    'braap', 'braaap', 'braaaap!',

    // Motorcycle brands
    'Aprilia', 'BMW', 'BSA', 'Buell', 'Ducati', 'EBR', 'Harley-Davidson', 'Honda', 'Husqvarna',
    'Kawasaki', 'Konker', 'KTM', 'Moto Guzzi', 'Royal Enfield', 'Suzuki', 'Ural',
    'Yamaha', 'Triumph', 

    // Market segments
    'enduro', 'adventure', 'ADV', 'supermoto', 'motocross', 'MX', 'supersport', 'cruiser',
    'UJM', 'flat-track', 'cafe racer', 'dual sport', 'stunter', 

    // Various brands
    'Touratech', 'Advan', 'Yoshimura', 'Akropovich', 'Motorex', 'Lucas',

    // Engine
    'engine', 'ICE', 'block', 'spark plug', 'oil capacity', 
    'compression', 'compression ratio', 'horsepower', 'torque', 'liquid cooled', 'power-valve', 'power-band', 
    '90% of peak torque', 'below 3,000 RPM', 'pinned', 'exhaust flow control valve', 
    'crankcase', 'crankcase cover', 'gasket', 'piston', 'blown', 'melted', 'needle bearing', 'valve float', 
    'cylinder', 'cylinder head', 'valve', 'cam', 'cam chain', 'noisy cam chain tensioner',  

    // Electrical
    'battery', 'battery tray', 'terminal', 'lead', 'advance', 'retard', 'timing', 'harness', 'turn signal', 

    // Fuel
    'gas', 'gasoline', 'petrol', 'lead', 'lead additive', 'octane', 'octane booster',

    // Fuel system
    'Amal',
    'carburettor', 'carburetor', 'float', 'bowl', 'jet', 'guide spindle', 'return spring',
    'mixing chamber', 'rich', 'choke', 'enrichener', 'intake', 'air filter',
    'venturi', 'vacuum chamber', 'whiskey throttle', 'air-box', 
    'lean', 'fuel injection', 
    
    // Ergonomics
    'foot peg', 'grip', 'seat', 'seat height', 'windshield', 

    // Tools
    'Phillips', 'flat-head', 'metric', 'imperial', 'torx', 'allen key', 'where-is-my-goddamn-10mm', 'axel wrench',
    'spoke wrench', 'masterlink', 

    // Ride
    'Apex', 'accelerate', 'decelerate', 'brake', 'shift gear', 'back a gear or two', 'pin it',
    'do a ton', 'burn up', 'bird up', 'pillion', 'overtake', 'back-it-in', 'wheel-hop', 'wheelie', 'chicken-strips', 'squid', 'knee-drag', 'elbow-drag', 'marbled-tires', 'heat cycle', 'tire-blankets', 'on-the-stopper', 'knee pucks', 'Iron Butt', 'fan the clutch', 'endo', 'drift',

    // Popular publications
    'Zen and the Art of Motorcycle Maintenance', "Big Sid's Vincati", 'Leaning',
    "Hey! This is Anthony with RevZillaTV, where you can Watch, Decide, & Ride!", 'Fast Bike', 

    // Famous people
    'Rickman', 'Carl Fogerty', 'Peter Egan', 'Ari Henning', 'Nicky Hayden', 'Valentino Rossi', 'Travis Pastrana', 
]





for ( let i=0; i<100; i++) {
    rand = Math.floor(Math.random()*terms.length);
    $('.output').append(terms[rand]+' ');
}
