document.addEventListener("DOMContentLoaded", () => {
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
          <img src="${product.image}" alt="${product.title}" style="width:300px;" />
          <p>${product.description}</p>
          <p><strong>${product.price} SEK</strong></p>
          <p><em>${product.city}</em></p>
        `;
      } else {
        container.innerHTML = "<p>Product not found.</p>";
      }
    });
});
