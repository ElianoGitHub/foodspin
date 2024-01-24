// Constants and variables
const Foods = [
    { name: 'Spaghetti Bolognese', imageUrl: 'https://i.imgur.com/z43qKUS.png' },
    { name: 'Chicken Alfredo Pasta', imageUrl: 'https://i.imgur.com/hfrfdvl.png' },
    { name: 'Beef Stir-Fry with Vegetables', imageUrl: 'https://i.imgur.com/1mHYthl.png' },
    { name: 'Margherita Pizza', imageUrl: 'https://i.imgur.com/sZ0V8Qc.png' }, 
    { name: 'Chicken Parmesan ', imageUrl: 'https://i.imgur.com/qN5gpUv.png' }, 
    { name: 'Shrimp Scampi', imageUrl: 'https://i.imgur.com/JXBFkWy.png' },
    { name: 'Chicken Fajitas', imageUrl: 'https://i.imgur.com/dKAqmJN.png' },
    { name: 'Classic Caesar Salad', imageUrl: 'https://i.imgur.com/9fvXXXc.png' },
    { name: 'Beef Tacos', imageUrl: 'https://i.imgur.com/DobFxNt.png' },
    { name: 'Chicken Teriyaki', imageUrl: 'https://i.imgur.com/TvGQdu7.png' },
    { name: 'Vegetarian Chili', imageUrl: 'https://i.imgur.com/opKQjni.png' },
    { name: 'Eggplant Parmesan', imageUrl: 'https://i.imgur.com/65qvcXs.png' },
    { name: 'Caprese Sandwich', imageUrl: 'https://i.imgur.com/b0yJRfg.png' },
    { name: 'Lemon Herb Roasted Chicken', imageUrl: 'https://i.imgur.com/xRVittN.png' },
    { name: 'Spinach and Feta Stuffed Chicken Breast', imageUrl: 'https://i.imgur.com/CPEYd5D.png' },
    { name: 'Beef and Broccoli', imageUrl: 'https://i.imgur.com/lmM7h8s.png' },
    { name: 'Grilled Salmon with Lemon-Dill Sauce', imageUrl: 'https://i.imgur.com/iujb4yp.png' },
    { name: 'Mushroom Risotto', imageUrl: 'https://i.imgur.com/MRUqD3t.png' },
    { name: 'Sazerac', imageUrl: 'https://i.imgur.com/n0hp1FM.png' },
    { name: 'Chicken Shawarma', imageUrl: 'https://i.imgur.com/QMQcSb9.png' },
    { name: 'Pesto Pasta with Cherry Tomatoes', imageUrl: 'https://i.imgur.com/kWhtD4v.png' },
    { name: 'BBQ Pulled Pork Sandwiches', imageUrl: 'https://i.imgur.com/1vjQOu9.png' },
    { name: 'Vegetable Curry', imageUrl: 'https://i.imgur.com/b48Qjv3.png' },
    { name: 'Chicken Marsala', imageUrl: 'https://i.imgur.com/CYipRlk.png' },
    { name: 'Ratatouille', imageUrl: 'https://i.imgur.com/V3NZpGR.png' },
    { name: 'Beef and Black Bean Enchiladas', imageUrl: 'https://i.imgur.com/XyoU82I.png' },
    { name: 'Greek Gyro Wrap', imageUrl: 'https://i.imgur.com/YZyMNYx.png' },
    { name: 'Creamy Garlic Butter Shrimp', imageUrl: 'https://i.imgur.com/Oj8b7nO.png' },
    { name: 'Chicken Piccata', imageUrl: 'https://i.imgur.com/z5SyyEx.png' },
    { name: 'Spinach and Artichoke Dip', imageUrl: 'https://i.imgur.com/oJdJSev.png' },
    { name: 'Paella', imageUrl: 'https://i.imgur.com/mzZsATx.png' },
    { name: 'Dumplings', imageUrl: 'https://i.imgur.com/bTBsHWe.png' },
    { name: 'Cacio e Pepe', imageUrl: 'https://i.imgur.com/55XQZHa.png' },
    { name: 'Steak Sandwich', imageUrl: 'https://i.imgur.com/NnGAtYN.png' },
    { name: 'Lebanese Stuffed Grape Leaves (Warak Enab)', imageUrl: 'https://i.imgur.com/XHxkYlu.png' },
    { name: 'Thai Green Curry', imageUrl: 'https://i.imgur.com/3YB5dwJ.png' },
    { name: 'Garlic Butter Herb Roasted Potatoes', imageUrl: 'https://i.imgur.com/CpnWXzS.png' },
    { name: 'Chicken Quesadillas', imageUrl: 'https://i.imgur.com/Bo7cVHB.png' },
    { name: 'Beef Kebabs with Chimichurri Sauce', imageUrl: 'https://i.imgur.com/VAVE20A.png' },
    { name: 'Sweet Potato and Black Bean Tacos', imageUrl: 'https://i.imgur.com/TAF9dPo.png' },
    { name: 'Baked Ziti', imageUrl: 'https://i.imgur.com/ODFJkWM.png' },
    { name: 'Stuffed Grape Leaves (Dolma) Turkish Style', imageUrl: 'https://i.imgur.com/P913dU1.png' },
    { name: 'Korean Fried Chicken', imageUrl: 'https://i.imgur.com/7XSEkmr.png' },
    { name: 'Chicken Biryani', imageUrl: 'https://i.imgur.com/QNkDZwE.png' },
    { name: 'Chicken Bacon Ranch Wrap', imageUrl: 'https://i.imgur.com/JZFJmV4.png' },
    { name: 'Chicken Enchiladas', imageUrl: 'https://i.imgur.com/hqTIgAz.png' },
    { name: 'Shrimp Dynamite Sushi Roll', imageUrl: 'https://i.imgur.com/yOj5NTT.png' },
    { name: 'Pho', imageUrl: 'https://i.imgur.com/sDCokjD.png' },
    { name: 'Sausage and Peppers Sandwich', imageUrl: 'https://i.imgur.com/wh70A4l.png' },
    { name: 'Chicken Satay Skewers', imageUrl: 'https://i.imgur.com/35HGSCn.png' },
    { name: 'Vegetable Lasagna', imageUrl: 'https://i.imgur.com/yFt0tPA.png' },
    { name: 'Baked Lemon Herb Cod', imageUrl: 'https://i.imgur.com/ZpDgclv.png' },
    { name: 'Tomato Basil Bruschetta', imageUrl: 'https://i.imgur.com/9BhlpEf.png' },
    { name: 'Spicy Tofu Stir-Fry', imageUrl: 'https://i.imgur.com/bip5UUV.png' },
    { name: 'Chicken and Broccoli Alfredo', imageUrl: 'https://i.imgur.com/ORKfHy4.png' },
    { name: 'Cuban Sandwich', imageUrl: 'https://i.imgur.com/11fyO0V.png' },
    { name: 'Szechuan Beef', imageUrl: 'https://i.imgur.com/hRxwjz0.png' },
    { name: 'Greek Salad with Grilled Chicken', imageUrl: 'https://i.imgur.com/7XF61z2.png' },
    { name: 'Chicken Tikka Masala', imageUrl: 'https://i.imgur.com/KvNT8sB.png' },
    { name: 'Egg Fried Rice', imageUrl: 'https://i.imgur.com/k0pmtNo.png' },
    { name: 'Buffalo Chicken Wrap', imageUrl: 'https://i.imgur.com/yn2BruU.png' },
    { name: 'Beef Wellington', imageUrl: 'https://i.imgur.com/jUgTFTh.png' },
    { name: 'Quiche Lorraine', imageUrl: 'https://i.imgur.com/P2aDlgy.png' },
    { name: 'Classic Club Sandwich', imageUrl: 'https://i.imgur.com/U0Qh52G.png' },
    { name: 'Beef and Mushroom Stroganoff', imageUrl: 'https://i.imgur.com/Ske1APC.png' },
    { name: 'Chicken Pesto Panini', imageUrl: 'https://i.imgur.com/bRRd0Bn.png' },
    { name: 'Mediterranean Baked Fish', imageUrl: 'https://i.imgur.com/qnpAci9.png' },
    { name: 'BBQ Chicken Pizza', imageUrl: 'https://i.imgur.com/GZmYXDU.png' },
    { name: 'Spinach and Bacon Quiche', imageUrl: 'https://i.imgur.com/WEZubZe.png' },
    { name: 'Chicken and Rice Casserole', imageUrl: 'https://i.imgur.com/tubJ1HM.png' },
    { name: 'Cordon Bleu', imageUrl: 'https://i.imgur.com/kF4LBHu.png' },
    { name: 'Falafel Wrap', imageUrl: 'https://i.imgur.com/2KKQUPG.png' },
    { name: 'Honey Mustard Glazed Salmon', imageUrl: 'https://i.imgur.com/huxaa7O.png' },
    { name: 'Stuffed Portobello Mushrooms', imageUrl: 'https://i.imgur.com/lN5dUmY.png' },
    { name: 'Chicken Korma', imageUrl: 'https://i.imgur.com/hUMW7Ul.png' },
    { name: 'Blackened Fish Tacos', imageUrl: 'https://i.imgur.com/wBTjVed.png' },
    { name: 'Classic Hamburger with Bun or Lettuce Wrap', imageUrl: 'https://i.imgur.com/eg3Y3xC.png' },
    { name: 'Italian Sausage and Peppers Pasta', imageUrl: 'https://i.imgur.com/7HnR5Zc.png' },
    { name: 'Chicken Gyro Bowl', imageUrl: 'https://i.imgur.com/dpNTIlN.png' },
    { name: 'Halloumi Sandwich', imageUrl: 'https://i.imgur.com/aK1P1a7.png' },
    { name: 'Nashville Chicken Sandwich', imageUrl: 'https://i.imgur.com/sQ29aYY.png' },
    { name: 'Russian Salad', imageUrl: 'https://i.imgur.com/GrTTmKA.png' },
    { name: 'Avocado Dragon Roll', imageUrl: 'https://i.imgur.com/UHnumtG.png' },
    { name: 'Summer Roll', imageUrl: 'https://i.imgur.com/ivljDmb.png' },
    { name: 'Grilled Cheese With Tomato Soup', imageUrl: 'https://i.imgur.com/zVDvSqJ.png' },
    { name: 'Beef Burritos', imageUrl: 'https://i.imgur.com/rfwmOaM.png' },
    { name: 'Creamy Tomato Basil Soup', imageUrl: 'https://i.imgur.com/9tUP2ka.png' },
    { name: 'Chicken Caesar Pasta Salad', imageUrl: 'https://i.imgur.com/Udo5pr6.png' },
    { name: 'Veggie Burger with Avocado', imageUrl: 'https://i.imgur.com/2p9b5KS.png' },
    { name: 'Birria Tacos', imageUrl: 'https://i.imgur.com/yEUCuf1.png' },
    { name: 'Shrimp and Avocado Salad', imageUrl: 'https://i.imgur.com/ZfaL7QI.png' },
    { name: 'Roasted Vegetable Wrap', imageUrl: 'https://i.imgur.com/jCPbPmT.png' },
    { name: 'Chicken Pad Thai', imageUrl: 'https://i.imgur.com/yz7kG5F.png' },
    { name: 'Thai Basil Beef Stir-Fry', imageUrl: 'https://i.imgur.com/eLpE4sz.png' },
    { name: 'Portobello Mushroom Burger', imageUrl: 'https://i.imgur.com/Th4Uf23.png' },
    { name: 'Chicken Pesto Risotto', imageUrl: 'https://i.imgur.com/FsjCCiV.png' },
    { name: 'Ramen', imageUrl: 'https://i.imgur.com/sYqz20p.png' },
    { name: 'BBQ Pulled Chicken Sliders', imageUrl: 'https://i.imgur.com/ACENATp.png' },
    { name: 'Fish ’n’ Chips', imageUrl: 'https://i.imgur.com/wd4ybuk.png' }, 
    { name: 'Gnocchi ', imageUrl: 'https://i.imgur.com/aQVxY6p.png' }, 
    { name: 'Pierogi with Potato and Cheese Filling', imageUrl: 'https://i.imgur.com/YwBoDO7.png' },
    { name: 'Margherita Stuffed Chicken', imageUrl: 'https://i.imgur.com/B1N1COn.png' },
    { name: 'Korean BBQ Beef Tacos', imageUrl: 'https://i.imgur.com/M2lpCBR.png' },
    { name: 'Roasted Red Pepper Hummus Wrap', imageUrl: 'https://i.imgur.com/a7hSsA6.png' },
    { name: 'Lemon Garlic Butter Shrimp Pasta', imageUrl: 'https://i.imgur.com/F8HjEYa.png' },
    { name: 'Butter Chicken with Naan', imageUrl: 'https://i.imgur.com/ZtzttZo.png' },
    { name: 'Beef and Cabbage Stir-Fry', imageUrl: 'https://i.imgur.com/4h5X363.png' },
    { name: 'Smoked Salmon Bagel', imageUrl: 'https://i.imgur.com/p9zlfjX.png' },
    { name: 'Chicken Sausage and Kale Soup', imageUrl: 'https://i.imgur.com/zNW4jSR.png' },
    { name: 'Mediterranean Chicken Skewers', imageUrl: 'https://i.imgur.com/dsqT5rs.png' },
    { name: 'Caprese Quinoa Bowl', imageUrl: 'https://i.imgur.com/1yZ0nmL.png' },
    { name: 'Spicy Garlic Butter Shrimp Tacos', imageUrl: 'https://i.imgur.com/OBwHXxM.png' },
    { name: 'Chicken Alfredo Lasagna', imageUrl: 'https://i.imgur.com/bfbrFGw.png' },
    { name: 'BBQ Ribs', imageUrl: 'https://i.imgur.com/Ull35xw.png' },
    { name: 'Tuna Salad', imageUrl: 'https://i.imgur.com/x63DZBm.png' },
    { name: 'BBQ Chicken Quesadillas', imageUrl: 'https://i.imgur.com/DEwa7PG.png' },
    { name: 'Tabbouli', imageUrl: 'https://i.imgur.com/Hkvh0sl.png' },
    { name: 'Tuna Melt', imageUrl: 'https://i.imgur.com/F7Lru8a.png' },
    { name: 'Roasted Leg of Lamb (Gigot d’Agneau)', imageUrl: 'https://i.imgur.com/O8cA9zs.png' },
    { name: 'Moussaka', imageUrl: 'https://i.imgur.com/M4ySs1R.png' },
    { name: 'Chicken Supreme', imageUrl: 'https://i.imgur.com/0R730AZ.png' },
    { name: 'New England Clam Chowder', imageUrl: 'https://i.imgur.com/Ag0LpmP.png' },
    { name: 'Lobster Roll', imageUrl: 'https://i.imgur.com/JSwNYJO.png' },
    { name: 'Deep Dish Chicago Pizza', imageUrl: 'https://i.imgur.com/ZLh3mh6.png' },
    { name: 'Feijoada', imageUrl: 'https://i.imgur.com/HVVbFrs.png' },
    { name: 'Flank Steak with Chimichurri', imageUrl: 'https://i.imgur.com/qzyabgA.png' },
    { name: 'Chicken Stroganoff', imageUrl: 'https://i.imgur.com/zomiy2o.png' },
    { name: 'Chicken Parm Ciabatta', imageUrl: 'https://i.imgur.com/gtM2DFV.png' },
    { name: 'Octopus Ceviche', imageUrl: 'https://i.imgur.com/QWhJOTk.png' },
    { name: 'Turkey Burger', imageUrl: 'https://i.imgur.com/4ufnqC6.png' },
    { name: 'Shepherd’s Pie', imageUrl: 'https://i.imgur.com/auqNs9s.png' },
    { name: 'Calzone', imageUrl: 'https://i.imgur.com/yu4zEqd.png' },
    { name: 'Roast Beef with Roasted Potatoes', imageUrl: 'https://i.imgur.com/KN8vTpM.png' },
    { name: 'Coxinha', imageUrl: 'https://i.imgur.com/WnOJfhr.png' },
    { name: 'Khachapuri (Georgian Cheese Bread)', imageUrl: 'https://i.imgur.com/UbufkEi.png' },
    { name: 'Chicken Pesto Zoodles', imageUrl: 'https://i.imgur.com/EDVSo97.png' },
    { name: 'BBQ Chickpea Salad', imageUrl: 'https://i.imgur.com/dUo9Bin.png' },
    { name: 'Margherita Frittata', imageUrl: 'https://i.imgur.com/IPIlsiW.png' },
    { name: 'Thai Basil Chicken', imageUrl: 'https://i.imgur.com/oT6cCB4.png' },
    { name: 'Mediterranean Stuffed Bell Peppers', imageUrl: 'https://i.imgur.com/MxTN8ao.png' },
    { name: 'Bun Bo Hue (Spicy Vietnamese Beef Noodle Soup)', imageUrl: 'https://i.imgur.com/o7gIgTD.png' },
    { name: 'Manti', imageUrl: 'https://i.imgur.com/WuymBrO.png' },
    { name: 'Lemon Herb Grilled Lamb Chops', imageUrl: 'https://i.imgur.com/Xol88Dk.png' },
    { name: 'Teriyaki Salmon Salad', imageUrl: 'https://i.imgur.com/I7BpC3T.png' },
    { name: 'Shrimp and Avocado Wrap', imageUrl: 'https://i.imgur.com/a0QUrv4.png' },
    { name: 'Creamy Steak Linguine', imageUrl: 'https://i.imgur.com/sRzviur.png' },
    { name: 'One-Pan Coconut-Lime Chicken', imageUrl: 'https://i.imgur.com/0mS8ebS.png' },
    { name: 'Chicken and Broccoli Stir-Fry', imageUrl: 'https://i.imgur.com/5RYaxQn.png' },
    { name: 'Caprese Stuffed Portobello Mushrooms', imageUrl: 'https://i.imgur.com/vwU6Zx9.png' },
    { name: 'BBQ Chicken Stuffed Sweet Potatoes', imageUrl: 'https://i.imgur.com/bwLV8ZO.png' },
    { name: 'Lemon Herb Grilled Shrimp Skewers', imageUrl: 'https://i.imgur.com/2voGXMR.png' },
    { name: 'Pesto Chicken Quinoa Bowl', imageUrl: 'https://i.imgur.com/eGgIAE2.png' },
    { name: 'Veggie and Hummus Wrap', imageUrl: 'https://i.imgur.com/ISxfDbO.png' },
    { name: 'Garlic Parmesan Baked Chicken Wings', imageUrl: 'https://i.imgur.com/BiZs8ln.png' },
    { name: 'Thai Green Curry with Tofu', imageUrl: 'https://i.imgur.com/pMr0iaE.png' },
    { name: 'Mediterranean Baked Eggplant Rolls', imageUrl: 'https://i.imgur.com/zTQLFiB.png' },
    { name: 'Chicken Caesar Stuffed Avocado', imageUrl: 'https://i.imgur.com/iqhTGSt.png' },
    { name: 'Crispy Fish Burger', imageUrl: 'https://i.imgur.com/ZFrkx7l.png' },
    { name: 'Margherita Chicken Skillet', imageUrl: 'https://i.imgur.com/FsuAdCE.png' },
    { name: 'French Onion Soup', imageUrl: 'https://i.imgur.com/iwFW9B4.png' },
    { name: 'Steak Schnitzel', imageUrl: 'https://i.imgur.com/KeNj0j8.png' },
    { name: 'Crispy Cheese Rolls', imageUrl: 'https://i.imgur.com/xhWMY65.png' },
    { name: 'Sfeeha', imageUrl: 'https://i.imgur.com/USFX0aF.png' },
    { name: 'Cubano Crêpe', imageUrl: 'https://i.imgur.com/94wITk2.png' },
    { name: 'Carrillada', imageUrl: 'https://i.imgur.com/G6ll8fI.png' },
    { name: 'BBQ Chicken Cobb Salad', imageUrl: 'https://i.imgur.com/NPTJMIR.png' },
    { name: 'French Croque-Monsieur', imageUrl: 'https://i.imgur.com/MbgOKhy.png' },
    { name: 'Popcorn Chicken', imageUrl: 'https://i.imgur.com/bheno58.png' },
    { name: 'Crispy Fried Calamari', imageUrl: 'https://i.imgur.com/iRr9l8k.png' },
    { name: 'Chicken Alfredo Stuffed Mushrooms', imageUrl: 'https://i.imgur.com/hP4lzCe.png' },
    { name: 'Peking Duck Wraps', imageUrl: 'https://i.imgur.com/sFa30p2.png' },
    { name: 'Short Rib Bourguignon', imageUrl: 'https://i.imgur.com/DGvh1qq.png' },
    { name: 'Mac ’n Cheese Bacon Burger', imageUrl: 'https://i.imgur.com/CFWBwq6.png' },
    { name: 'Shish-Barak', imageUrl: 'https://i.imgur.com/hdTIsyw.png' },
    { name: 'Birria Ramen', imageUrl: 'https://i.imgur.com/eJM5FCT.png' },
    { name: 'Tahdig (Persian Crispy Rice)', imageUrl: 'https://i.imgur.com/NTBCy0j.png' },
    { name: 'Roast Beef Sandwich with Au Jus Dip', imageUrl: 'https://i.imgur.com/ch2Jr8k.png' },
    { name: 'Guacamole with Homemade Chips', imageUrl: 'https://i.imgur.com/QIGvYy0.png' },
    { name: 'Molokhia', imageUrl: 'https://i.imgur.com/ipCGw6c.png' },
    { name: 'Poutine', imageUrl: 'https://i.imgur.com/UiPQAI9.png' },
    { name: 'Choripan', imageUrl: 'https://i.imgur.com/Ke2Oryf.png' },
    { name: 'Chili Crab', imageUrl: 'https://i.imgur.com/J4HUR95.png' },
    { name: 'Teriyaki Tofu Spring Rolls', imageUrl: 'https://i.imgur.com/wh1oAzy.png' },
    { name: 'Somtam (Papaya Salad)', imageUrl: 'https://i.imgur.com/rC83Kw0.png' },
    { name: 'Halloumi Kale Salad with Calamari ', imageUrl: 'https://i.imgur.com/V0Qqzxr.png' },
    { name: 'Garlic Parmesan Roasted Brussels Sprouts', imageUrl: 'https://i.imgur.com/yFfKZ1Z.png' },
    { name: 'Sloppy Bao Buns', imageUrl: 'https://i.imgur.com/qySOiwM.png' },
    { name: 'Red Curry Risotto With Shrimp', imageUrl: 'https://i.imgur.com/MAkWSQA.png' },
    { name: 'Salmon Sushi Burrito', imageUrl: 'https://i.imgur.com/QkxHEtV.png' },
    { name: 'Kung Pao Chicken Wings', imageUrl: 'https://i.imgur.com/X6WXDRy.png' },
    { name: 'Ramen Carbonara', imageUrl: 'https://i.imgur.com/wzuZQLD.png' },
    { name: 'Arepa de Pabellón', imageUrl: 'https://i.imgur.com/ueRCH7H.png' },
    { name: 'Chicken and Waffles', imageUrl: 'https://i.imgur.com/IR2n7qh.png' },
    { name: 'BLT Croissants', imageUrl: 'https://i.imgur.com/NRL5RWP.png' },
    { name: 'Eggs Benedict', imageUrl: 'https://i.imgur.com/S89Sg3l.png' },
    { name: 'Keto Cauliflower Pizza', imageUrl: 'https://i.imgur.com/ef01XWr.png' },
    { name: 'Corned Beef Pretzel Sliders', imageUrl: 'https://i.imgur.com/8Uq2PwK.png' },
    { name: 'Loaded Baked Potato', imageUrl: 'https://i.imgur.com/MsRSHhx.png' },
    { name: 'Chicken Chow Mein', imageUrl: 'https://i.imgur.com/KN26Uur.png' },
    { name: 'Escalope chasseur with spaetzle', imageUrl: 'https://i.imgur.com/AAEA92y.png' },
];

const colors = ['#0CC0DF', '#666666', '#A6A6A6', '#0E8FA6', '#D9D9D9'];
const sectors = Foods.map((Food, index) => ({
    color: colors[index % colors.length],
    label: Food.name
}));

const rand = (m, M) => Math.random() * (M - m) + m;
const tot = sectors.length;
const spinEl = document.querySelector('#spin');
const ctx = document.querySelector('#wheel').getContext('2d');
const dia = ctx.canvas.width;
const rad = dia / 2;
const PI = Math.PI;
const TAU = 2 * PI;
const arc = TAU / sectors.length;

const friction = 0.991;
let angVel = 0;
let ang = 0;

const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot;

function drawSector(sector, i) {
    const ang = arc * i;
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = sector.color;
    ctx.moveTo(rad, rad);
    ctx.arc(rad, rad, rad, ang, ang + arc);
    ctx.lineTo(rad, rad);
    ctx.fill();
    ctx.translate(rad, rad);
    ctx.rotate(ang + arc / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#002c33';
    ctx.font = 'bold 7.5px Arial';
    ctx.fillText(sector.label, rad - 12, 4);
    ctx.restore();
}

function rotate() {
    const sector = sectors[getIndex()];
    ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;

    // Set the spin button to display the cocktail image
    spinEl.style.backgroundImage = `url(${Foods.find(c => c.name === sector.label).imageUrl})`;

    if (angVel < 0.002) {
        angVel = 0;
        displayFoodDetails(sector);
    }
}

function displayFoodDetails(sector) {
    const selectedFood = detailedFoods.find(c => c.name === sector.label); // Ensure detailedCocktails is defined
    document.getElementById('FoodName').textContent = selectedFood.name;
    document.getElementById('FoodImage').src = selectedFood.imageUrl;
    const ingredientsList = document.getElementById('ingredientsList');
    ingredientsList.innerHTML = '';
    selectedFood.ingredients.forEach(ingredient => {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient;
        ingredientsList.appendChild(listItem);
    });
    const instructionsList = document.getElementById('instructionsList');
instructionsList.innerHTML = ''; // Clear previous content
// Assuming you have a list of instructions in a property called 'instructions' within each cocktail object
selectedFood.instructions.forEach(instruction => {
    const listItem = document.createElement('li');
    listItem.textContent = instruction;
    instructionsList.appendChild(listItem);
});
}

function frame() {
    if (!angVel) return;
    angVel *= friction;
    if (angVel < 0.002) {
        angVel = 0;
    }
    ang += angVel;
    ang %= TAU;
    rotate();
}

function engine() {
    frame();
    requestAnimationFrame(engine);
}

function init() {
    sectors.forEach(drawSector);
    rotate();
    engine();
    spinEl.addEventListener('click', () => {
        if (!angVel) angVel = rand(0.01, 0.03);
    });
}

// Initialize the spinning wheel and other functionalities
window.onload = function() {
    init();
};