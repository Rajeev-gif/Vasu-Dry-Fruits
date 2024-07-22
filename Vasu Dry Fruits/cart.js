
// Retrieve cart items from localStorage
let cartItems = JSON.parse(localStorage.getItem('cart'));

// Display cart items on the cart page
let cartItemsDiv = document.getElementById('cart-items');
let totalPrice = 0; // Initialize total price variable
let productsArray = [];

cartItems.forEach(item => {
  let itemDiv = document.createElement('div');
  itemDiv.innerHTML = `
    <div class="box"  style="width: 25%; margin-bottom: 80px;">
      <div class="box1-content">
          <img class="img" style="background-image: url('${item.image}');" >
        <div class="product-details">
          <h4>${item.name}</h4>
          <p id="product-weight">Weight: ${item.weight}</p>
          <p id="product-price">Price: ${item.price}</p>
        </div>
      </div>
    </div>
  `;
  cartItemsDiv.appendChild(itemDiv);
  productsArray.push({ name: item.name, weight: item.weight });
  totalPrice += item.price;
});

// Initialize an empty string to store the formatted product details
let productDetailsString = '';

// Iterate over the productsArray and construct the formatted string
productsArray.forEach(product => {
  productDetailsString += `Name: ${product.name}, Weight: ${product.weight}\n`;
});

// Display the formatted product details string on the webpage
document.getElementById('about-product').textContent = productDetailsString;

// Display the total price in the div with id "sum"
let sumDiv = document.getElementById('sum');
sumDiv.textContent = `Total Price: ${totalPrice.toFixed(2)} rupees`; // Display total price with 2 decimal places
document.getElementById('Total-Price').textContent = "Total Price: " + totalPrice;

function clearCart() {
    // Clear the cart array and localStorage
    cartItems = [];
    localStorage.removeItem('cart');
    
    // Clear the displayed cart items on the page
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";

    productsArray = null;
    totalPrice = 0;
    sumDiv.textContent = `Total Price: ${totalPrice.toFixed(2)} rupees`; // Display total price with 2 decimal places
  }

// checkout form 


  document.getElementById('checkout-button').addEventListener('click', function() {
    document.getElementById('checkout-popup').style.display = 'block';
});

// document.getElementById('checkout-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     // Your existing code to capture form data and send it via email
// });

// getting email

document.getElementById('checkout-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the form data
  const formData = new FormData(event.target);

  // Construct the email message
  let message = 'Contact and Address Details:\n';
  formData.forEach(function(value, key) {
      message += `${key}: ${value}\n`;
  });

  // Add product names and weights to the message
  message += '\nProducts Ordered:\n';
  productsArray.forEach(product => {
    message += `Name: ${product.name}, Weight: ${product.weight}\n`;
  });

  // Add total price to the message
  message += `\nTotal Price: ${totalPrice} rupees`;

  // Send the email
  const email = 'rajeevvalechha@gmail.com'; // Replace this with your email address
  const subject = 'New Order Details';
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(message)}`;

  // Open the default email client with the message
  window.location.href = mailtoLink;
});

// document.getElementById('checkout-form').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the form from submitting normally

//   // Collect form data
//   let formData = new FormData(document.getElementById('checkout-form'));

//   // Send form data to a PHP script using fetch
//   fetch('email.php', {
//       method: 'POST',
//       body: formData
//   })
//   .then(response => {
//       if (response.ok) {
//           alert('Email sent successfully!');
//           document.getElementById('checkout-popup').style.display = 'none'; // Hide the popup after sending email
//       } else {
//           alert('Failed to send email. Please try again.');
//       }
//   })
//   .catch(error => {
//       console.error('Error:', error);
//   });
// });


// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//   $name = $_POST['name'];
//   $email = $_POST['email'];
//   $address = $_POST['address'];

//   $to = "rajeevvalechha@gmail.com";
//   $subject = "New Order Details";
//   $message = "Name: $name\nEmail: $email\nAddress: $address";

//   $headers = "From: $email";

//   if (mail($to, $subject, $message, $headers)) {
//       http_response_code(200);
//   } else {
//       http_response_code(500);
//   }
// }
