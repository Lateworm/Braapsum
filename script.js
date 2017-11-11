const terms = [

    'motorcycle', 'motorbike', 'bike',
    
    'model specific installation guide', 'sheepskin',

    // Basic Anatomy
    'wheel', 'tire', 'seat', 'handlebar', 'tank', 'throttle', 'brake', 'clutch',
    'fork', 'suspension', 'four piston brake calipers', 'oversized rotors', 'remote reservoir shocks', 'inverted fork',
    'fender', 'gas cap', 'crash bars', 'sidestand', 'skid plate', '17 inch wheels', '50/50 tires',
    'steering damper', 'fairing', 'stressed member', 'kickstand', 'side stand', 'center stand', 'paddock stand', 'kick-start', 'electric start', 'push-button start',

    // Measures
    'wet weight', 'wheelbase', 'rake', 'trail', 'ground clearance', 'seat height', 'displacement',
    '0 - 60', 'suspension travel', 'wheel diameter', 'low center of gravity', 'mass centralization',
    'weight distribution', 'fuel capacity',
    
    // Onomatopoeia
    'braap', 'braaap', 'braaaap!',

    // Motorcycle brands
    'Aprilia', 'BSA', 'Buell', 'EBR', 'Harley-Davidson', 'Honda', 'Husqvarna', 'Indian',
    'Kawasaki', 'Konker', 'KTM', 'Royal Enfield', 'Suzuki', 'Ural',
    'Yamaha', 'Triumph', 'Norton', 'Vincent',
    
    'Vincati', 'Norvin', 'Triton', 'Tribsa', 
    
    'BMW',
    'F 800 GS', 'boxer', 'air-head', 'toaster tank', 'GS', 'GSA', 'flying brick', 'K bike',
    'automatic chain drive lubrication system', 'Scottoiler',
    
    'BSA',
    'Lucas, Prince of Darkness', 'a gentleman does not motor about after dark', 'A65', 'Lightning', 'Gold Star', 
    
    'Ducati',
    'open clutch cover', 'desmodromic', 'desmosedici',
    'Monster', 
    
    'Moto Guzzi',
    'V7', 'dry-plate clutch', 

    // Market segments
    'enduro', 'adventure', 'ADV', 'supermoto', 'motocross', 'MX', 'supersport', 'cruiser',
    'UJM', 'flat-track', 'cafe racer', 'dual sport', 'stunter', 'crotch rocket', 'touring bike', 'sidecar'

    // Various brands
    'Touratech', 'Advan', 'Yoshimura', 'Akropovich', 'Motorex', 'Lucas',

    // Engine
    'engine', 'ICE', 'block', 'spark plug', 'oil capacity', 
    'compression', 'compression ratio', 'horsepower', 'torque', 'liquid cooled', 'power-valve', 'power-band', 
    '90% of peak torque', 'below 3,000 RPM', 'pinned', 'exhaust flow control valve', 
    'crankcase', 'crankcase cover', 'gasket', 'piston', 'blown', 'melted', 'needle bearing', 'valve float', 
    'cylinder', 'cylinder head', 'valve', 'cam', 'cam chain', 'noisy cam chain tensioner',
    'single-cylinder', 'thumper', 'v-twin', 'parallel-twin', 'triple', 'inline-four', 'counter-balancer', 'rubber-mounted', '270-degree crank',
    
    'exhaust',
    'slip-on', 'Akropovic full system', 'high-level exhaust',
    
    'drivetrain',
    'final drive', 'chain', 'belt-drive', 'shaft-drive', 'input shaft', 'output shaft', 'clutch plates', 'wet plate clutch', 'wet sump'
    

    // Electrical
    'battery', 'battery tray', 'terminal', 'lead', 'advance', 'retard', 'timing', 'harness', 'turn signal', 'headlight',
    
    // Cockpit
    'tachometer', 'odometer',
    'mirror', 'mirror extender', 'bar-end mirror', 'integrated turn signals',

    // Fuel
    'gas', 'gasoline', 'petrol', 'lead', 'lead additive', 'octane', 'octane booster',

    // Fuel system
    'Amal',
    'carburettor', 'carburetor', 'float', 'bowl', 'jet', 'guide spindle', 'return spring',
    'mixing chamber', 'rich', 'choke', 'enrichener', 'intake', 'air filter',
    'venturi', 'vacuum chamber', 'whiskey throttle', 'air-box', 
    'lean', 'fuel injection', 'fuel pump', 'fuel valve', 'reserve valve', 'petcock', 'Power Commander', 
    
    // Ergonomics
    'foot peg', 'grip', 'seat', 'seat height', 'windshield', 

    // Tools
    'Phillips', 'flat-head', 'metric', 'imperial', 'torx', 'allen key', 'where-is-my-goddamn-10mm', 'axle wrench',
    'spoke wrench', 'master link', 'spanner',

    // Ride
    'Apex', 'accelerate', 'decelerate', 'brake', 'shift gear', 'back a gear or two', 'pin it', 'acceleration', 'braking',
    'do a ton', 'burn up', 'bird up', 'pillion', 'overtake', 'back-it-in', 'wheel-hop', 'wheelie', 'chicken-strips',
    'knee-drag', 'elbow-drag', 'marbled-tires', 'heat cycle', 'tire-blankets', 'on-the-stopper', 'knee pucks', 'fan the clutch', 'endo', 'drift',

    // Popular publications
    'Zen and the Art of Motorcycle Maintenance', "Big Sid's Vincati", 'Leaning',
    "Hey! This is Anthony with RevZillaTV, where you can Watch, Decide, & Ride!", 'Fast Bike',
    'The Long Way Round', 'On Any Sunday', 'Easy Rider',

    // Famous people
    'Rickman', 'Carl Fogerty', 'Peter Egan', 'Ari Henning', 'Nicky Hayden', 'Valentino Rossi', 'Travis Pastrana',
    'Barry Sheen', 'Guy Martin', 'Chris Birch', 'RNickeyMouse', 'Burt Munro', 'Rollie Free', 'Erik Buell',
    
    // Famous Events
    'IOMTT', 'The Snake', 'Iron Butt',
    
    // Famous Places
    'Isle of Man', 'Bonneville Salt Flats',
    
    // Bad News
    'flat tire', 'low-side', 'high-side', 'patch kit', 'tank-slapper', 
    
    'panniers', 'side bags', 'side cases', 'top case', 'tank bag',
    
    'Lewis Leathers', 'waxed cotton', 'silk scarf',
    
    'helmet',
    'full-face helmet', 'visor', 'goggles',
    
    // Poor technique
    'dump the clutch', 'a fistful of front brake', 'squid',
]





for ( let i=0; i<100; i++) {
    rand = Math.floor(Math.random()*terms.length);
    $('.output').append(terms[rand]+' ');
}
