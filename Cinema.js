document.addEventListener("DOMContentLoaded", () => {
  const bookBtn = document.getElementById("bookBtn");

  const product = {
    id: "cinema1",
    name: "Stockholm Cinema Ticket",
    price: 100,
    quantity: 1,
    image: "cinema-stockholm.jpg"
  };

  bookBtn.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      exists.quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart: " + product.name);
  });
});
