/* ============ Bell N Tell — shared app logic ============ */
const BRANCH = {lat:30.196235, lng:71.510246, radiusKm:10, name:'Bell N Tell (Shah Rukn-e-Alam)',
  address:'Plot B 58, B Block, Shah Rukn-e-Alam Housing Scheme, Multan, Pakistan',
  mapsUrl:'https://maps.app.goo.gl/gh9beGScssr3FwYA6'};

/* Owner's WhatsApp number that receives every order.
   Format: country code + number, digits only — no +, no spaces, no leading 0.
   ⚠️ Replace with the real WhatsApp number before going live. */
const OWNER_WHATSAPP = '923092333121';

const CATS = [
  {id:'chinese', name:'Chinese Kitchen', img:'assets/cat-chinese.webp', bg:'#FDEFE2', items:[
    {n:'Chicken Chowmein',            p:1780, d:1602, img:'assets/chinese-chicken-chowmein.webp'},
    {n:'Chicken Manchurian',          p:1450, d:1305, img:'assets/chinese-chicken-manchurian.webp'},
    {n:'Veggie Fried Rice',           p:950,  d:855,  img:'assets/chinese-veggie-fried-rice.webp'},
    {n:'Honey Chilli Potato',         p:850,  d:765,  img:'assets/chinese-honey-chilli-potato.webp'},
    {n:'Chicken Corn Soup',           p:450,  d:405,  img:'assets/chinese-chicken-corn-soup.webp'},
    {n:'Chicken Hot & Sour Soup',     p:450,  d:405,  img:'assets/chinese-chicken-hot-sour-soup.webp'},
    {n:'Mix Veg Soup',                p:350,  d:315,  img:'assets/chinese-mix-veg-soup.webp'},
    {n:'Chicken Noodle Soup',         p:400,  d:360,  img:'assets/chinese-chicken-noodle-soup.webp'},
    {n:'Steam Rice',                  p:250,  d:225,  img:'assets/chinese-steam-rice.webp'},
    {n:'Egg Fried Rice',              p:400,  d:360,  img:'assets/chinese-egg-fried-rice.webp'},
    {n:'Chicken Fried Rice',          p:500,  d:450,  img:'assets/chinese-chicken-fried-rice.webp'},
    {n:'Special Fried Rice',          p:600,  d:540,  img:'assets/chinese-special-fried-rice.webp'},
    {n:'Chinese Noodles',             p:400,  d:360,  img:'assets/chinese-noodles.webp'},
    {n:'Chicken Chow Mein',           p:500,  d:450,  img:'assets/chinese-chicken-chow-mein.webp'},
    {n:'Special Chow Mein',           p:600,  d:540,  img:'assets/chinese-special-chow-mein.webp'},
    {n:'Chicken Hakka Noodles',       p:500,  d:450,  img:'assets/chinese-chicken-hakka-noodles.webp'},
    {n:'Chicken Sweet Corn',          p:350,  d:315,  img:'assets/chinese-chicken-sweet-corn.webp'},
    {n:'Spring Roll (2pc)',           p:200,  d:180,  img:'assets/chinese-spring-roll.webp'},
    {n:'Chicken Manchurian (Dry)',    p:700,  d:630,  img:'assets/chinese-chicken-manchurian-dry.webp'},
    {n:'Chicken Manchurian (Gravy)',  p:750,  d:675,  img:'assets/chinese-chicken-manchurian-gravy.webp'},
    {n:'Chicken Sweet & Sour',        p:700,  d:630,  img:'assets/chinese-chicken-sweet-sour.webp'},
    {n:'Chicken Jalfrezi',            p:750,  d:675,  img:'assets/chinese-chicken-jalfrezi.webp'},
    {n:'Chicken Schezwan',            p:750,  d:675,  img:'assets/chinese-chicken-schezwan.webp'},
    {n:'Chicken Chilli',              p:700,  d:630,  img:'assets/chinese-chicken-chilli.webp'},
    {n:'Chicken Kung Pao',            p:750,  d:675,  img:'assets/chinese-chicken-kung-pao.webp'},
    {n:'Chicken Black Pepper',        p:750,  d:675,  img:'assets/chinese-chicken-black-pepper.webp'},
    {n:'Chicken Oyster',              p:750,  d:675,  img:'assets/chinese-chicken-oyster.webp'},
    {n:'Chicken Garlic',              p:700,  d:630,  img:'assets/chinese-chicken-garlic.webp'},
    {n:'Chicken Capsicum',            p:700,  d:630,  img:'assets/chinese-chicken-capsicum.webp'},
    {n:'Mix Veg Manchurian',          p:600,  d:540,  img:'assets/chinese-mix-veg-manchurian.webp'},
    {n:'Mix Veg Jalfrezi',            p:600,  d:540,  img:'assets/chinese-mix-veg-jalfrezi.webp'},
    {n:'Veg Fried Rice',              p:400,  d:360,  img:'assets/chinese-veg-fried-rice.webp'},
    {n:'Chicken Handi',               p:900,  d:810,  img:'assets/chinese-chicken-handi.webp'},
    {n:'Dhaka Chicken',               p:950,  d:855,  img:'assets/chinese-dhaka-chicken.webp'},
    {n:'Chicken Black',               p:0,    d:0,    img:'assets/chinese-chicken-black.webp'},
    {n:'Chicken Mushroom',            p:950,  d:855,  img:'assets/chinese-chicken-mushroom.webp'},
  ]},
  {id:'pakistani', name:'Pakistani Kitchen', img:'assets/cat-pakistani.webp', bg:'#FCE8E6', items:[
    {n:'Kheer',                       p:1300, d:1170, img:'assets/pakistani-kheer.webp'},
    {n:'Kashmiri Tea',                p:200,  d:180,  img:'assets/pakistani-kashmiri-tea.webp'},
    {n:'Tawa Chicken',                p:1300, d:1170, img:'assets/pakistani-tawa-chicken.webp'},
    {n:'Achari Karhai',               p:950,  d:855,  img:'assets/pakistani-achari-karhai.webp'},
    {n:'Fried Fish (3pc)',            p:1800, d:1620, img:'assets/pakistani-fried-fish.webp'},
    {n:'Finger Fish (5pc)',           p:1050, d:945,  img:'assets/pakistani-finger-fish.webp'},
    {n:'Dhaka Fish (4pc)',            p:1050, d:945,  img:'assets/pakistani-dhaka-fish.webp'},
    {n:'Finger Fish (10pc)',          p:2200, d:1980, img:'assets/pakistani-finger-fish.webp'},
    {n:'Dhaka Fish (8pc)',            p:2300, d:2070, img:'assets/pakistani-dhaka-fish.webp'},
    {n:'Bell N Tell (Rs.950)',        p:950,  d:855,  img:'assets/pakistani-bnt-special.webp'},
    {n:'Chicken Achari (Rs.950)',     p:950,  d:855,  img:'assets/pakistani-chicken-achari.webp'},
    {n:'Chicken (Rs.900)',            p:900,  d:810,  img:'assets/pakistani-chicken-karahi.webp'},
    {n:'Chicken White',               p:950,  d:855,  img:'assets/pakistani-chicken-white.webp'},
    {n:'Chicken Karahi',              p:900,  d:810,  img:'assets/pakistani-chicken-karahi.webp'},
    {n:'Chicken Ham',                 p:1100, d:990,  img:'assets/pakistani-chicken-handi.webp'},
    {n:'Chicken (Rs.340)',            p:340,  d:306,  img:'assets/pakistani-chicken-karahi.webp'},
    {n:'Bell N Tell (Rs.2050)',       p:2050, d:1845, img:'assets/pakistani-bnt-special.webp'},
    {n:'Mutton Handi',                p:1950, d:1755, img:'assets/pakistani-mutton-handi.webp'},
    {n:'Mutton Green',                p:1900, d:1710, img:'assets/pakistani-mutton-green.webp'},
    {n:'Mutton White',                p:1900, d:1710, img:'assets/pakistani-mutton-white.webp'},
    {n:'Mutton Karahi',               p:1850, d:1665, img:'assets/pakistani-mutton-karahi.webp'},
    {n:'Mutton Achari (Rs.1950)',     p:1950, d:1755, img:'assets/pakistani-mutton-achari.webp'},
    {n:'Bellntell',                   p:1800, d:1620, img:'assets/pakistani-bnt-special.webp'},
    {n:'Chicken Achari (Rs.1100)',    p:1100, d:990,  img:'assets/pakistani-chicken-achari.webp'},
    {n:'Bell N Tell (Rs.1500)',       p:1500, d:1350, img:'assets/pakistani-bnt-special.webp'},
    {n:'Chicken Hari',                p:1100, d:990,  img:'assets/pakistani-chicken-hari.webp'},
    {n:'Chicken (Creamy)',            p:1050, d:945,  img:'assets/pakistani-chicken-creamy.webp'},
    {n:'Arabian',                     p:1100, d:990,  img:'assets/pakistani-arabian.webp'},
    {n:'Chicken Ginger',              p:1050, d:945,  img:'assets/pakistani-chicken-ginger.webp'},
    {n:'Chicken (Mix)',               p:1050, d:945,  img:'assets/pakistani-chicken-mix.webp'},
    {n:'Chicken Green',               p:1100, d:990,  img:'assets/pakistani-chicken-green.webp'},
    {n:'Madrasi',                     p:1100, d:990,  img:'assets/pakistani-madrasi.webp'},
    {n:'Shahi Dal',                   p:700,  d:630,  img:'assets/pakistani-shahi-dal.webp'},
    {n:'Dal Fried',                   p:350,  d:315,  img:'assets/pakistani-dal-fried.webp'},
    {n:'Chicken Mix',                 p:650,  d:585,  img:'assets/pakistani-chicken-mix.webp'},
    {n:'Mix Vegitable',               p:350,  d:315,  img:'assets/pakistani-mix-vegetable.webp'},
    {n:'Mutton Achari (Rs.2000)',     p:2000, d:1800, img:'assets/pakistani-mutton-achari.webp'},
    {n:'Mutton Hari',                 p:3600, d:3240, img:'assets/pakistani-mutton-hari.webp'},
    {n:'Mutton',                      p:1900, d:1710, img:'assets/pakistani-mutton-karahi.webp'},
  ]},
  {id:'bbqsec', name:'BBQ Section', img:'assets/cat-bbq.webp', bg:'#FDE3DA', items:[
    {n:'Chicken Tikka',               p:470,  d:423,  img:'assets/bbq-chicken-tikka.webp'},
    {n:'Arabian Tika',                p:490,  d:441,  img:'assets/bbq-arabian-tikka.webp'},
    {n:'Chicken Tawa (Rs.500)',       p:500,  d:450,  img:'assets/bbq-chicken-tawa.webp'},
    {n:'Chicken Green (Rs.1300)',     p:1300, d:1170, img:'assets/bbq-chicken-green.webp'},
    {n:'Chicken Boti (Rs.1250)',      p:1250, d:1125, img:'assets/bbq-chicken-boti.webp'},
    {n:'Chicken Malai',               p:1350, d:1215, img:'assets/bbq-chicken-malai.webp'},
    {n:'Chicken Achari (Rs.1300)',    p:1300, d:1170, img:'assets/bbq-chicken-achari.webp'},
    {n:'Chicken Reshmi (Rs.1350)',    p:1350, d:1215, img:'assets/bbq-chicken-reshmi.webp'},
    {n:'Chicken Behari (Rs.1350)',    p:1350, d:1215, img:'assets/bbq-chicken-behari.webp'},
    {n:'Chicken (Rs.1400)',           p:1400, d:1260, img:'assets/bbq-chicken-tikka.webp'},
    {n:'Rajistani Boti (Rs.1300)',    p:1300, d:1170, img:'assets/bbq-rajistani-boti.webp'},
    {n:'Labanese',                    p:1500, d:1350, img:'assets/bbq-labanese-kabab.webp'},
    {n:'Makhamali',                   p:1500, d:1350, img:'assets/bbq-makhamali-kabab.webp'},
    {n:'Chicken Seekh (Rs.1200)',     p:1200, d:1080, img:'assets/bbq-chicken-seekh.webp'},
    {n:'Chicken Reshmi (Rs.1400)',    p:1400, d:1260, img:'assets/bbq-chicken-reshmi.webp'},
    {n:'Chicken Kalmi (Rs.1250)',     p:1250, d:1125, img:'assets/bbq-chicken-kalmi.webp'},
    {n:'Fish Tikka',                  p:2100, d:1890, img:'assets/bbq-fish-tikka.webp'},
    {n:'Pizza Kabab (Rs.1300)',       p:1300, d:1170, img:'assets/bbq-pizza-kabab.webp'},
    {n:'Chicken Tikka PC',            p:440,  d:396,  img:'assets/bbq-chicken-tikka.webp'},
    {n:'Chicken (Rs.460)',            p:460,  d:414,  img:'assets/bbq-chicken-tikka.webp'},
    {n:'Chicken Green (Rs.650)',      p:650,  d:585,  img:'assets/bbq-chicken-green.webp'},
    {n:'Chicken Boti (Rs.650)',       p:650,  d:585,  img:'assets/bbq-chicken-boti.webp'},
    {n:'Malai Boti',                  p:700,  d:630,  img:'assets/bbq-chicken-malai.webp'},
    {n:'Chicken Achari (Rs.670)',     p:670,  d:603,  img:'assets/bbq-chicken-achari.webp'},
    {n:'Chicken Reshmi (Rs.700)',     p:700,  d:630,  img:'assets/bbq-chicken-reshmi.webp'},
    {n:'Chicken Behari (Rs.670)',     p:670,  d:603,  img:'assets/bbq-chicken-behari.webp'},
    {n:'Chicken Kastoori',            p:720,  d:648,  img:'assets/bbq-chicken-kastoori.webp'},
    {n:'Rajistani Boti (Rs.670)',     p:670,  d:603,  img:'assets/bbq-rajistani-boti.webp'},
    {n:'Labanies Kabab',              p:800,  d:720,  img:'assets/bbq-labanese-kabab.webp'},
    {n:'Makhmali kabab',              p:800,  d:720,  img:'assets/bbq-makhamali-kabab.webp'},
    {n:'Chicken Seekh (Rs.570)',      p:570,  d:513,  img:'assets/bbq-chicken-seekh.webp'},
    {n:'Reshmi Kabab',                p:720,  d:648,  img:'assets/bbq-chicken-reshmi.webp'},
    {n:'Kalmi Tikka',                 p:650,  d:585,  img:'assets/bbq-chicken-kalmi.webp'},
    {n:'Fish Tikkaa',                 p:1050, d:945,  img:'assets/bbq-fish-tikka.webp'},
    {n:'Pizza Kabab (Rs.650)',        p:650,  d:585,  img:'assets/bbq-pizza-kabab.webp'},
    {n:'Damra Fish',                  p:1700, d:1530, img:'assets/bbq-damra-fish.webp'},
    {n:'Pizza Kabab (Rs.300)',        p:300,  d:270,  img:'assets/bbq-pizza-kabab.webp'},
    {n:'Chicken Tawa (Rs.460)',       p:460,  d:414,  img:'assets/bbq-chicken-tawa.webp'},
    {n:'Rajasthani Boti',             p:1350, d:1215, img:'assets/bbq-rajistani-boti.webp'},
    {n:'Chicken Tikka Boti',          p:0,    d:0,    img:'assets/bbq-chicken-tikka.webp'},
    {n:'Chicken Kabab',               p:0,    d:0,    img:'assets/bbq-chicken-seekh.webp'},
    {n:'Chicken Kalmi (Rs.0)',        p:0,    d:0,    img:'assets/bbq-chicken-kalmi.webp'},
    {n:'Chicken Handi',               p:0,    d:0,    img:'assets/bbq-chicken-tawa.webp'},
    {n:'Chicken Malai Boti',          p:0,    d:0,    img:'assets/bbq-chicken-malai.webp'},
  ]},
  {id:'salad', name:'Salad Bar', img:'assets/cat-salad.webp', bg:'#E6F4E9', items:[
    {n:'Date Shake',                  p:350,  d:315,  img:'assets/salad-date-shake.webp'},
    {n:'Pineapple Shake',             p:250,  d:225,  img:'assets/salad-pineapple-shake.webp'},
    {n:'Fruit Trifle',                p:1450, d:1305, img:'assets/salad-fruit-trifle.webp'},
    {n:'Pine Apple Juice',            p:250,  d:225,  img:'assets/salad-pineapple-juice.webp'},
    {n:'Mint Margarita',              p:250,  d:225,  img:'assets/salad-mint-margarita.webp'},
    {n:'Gol Gappey',                  p:100,  d:90,   img:'assets/salad-gol-gappey.webp'},
    {n:'Cold Drink 1.5 Litr',        p:200,  d:180,  img:'assets/salad-cold-drink.webp'},
    {n:'Cold Drink 1.0',              p:170,  d:153,  img:'assets/salad-cold-drink.webp'},
    {n:'Rass Malai',                  p:200,  d:180,  img:'assets/salad-rass-malai.webp'},
    {n:'Variety Of',                  p:450,  d:405,  img:'assets/salad-variety.webp'},
    {n:'Variety',                     p:850,  d:765,  img:'assets/salad-variety.webp'},
    {n:'Pina Colada',                 p:350,  d:315,  img:'assets/salad-pina-colada.webp'},
    {n:'Pink Lady',                   p:350,  d:315,  img:'assets/salad-pink-lady.webp'},
    {n:'Hawaian Dream',               p:350,  d:315,  img:'assets/salad-hawaian-dream.webp'},
    {n:'Singapore',                   p:350,  d:315,  img:'assets/salad-singapore.webp'},
    {n:'Fruit Punch',                 p:350,  d:315,  img:'assets/salad-fruit-punch.webp'},
    {n:'Peach Mariner',               p:350,  d:315,  img:'assets/salad-peach-mariner.webp'},
    {n:'Bell N Tell Special (Dessert)',p:450, d:405,  img:'assets/salad-bnt-special-dessert.webp'},
    {n:'Bell N Tell Special (Shake)', p:500,  d:450,  img:'assets/salad-bnt-special-shake.webp'},
    {n:'Vanilla Ice',                 p:210,  d:189,  img:'assets/salad-vanilla-ice.webp'},
    {n:'Kulfa Ice Cream',             p:210,  d:189,  img:'assets/salad-kulfa-ice-cream.webp'},
    {n:'Pistachio Ice',               p:210,  d:189,  img:'assets/salad-pistachio-ice.webp'},
    {n:'Mango Ice',                   p:210,  d:189,  img:'assets/salad-mango-ice.webp'},
    {n:'Fruit',                       p:210,  d:189,  img:'assets/salad-fruit.webp'},
    {n:'Chocolate Chip',              p:210,  d:189,  img:'assets/salad-chocolate-chip.webp'},
    {n:'Cramel Crunch',               p:210,  d:189,  img:'assets/salad-caramel-crunch.webp'},
    {n:'Tuti Fruti',                  p:400,  d:360,  img:'assets/salad-tutti-frutti.webp'},
    {n:'Cold Coffee',                 p:400,  d:360,  img:'assets/salad-cold-coffee.webp'},
    {n:'Falsa',                       p:250,  d:225,  img:'assets/salad-falsa.webp'},
    {n:'Strawberry',                  p:250,  d:225,  img:'assets/salad-strawberry.webp'},
    {n:'Mix Fruit Juice',             p:300,  d:270,  img:'assets/salad-mix-fruit-juice.webp'},
    {n:'Apple Juice',                 p:300,  d:270,  img:'assets/salad-apple-juice.webp'},
    {n:'Peach Juice',                 p:300,  d:270,  img:'assets/salad-peach-juice.webp'},
    {n:'Bell N Tell Special (Honey)', p:400,  d:360,  img:'assets/salad-bnt-special-honey.webp'},
    {n:'Banana Shake',                p:250,  d:225,  img:'assets/salad-banana-shake.webp'},
    {n:'Mango Shake',                 p:300,  d:270,  img:'assets/salad-mango-shake.webp'},
    {n:'Apple Shake',                 p:300,  d:270,  img:'assets/salad-apple-shake.webp'},
    {n:'Strawberry Shake',            p:300,  d:270,  img:'assets/salad-strawberry-shake.webp'},
    {n:'Mix Fruit Shake',             p:300,  d:270,  img:'assets/salad-mix-fruit-shake.webp'},
    {n:'Peach (Shake)',               p:200,  d:180,  img:'assets/salad-peach-shake.webp'},
    {n:'Vanilla Shake',               p:350,  d:315,  img:'assets/salad-vanilla-shake.webp'},
    {n:'Chocolate Shake',             p:250,  d:225,  img:'assets/salad-chocolate-shake.webp'},
    {n:'Soft Drink',                  p:80,   d:72,   img:'assets/salad-soft-drink.webp'},
    {n:'Soft Drink Tin',              p:130,  d:117,  img:'assets/salad-soft-drink-tin.webp'},
    {n:'Soft Drink (Diet)',           p:130,  d:117,  img:'assets/salad-soft-drink-diet.webp'},
    {n:'Mineral Water (Large)',       p:95,   d:86,   img:'assets/salad-mineral-water.webp'},
    {n:'Mineral Water (Small)',       p:60,   d:54,   img:'assets/salad-mineral-water.webp'},
    {n:'Fresh Lemon',                 p:120,  d:108,  img:'assets/salad-fresh-lemon.webp'},
    {n:'Fresh Lemon (Mint)',          p:150,  d:135,  img:'assets/salad-fresh-lemon-mint.webp'},
    {n:'Spanish',                     p:200,  d:180,  img:'assets/salad-spanish.webp'},
    {n:'Mint Margarita (Large)',      p:200,  d:180,  img:'assets/salad-mint-margarita.webp'},
    {n:'Salad',                       p:100,  d:90,   img:'assets/salad-salad.webp'},
    {n:'Raita',                       p:100,  d:90,   img:'assets/salad-raita.webp'},
  ]},
  {id:'tandoor', name:'Tandoor', img:'assets/cat-tandoor.webp', bg:'#F6E9D8', items:[
    {n:'Roti (Per Head)',             p:80,   d:72,   img:'assets/tandoor-roti.webp'},
    {n:'Ginger Naan',                 p:100,  d:90,   img:'assets/tandoor-ginger-naan.webp'},
    {n:'Garlic Naan',                 p:100,  d:90,   img:'assets/tandoor-garlic-naan.webp'},
    {n:'Special',                     p:90,   d:81,   img:'assets/tandoor-special-naan.webp'},
    {n:'Cheese Naan',                 p:600,  d:540,  img:'assets/tandoor-cheese-naan.webp'},
    {n:'Tandoori',                    p:80,   d:72,   img:'assets/tandoor-tandoori-roti.webp'},
    {n:'Special Roti',                p:20,   d:18,   img:'assets/tandoor-special-roti.webp'},
    {n:'Kalwanji Naan',               p:80,   d:72,   img:'assets/tandoor-kalwanji-naan.webp'},
    {n:'Bread Basket',                p:0,    d:0,    img:'assets/tandoor-bread-basket.webp'},
  ]},
  {id:'fastfood', name:'Fast Food', img:'assets/cat-fastfood.webp', bg:'#FFEAD8', items:[
    {n:'Chicken',                     p:500,  d:450,  img:'assets/fastfood-chicken-box.webp'},
    {n:'Bell N Tell',                 p:605,  d:545,  img:'assets/fastfood-bnt-box.webp'},
    {n:'Mega Chicken',                p:300,  d:270,  img:'assets/fastfood-mega-chicken.webp'},
    {n:'Mega Chicken (large)',        p:350,  d:315,  img:'assets/fastfood-mega-chicken.webp'},
    {n:'Mega Breast',                 p:400,  d:360,  img:'assets/fastfood-mega-breast.webp'},
    {n:'Mega Breast (large)',         p:450,  d:405,  img:'assets/fastfood-mega-breast.webp'},
    {n:'French Chicken',              p:350,  d:315,  img:'assets/fastfood-french-chicken.webp'},
    {n:'French Chicken (large)',      p:400,  d:360,  img:'assets/fastfood-french-chicken.webp'},
    {n:'Mega Fish',                   p:600,  d:540,  img:'assets/fastfood-mega-fish.webp'},
    {n:'Mega Fish (large)',           p:650,  d:585,  img:'assets/fastfood-mega-fish.webp'},
    {n:'French Fish',                 p:600,  d:540,  img:'assets/fastfood-french-fish.webp'},
    {n:'French Fish (large)',         p:650,  d:585,  img:'assets/fastfood-french-fish.webp'},
    {n:'Zinger Burger',               p:380,  d:342,  img:'assets/fastfood-zinger-burger.webp'},
    {n:'Zinger Burger (large)',       p:430,  d:387,  img:'assets/fastfood-zinger-burger.webp'},
    {n:'California Club',             p:600,  d:540,  img:'assets/fastfood-california-club.webp'},
    {n:'Chicken Salad',               p:550,  d:450,  img:'assets/fastfood-chicken-salad.webp'},
    {n:'Breast Chicken',              p:330,  d:297,  img:'assets/fastfood-mega-breast.webp'},
    {n:'Executive',                   p:650,  d:585,  img:'assets/fastfood-executive-box.webp'},
    {n:'Stuffed',                     p:750,  d:675,  img:'assets/fastfood-stuffed-burger.webp'},
    {n:'Chicken (800)',               p:800,  d:720,  img:'assets/fastfood-chicken-box.webp'},
  ]},
  {id:'english', name:'English Kitchen', img:'assets/cat-english.webp', bg:'#EFEAE0', items:[
    {n:'Grilled Chicken',             p:1000, d:900,  img:'assets/english-grilled-chicken.webp'},
    {n:'Chicken Alfredo',             p:1000, d:900,  img:'assets/english-chicken-alfredo.webp'},
    {n:'Crispy Chicken Platter',      p:1000, d:900,  img:'assets/english-crispy-chicken-platter.webp'},
    {n:'Pepper Steak',                p:1200, d:1080, img:'assets/english-pepper-steak.webp'},
    {n:'Mushroom Steak',              p:1200, d:1080, img:'assets/english-mushroom-steak.webp'},
    {n:'Garlic Steak',                p:1200, d:1080, img:'assets/english-garlic-steak.webp'},
    {n:'Hawaiian Steak',              p:1200, d:1080, img:'assets/english-hawaiian-steak.webp'},
    {n:'American Steak',              p:1200, d:1080, img:'assets/english-american-steak.webp'},
    {n:'Italian Steak',               p:1200, d:1080, img:'assets/english-italian-steak.webp'},
    {n:'Mexicana Steak',              p:1200, d:1080, img:'assets/english-mexicana-steak.webp'},
  ]},
];

const DEALS = [
  {n:'Special Platter (2-ps)',    p:1400, inc:3, img:'assets/deal-special-platter.webp', items:[
    '1x Chicken Manchurian Half',
    '1x Dhaka Chicken Full',
    '1x Chicken Chowmien',
  ]},
  {n:'Special Bar B.Q Platter',  p:4000, inc:6, img:'assets/deal-bbq-platter.webp', items:[
    '1x Chicken Handi',
    '1x Chicken Rice',
    '8x Chicken Malai Boti',
    '1x Bread Basket (Roti, Naan)',
    '1x Raita',
    '1x Salad',
  ]},
  {n:'3 in 1 Platter',           p:1350, inc:3, img:'assets/deal-3in1-platter.webp', items:[
    '1x Chicken Rice',
    '1x Dhaka Chicken',
    '1x Chicken Manchurian',
  ]},
  {n:'5 in 1 Bar B.Q Platter',   p:4000, inc:5, img:'assets/deal-5in1-bbq-platter.webp', items:[
    '4x Chicken Kabab',
    '8x Rajistani Boti',
    '8x Chicken Tikka Boti',
    '4x Fish Tikka',
    '4x Chicken Kalmi Tikka',
  ]},
  {n:'Kabli Platter',             p:1450, inc:4, img:'assets/deal-kabli-platter.webp', items:[
    '1x Mughlai Boti 2ps',
    '1x Lahori Boti 2ps',
    '2x Chicken Kabab',
    '1x Afghani Pulao Half',
  ]},
  {n:'Signature Platter',         p:1500, inc:3, img:'assets/deal-signature-platter.webp', items:[
    '1x Chicken Karahi Half',
    '1x Naan Basket',
    '1x Chicken Biryani Half',
  ]},
  {n:'Supreme Platter',           p:1800, inc:5, img:'assets/deal-supreme-platter.webp', items:[
    '1x Chicken Handi',
    '1x Chicken Biryani Half',
    '4x Chicken Kabab',
    '1x Raita',
    '1x Salad',
  ]},
  {n:'Party Bar B.Q Platter',     p:6298, inc:5, img:'assets/deal-party-bbq-platter.webp', items:[
    '6x Chicken Kabab',
    '12x Rajasthani Boti',
    '12x Chicken Tikka Boti',
    '8x Fish Tikka',
    '6x Chicken Kalmi Tikka',
  ]},
];

/* ---------- persisted state helpers ---------- */
const DB = {
  get(key, fallback){ try{ const v = localStorage.getItem('bnt_'+key); return v ? JSON.parse(v) : fallback; }catch(e){ return fallback; } },
  set(key, val){ localStorage.setItem('bnt_'+key, JSON.stringify(val)); },
};
function getCart(){ return DB.get('cart', []); }
function setCart(c){ DB.set('cart', c); updateCartBadge(); }
function getUser(){ return DB.get('user', null); }
function setUser(u){ DB.set('user', u); }
function getDelivery(){ return DB.get('delivery', null); } // {ok, phone}
function setDelivery(d){ DB.set('delivery', d); }
function getOrders(){ return DB.get('orders', {running:[], history:[]}); }
function setOrders(o){ DB.set('orders', o); }

/* ---------- nav / UI bootstrapping ---------- */
function updateCartBadge(){
  const count = getCart().reduce((s,c)=>s+c.qty,0);
  document.querySelectorAll('.cart-badge').forEach(b=>{
    if(count>0){ b.style.display='flex'; b.textContent=count; }
    else b.style.display='none';
  });
}
function toggleNav(){ document.querySelector('.nav-links').classList.toggle('open'); }
function showToast(msg){
  let t = document.getElementById('toast');
  if(!t){ t = document.createElement('div'); t.id='toast'; t.className='toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastT);
  window._toastT = setTimeout(()=>t.classList.remove('show'), 1900);
}
function ringIcon(el){
  if(!el) return;
  el.style.transition='transform .15s';
  el.style.transform='rotate(-14deg)';
  setTimeout(()=>{el.style.transform='rotate(14deg)';},150);
  setTimeout(()=>{el.style.transform='rotate(0)';},300);
}

/* ---------- cart operations (shared across menu/deals/cart pages) ---------- */
function keyFor(catId, name){ return catId+'::'+name; }
function addToCart(key, name, price, qty){
  qty = qty || 1;
  const cart = getCart();
  const existing = cart.find(c=>c.key===key);
  if(existing) existing.qty += qty;
  else cart.push({key, name, price, qty});
  setCart(cart);
  showToast(name + ' added to cart 🔔');
  ringIcon(document.querySelector('.icon-link.cart-icon'));
}
function cartQty(key, d){
  const cart = getCart();
  const c = cart.find(x=>x.key===key);
  if(!c) return;
  c.qty += d;
  const next = c.qty<=0 ? cart.filter(x=>x.key!==key) : cart;
  setCart(next);
  if(typeof renderCartPage === 'function') renderCartPage();
}
function removeFromCart(key){
  setCart(getCart().filter(x=>x.key!==key));
  if(typeof renderCartPage === 'function') renderCartPage();
}

/* ---------- WhatsApp ordering ---------- */
function buildWhatsAppOrderMessage(cart, totals){
  const user = getUser() || {};
  const delivery = getDelivery() || {};
  const lines = [];
  lines.push('🔔 *New Order — Bell N Tell*');
  lines.push('');
  lines.push('*Customer:* ' + (user.name || '-'));
  lines.push('*Phone:* ' + (delivery.phone || '-'));
  if(typeof delivery.lat === 'number' && typeof delivery.lng === 'number'){
    lines.push('*Location:* https://www.google.com/maps?q=' + delivery.lat + ',' + delivery.lng);
  }
  lines.push('');
  lines.push('*Items:*');
  cart.forEach(c=>{
    lines.push('• ' + c.qty + 'x ' + c.name + ' — Rs. ' + (c.price*c.qty).toFixed(2));
  });
  lines.push('');
  lines.push('Subtotal: Rs. ' + totals.subtotal.toFixed(2));
  lines.push('Delivery Fee: ' + (totals.fee===0 ? 'FREE' : 'Rs. ' + totals.fee.toFixed(2)));
  lines.push('*Total: Rs. ' + totals.total.toFixed(2) + '*');
  lines.push('');
  lines.push('Order ID: #' + totals.orderId);
  lines.push('');
  lines.push('Please confirm my order by replying to this message. Thank you! 🙏');
  return lines.join('\n');
}
function sendOrderToWhatsApp(cart, totals){
  const msg = buildWhatsAppOrderMessage(cart, totals);
  const url = 'https://wa.me/' + OWNER_WHATSAPP + '?text=' + encodeURIComponent(msg);
  window.open(url, '_blank');
}

/* ---------- geolocation ---------- */
function haversine(lat1, lon1, lat2, lon2){
  const R = 6371;
  const dLat = (lat2-lat1)*Math.PI/180;
  const dLon = (lon2-lon1)*Math.PI/180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

/* ---------- run on every page ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  updateCartBadge();
  // mark active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    if(a.getAttribute('href') === path) a.classList.add('active');
  });
  // reflect profile state in nav icon title
  const profileIcon = document.querySelector('.icon-link.profile-icon');
  if(profileIcon){
    const u = getUser();
    if(u) profileIcon.title = u.name;
  }
});

/* ── Food category pill filter ── */
(function () {
  var pills = document.querySelectorAll('.fcat');
  var cards = document.querySelectorAll('.order-photo-card');
  if (!pills.length) return;
  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      pills.forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
      var cat = pill.dataset.cat;
      cards.forEach(function (card) {
        if (cat === 'all' || card.dataset.cat === cat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
})();

/* ── Hide missing cat-tile images gracefully ── */
document.querySelectorAll('.cat-tile .ic img').forEach(function(img){
  img.addEventListener('error', function(){ this.style.display='none'; });
});


/* ============ ENHANCED ANIMATIONS & EFFECTS ============ */

/* ── Navbar scroll shadow ── */
(function(){
  var navbar = document.querySelector('.navbar');
  if(!navbar) return;
  window.addEventListener('scroll', function(){
    if(window.scrollY > 30) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }, {passive:true});
})();

/* ── Mark body as JS-ready so reveal animations activate ── */
document.body.classList.add('body-reveal-ready');

/* ── Scroll reveal using IntersectionObserver ──
   IMPORTANT: classes are added to HTML elements FIRST,
   then observed. Observer fires immediately for in-viewport elements. ── */
(function(){
  // Add reveal classes to elements FIRST
  document.querySelectorAll('.section-head').forEach(function(el){ el.classList.add('reveal'); });
  document.querySelectorAll('.cat-tile').forEach(function(el,i){
    el.classList.add('reveal');
    el.style.transitionDelay = (i * 0.07) + 's';
  });
  document.querySelectorAll('.order-photo-card').forEach(function(el,i){
    el.classList.add('reveal');
    el.style.transitionDelay = (i * 0.07) + 's';
  });
  document.querySelectorAll('.feature-card').forEach(function(el,i){
    el.classList.add('reveal');
    el.style.transitionDelay = (i * 0.15) + 's';
  });
  document.querySelectorAll('.deal-card').forEach(function(el,i){
    el.classList.add('reveal');
    el.style.transitionDelay = (i * 0.1) + 's';
  });
  document.querySelectorAll('.item-card').forEach(function(el,i){
    el.classList.add('reveal');
    el.style.transitionDelay = (i * 0.06) + 's';
  });
  var promo = document.querySelector('.promo-banner');
  if(promo) promo.classList.add('reveal');

  // Branch strip children
  var branch = document.querySelector('.branch-strip');
  if(branch){
    var ch = branch.children;
    if(ch[0]) ch[0].classList.add('reveal');
    if(ch[1]) ch[1].classList.add('reveal');
    if(ch[1]) ch[1].style.transitionDelay = '0.15s';
  }

  // Hero elements reveal immediately (already in viewport)
  var heroCopy = document.querySelector('.hero-copy');
  var heroArt = document.querySelector('.hero-art');
  if(heroCopy){ heroCopy.classList.add('reveal'); setTimeout(function(){ heroCopy.classList.add('in-view'); }, 50); }
  if(heroArt){ heroArt.classList.add('reveal'); setTimeout(function(){ heroArt.classList.add('in-view'); }, 200); }

  // NOW set up the observer — after all classes are added
  var all = document.querySelectorAll('.reveal');
  if(!all.length) return;

  // Fallback: if IntersectionObserver not supported, show everything
  if(!('IntersectionObserver' in window)){
    all.forEach(function(el){ el.classList.add('in-view'); });
    return;
  }

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.08, rootMargin: '0px 0px -30px 0px'});

  all.forEach(function(el){
    // Don't re-observe already visible hero elements
    if(!el.classList.contains('in-view')) io.observe(el);
  });
})();

/* ── Scroll-to-top button inside footer .bottom bar ── */
(function(){
  var bottomBar = document.querySelector('.footer .bottom');
  if(!bottomBar) return;
  var btn = document.createElement('button');
  btn.className = 'scroll-top-btn';
  btn.title = 'Back to top';
  btn.setAttribute('aria-label', 'Scroll to top');
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  btn.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });
  bottomBar.appendChild(btn);

  // Show only when footer is in view
  var footer = document.querySelector('.footer');
  if(!footer) return;
  if('IntersectionObserver' in window){
    var io2 = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting) btn.classList.add('visible');
        else btn.classList.remove('visible');
      });
    }, {threshold: 0.05});
    io2.observe(footer);
  } else {
    // Fallback: always show it
    btn.classList.add('visible');
  }
})();

/* ── Hero floating food particles ── */


/* ── Pulse animation on primary CTA ── */
(function(){
  var btn = document.querySelector('.hero-ctas .btn-primary');
  if(btn) btn.classList.add('pulse');
})();