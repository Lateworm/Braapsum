const terms = [

    'motorcycle', 'motorbike', 'bike',

    // Basic Anatomy
    'wheel', 'tire', 'seat', 'handlebar', 'tank', 'throttle', 'brake', 'clutch',
    'fork', 'suspension',

    // Measures
    'wet weight', 'wheelbase', 'rake', 'trail', 'ground clearance', 'seat height', 'displacement',
    '0 - 60', 
    
    // Onomatopoeia
    'braap', 'braaap', 'braaaap!',

    // Motorcycle brands
    'Aprilia', 'BMW', 'BSA', 'Buell', 'Ducati', 'EBR', 'Harley-Davidson', 'Honda', 'Husqvarna',
    'Kawasaki', 'Konker', 'KTM', 'Moto Guzzi', 'Royal Enfield', 'Suzuki', 'Ural',
    'Yamaha', 'Triumph',

    // Market segments
    'enduro', 'adventure', 'ADV', 'supermoto', 'motocross', 'MX', 'supersport', 'cruiser',
    'UJM', 'flat-track', 

    // Various brands
    'Touratech',

    // Engine
    'engine', 'ICE', 'block', 'spark plug',
    'compression', 'compression ratio', 'horsepower', 'torque',
    '90% of peak torque', 'below 3,000 RPM',
    'crankcase', 'crankcase cover', 'gasket', 
    'cylinder', 'cylinder head', 'valve', 'cam', 'cam chain', 'cam chain tensioner',

    // Electrical
    'Lucas',
    'battery', 'battery tray', 'terminal', 'lead',

    // Fuel
    'gas', 'gasoline', 'petrol', 'lead', 'lead additive', 'octane', 'octane booster',

    // Fuel system
    'Amal',
    'carburettor', 'carburetor', 'float', 'bowl', 'jet', 'guide spindle', 'return spring',
    'mixing chamber', 'rich', 'choke', 'enrichener', 'intake', 'air filter',
    'venturi', 'vacuum chamber',
    'lean',
    'advance', 'retard',

    // Ergonomics
    'foot peg', 'grip', 'seat', 'seat height',

    // Tools
    'Phillips', 'flat-head', 'metric', 'imperial', 'torx', 'allen key',

    // Ride
    'Apex', 'accelerate', 'decelerate', 'brake', 'shift gear', 'back a gear or two', 'pin it',
    'do a ton', 'burn up', 'bird up', 'pillion', 'overtake',

    // Popular publications
    'Zen and the Art of Motorcycle Maintenance', "Big Sid's Vincati", 'Leaning',
    "Hey! This is Anthony with RevZillaTV, where you can Watch, Decide, & Ride!", 

    // Famous people
    'Rickman', 'Carl Fogerty', 'Peter Egan', 'Ari Henning',
]





for ( let i=0; i<100; i++) {
    rand = Math.floor(Math.random()*terms.length);
    $('.output').append(terms[rand]+' ');
}
