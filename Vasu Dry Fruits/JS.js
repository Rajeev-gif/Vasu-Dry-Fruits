function checkScreenWidth() {
  if (window.innerWidth <= 1000) {
      document.querySelector('.row1').classList.add('enable-scroll');
      document.querySelector('.row2').classList.add('enable-scroll');
  } else {
      document.querySelector('.row1').classList.remove('enable-scroll');
      document.querySelector('.row1').classList.remove('enable-scroll');
  }
}

// Event listener for window resize
window.addEventListener('resize', checkScreenWidth);

// Initial check when the page loads
checkScreenWidth();


let cashewweight, cashewprice, almondsweight, almondsprice, dateweight, dateprice, pistaweight, pistaprice;
let walnutweight, walnutprice, figsweight, figsprice, raisinsweight, raisinsprice, trailmixweight, trailmixprice;
// let cart = []; // Initialize an empty array to store cart items

// for cashew 

document.getElementById("cashew-weight").addEventListener("change", function() {
  let selectedOption = this.options[this.selectedIndex].text;
  cashewweight = selectedOption;
});

function CashewPrice() {
    const selectedWeight = document.getElementById("cashew-weight").value;
    const weightPrices = {
      1: 599,  
      2: 1199,  
      3: 2399,    
    };
  
    const totalPrice = weightPrices[selectedWeight] || "Price not available for this weight";
    document.getElementById("cashew").textContent = "Price: " + totalPrice;
    cashewprice = totalPrice;
}

function addcashewToCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve existing cart items or initialize an empty array
  // Get product details
  let product = {
    image: "https://m.media-amazon.com/images/I/71+UzyKL8hL._AC_UF1000,1000_QL80_.jpg",
    name: "Cashew",
    weight: cashewweight,
    price: cashewprice
  };

//   // Add product to the cart array
  cart.push(product);

//   // Store the cart in localStorage for persistence
  localStorage.setItem('cart', JSON.stringify(cart));

//   // Redirect to the cart page
  window.location.href = "cart.html";

  // 

  
// // Save the item object to localStorage
// localStorage.setItem('item', JSON.stringify(item));

// // Retrieve the item object from localStorage
// let retrievedItem = JSON.parse(localStorage.getItem('item'));

// // Access the image URL from the retrieved item object
// let imageUrl = retrievedItem.image;

// console.log(imageUrl); // This will log the image URL to the console
}

// for almonds 

document.getElementById("almonds-weight").addEventListener("change", function() {
  let selectedOption = this.options[this.selectedIndex].text;
  almondsweight = selectedOption;
});

function AlmondsPrice() {
    const selectedWeight = document.getElementById("almonds-weight").value;
    const weightPrices = {
      1: 459,  
      2: 920,  
      3: 1840,    
    };
  
    const totalPrice = weightPrices[selectedWeight] || "Price not available for this weight";
    document.getElementById("almonds").textContent = "Price: " + totalPrice;
    almondsprice = totalPrice;
}
function AddAlmondsToCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve existing cart items or initialize an empty array
  let product = {
    image: "https://nuttyyogi.com/cdn/shop/products/Almonds.jpg?v=1606373738",
    name: "Almonds",
    weight: almondsweight,
    price: almondsprice
  };
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = "cart.html";
}

// for dates

document.getElementById("date-weight").addEventListener("change", function() {
  let selectedOption = this.options[this.selectedIndex].text;
  dateweight = selectedOption;
});

function DatePrice() {
    const selectedWeight = document.getElementById("date-weight").value;
    const weightPrices = {
      1: 299,  
      2: 599,  
      3: 1200,    
    };
  
    const totalPrice = weightPrices[selectedWeight] || "Price not available for this weight";
    document.getElementById("date").textContent = "Price: " + totalPrice;
    dateprice = totalPrice;
}
function AddDateToCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve existing cart items or initialize an empty array
  let product = {
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2024/02/Bowl-of-dates-6aae23f.jpg?quality=90&resize=440,400",
    name: "Crown Dates",
    weight: dateweight,
    price: dateprice
  };
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = "cart.html";
}

// for pista

document.getElementById("pista-weight").addEventListener("change", function() {
  let selectedOption = this.options[this.selectedIndex].text;
  pistaweight = selectedOption;
});

function PistaPrice() {
    const selectedWeight = document.getElementById("pista-weight").value;
    const weightPrices = {
      1: 849,  
      2: 1650,  
      3: 2300,    
    };
  
    const totalPrice = weightPrices[selectedWeight] || "Price not available for this weight";
    document.getElementById("pista").textContent = "Price: " + totalPrice;
    pistaprice = totalPrice;
}
function AddPistaToCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve existing cart items or initialize an empty array
  let product = {
    image: "https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/pista-roasted-and-salted.20220922163628.webp",
    name: "Crown Dates",
    weight: pistaweight,
    price: pistaprice
  };
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = "cart.html";
}

// for walnut

document.getElementById("walnut-weight").addEventListener("change", function() {
  let selectedOption = this.options[this.selectedIndex].text;
  walnutweight = selectedOption;
});

function WalnutPrice() {
    const selectedWeight = document.getElementById("walnut-weight").value;
    const weightPrices = {
      1: 849,  
      2: 1650,  
      3: 2300,    
    };
  
    const totalPrice = weightPrices[selectedWeight] || "Price not available for this weight";
    document.getElementById("walnut").textContent = "Price: " + totalPrice;
    walnutprice = totalPrice;
}
function AddWalnutToCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve existing cart items or initialize an empty array
  let product = {
    image: "https://royalfantasy.in/cdn/shop/products/Walnuts-Kernals-Jumbo-1_28284d12-c2e0-464b-af4b-8fad4814aaf3.jpg?v=1630653936",
    name: "Walnuts",
    weight: walnutweight,
    price: walnutprice
  };
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = "cart.html";
}

// figs

document.getElementById("figs-weight").addEventListener("change", function() {
  let selectedOption = this.options[this.selectedIndex].text;
  figsweight = selectedOption;
});

function FigsPrice() {
    const selectedWeight = document.getElementById("figs-weight").value;
    const weightPrices = {
      1: 1050,  
      2: 2100,  
      3: 4200,    
    };
  
    const totalPrice = weightPrices[selectedWeight] || "Price not available for this weight";
    document.getElementById("figs").textContent = "Price: " + totalPrice;
    figsprice = totalPrice;
}
function AddFigsToCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve existing cart items or initialize an empty array
  let product = {
    image: "https://www.dryfruithub.com/image/cache/catalog/3Photo%20Shoot/anjeer-medium-500gms-dried-fruits-30-550x550.jpg.webp",
    name: "Figs (Anjeer)",
    weight: figsweight,
    price: figsprice
  };
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = "cart.html";
}

// raisins

document.getElementById("raisins-weight").addEventListener("change", function() {
  let selectedOption = this.options[this.selectedIndex].text;
  raisinsweight = selectedOption;
});

function RaisinsPrice() {
    const selectedWeight = document.getElementById("raisins-weight").value;
    const weightPrices = {
      1: 249,  
      2: 499,  
      3: 999,    
    };
  
    const totalPrice = weightPrices[selectedWeight] || "Price not available for this weight";
    document.getElementById("raisins").textContent = "Price: " + totalPrice;
    raisinsprice = totalPrice;
}
function AddRaisinsToCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve existing cart items or initialize an empty array
  let product = {
    image: "https://m.media-amazon.com/images/I/81S1S2ZccML.jpg",
    name: "Raisins (Kishmish)",
    weight: raisinsweight,
    price: raisinsprice
  };
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = "cart.html";
}

// trailmix

document.getElementById("trailmix-weight").addEventListener("change", function() {
  let selectedOption = this.options[this.selectedIndex].text;
  trailmixweight = selectedOption;
});

function TrailmixPrice() {
    const selectedWeight = document.getElementById("trailmix-weight").value;
    const weightPrices = {
      1: 849,  
      2: 1699,  
      3: 2400,    
    };
  
    const totalPrice = weightPrices[selectedWeight] || "Price not available for this weight";
    document.getElementById("trailmix").textContent = "Price: " + totalPrice;
    trailmixprice = totalPrice;
}
function AddTrailmixToCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve existing cart items or initialize an empty array
  let product = {
    image: "https://www.nutraj.com/cdn/shop/files/the-power-of-trail-mix-top-8-reasons-to-include-trail-mix-in-your-diet-Desktop-View_copy.jpg?v=1692598372",
    name: "Trail Mix",
    weight: trailmixweight,
    price: trailmixprice
  };
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = "cart.html";
}