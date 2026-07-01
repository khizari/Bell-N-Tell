/* ============ Bell N Tell — shared app logic ============ */
const BRANCH = {lat:30.196235, lng:71.510246, radiusKm:10, name:'Bell N Tell (Shah Rukn-e-Alam)',
  address:'Plot B 58, B Block, Shah Rukn-e-Alam Housing Scheme, Multan, Pakistan',
  mapsUrl:'https://maps.app.goo.gl/gh9beGScssr3FwYA6'};

/* Owner's WhatsApp number that receives every order.
   Format: country code + number, digits only — no +, no spaces, no leading 0.
   ⚠️ Replace with the real WhatsApp number before going live. */
const OWNER_WHATSAPP = '923092333121';

const CATS = [
  {id:'appetizer', name:'Appetizer', items:[
    {n:'Chicken Wings Chilli Dry (12 Pieces) (Half)', p:500},
    {n:'Chicken Wings Chilli Dry (12 Pieces) (Full)', p:1000},
    {n:'Bell N Tell Special Honey Chicken Wings (12 Pieces) (Half)', p:500},
    {n:'Bell N Tell Special Honey Chicken Wings (12 Pieces) (Full)', p:1000},
    {n:'Fish Cracker (Half)', p:300},
    {n:'Fish Cracker (Full)', p:600},
    {n:'French Fries', p:300},
  ]},
  {id:'chinese-soups', name:'Chinese Soups', items:[
    {n:'Bell N Tell Special Soup (Half)', p:750},
    {n:'Bell N Tell Special Soup (Full)', p:1400},
    {n:'Bell N Tell Special Four Tiger Soup (Half)', p:800},
    {n:'Bell N Tell Special Four Tiger Soup (Full)', p:1550},
    {n:'Hot & Sour Soup (Half)', p:600},
    {n:'Hot & Sour Soup (Full)', p:1180},
    {n:'Chicken Corn Soup (Half)', p:600},
    {n:'Chicken Corn Soup (Full)', p:1180},
    {n:'Chicken Thai Soup (Half)', p:600},
    {n:'Chicken Thai Soup (Full)', p:1180},
    {n:'Chicken Vegetable Soup (Half)', p:600},
    {n:'Chicken Vegetable Soup (Full)', p:1180},
  ]},
  {id:'fish', name:'Fish', items:[
    {n:'Finger Fish (10 Pieces with Fries) (Half)', p:1050},
    {n:'Finger Fish (10 Pieces with Fries) (Full)', p:2100},
    {n:'Dhaka Fish (8 Pieces with Fries) (Half)', p:1050},
    {n:'Dhaka Fish (8 Pieces with Fries) (Full)', p:2100},
    {n:'Fish with Green Chilli Dry (Half)', p:900},
    {n:'Fish with Green Chilli Dry (Full)', p:1700},
  ]},
  {id:'chicken', name:'Chicken', items:[
    {n:'Bell N Tell Special Cherry Chicken (Half)', p:950},
    {n:'Bell N Tell Special Cherry Chicken (Full)', p:1780},
    {n:'Bell N Tell Special Crispy Chicken (Half)', p:950},
    {n:'Bell N Tell Special Crispy Chicken (Full)', p:1780},
    {n:'Chicken Drum Sticks (Per Piece)', p:290},
    {n:'Chicken Nuggets (Half)', p:700},
    {n:'Chicken Nuggets (Full)', p:1400},
    {n:'Mongolian Chilli Dry (Half)', p:950},
    {n:'Mongolian Chilli Dry (Full)', p:1780},
    {n:'Chicken Chilli Dry (Half)', p:850},
    {n:'Chicken Chilli Dry (Full)', p:1600},
    {n:'Dhaka Chicken (Half)', p:950},
    {n:'Dhaka Chicken (Full)', p:1680},
    {n:'Almonds Chicken Chilli Dry (Half)', p:950},
    {n:'Almonds Chicken Chilli Dry (Full)', p:1780},
    {n:'Mongolian Chicken (Half)', p:950},
    {n:'Mongolian Chicken (Full)', p:1780},
    {n:'Chicken Manchurian (Half)', p:900},
    {n:'Chicken Manchurian (Full)', p:1680},
    {n:'Chicken with Black Pepper & Chillis (Half)', p:900},
    {n:'Chicken with Black Pepper & Chillis (Full)', p:1680},
    {n:'Chicken Chilli Vegetable (Half)', p:900},
    {n:'Chicken Chilli Vegetable (Full)', p:1680},
    {n:'Chicken with Pine Apple (Half)', p:900},
    {n:'Chicken with Pine Apple (Full)', p:1680},
    {n:'Sweet N Sour Chicken (Half)', p:900},
    {n:'Sweet N Sour Chicken (Full)', p:1680},
    {n:'Chicken with Chillis & Onion (Half)', p:900},
    {n:'Chicken with Chillis & Onion (Full)', p:1680},
    {n:'Chicken with Garlic Sauce (Half)', p:900},
    {n:'Chicken with Garlic Sauce (Full)', p:1680},
    {n:'Chicken Button Mushroom with Garlic Sauce (Half)', p:950},
    {n:'Chicken Button Mushroom with Garlic Sauce (Full)', p:1780},
    {n:'Chicken Mushroom Vegetable (Half)', p:950},
    {n:'Chicken Mushroom Vegetable (Full)', p:1780},
    {n:'Chicken Oyster Sauce (Half)', p:900},
    {n:'Chicken Oyster Sauce (Full)', p:1680},
    {n:'Chicken with Almonds (Half)', p:950},
    {n:'Chicken with Almonds (Full)', p:1780},
  ]},
  {id:'rice', name:'Rice', items:[
    {n:'Bell N Tell Special Fried Rice (Half)', p:780},
    {n:'Bell N Tell Special Fried Rice (Full)', p:1350},
    {n:'Vegetable Rice (Half)', p:550},
    {n:'Vegetable Rice (Full)', p:950},
    {n:'Egg Fried Rice (Half)', p:600},
    {n:'Egg Fried Rice (Full)', p:1050},
    {n:'Chicken Fried Rice (Half)', p:630},
    {n:'Chicken Fried Rice (Full)', p:1150},
    {n:'Chicken Masala Rice (Half)', p:630},
    {n:'Chicken Masala Rice (Full)', p:1150},
    {n:'Chicken Shashlic (with Masala Rice)', p:1200},
  ]},
  {id:'noodles', name:'Noodles', items:[
    {n:'Bell N Tell Special Chowmien (Half)', p:880},
    {n:'Bell N Tell Special Chowmien (Full)', p:1520},
    {n:'Vegetable Chowmien (Half)', p:600},
    {n:'Vegetable Chowmien (Full)', p:1100},
    {n:'Chicken Chowmien (Half)', p:780},
    {n:'Chicken Chowmien (Full)', p:1400},
    {n:'Thai Chowmien (Half)', p:780},
    {n:'Thai Chowmien (Full)', p:1400},
    {n:'Fish Chowmien (Half)', p:880},
    {n:'Fish Chowmien (Full)', p:1600},
  ]},
  {id:'chopsuey', name:'Chopsuey', items:[
    {n:'Bell N Tell Special Chopsuey', p:1500},
    {n:'American Chopsuey', p:1300},
    {n:'Chicken Chopsuey', p:1300},
  ]},
  {id:'burgers', name:'Burgers', items:[
    {n:'Bell N Tell Special Double Decker', p:650},
    {n:'Mega Chicken Burger (With Salad & Fries)', p:300},
    {n:'Mega Chicken Burger with Cheese (With Salad & Fries)', p:350},
    {n:'Mega Breast Chicken Burger (With Salad & Fries)', p:450},
    {n:'Mega Breast Chicken Burger with Cheese (With Salad & Fries)', p:500},
    {n:'French Chicken Burger (With Salad & Fries)', p:350},
    {n:'French Chicken Burger with Cheese (With Salad & Fries)', p:400},
    {n:'Mega Fish Burger (With Salad & Fries)', p:600},
    {n:'Mega Fish Burger with Cheese (With Salad & Fries)', p:650},
    {n:'French Fish Burger (With Salad & Fries)', p:650},
    {n:'French Fish Burger with Cheese (With Salad & Fries)', p:700},
    {n:'Zinger Burger (With Salad & Fries)', p:430},
    {n:'Zinger Burger with Cheese (With Salad & Fries)', p:480},
  ]},
  {id:'sandwiches', name:'Sandwiches', items:[
    {n:'California Club Sandwich (With Salad & Fries)', p:600},
    {n:'Chicken Salad Sandwich (With Salad & Fries)', p:500},
    {n:'Breast Chicken Sandwich (With Salad & Fries)', p:630},
    {n:'Executive Chicken Sandwich (With Salad & Fries)', p:650},
    {n:'Stuffed Chicken (With Salad & Fries)', p:800},
    {n:'Chicken Mushroom Omlete', p:800},
  ]},
  {id:'english-food', name:'English Food', items:[
    {n:'Grilled Chicken Shashlic (Hot Taste, Served with Egg Fried Rice, Tender Pieces of Marinated Chicken & Vegetables Grilled)', p:1100},
    {n:'Chicken Mexicana (With Oyster Sauce, Served with Garlic Rice, Marinated Pieces of Chicken Cooked in Tangy Tomato Sauce)', p:1100},
    {n:'Chicken Barcelona (Sliced Chicken Cooked in Herbs & Vegetables in Different Mediterranean Sauce, Served with White Rice)', p:1100},
  ]},
  {id:'sizzling-steaks', name:'Sizzling Steaks (Chicken)', items:[
    {n:'Pepper Steak', p:1200},
    {n:'Mushroom Steak', p:1200},
    {n:'Garlic Steak', p:1200},
    {n:'Hawaiian Steak', p:1200},
    {n:'American Steak', p:1200},
    {n:'Italian Steak', p:1200},
    {n:'Mexicana Steak', p:1200},
  ]},
  {id:'pakistani-chicken', name:'Pakistani Food (Chicken)', items:[
    {n:'Bell N Tell Special Chicken White Handi (Half)', p:1000},
    {n:'Bell N Tell Special Chicken White Handi (Full)', p:1900},
    {n:'Chicken Achari Handi (Half)', p:1000},
    {n:'Chicken Achari Handi (Full)', p:1900},
    {n:'Chicken Boneless Handi (Half)', p:950},
    {n:'Chicken Boneless Handi (Full)', p:1850},
    {n:'Chicken Achari Masala', p:1100},
    {n:'Bell N Tell Special Chicken Butter Balti', p:1500},
    {n:'Chicken White Karahi (Half)', p:1000},
    {n:'Chicken White Karahi (Full)', p:1900},
    {n:'Chicken Karahi (Half)', p:950},
    {n:'Chicken Karahi (Full)', p:1850},
    {n:'Batair Karahi (Half)', p:800},
    {n:'Batair Karahi (Full)', p:1600},
    {n:'Chicken Hari Mirch', p:1150},
    {n:'Chicken Shahjahani', p:1100},
    {n:'Arabian Chicken', p:1150},
    {n:'Chicken Kabab Masala', p:1100},
    {n:'Chicken Ginger', p:1100},
    {n:'Chicken Jalfrazy', p:1100},
    {n:'Chicken Green Masala', p:1150},
    {n:'Madrasi Chicken', p:1150},
    {n:'Shahi Dal', p:700},
    {n:'Dal Fried', p:350},
    {n:'Chicken Mix Vegetable', p:650},
    {n:'Mix Vegetable', p:350},
    {n:'Tawa Chicken', p:1300},
  ]},
  {id:'pakistani-mutton', name:'Pakistani Food (Mutton)', items:[
    {n:'Bell N Tell Special Mutton Handi (Half)', p:2300},
    {n:'Bell N Tell Special Mutton Handi (Full)', p:4400},
    {n:'Mutton Handi Boneless (Half)', p:2250},
    {n:'Mutton Handi Boneless (Full)', p:4300},
    {n:'Mutton Green Chilli Lemon (Half)', p:2250},
    {n:'Mutton Green Chilli Lemon (Full)', p:4300},
    {n:'Mutton White Karahi (Half)', p:2200},
    {n:'Mutton White Karahi (Full)', p:4200},
    {n:'Mutton Karahi (Half)', p:2300},
    {n:'Mutton Karahi (Full)', p:4400},
    {n:'Mutton Achari Handi Boneless (Half)', p:2300},
    {n:'Mutton Achari Handi Boneless (Full)', p:4300},
    {n:'Mutton Achari Masala with Bone', p:2000},
    {n:'Mutton Hari Mirch', p:2000},
    {n:'Mutton Shahjahani', p:2000},
  ]},
  {id:'bar-bq', name:'Bar B.Q', items:[
    {n:'Chicken Tikka Piece (1 Piece)', p:470},
    {n:'Chicken Arabian Tikka Piece (1 Piece)', p:490},
    {n:'Chicken Tawa Piece (1 Piece with 1 Masala Roti)', p:500},
    {n:'Chicken Green Boti (12 Pieces)', p:1300},
    {n:'Chicken Boti (12 Pieces)', p:1250},
    {n:'Chicken Malai Boti (14 Pieces)', p:1350},
    {n:'Chicken Achari Boti (12 Pieces)', p:1300},
    {n:'Chicken Reshmi Boti (12 Pieces)', p:1350},
    {n:'Chicken Behari Boti (12 Pieces)', p:1350},
    {n:'Chicken Kastoori Boti (10 Pieces)', p:1400},
    {n:'Rajistani Boti (12 Pieces)', p:1300},
    {n:'Labanese Kabab (9 Pieces)', p:1500},
    {n:'Makhmali Kabab (12 Pieces)', p:1500},
    {n:'Chicken Seekh Kabab (6 Pieces)', p:1200},
    {n:'Chicken Reshmi Kabab (6 Pieces)', p:1400},
    {n:'Chicken Kalmi Tikka (6 Pieces)', p:1250},
    {n:'Fish Tikka (10 Pieces)', p:2100},
    {n:'Pizza Kabab', p:1300},
    {n:'Mughlai Boti', p:1250},
    {n:'Lahori Boti', p:1250},
    {n:'Afghani Kabab', p:1250},
  ]},
  {id:'tandoor', name:'Tandoor', items:[
    {n:'Salad',                          p:100},
    {n:'Raita',                          p:100},
    {n:'Roti (Per Head)',                p:80},
    {n:'Masala Roti (Per Piece)',        p:70},
    {n:'Ginger Nan (Per Piece)',         p:100},
    {n:'Garlic Nan (Per Piece)',         p:100},
    {n:'Roghani Nan (Per Piece)',        p:90},
    {n:'Tandoori Paratha (Per Piece)',   p:80},
    {n:'Variety of Salad (Per Plate)',   p:450},
    {n:'Variety of Salad (Per Bowl)',    p:850},
  ]},
  {id:'royal-drinks', name:'Royal Drinks', items:[
    {n:'Pina Colada',                    p:350},
    {n:'Pink Lady',                      p:350},
    {n:'Hawaian Dream',                  p:350},
    {n:'Singapore Supreme',              p:350},
    {n:'Fruit Punch',                    p:350},
    {n:'Peach Mariner',                  p:350},
  ]},
  {id:'ice-cream', name:'Ice Cream', items:[
    {n:'Bell N Tell Special Surprise Ice Cream', p:500},
    {n:'Bell N Tell Special Club Tutti Frutti',  p:500},
    {n:'Vanilla',                        p:210},
    {n:'Kulfa',                          p:210},
    {n:'Pistachio',                      p:210},
    {n:'Mango',                          p:210},
    {n:'Fruit Strawberry',               p:210},
    {n:'Chocolate Chip',                 p:210},
    {n:'Caramel Crunch',                 p:210},
    {n:'Tutti Frutti',                   p:400},
    {n:'Cold Coffee with Ice Cream',     p:400},
  ]},
  {id:'juices', name:'Seasonal Fresh Juices', items:[
    {n:'Falsa',                          p:250},
    {n:'Strawberry',                     p:250},
    {n:'Mix Fruit',                      p:300},
    {n:'Apple',                          p:300},
    {n:'Peach',                          p:300},
  ]},
  {id:'milk-shakes', name:'Milk Shakes', items:[
    {n:'Bell N Tell Special Power Shake', p:400},
    {n:'Banana',                         p:250},
    {n:'Mango',                          p:300},
    {n:'Apple',                          p:300},
    {n:'Strawberry',                     p:300},
    {n:'Mix Fruit',                      p:300},
    {n:'Peach',                          p:300},
    {n:'Vanilla',                        p:350},
    {n:'Chocolate',                      p:350},
  ]},
  {id:'cold-drinks', name:'Cold Drinks', items:[
    {n:'Soft Drink (Pepsi, 7up, Mirinda, Dew)', p:80},
    {n:'Soft Drink Tin',                 p:130},
    {n:'Soft Drink (Diet)',              p:130},
    {n:'Mineral Water (Large)',          p:95},
    {n:'Mineral Water (Small)',          p:60},
    {n:'Fresh Lemon with Soda',          p:120},
    {n:'Fresh Lemon with Soda (Diet)',   p:150},
    {n:'Spanish Margarita',              p:200},
    {n:'Mint Margarita',                 p:200},
  ]},
  /* more categories (Chinese, Pakistani, BBQ, Fast Food, English) to be added once shared */
];

const DEALS = [
  {n:'Special Platter (2-ps)',              p:1350, items:[
    'Chicken Chowmein',
    'Chicken Manchurian',
    'Dhaka Chicken',
  ]},
  {n:'5 in 1 BBQ Platter',                  p:4000, items:[
    'Chicken Kabab (4 Piece)',
    'Rajistani Boti (8 Piece)',
    'Chicken Tikka Boti (8 Piece)',
    'Fish Tikka (4 Piece)',
    'Chicken Kalmi Tikka (4 Piece)',
  ]},
  {n:'Special BBQ Platter',                 p:4000, items:[
    'Chicken Handi',
    'Chicken Rice',
    'Chicken Malai Boti (8 Pcs)',
    'Bread Basket (Roti, Nan)',
    'Raita Salad',
  ]},
  {n:'Kabli Platter (2-Ps)',                p:1450, items:[
    'Afghani Palao',
    'Chicken Kabab (2 piece)',
    'Lahori Boti (2 piece)',
    'Mughlai Boti (2 piece)',
  ]},
  {n:'Special Platter (2-ps) — Chilli Chicken', p:1500, items:[
    'Chicken Chilli Dry',
    'Chicken Black Pepper Chilli',
    'Chicken Rice',
  ]},
  {n:'Party BBQ Platter',                   p:6300, items:[
    'Chicken Kabab (6 Piece)',
    'Rajistani Boti (12 Piece)',
    'Chicken Tikka Boti (12 Piece)',
    'Fish Tikka (8 Piece)',
    'Chicken Kalmi Tikka (6 Piece)',
  ]},
  {n:'Special Platter (2-ps) — Hari Mirch',  p:1800, items:[
    'Chicken Kabab (2 Piece)',
    'Chicken Tikka Boti (2 Piece)',
    'Chicken Hari Mirch',
    'Bread Basket (Roti, Roghani Nan)',
    'Raita',
  ]},
  {n:'3 In One Regular (Take Away)',        p:1250, items:[
    'Chicken Rice',
    'Chicken Manchurian',
    'Dhaka Chicken',
  ]},
  {n:'3 In One Special (Take Away)',        p:1300, items:[
    'Chicken Chowmein',
    'Chicken Manchurian',
    'Dhaka Chicken',
  ]},
];
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

/* ── Hide missing category/deal photos gracefully until real photos are added ── */
document.querySelectorAll('.opc-asset-bg img, .promo-photo img').forEach(function(img){
  img.addEventListener('error', function(){ this.closest('.opc-asset-bg, .promo-photo').classList.add('img-missing'); this.style.display='none'; });
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