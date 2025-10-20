// script.js

// Array of products to display on the products page
const PRODUCT = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 5000.00,
      desc: "Intel i5, 8GB RAM, 256GB SSD",
      img: "images/Laptop.jpg" // <-- Place your image in the "images" folder
    },
    {
      id: 2,
      name: "Samsung Galaxy",
      price: 500.00,
      desc: "6.5-inch Display, 128GB Storage",
      img: "images/Samsung.jpg"
    },
    {
      id: 3,
      name: "Logitech Wireless Mouse",
      price: 25.00,
      desc: "Ergonomic design, USB receiver",
      img: "images/mouse.jpg"
    },
    {
      id: 4,
      name: "Modem Router",
      price: 89.00,
      desc: "Dual-band, 1200Mbps",
      img: "images/router.jpg"
    }
  ];
  
  // Load products dynamically into products.html
  let cartCount= parseInt(localStorage.getItem('cartCount'))|| 0;
  window.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const cartCountElement= document.getElementById("cart-count");
    if (cartCountElement){
      cartCountElement.textContent= cartCount;
    }
    // If on the products page
    if (productList) {
      // Loop through each product and create HTML
      PRODUCT.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        
        // Each product card with image, name, description, and price
        div.innerHTML = `
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.desc}</p>
          <p><strong>$${product.price.toFixed(2)}</strong></p>
          <button class="add-to-cart">Add to Cart</button>
        `;
        productList.appendChild(div);
      });
      document.querySelectorAll(".add-to-cart").forEach(button=>{
        button.addEventListener("click",()=>{
          cartCount++;
          localStorage.setItem("cartCount", cartCount);
          if(cartCountElement)
          cartCountElement.textContent=cartCount;
          alert("items added to cart");
        });
      });
    }
    document.addEventListener("click",function(event){
      if(Event.target.classList.contains("add-to-cart")) {
        const buttons = Event.target;
        buttons.classList.add("added");
        buttons.textContent= "Added";

        setTimeout(()=> {
          buttons.classList.remove("added");
          buttons.textContent= "Add to cart";
        }, 3000);
      }
    });
    // Contact form message confirmation
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", e => {
        e.preventDefault(); // Stop form from refreshing the page
        document.getElementById("responseMsg").textContent = "Message sent successfully!";
        contactForm.reset(); // Clear the form
      });
    }
  });
  