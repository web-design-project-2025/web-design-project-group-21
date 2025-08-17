const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch("Products.json")
  .then((res) => res.json())
  .then((products) => {
    const product = products.find((p) => p.id === id);
    const container = document.getElementById("product-detail");

    if (product) {
      container.innerHTML = `
        <h1>${product.title}</h1>
        <img src="${product.image}" alt="${
        product.title
      }" style="width:300px;" />
        <p>${product.description}</p>
        <p><strong>${product.price ?? "Price missing"} SEK</strong></p>
        <p><em>${product.city ?? ""}</em></p>
        <button id="book-btn" style="padding: 10px 20px; font-size: 16px; margin-top: 20px;">
          Book Now
        </button>
      `;

      document.getElementById("book-btn").addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const alreadyInCart = cart.some((p) => p.id === product.id);

        if (!alreadyInCart) {
          cart.push(product);
          localStorage.setItem("cart", JSON.stringify(cart));
          alert("Product added to cart!");
          window.location.href = "cart.html";
        } else {
          alert("This product is already in your cart.");
        }
      });
    } else {
      container.innerHTML = "<p>Product not found.</p>";
    }
  })
  .catch((err) => {
    console.error(err);
    document.getElementById("product-detail").innerHTML =
      "<p>Could not load product data.</p>";
  });
